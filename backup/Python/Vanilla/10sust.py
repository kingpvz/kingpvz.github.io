def to10(x):
    x = x[::-1]
    sm = 0
    y = 1
    for i in x:
        sm+=int(i)*y
        y*=2
    return sm

x = input()
print(to10(x))
