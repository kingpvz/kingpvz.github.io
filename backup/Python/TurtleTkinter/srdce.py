import turtle
from math import pi

t = turtle.Turtle()
t.speed(0)
t.up()
t.setpos(0, -200)
t.down()
t.color("red")
t.fillcolor("red")
t.rt(135)
for i in range(1,40):
  t.begin_fill()
  t.rt(90)
  t.fd(i*10)
  t.lt(135)
  t.circle(i*3.5355, -180)
  t.lt(180)
  t.circle(i*3.5355, -180)
  t.lt(135)
  t.fd(i*10)
  t.end_fill()
t.ht()
