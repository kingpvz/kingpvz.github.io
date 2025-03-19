import tkinter
c = tkinter.Canvas(width=700, height=100)
c.pack()

query = "(((a?(5*b)?->7(8*(3(a(a))))?))+(a+b))"

globalsx = -1
globalsc = ["red","#00DD00","blue","#CC0055","#FF00FF","orange","yellow"]

def validate(x):
    r = 0
    for i in x:
        if i == "(": r+=1
        elif i == ")": r-=1
        if r<0: return False
    return r==0

def getres(x):
    color = "black"
    font = "Consolas 20"
    global globalsx, globalsc
    if x == "(":
        globalsx+=1
        color = globalsc[globalsx]
        font = "Consolas 20 bold"
    elif x == ")":
        color = globalsc[globalsx]
        globalsx-=1
        font = "Consolas 20 bold"
    return x, color, font

def main():
    if not validate(query):
        c.create_text(350, 50, text="Uzátvorkovanie je nesprávne.", font="Arial 25", fill="black")
        return
    c.create_text(350, 80, text="Uzátvorkovanie je správne.", font="Arial 15", fill="black")
    det = 0
    for i in query:
        det+=18
        y=getres(i)
        c.create_text(det, 30, text=y[0], font=y[2], fill=y[1])


main()
