a = []
for i in range(20):
    a.append(input("Číslo "+str(i+1)+": "))

c = {}
for i in a:
    if i in c.keys():
        c[i] += 1
    else:
        c[i] = 1
        
for i,j in c.items():
    if j == 1: print(i)

while True:
    d = input("Prikaz: ")
    d = d.split()
    b = d[0].lower()
    if b == "data":
        print(c)
    if b == "pocet" or b == "počet":
        if len(d) == 2:
            if d[1] in c.keys():
                print(c[d[1]])
            else:
                print("0")
        else:
            print("Očakávaný 1 parameter.")
    if b == "zoznam":
        print(a)
