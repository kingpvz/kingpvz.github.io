from mbrobot_plusV2 import *
from microbit import *
import music

set_volume(50)
music.set_tempo(bpm=400)
stop()
while True:
    setLEDRight(0)
    setLEDLeft(1)
    music.play(["a"])
    delay(400)
    setLEDRight(1)
    setLEDLeft(0)
    music.play(["c"])
    delay(400)
    