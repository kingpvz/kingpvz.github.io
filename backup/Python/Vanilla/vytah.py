import random

class Vytah():
    def __init__(this, nosnost:int):
        this.nosnost = nosnost;
        this.vaha = 0;
        this.content = [];

    def vstup(this, clovek:'Klient')->None:
        print(f"{clovek.meno} nastúpil do výťahu.")
        this.vaha += clovek.vaha;
        this.content.append(clovek);
        if this.vaha>this.nosnost:
            x = this.content.pop();
            print(f"{x.meno} prevážil výťah, vystúpil a musí použiť schodisko.");
            this.vaha-=clovek.vaha;

class Klient():
    def __init__(this, meno=""):
        this.meno = meno;
        if this.meno == "": this.meno = random.choice("Alfonso, Adolf, Bednár, Cecil, Cyril, Dezider, Erik, Fonskot, Georgín, Július, Šaňo, Zidan".split(", "));
        this.vaha = random.randint(15,130);

klienti = [];
print("Vytah-o-majster 5000");
print("""Príkazy:
1 = Prišiel Klient (Náhodné Meno)
1 x = Prišiel Klient (x = Meno)
2 x = Priešiel Výťah (x = Nosnosť)""");

def klient(meno=""):
    x = Klient(meno);
    if x.vaha >=100:
        print("Odporúčame použiť schodisko, vstup do výťahu zakázaný.");
        return;
    if len(klienti)>=10:
        print("Výťah je plný, prosím, použite schodisko.");
        return;
    klienti.append(x);
    

while True:
    x = input("Zadaj príkaz: ").strip().split();
    if len(x) == 1 and ( x[0] == "1" or x == "1" ): klient();
    elif len(x) == 2:
        if x[0] == "1": klient(x[1]);
        elif x[0] == "2":
            try:
                vytah = Vytah(int(x[1]));
                for i in klienti:
                    vytah.vstup(i);
                break;
            except: print("Zlá nosnosť.");
        else: print("Zlý príkaz.");
    else: print("Zlé parametre.");
