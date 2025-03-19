from turtle import *
from time import sleep

title("TurtleDraws version 1.0 | Press H for keybindings.")

s = 10
ang = 22.5
angl = 0

dt = Turtle()
dt.ht()
dt.color("red")
dt.speed(0)
dt.width(3)
dt.up()
dt.goto(-300, 250)
dt.down()
dt.goto(-290,250)

at = Turtle()
at.shapesize(2,2,5)
at.ht()
at.speed(0)
at.up()
at.goto(-300, -250)
at.seth(90)
at.st()

def updatest():
    global s
    dt.clear()
    dt.up()
    dt.goto(-300,250)
    dt.down()
    dt.goto(-300+s, 250)
    
def upt():
        t.seth(90+angl)
        t.fd(s)
def dwn():
        t.seth(270+angl)
        t.fd(s)
def lft():
        t.seth(180+angl)
        t.fd(s)
def rgt():
        t.seth(0+angl)
        t.fd(s)
        
def sizeup():
    global s
    s += 5
    if s >= 600:
        s = 600
    updatest()
    
def sizedn():
    global s
    s -= 5
    if s <= 0:
        s = 0
    updatest()

def changesize():
    global s
    ER_s = s
    s = numinput("Change step length", "Change the length of a step (between 0 and 600):", s, 0, 600)
    if s == None: s = ER_s
    updatest()
    listen()

def lefter():
    global ang, angl
    angl += ang
    t.seth(90 + angl)
    at.seth(90 + angl)
    
def righter():
    global ang, angl
    angl -= ang
    t.seth(90 + angl)
    at.seth(90 + angl)
    
def setang():
    global ang, angl
    x = numinput("Angle Settings", "Choose a number\n1 = Change angle step\n2 = Change current angle\n", 0, 1, 2)
    if x == 1:
        ER_ang = ang
        ang = numinput("Change angle step", "Change the step of angle settings:", ang)
        if ang == None: ang = ER_ang
    if x == 2:
        ER_angl = angl
        angl = numinput("Change current angle", "Change the current angle modifier:", angl)
        if angl == None: angl = ER_angl
        t.seth(90 + angl)
        at.seth(90 + angl)
    listen()

def resetang():
    global ang, angl
    ang = 22.5
    angl = 0
    t.seth(90)
    at.seth(90)

def locater():
    t.shapesize(3,3,3)
    sleep(0.25)
    t.shapesize(0.5,0.5,0.5)

def helps():
    f = textinput("Help", """This is a help wih keybindings.
You can ignore the input field below.

Arrow Keys = Move Turtle
NumPad + and - = Increase/Decrease Step Length
Right Control = Change Step Length
L = Locate Turtle
W = Reset Angle
A and D = Rotate Turtle Left or Right
S = Open Angle Settings
"""); listen();

t = Turtle()
t.speed(0)
t.seth(90)
t.shapesize(0.5,0.5,0.5)

onkeypress(upt, "Up")
onkeypress(dwn, "Down")
onkeypress(lft, "Left")
onkeypress(rgt, "Right")
onkeypress(sizeup, "plus")
onkeypress(sizedn, "minus")
onkeypress(changesize, "Control_R")
onkeypress(lefter, "a")
onkeypress(righter, "d")
onkeypress(setang, "s")
onkeypress(resetang, "w")
onkeypress(locater, "l")
onkeypress(helps, "h")

listen()
