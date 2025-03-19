import tkinter, random
c = tkinter.Canvas(width=700, height=650)
c.pack()

class Lod:
    def __init__(this, ix):
        this.a, this.b = lodicka(20, ix*40)
        this.d = 0
        this.id = ix

    def move(this):
        global d
        this.d += random.randint(1,10)
        if this.d>=600: win(this.id)
        elif d: c.after(100, this.move)
        c.delete(this.a);c.delete(this.b)
        this.a, this.b = lodicka(20+this.d, this.id*40)
        

def lodicka(x, y):
    plachta = random.randint(-3, 3)
    a = c.create_line(x, y, x, y-25, x+10+plachta, y-10, x, y-5)
    b = c.create_polygon(x-20, y, x+20, y, x+10, y+8, x-10, y+8)
    return a,b

def win(x):
    global d
    if d:
        d = False
        c.create_text(350, 325, text="Vyhrala loďka: "+str(x), font="Arial 15 bold")

lode = {}
d = True
r = True
for i in range(15):
    lode[i+1] = Lod(i+1)
c.create_line(600, 0, 600, 700)

def lol(e):
    global r
    if r:
        for i in lode.keys(): lode[i].move()
    r = False

c.bind("<ButtonPress-1>", lol)
