#1
def getBiggerEq(x, y):
    maxm = 0
    if x>y: maxm = x
    elif x==y: maxm = "x=y"
    else: maxm = y
    return maxm
#2
def getBigger(x, y):
    maxm = 0
    if x>y: maxm=x
    else: maxm=y
    return maxm
#3
def isFromInterval(x, a, b):
    return x in range(a, b+1)
#4
def getNegated(x):
    return x**-1
#5
def isPositive(x):
    return x>0
#6
def isRealTriangle(a, b, c):
    return(a+b>c and b+c>a and c+a>b)
#7
def isContainedIn(a, x):
    return a in x
#8
def isEven(x):
    return x%2==0
#9
def getValue(x):
    if x>0: return "Kladné"
    if x==0: return "Nula"
    if x<0: return "Záporné"
#10
def getGender(x):
    if int(x[2:4])<20: return "Muž"
    else: return "Žena"
#11
def getBirthDate(x):
    if int(x[0:2]) < 24:
        yr = "20"+x[0:2]
    else:
        yr = "19"+x[0:2]
    if getGender(x) == "Muž": ms = x[2:4]
    else: ms = str(int(x[2:4])-50)
    return(x[4:6]+"."+ms+"."+yr)
#12
def getQuadraticRoot(a, b, c):
    D = b**2 - 4*a*c
    if d<0: return "Táto rovnica nemá reálne riešenie!"
    elif d == 0: return -b+(d**(1/2))/2*a
    else:
        x1 = -b+(d**(1/2))/2*a
        x2 = -b-(d**(1/2))/2*a
        return "{"+str(x1)+", "+str(x2)+"}"
#13
def getMaximum(x,y,z):
    if x>y:
        if x>z: maxm = x
        else: maxm = z
    else:
        if y>z: maxm = y
        else: maxm = z
    return maxm
#14
def getTriangleType(a, b, c):
    if isRealTriangle(x,y,z):
        if x**2+y**2==z**2 or y**2+z**2 == x**2 or x**2+z**2 == y**2:
            print("Trojuholník je pravouhlý.")
        elif x==y==z:
            print("Trojuholník je rovnostranný.")
        elif x==y or y==z or z==x:
            print("Trojuholník je rovnoramenný.")
        else:
            print("Trojuhoník je všeobecný.")
    else: print("Toto nieje trojuholník!")
