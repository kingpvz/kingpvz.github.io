import matplotlib.pyplot as plt
import numpy as np
import matplotlib.animation as anim

def addlabels(x,y):
    for i in range(len(x)):
        plt.text(i,y[i]-15,y[i],ha='center', c='white', weight=700)

x = ["Albrecht", "Barnabáš", "Cytohyzel", "Dezider", "Etezichel"]
y = [154, 195, 184, 173, 165]


fig, ax = plt.subplots()

ax.bar(x, y, width=0.75)
addlabels(x,y)

plt.ylabel("Výška (cm)")
plt.show()
