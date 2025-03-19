def test(x:list) -> str:
    for i in x:
        if "oooo" in i: return "o"
        elif "xxxx" in i: return "x"
    r = []
    for i in range(len(x[0])):
        s=""
        for j in range(len(x)):
            s+=x[j][i]
        r.append(s)
    for i in r:
        if "oooo" in i: return "o"
        elif "xxxx" in i: return "x"

    for i in range(len(x)-3):
        for j in range(len(x[0])-3):
            if x[i][j] == x[i+1][j+1] == x[i+2][j+2] == x[i+3][j+3]: return x[i][j]
        for j in range(len(x[0])-1, 0, -1):
            if x[i][j] == x[i+1][j-1] == x[i+2][j-2] == x[i+3][j-3]: return x[i][j]
    

def winner(string:str) -> None:
    string:str = string.strip("\n").split("\n")
    win:str = test(string)
    if win=="o": print("Vyhral krúžok.")
    elif win=="x": print("Vyhral krížik.")
    else: print("Nikto nevyhral.")
    

vstup1 = """
   x o
 oox o
  ox  
  xx  
"""

vstup2 = """
xo oxxo 
 xo xo  
oxoox  o
  x o  x
x   xxo 
"""

vstup3 = """
xo oxxo 
 xo xo  
oxoxx  o
  x o  x
x   xxo 
"""

winner(vstup1)
winner(vstup2)
winner(vstup3)
