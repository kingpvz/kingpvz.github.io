znamky = [1,1,1,2,1,3,4,5,1]

class ZNM:
    def __init__(this, lt):
        this.znamky = lt

    def print(this):
        for i in this.znamky:
            print(i)

    def max(this):
        a = 1
        for i in this.znamky:
            if i>a: a=i
        return a

    def sum(this):
        a = 0
        for i in this.znamky:
            a+=i
        return a

    def count(this):
        let = {1:0,2:0,3:0,4:0,5:0}
        for i in this.znamky:
            let[i]+=1
        for i in range(1,6):
            print(f"{i} bola získaná {let[i]} krát.")

    def set(this):
        k = set(this.znamky)
        return sorted(list(k))



z = ZNM(znamky)
z.print()
print()
print(z.max())
print()
print(z.sum())
print()
z.count()
print()
print(z.set())
