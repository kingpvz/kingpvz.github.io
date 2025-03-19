from mbrobot_plusV2 import *
from microbit import *
from random import randint
import math


setSpeed(80)
forward()
repeat:
    stop()
    d = getDistance();
    if d < 95:
        display.show(math.floor(d/10))
    else:
        display.show("M")
    if d <= 30:
        stop()
        while True:
            display.scroll(d)
    else:
        forward()
    delay(100)
stop()