class Stvorec:
    def __init__(self, a):
        self.a = a
    def getObvod(self):
        return self.a*4

stv = Stvorec(float(input("Zadaj a: ")))
print(stv.getObvod())
