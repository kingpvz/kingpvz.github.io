def getQuadraticRoot(a, b, c):
    d = b**2 - 4*a*c
    if d<0: return "Táto rovnica nemá reálne riešenie!"
    elif d == 0: return -b+(d**(1/2))/2*a
    else:
        x1 = -b+(d**(1/2))/2*a
        x2 = -b-(d**(1/2))/2*a
        return "{"+str(x1)+", "+str(x2)+"}"

s1 = input("Zadaj rovnicu (SYNTAX: ax2+bx+c=0): ")
if s1[-2:] != "=0": print("Nedodržaná syntax."); raise ValueError
tempx2 = s1.index("x2")
tempx = len(s1[:tempx2+2]) + s1[tempx2+1:].index("x") -1
s2 = []
s2.append(float(s1[:tempx2]))
if s1[tempx2+2] == "+":
    s2.append(float(s1[tempx2+3:tempx]))
elif s1[tempx2+2] == "-":
    s2.append(- float(s1[tempx2+3:tempx]))
else:
    print("Nedodržaná syntax.")

if s1[tempx+1] == "+":
    s2.append(float(s1[tempx+2:-2]))
elif s1[tempx+1] == "-":
    s2.append(- float(s1[tempx+2:-2]))
else:
    print("Nedodržaná syntax.")

a = float(s2[0])
b = float(s2[1])
c = float(s2[2])
print("A =",a,"; B =",b,"; C =",c)
print("K =", getQuadraticRoot(a,b,c))
