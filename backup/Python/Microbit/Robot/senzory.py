from mbrobot_plusV2 import *
from microbit import *
from random import randint

r=False
setLED(1)
setSpeed(80)
forward()
while not button_a.was_pressed():
    d = getDistance();
    if d < 10:
        backward()
        delay(250)
        if randint(1,3) != 1 or r:
            setLEDRight(0)
            left()
            delay(500)
            setLEDRight(1)
            r=False
        else:
            setLEDLeft(0)
            right()
            delay(500)
            setLEDLeft(1)
            r=True
        forward()
    delay(100)
stop()