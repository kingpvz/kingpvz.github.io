from mbrobot_plusV2 import *
from microbit import *

stop()
setSpeed(30)

repeat:
    l = irLeft.read_digital()
    r = irRight.read_digital()
    m = irM.read_digital()    
    
    if l and not r and m: rightArc(0.1)
    elif l and not r and not m: leftArc(0.1)
    elif not l and r and m: leftArc(0.1)
    elif not l and r and not m: rightArc(0.1)
    elif l and r and m: leftArc(0.2)
    elif l and r and not m: forward()
    else:
        if not m: rightArc(0.1)
        else: leftArc(0.2) 
            
    delay(1)