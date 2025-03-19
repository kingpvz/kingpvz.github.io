'''vstup => slovo; výstup => znaky slova pod sebou
a = input()
for i in a: print(i)
'''
'''vstup => slovo; výstup => s l o v o
a = input()
a = list(a)
print(" ".join(a))
'''
#zabezpečenie za každým znakom je hviezdička
a = input()
for i in a:
    print(i+"*", end="")
