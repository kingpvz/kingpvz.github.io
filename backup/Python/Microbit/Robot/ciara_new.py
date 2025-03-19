from mbrobot_plusV2 import *
from microbit import *
from random import randint as rn
from music import *

stop()
a = 1
i = 0

repeat:
    setSpeed(25)
    setLEDRight(0)
    setLEDLeft(0)
    l = irLeft.read_digital()
    r = irRight.read_digital()
    m = irM.read_digital()    
    i+=1
    
    if l and m and r:
        if i >= 70:
            i=0
            a = rn(1,3)
        if a == 1: leftArc(0.1)
        if a == 2: rightArc(0.1)
        if a == 3: forward()
    else:
        pitch(2000, 10, wait = False)
        if not l and r and m: setSpeed(40); right(); delay(245);
        elif l and not r and m: setSpeed(40); left(); delay(245);
        elif not l and r and not m: setSpeed(50); right(); delay(245);
        elif l and not r and not m: setSpeed(50); left(); delay(245);
        else:
            setSpeed(50)
            backward()
            setLEDRight(1)
            setLEDLeft(1)
            delay(495)
            k = rn(1,2)
            if k == 1: left();
            else: right();
            delay(250)
        
            
    delay(5)