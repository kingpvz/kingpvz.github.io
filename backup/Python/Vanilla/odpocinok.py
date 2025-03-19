#Python
ix = int(input())
if ix == 1: print("Výborný")
elif ix == 2: print("Chválitebný")
elif ix == 3: print("Dobrý")
elif ix == 4: print("Dostatočný")
elif ix == 5: print("Nedostatočný")
else: print("To neni znamka!")
""" C++
#include <iostream>
using namespace std;
int main(){
    int ix;
    cin >> ix;
    switch(ix){
        case 1: cout << "Výborný"; break;
        case 2: cout << "Chválitebný"; break;
        case 3: cout << "Dobrý"; break;
        case 4: cout << "Dostatočný"; break;
        case 5: cout << "Nedostatočný"; break;
        default: cout << "To neni znamka!";
    }
    return 0;
}
"""
""" Java
public class Main {
    public static void main(String args[]){
        Scanner s = new Scanner(System.in);
        int x = s.nextInt();
        if (x==1) System.out.println("Výborný");
        else if (x==2) System.out.println("Chválitebný");
        else if (x==3) Systen.out.println("Dobrý");
        else if (x==4) System.out.println("Dostatočný");
        else if (x==5) System.out.println("Nedostatočný");
        else System.out.println("To neni znamka");
    }
}
"""
""" JS
const x = Number(prompt());
switch(x){
  case 1: console.log("Výborný"); break;
  case 2: console.log("Chválitebný"); break;
  case 3: console.log("Dobrý"); break;
  case 4: console.log("Dostatočný"); break;
  case 5: console.log("Nedostatočný"); break;
  default: console.log("To neni znamka!");
}
"""
""" PHP
<?php
    $x = (int)readline();
    switch(x){
        case 1: echo "Výborný"; break;
        case 2: echo "Chválitebný"; break;
        case 3: echo "Dobrý"; break;
        case 4: echo "Dostatočný"; break;
        case 5: echo "Nedostatočný"; break;
        default: echo "To neni znamka!";
    }
?>
"""
