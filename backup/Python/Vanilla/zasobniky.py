class Container():
    def __init__(this) -> None:
        this.this = []

    @staticmethod
    def new() -> 'Container':
        return Container();

    def append(this, x:int) -> None:
        this.this.append(x);

    def pop(this) -> int | None:
        if not this.empty(): return this.this.pop();
        else: return None;

    def peek(this) -> int | None:
        if not this.empty(): return this.this[-1];
        else: return None;

    def empty(this) -> bool:
        return len(this.this) == 0;

    @staticmethod
    def remove(x:'Container', y:'Container') -> None:
        if x.empty() or y.empty():
            if x.empty() and not y.empty():
                while not y.empty(): print(y.pop());
            if y.empty() and not x.empty():
                while not x.empty(): print(x.pop());
        else:
            if x.peek() > y.peek(): print(x.pop());
            elif x.peek() < y.peek(): print(y.pop());
            else:
                print(x.pop()); print(y.pop());

a:Container = Container.new();
b:Container = Container.new();
print("ZASOBNIK Syntax");
print("1 x ... pridaj cislo x do zasobnika 1");
print("2 x ... pridaj cislo x do zasobnika 2");
print("3 ... odober prvky");
print("? ... koniec");

while True:
    x:str = input("Prikaz: ").strip();
    if x[0:2] == "1 ":
        x = int(x[2:].strip());
        a.append(x);
    elif x[0:2] == "2 ":
        x = int(x[2:].strip());
        b.append(x);
    elif x == "3": Container.remove(a,b);
    else: break;
