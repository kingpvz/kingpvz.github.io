import tkinter
from random import randint as rnd

def getXY():
    while True:
        x,y = rnd(0,560), rnd(0,560)
        if x in range(0,40) and y in range(0,40): continue
        break
    return x,y

class Jablko:
    def __init__(this, c, i):
        x,y = getXY()
        this.c = c
        this.i = i
        this.obj = c.create_oval(x,y,x+40,y+40, fill="red",outline="red")
        dataset[i] = (range(x,x+40),range(y,y+40))
        
    def eat(this):
        this.c.delete(this.obj)
        del dataset[this.i]

class Zrut:
    def __init__(this, c):
        this.x = [0,40]
        this.y = [0,40]
        this.c = c
        this.dx = 3
        this.dy = 0
        this.obj = c.create_oval(0,0,40,40,fill="blue",outline="blue")
        this.c.bind_all("w", this.up)
        this.c.bind_all("a", this.lt)
        this.c.bind_all("s", this.dn)
        this.c.bind_all("d", this.rt)
        this.move()

    def up(this,e): this.dx=0;this.dy=-3
    def dn(this,e): this.dx=0;this.dy=3
    def lt(this,e): this.dx=-3;this.dy=0
    def rt(this,e): this.dx=3;this.dy=0

    def move(this):
        x = this.testpos()
        if x[0]: jabka[x[1]].eat()
        if not len(dataset):
            this.win()
        else:
            this.c.move(this.obj, this.dx, this.dy)
            this.x[0]+=this.dx;this.x[1]+=this.dx
            this.y[0]+=this.dy;this.y[1]+=this.dy
            this.c.after(25, this.move)

    def testpos(this):
        for i in dataset:
            if set(range(this.x[0], this.x[1]))&set(dataset[i][0]) != set() and set(range(this.y[0],this.y[1]))&set(dataset[i][1]) != set(): return True, i
        return False, -1

    def win(this):
        this.c.delete(this.obj)
        this.c.create_text(300,300,anchor="c", text="Vyhral si!", font="Arial 20 bold")
        

c = tkinter.Canvas(width=600, height=600)
dataset = {}
jabka = []
for i in range(4): jabka.append(Jablko(c, i))
Zrut(c)
c.pack()
