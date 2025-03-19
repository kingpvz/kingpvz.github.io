from mbrobot_plusV2 import *
from microbit import *
from random import randint
import math

a = 0

setSpeed(80)
forward()
repeat:
    stop()
    d = getDistance();
    if d < 95:
        display.show(math.floor(d/10))
    else:
        display.show("M")
    if d <= 10:
        stop()
        break
    else:
        forward()
    delay(100)
    a+=1

setSpeed(50)
left()
delay(1170)
setSpeed(80)
forward()
delay(a*100)

stop()