with open("stretnutie.txt", "r") as f:
    for i in f.readlines():
        i = int(i, base=2)
        print(chr(i))
