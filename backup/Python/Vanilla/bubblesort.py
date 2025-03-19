def sorting(r, how="asc"):
    n = len(r)
    for i in range(n):
        prehod = False
        for j in range(n-i-1):
            if how.lower() == "asc":
                if r[j] > r[j+1]:
                    prehod = True
                    r[j], r[j+1] = r[j+1], r[j]
            elif how.lower() == "desc":
                if r[j] < r[j+1]:
                    prehod = True
                    r[j], r[j+1] = r[j+1], r[j]
            else: print("Zlý parameter."); return
        if not prehod: return

body = [13,2,100,6,70]
a = sorting(body)
print(body)
sorting(body, "desc")
print(body)
