print("Vzor: Deň Mesiac Rok\n")
akd, akm, akr = map(int, input("Dnešný dátum: ").split())
nad, nam, nar = map(int, input("Dátum narodenia: ").split())
if akd >= nad and akm >= nam:
    print("Vek:",akr-nar)
else:
    print("Vek:",akr-nar-1)
