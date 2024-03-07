var questions = {
"polnat": {
  "settings": {
    "n": "Ďalej",
    "ask": 10,
    "done": "Hotovo.",
    "text_points": "Počet bodov",
    "text_correct": "Správne",
    "text_wrong": "Nesprávne",
    "r": "Hodnotenie",
    "r_fail": "Borec prepadneš",
    "r_bad": "Ešte zapracuj",
    "r_ok": "Dostaneš trojku",
    "r_good": "Prelezeš bez problému",
    "r_great": "To ani pisat nemusiš to maš garant jednotku",
    "text_again": "Skúsiť Znova",
    "text_return": "Návrat Domov"
  },
 "qr": [
    {
        "id": 0,
        "command": "Odpovedz!",
        "query": "Čo <b>netvorí</b> politický systém?",
        "c1": "Súkromné školstvo",
        "c2": "Štát",
        "c3": "Cirkev",
        "c4": "Neekonomické nátlakové skupiny",
        "c": 1
    },
    {
        "id": 1,
        "command": "Politické strany.",
        "query": "Čo je ich cieľom?",
        "c1": "Získať a udržať priazeň obyvateľstva.",
        "c2": "Získať alebo rozšíriť ekonomickú moc.",
        "c3": "Získať, udržať alebo rozšíriť svoju politickú moc.",
        "c4": "Získať, udržať alebo rozšíriť svoj vplyv na obyvateľov.",
        "c": 3
    },
  {
    "id": 2,
    "command": "Odpovedz!",
    "query": "Čo <b>nepatrí</b> medzi význam politických strán?",
    "c1": "Stabilizujú politickú moc.",
    "c2": "Zabezpečujú spoločenský pluralizmus.",
    "c3": "Zabezpečujú prirodzený pluralizmus.",
    "c4": "Zabezpečujú politický pluralizmus.",
    "c": 2
  },
  {
    "id": 3,
    "command": "Vznik politickej strany.",
    "query": "Ktoré tvrdenie je pravdivé?",
    "c1": "Petícia na vznik politickej strany potrebuje minimálne 5000 podpisov.",
    "c2": "Politická strana musí mať aspoň 50 členov.",
    "c3": "Politické strany vznikajú registráciou na ministerstve spravodlivosti.",
    "c4": "Občania majú právo zakladať politické strany a združovať sa v nich.",
    "c": 4
  },
  {
    "id": 4,
    "command": "Vznik politickej strany.",
    "query": "Ktorá z týchto možností <b>nieje</b> podmienkou na registráciu politickej strany?",
    "c1": "Kaucia 5000€ za založenie strany.",
    "c2": "Petícia s 10000 podpismi.",
    "c3": "Stanovy a program strany.",
    "c4": "Osobné údaje 3 očanov starších 18 rokov.",
    "c": 1
  },
  {
    "id": 5,
    "command": "Zákaz politických strán.",
    "query": "Ktoré z nasledovných strán sú zakázané?",
    "c1": "Fašistické",
    "c2": "Komunistické",
    "c3": "Marxistické",
    "c4": "Socialistické",
    "c": 1
  },
  {
    "id": 6,
    "command": "Zákaz politických strán.",
    "query": "Ktoré z uvedených politických strán <b>niesu</b> zakázané?",
    "c1": "Nemravné",
    "c2": "Rasistické",
    "c3": "Liberálne",
    "c4": "Fašistické",
    "c": 3
  },
  {
    "id": 7,
    "command": "Definuj!",
    "query": "Neparlamentné Strany",
    "c1": "Majú priamy politický vpliv.",
    "c2": "Nemajú zastúpenie v parlamente, ale vo vláde áno.",
    "c3": "Sú to hnutia, ktoré prezident/ka odvolal/a z parlamentu.",
    "c4": "Vyjadrujú sa formou petícií.",
    "c": 4
  },
  {
    "id": 8,
    "command": "Definuj!",
    "query": "Parlamentné Strany",
    "c1": "Prijímajú zákony a ústavu.",
    "c2": "Prijímajú výhradne vládny program.",
    "c3": "Nemajú zastúpenie v NR SR.",
    "c4": "Majú zastúpenie v parlamente, ale nemôžu prijímať ústavu.",
    "c": 1
  },
  {
    "id": 9,
    "command": "Rozdeľ!",
    "query": "Delenie politických strán podla vzťahu k moci.",
    "c1": "Liberálne a Konzervatívne",
    "c2": "Vládne a Opozičné",
    "c3": "Pravicové a Ľavicové",
    "c4": "Parlamentné a Neparlamentné",
    "c": 2
  },
  {
    "id": 10,
    "command": "Definuj!",
    "query": "Vládne Strany",
    "c1": "Nemajú ministrov.",
    "c2": "Kritizujú koalíciu.",
    "c3": "Sú súčasťou vládnej koalície.",
    "c4": "Nemajú politickú moc.",
    "c": 3
  },
   {
     "id": 11,
    "command": "Definuj!",
    "query": "Opozičné Strany",
    "c1": "Majú len 1 ministra.",
    "c2": "Usilujú sa získať politickú moc.",
    "c3": "Nie sú súčasťou parlamentu.",
    "c4": "Podporujú vládu.",
    "c": 2
   },
   {
   "id": 12,
    "command": "Definuj!",
    "query": "Konzervatívne Strany",
    "c1": "Majú odpor k súkromnému podnikaniu.",
    "c2": "Ľavicové až stredové strany.",
    "c3": "Chcú vojensky obsadiť Venezuelu.",
    "c4": "Kladú dôraz na tradičné hodnoty.",
    "c": 4
   },
   {
     "id": 13,
    "command": "Definuj!",
    "query": "Liberálne Strany",
    "c1": "Preferujú občianske práva.",
    "c2": "Ultrapravicové strany.",
    "c3": "Sú proti občianskemu základu spoločnosti.",
    "c4": "Kladú dôraz na kvalitu školstva.",
    "c": 1
   },
   {
     "id": 14,
    "command": "Definuj!",
    "query": "Sociálne (Socialistické) Strany",
    "c1": "Posporujú súkromné vlastníctvo.",
    "c2": "Podporujú inovácie, rozvoj a šport.",
    "c3": "Orientujú sa na pracujúce vrstvy.",
    "c4": "Ľudia sú dostatočne inteligentní na to, aby tieto strany nevolili.",
    "c": 3
   },
   {
     "id": 15,
    "command": "Typ strany?",
    "query": "Sociálny štát, reálna sloboda, človek ako kolektív.",
    "c1": "Fašistická",
    "c2": "Ľavicová",
    "c3": "Stredová",
    "c4": "Pravicová",
    "c": 2
   },
   {
     "id": 16,
    "command": "Typ strany?",
    "query": "Postupný vývoj, formálna sloboda, zníženie inflácie.",
    "c1": "Fašistická",
    "c2": "Ľavicová",
    "c3": "Stredová",
    "c4": "Pravicová",
    "c": 4
   },
   {
     "id": 17,
    "command": "Definuj!",
    "query": "Ľavicová Strana",
    "c1": "Splynutie štátu a spoločnosti.",
    "c2": "Dôraz na nepriamu demokraciu.",
    "c3": "Liberalizácia a deregulácia.",
    "c4": "Človek je jednotlivec.",
    "c": 1
   },
   {
     "id": 18,
    "command": "Definuj!",
    "query": "Pravicová Strana",
    "c1": "Splynutie štátu a spoločnosti.",
    "c2": "Platí rovnosť výsledkov.",
    "c3": "Liberalizácia a deregulácia.",
    "c4": "Rýchla zmena (revolúcia, reforma, ...)",
    "c": 3
   },
   {
     "id": 19,
    "command": "Definuj!",
    "c1": "Občianske skupiny - občanov zjednocujú spoločné záujmy.",
    "c2": "Politické skupiny - nevstupujú do tvorby politiky.",
    "c3": "Združenia bez konkrétneho záujmu.",
    "query": "Nátlakové Skupiny",
    "c4": "Občianske združenie - chce priamo vstúpiť do politiky ako hnutie.",
    "c": 1
   },
   {
      "id": 20,
     "command": "Odpovedz!",
     "query": "Ktorá z nasledovných <b>nieje</b> ekonomická nátlaková skupina?",
     "c1": "Výrobné združenie a odbory.",
     "c2": "Ekologické združenie.",
     "c3": "Obchodné združenie.",
     "c4": "Poľnohospodárske združenie.",
     "c": 2
    },
    {
      "id": 21,
     "command": "Odpovedz!",
     "query": "Ktorá z nasledovných <b>nieje</b> neekonomická nátlaková skupina?",
     "c1": "Mierové organizácie a organizácie na ochranu ľudských práv.",
     "c2": "Združenie miest a obcí.",
     "c3": "Kriminálne organizácie.",
     "c4": "Zamestnanecké zväzy.",
     "c": 4
    }
  ]
}


  
};