from datetime import datetime

class Queue:
    def __init__(this)->None:
        this.queue = [];
    
    @staticmethod
    def new()->'Queue':
        return Queue();

    def append(this, x:str)->None:
        this.queue.append([datetime.now(), x]);
        print(f"Prišiel {x} o {str(datetime.now())[11:19]}");

    def pop(this)->str:
        if this.empty(): return "Ná nikdo tu neni.";
        else:
            x = this.queue.pop(0);
            return f"Oišiel {x[1]}: "+str(x[0])[11:19]+"\nDĺžka čakania a obsluhy: "+str(datetime.now()-x[0])[:7];

    def empty(this)->bool:
        return len(this.queue)==0;

    def len(this)->int:
        return len(this.queue);

x = Queue.new();

print("Rad-o-majster 4000");
print("""Príkazy:
1 x = Príchod (x je meno)
2 = Odchod
3 = Počet čakajúcich
? = Koniec programu""");
while True:
    y = input("Zadaj príkaz: ");
    if y.strip().split()[0] == "1": x.append(y.strip().split()[1]);
    elif y.strip() == "2": print(x.pop());
    elif y.strip() == "3": print(x.len());
    else: break;
