class Queue:
    def __init__(this)->None:
        this.queue = [];
    
    @staticmethod
    def new()->'Queue':
        return Queue();

    def append(this, x:str)->None:
        this.queue.append(x);

    def pop(this)->str|None:
        return this.queue.pop(0) if not this.empty() else None;

    def peek(this)->str|None:
        return this.queue[0] if not this.empty() else None;

    def empty(this)->bool:
        return len(this.queue)==0;

print("Rad-o-majster 3000");
print("""Príkazy:
1 x = Pridaj x
2 = Odstráň prvý prvok
3 = Zisti prvý prvok
4 = Zisti prázdnotu
? = Koniec programu""");

x:Queue = Queue.new();
while True:
    y = input("Zadaj príkaz: ");
    if y[0]=="1":
        y=y.split();
        if len(y)!=2: print("Zlá syntax.");
        else: x.append(y[1]);
    elif y[0]=="2":
        print(x.pop());
    elif y[0]=="3":
        print(x.peek());
    elif y[0]=="4":
        print(x.empty());
    else: break
