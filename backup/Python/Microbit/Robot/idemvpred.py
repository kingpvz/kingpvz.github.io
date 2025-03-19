from mbrobot_plusV2 import *
from microbit import *

stop()

a=0

def blic():
    for i in range(4):
        setLED(0)
        delay(250)
        setLED(1)
        delay(50)
    

while True:
    a+=1
    display.scroll(str(a))
    
    for i in range(4):
        setLED(1)
        forward()
        delay(1000)
        setLED(0)
        stop()
        left()
        delay(600)
        stop()
        
    blic()