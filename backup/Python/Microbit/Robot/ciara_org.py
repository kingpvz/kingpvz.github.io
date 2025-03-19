from mbrobot_plusV2 import *
from microbit import *

setSpeed(30)
stop()

repeat:
    
    l = irLeft.read_digital()
    r = irRight.read_digital()
    
    if l == 0 and r == 1:
        rightArc(0.1)
    elif l == 1 and r == 0:
        leftArc(0.1)
    elif l == 0 and r == 0:
        leftArc(0.1)
    else:
        rightArc(0.1)  
              
    delay(50)