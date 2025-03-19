class Container():
    def __init__(this) -> None:
        this.this = []

    @staticmethod
    def new() -> 'Container':
        return Container();

    def append(this, x:str) -> None:
        this.this.append(x);

    def pop(this) -> str | None:
        if not this.empty(): return this.this.pop();
        else: return None;

    def peek(this) -> str | None:
        if not this.empty(): return this.this[-1];
        else: return None;

    def empty(this) -> bool:
        return len(this.this) == 0;

c:Container = Container.new();
print("ZASOBNIK Syntax");
print("1 x ... pridaj x");
print("2 ... odober posledny prvok");
print("3 ... pozri na posledny prvok");
print("4 ... skontroluj prazdnotu");
print("? ... koniec");

while True:
    x:str = input("Prikaz: ").strip();
    if x[0:2] == "1 ":
        x = x[2:].strip();
        c.append(x);
    elif x == "2": print(c.pop());
    elif x == "3": print(c.peek());
    elif x == "4": print(c.empty());
    else: break;
