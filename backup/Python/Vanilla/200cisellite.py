#pole n čísel
#výstup 1: čísla ktoré sa vyskytujú raz
#výstup 2: čísla ktoré sa vyskytujú viac krát

a = []
print("Zadaj prázdny reťazec na ukončenie zadávania.")
while True:
    b = input("Input: ")
    if b == "":
        break
    else:
        a.append(b)
    

c = {}
for i in a:
    if i in c.keys():
        c[i] += 1
    else:
        c[i] = 1

print()
print("Tieto čísla sa vyskytujú raz:")     
for i,j in c.items():
    if j == 1: print(i)

print()
print("Tieto čísla sa vyskytujú viac krát:")
for i,j in c.items():
    if j != 1: print(i, "("+str(j)+" krát)")
