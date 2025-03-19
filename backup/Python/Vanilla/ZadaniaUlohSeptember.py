class Matrix: #1, 10, 11, 12
    def __init__(this, rows):
        this.matrix = [i for i in rows]; a = True; b = len(this[0]);
        for i in this[1:]:
            if len(i) != b:
                a = False;
                break;
        if not a: raise ValueError("Táto matica neexistuje.");
        this.info = {
            "row": len(this[0]),
            "col": len(this)
        };

    def __repr__(this):
        a = "";
        for i in this.matrix:
            row = "";
            for j in i:
                if row: row+= " ";
                row += str(j);
            a+=row;
            if i != this.matrix[-1]: a+="\n";
        return a;

    def __len__(this): return len(this.matrix);
    
    def __getitem__(this, index): return this.matrix[index];

    def __calc(this, a, b, way):
        if len(a) == len(b) and len(a[0]) == len(b[0]):
            x = [[0 for i in range(len(a[0]))] for j in range(len(a))];
            for i in range(len(a)):
                for j in range(len(a[0])):
                    if way: x[i][j] = a[i][j] + b[i][j];
                    else: x[i][j] = a[i][j] - b[i][j];
            return Matrix(x);
        else: raise ValueError("Tieto matice sa nedajú spočítať/odpočítať.");

    def __add__(a,b):
        t = a.__calc(a,b,True); return t;
    
    def __sub__(a,b):
        t = a.__calc(a,b,False); return t;

    def __mul(t,a,b):
        if type(a) == type(b):
            if len(a[0]) == len(b): return Matrix([[sum(i * j for i, j in zip(A, B)) for B in zip(*b)] for A in a]);
            else: raise ValueError("Tieto matice sa nedajú navzájom znásobiť.");
        else:
            x = [[0 for i in range(len(a[0]))] for j in range(len(a))];
            for i in range(len(a)):
                for j in range(len(a[0])): x[i][j] = a[i][j] * b;
            return Matrix(x);

    def __mul__(a,b):
        x = a.__mul(a,b);
        return x;

    def __rmul__(a,b):
        x = a.__mul(a,b);
        return x;

    def determinant(this):
        if not this.info["col"] == this.info["row"]:
            print("Táto matica nemá determinant.");
            return None;
        else:
            if this.info["col"] == 1:
                return this.matrix[0][0];
            if this.info["col"] == 2:
                return this.matrix[0][0]*this.matrix[1][1]-this.matrix[0][1]*this.matrix[1][0];
            if this.info["col"] == 3:
                return (this.matrix[0][0] * (this.matrix[1][1] * this.matrix[2][2] - this.matrix[1][2] * this.matrix[2][1])\
       - this.matrix[0][1] * (this.matrix[1][0] * this.matrix[2][2] - this.matrix[1][2] * this.matrix[2][0])\
       + this.matrix[0][2] * (this.matrix[1][0] * this.matrix[2][1] - this.matrix[1][1] * this.matrix[2][0]))
            if this.info["col"] == 4:
                a = Matrix([
                [this.matrix[1][1], this.matrix[1][2], this.matrix[1][3]],
                [this.matrix[2][1], this.matrix[2][2], this.matrix[2][3]],
                [this.matrix[3][1], this.matrix[3][2], this.matrix[3][3]]
                ])
                b = Matrix([
                [this.matrix[1][0], this.matrix[1][2], this.matrix[1][3]],
                [this.matrix[2][0], this.matrix[2][2], this.matrix[2][3]],
                [this.matrix[3][0], this.matrix[3][2], this.matrix[3][3]]
                ])
                c = Matrix([
                [this.matrix[1][0], this.matrix[1][1], this.matrix[1][3]],
                [this.matrix[2][0], this.matrix[2][1], this.matrix[2][3]],
                [this.matrix[3][0], this.matrix[3][1], this.matrix[3][3]]
                ])
                d = Matrix([
                [this.matrix[1][0], this.matrix[1][1], this.matrix[1][2]],
                [this.matrix[2][0], this.matrix[2][1], this.matrix[2][2]],
                [this.matrix[3][0], this.matrix[3][1], this.matrix[3][2]]
                ])
                return this.matrix[0][0]*a.determinant()-this.matrix[0][1]*b.determinant()+\
                       this.matrix[0][2]*c.determinant()-this.matrix[0][3]*d.determinant();
            else:
                print("Pre túto veľkosť matice zatiaľ nie je naprogramovaný determinant.");
                return None;

def getMatrix(): #1, 12
    print("Zadajte prvky matice. Prvky oddeľte medzerami.\nPo stlačení klávesy ENTER vstúpite do ďalšieho riadka.\nPre unkončenie zadávania zadajte prázdny riadok.");
    a = {};
    x = -1;
    while True:
        x+=1;
        z = input(f"Riadok {x+1}: ");
        if z.strip() == "": break;
        else: a[x] = list(map(int, z.strip().split(" ")));
    return Matrix([a[i] for i in a]);

def getNumeralAmount(x): #2
    if type(x) != type(1):
        if x - int(x) == 0: x = int(x)
        else:
            a = len(str(int(x)))
            b = len(str(x)) - (a+1)
            return f"Celé: {a}; Reálne {b}; Celkom: {a+b}"
    return len(str(x));

def getMax3Min3(): #3
    print("Zadávajte celé čísla oddelené medzerou.");
    a = list(map(int, input().strip().split(" ")));
    if len(a) >= 6:
        max3=[];min3=[];
        for i in range(3):
            max3.append(max(a));
            a.remove(max(a));
        for i in range(3):
            min3.append(min(a));
            a.remove(min(a));
        return f"Max: {max3}; Min: {min3}";
    else: return "Nedostatok čísel.";

def getEvenOdd(*x): #4
    if not x: return "Nedostatok čísel.";
    x = set(x);
    even = [str(i) for i in x if i%2==0]
    odd = [str(i) for i in x if i%2==1]
    return f"Párne: {', '.join(even)}\nNepárne: {', '.join(odd)}";

def getDifference(a,b): #5
    r = a if len(a)>len(b) else b
    s = a if len(a)<=len(b) else b
    if r[:len(s)] == s and r!=s: return(len(s))
    if r == s: return(-1) #-1 znamená, že polia sú rovnaké
    j = 0
    for i in s:
        if s[j] != r[j]: return j
        j+=1

def getWordCount(x): #6
    x = x.strip().split(" ");
    j = 0
    for i in x:
        if i.lower() != i: j+=1
    return len(x), j

def getVector(): #7
    print("Zadajte prvky vektora oddelené medzerou.");
    x = tuple(map(float, input().strip().split(" ")));
    a = " "
    for i in range(len(str(x)) - 3): a+="—"
    a+="> \n"
    return a+str(x), x; #return[0] = vizuálny vektor, return[1] = matematický vektor

def postupnost(exp, n, c): #8
    a = []
    for i in range(c):
        a.append(eval(exp.replace("n",str(n))))
        n+=1
    return a; #príklad: print(postupnost("n**2", 1, 10))

def getString(a): #9
    return "".join(a)

zubatePole = [ #13
    [1, 2],
    [9, 15, "hello", "yay"],
    [17, "world", -7.4]
]

m = Matrix([[1,7,9,0],[5,4,5,8],[9,7,0,-5],[9,-7,0,-1]])
print(m.determinant());
