def bin2dec(x):
    rests = []
    while x>0:
        rests.append(str(x%2))
        x = x//2
    return "".join(rests[::-1])

with open("termin.txt", "r", encoding="utf-8") as f:
    for i in f.readlines():
        i = i.strip()
        i = ord(i)
        print(bin2dec(i))
