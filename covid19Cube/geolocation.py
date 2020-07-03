from geolite2 import geolite2
import socket, subprocess

# install geolite2 and maxminddb


# for loopback
# r"C:\Program Files\RawCap.exe 127.0.0.1"


cmd = r"C:\Program Files\Wireshark\tshark.exe -i 5"

reader = geolite2.reader()

process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
# output = process.communicate()
# print (output)

my_ip = socket.gethostbyname(socket.gethostname())


def get_ip_location(ip):
    location = reader.get(ip)

    try:
        country = location["country"]["names"]["en"]

    except:
        country = "unknown"

    try:
        subdivision = location["subdivisions"][0]["names"]["en"]

    except:
        subdivision = "unknown"

    try:
        city = location["city"]["names"]["en"]

    except:
        city = "unknown"

    return country, subdivision, city


for line in iter(process.stdout.readline, b""):
    columns = str(line).split(" ")

    if "TCP" in columns:
        src_ip = columns[columns.index("TCP") - 1]  # get the element on the left
        if src_ip == my_ip:
            continue

        try:
            print(">>>" + src_ip, end="\t")
            print(get_ip_location(src_ip))

        except:
            pass



