def s2(x, fill=False):
    rests = []
    while x>0:
        rests.append(str(x%2))
        x = x//2
    if fill:
        while len(rests)<8: rests.append("0")
    return "".join(rests[::-1])

def s4(x):
    rests = []
    while x>0:
        rests.append(str(x%4))
        x = x//4
    return "".join(rests[::-1])

def s16(x):
    rests = []
    while x>0:
        rests.append(str(x%16))
        x = x//16
    newst = []
    for i in rests:
        if i == "10": i = "A"
        if i == "11": i = "B"
        if i == "12": i = "C"
        if i == "13": i = "D"
        if i == "14": i = "E"
        if i == "15": i = "F"
        newst.append(i)
    return "".join(newst[::-1])


a = int(input())
print(s2(a))
print(s2(a, True))
print(s4(a))
print(s16(a))
