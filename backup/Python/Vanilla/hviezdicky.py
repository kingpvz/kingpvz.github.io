a=list(input())
b = ""
val=True
for i in range(len(a)//3):
    for j in range(3):
        if val:b+=a[0]
        else: b+="*"
        a.pop(0)
    val= not val
print(b+"".join(a) if b[-1] == "*" else b+"".join(["*" for i in a]))
