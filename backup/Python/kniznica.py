# ehhh este to neni hotove

from datetime import datetime

class Kniznica:
    knihy = []
    citatelia = 0
    @staticmethod
    def vypisKnihy()->None:
        print();
    @staticmethod
    def pozicajKnihu()->str|None:
        if len(knihy)>0:
            return knihy.pop(0);
        else:
            print("Čakaj na voľnú knihu!");
            return None;
    @staticmethod
    def vratKnihu(x:str)->None:
        knihy.append(x);
    @staticmethod
    def volnychKnih()->int:
        return len(knihy);
    @staticmethod
    def revKnihy()->None:
        knihy = knihy[::-1];
    

class Citatel:
    def __init__(this):
        this.prichod = datetime.now();
        this.kniha = "";

    def odchod(this)->str:
        print("Odchod o "+str(datetime.now())[11:19]);
        print("Strávený čas v knižnici: "+str(datetime.now()-this.prichod)[:7])

    def pozicaj(this)->None:
        if this.kniha == "":
            x = Kniznica.pozicajKnihu();
            if x:
                this.kniha = x;
                print("Požičaná bola kniha: "+x);
        else: print("Najprv knihu vráť!");

    def vrat(this)->None:
        if this.kniha:
            print("Vrátil si knihu: "+this.kniha);
            Kniznica.vratKnihu(this.kniha);
            this.kniha = "";
        else: print("Žiadnu knihu nemáš!");
