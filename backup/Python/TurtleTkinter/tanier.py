import tkinter as tk
from random import randint as rnd

class Plate:
    def __init__(this,ix):
        this.id = ix
        this.r = c.create_oval(10+80*ix, 15, 80*ix+80, 85, fill="blue", outline="black", width=3)
        this.s = c.create_oval(20+80*ix, 25, 80*ix+70, 75, fill="blue", outline="black", width=1)
        this.t = c.create_text(45+80*ix, 50, anchor="c", fill="white", text=chr(ord("A")+ix), font="Arial 20 bold")
        c.tag_bind(this.r, '<ButtonPress-1>', this.click)
        c.tag_bind(this.s, '<ButtonPress-1>', this.click)
        c.tag_bind(this.t, '<ButtonPress-1>', this.click)

    def click(this, e):
        if this.id == plate: win()
        else: clicked[chr(ord("A")+this.id)] += 1

    def destruct(this):
        c.delete(this.r); c.delete(this.s); c.delete(this.t)
        
def win():
    for i in plates: i.destruct()
    c.create_text(405, 25, anchor="c", fill="blue", text="Gratulujem! Označil si puknutý tanier!", font="Arial 20 bold")
    rest = [k if clicked[k]>1 else "" for k in clicked.keys()]
    if any(rest): c.create_text(405, 75, anchor="c", fill="red", text="Viac krát si klikol na taniere: "+"".join(rest), font="Arial 16")
    else: c.create_text(405, 75, anchor="c", fill="green", text="Na žiadny tanier si neklikol viac krát!", font="Arial 16")
    c.config(cursor="arrow")
        
c = tk.Canvas(width=810, height=100, cursor="hand2")
c.pack()

clicked = {chr(i):0 for i in range(ord("A"), ord("A")+10)}
plate = rnd(0,9)
plates = [Plate(i) for i in range(10)]
