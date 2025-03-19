from mbrobot_plusV2 import *
from microbit import *
from random import randint
import math


setSpeed(100)
forward()
repeat:
    stop()
    d = getDistance();
    if d < 95:
        display.show(math.floor(d/10))
    else:
        display.show("M")
    if d <= 20:
        setSpeed(50)
        left()
        delay(250)
        setSpeed(100)
    else:
        forward()
    delay(100)
    if button_a.was_pressed():
        break
stop()