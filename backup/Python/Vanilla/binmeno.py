def s2(x):
    rests = []
    while x>0:
        rests.append(str(x%2))
        x = x//2
    while len(rests)<8: rests.append("0")
    return "".join(rests[::-1])

def binmeno(x):
    res = ""
    for i in x:
        res+=s2(ord(i))
    return res

print(binmeno("Stanley"))
