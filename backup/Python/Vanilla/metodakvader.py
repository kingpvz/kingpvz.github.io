def getKvad(a, b, c):
    print("Povrch:", a*b*2 + a*c*2 + b*c*2)
    print("Objem:", a*b*c)

x = float(input("Zadaj x: "))
y = float(input("Zadaj y: "))
z = float(input("Zadaj z: "))
getKvad(x, y, z)
