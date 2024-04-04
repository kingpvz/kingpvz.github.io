var questions = {

"priemysel": {
  "settings": {
    "n": "Ďalej",
    "ask": 11,
    "done": "Hotovo.",
    "text_points": "Počet bodov",
    "text_correct": "Správne",
    "text_wrong": "Nesprávne",
    "r": "Hodnotenie",
    "r_fail": "Ideš do sexty",
    "r_bad": "Ne, nemaš šancu",
    "r_ok": "Ešte jeden bod ti chybal do 3",
    "r_good": "Maš na víc",
    "r_great": "Hoď 2 krat po sebe 6 a dostaneš jednotku.",
    "text_again": "Skúsiť Znova",
    "text_return": "Návrat Domov"
  },
 "qr": [
   {
     "id":0,
     "command": "Odpovedz!",
     "query": "Ktoré tvrdenie o Slovenskom priemysle <b>nie je</b> pravdivé?",
     "c1": "Zamestnáva najviac pracujúcich.",
     "c2": "Vytvára tretinu hospodárskej výroby.",
     "c3": "Jeho výrobky tvoria väčšinu vývozu do zahraničia.",
     "c4": "Strojárstvo je jeho prvládajúce odvetvie.",
     "c": 2
   },
   {
     "id":1,
     "command": "Definuj!",
     "query": "Priemyselný Park",
     "c1": "Združenie viacerých firiem na jednom mieste.",
     "c2": "Prehľad firmy a jej histórie.",
     "c3": "Múzeum firiem s rovnakým zameraním.",
     "c4": "Park financovaný nejakým podnikom.",
     "c": 1
   },
   {
     "id":2,
     "command": "Palivá",
     "query": "Ktoré priradenie je pravdivé?",
     "c1": "Ropa - Láb<br>Lignit - Gbely<br>Hnedé Uhlie - Modrý Kameň",
     "c2": "Ropa - Malacky<br>Zemný Plyn - Handlová<br>Lignit - Nováky",
     "c3": "Ropa - Gbely<br>Zemný Plyn - Malacky<br>Hnedé Uhlie - Prievidza",
     "c4": "Ropa - Nováky<br>Hnedé Uhlie - Gbely<br>Lignit - Prievidza",
     "c": 3
   },
   {
     "id":3,
     "command": "Rudné suroviny",
     "query": "Kde sa ťaží železo a meď?",
     "c1": "Abov (Košice, Trebišov)",
     "c2": "Kremnica, Banská Štiavnica",
     "c3": "Orava (Dolný Kubín, Ružomberok)",
     "c4": "Spiš (Rožňava, Rudňany)",
     "c": 4
   },
   {
     "id":4,
     "command": "Rudné suroviny",
     "query": "Kde sa ťaží striebro a zlato?",
     "c1": "Abov (Košice, Trebišov)",
     "c2": "Kremnica, Banská Štiavnica",
     "c3": "Orava (Dolný Kubín, Ružomberok)",
     "c4": "Spiš (Rožňava, Rudňany)",
     "c": 2
   },
   {
     "id":5,
     "command": "Nerudné suroviny",
     "query": "Kde sa ťaží magnezit?",
     "c1": "Jelšava, Lubeník",
     "c2": "Solivar, Zbudza",
     "c3": "Malá Fatra",
     "c4": "Dobšiná",
     "c": 1
   },
   {
     "id":6,
     "command": "Nerudné suroviny",
     "query": "Kde sa ťaží kamenná soľ?",
     "c1": "Jelšava, Lubeník",
     "c2": "Solivar, Zbudza",
     "c3": "Hnúšťa",
     "c4": "Dobšiná",
     "c": 2
   },
   {
     "id":7,
     "command": "Nerudné suroviny",
     "query": "Kde sa ťaží vápenec?",
     "c1": "Hnúšťa",
     "c2": "Solivar, Zbudza",
     "c3": "Malá Fatra",
     "c4": "Dobšiná",
     "c": 3
   },
   {
     "id":8,
     "command": "Nerudné suroviny",
     "query": "Kde sa ťaží mastenec?",
     "c1": "Malá Fatra",
     "c2": "Dobšiná",
     "c3": "Jelšava, Lubeník",
     "c4": "Hnúšťa",
     "c": 4
   },
   {
     "id":9,
     "command": "Nerudné suroviny",
     "query": "Kde sa ťaží azbest?",
     "c1": "Jelšava, Lubeník",
     "c2": "Hnúšťa",
     "c3": "Malá Fatra",
     "c4": "Dobšiná",
     "c": 4
   },
   {
     "id":10,
     "command": "Strojárstvo",
     "query": "Ktoré priradenie je pravdivé?",
     "c1": "BA - Kia<br>KE - Volkswagen<br>BB - Peugeot",
     "c2": "BA - Peugeot<br>KE - Volkswagen<br>ZA - Kia",
     "c3": "BA - Volkswagen<br>TT - Peugeot<br>ZA - Kia",
     "c4": "BA - Volkswagen<br>TT - Kia<br>TR - Peugeot",
     "c": 3
   },
   {
     "id":11,
     "command": "Strojárstvo",
     "query": "Ktoré priradenie <b>nie je</b> pravdivé?",
     "c1": "Motocykle: Považská Bystrica<br>Traktory: Martin",
     "c2": "Ložiská: Nové Mesto nad Váhom<br>Lode: Štúrovo",
     "c3": "Zdravotnícka Technika: Piešťany<br>Lode: Komárno",
     "c4": "Motocykle: Považská Bystrica<br>Vagóny: Trnava",
     "c": 2
   },
   {
     "id":12,
     "command": "Strojárstvo",
     "query": "Ktoré priradenie je pravdivé?",
     "c1": "Stavebné Stroje: Detva<br>Ložiská: Prešov",
     "c2": "Vagóny: Komárno<br>Automatické práčky: Skalica",
     "c3": "Zdravotnícka technika: Bratislava<br>Armatúry: Poprad",
     "c4": "Ložiská: Senica<br>Traktory: Trebišov",
     "c": 1
   },
   {
     "id":13,
     "command": "Elektronické Strojárstvo",
     "query": "Ktoré z nasledovných je silnoprúdové?",
     "c1": "Telefóny Stropkov",
     "c2": "Samsung Galanta",
     "c3": "Siemens Bratislava",
     "c4": "Televízory Nižná",
     "c": 3
   },
   {
     "id":14,
     "command": "Hutníctvo",
     "query": "Ktorý hutnícky podnik je zrušený?",
     "c1": "Železiarne Podbrezová",
     "c2": "Kovohuty Krompachy",
     "c3": "Drôtovňa Hlohovec",
     "c4": "Niklová Huť Sereď",
     "c": 4
   },
   {
     "id":15,
     "command": "Elektrárne",
     "query": "Ktorá z týchto elektrární neexistuje?",
     "c1": "Jadrová elektráreň Jaslovské Bohunice",
     "c2": "Tepelná elektráreň Vojany",
     "c3": "Solárna elektráreň Pusté Sady",
     "c4": "Vodná elektráreň Gabčíkovo",
     "c": 3
   },
   {
     "id":16,
     "command": "Jadrové Elektrárne",
     "query": "Kde sa nachádzajú na Slovensku?",
     "c1": "Jaslovské Bohunice, Zlaté Moravce",
     "c2": "Jaslovské Bohunice, Mochovce",
     "c3": "Zlaté Moravce, Špačince",
     "c4": "Mochovce, Špačince",
     "c": 2
   },
   {
     "id":17,
     "command": "Odpovedz!",
     "query": "Ktorá z týchto kombinácii gumárenských a chemických priemyslov je pravdivá?",
     "c1": "Bratislava - Slovnaft<br>Šaľa - Duslo<br>Smolenice - Chemolak",
     "c2": "Bratislava - Chemoprén<br>Nováky - NCHZ<br>Šaľa - Chemolak",
     "c3": "Košice - Gumolak<br>Bratislava - Istrochem<br>Trenčín - Duslo",
     "c4": "Dobšiná - Duslo<br>Bratislava - Slovnaft<br>Šaľa - NCHZ",
     "c": 1
   },
   {
     "id":18,
     "command": "Odpovedz!",
     "query": "Kde sa <b>nevyrába</b> plast a syntetické vlákna?",
     "c1": "Strážske",
     "c2": "Senica",
     "c3": "Svit",
     "c4": "Senec",
     "c": 4
   },
   {
     "id":19,
     "command": "Gumárenská výroba",
     "query": "Ktorá kombinácia je pravdivá?",
     "c1": "MATADOR Michalovce<br>GUMON Púchov<br>VEGUM Bratislava",
     "c2": "MATADOR Púchov<br>GUMON Bratislava<br>VEGUM Dolné Vestenice",
     "c3": "MATADOR Trnava<br>GUMON Bratislava<br>VEGUM Vlčkovice",
     "c4": "MATADOR Bratislava<br>GUMON Nováky<br>VEGUM Horné Dubové",
     "c": 2
   },
   {
     "id":20,
     "command": "Farmaceutický priemysel",
     "query": "V ktorom s týchto miest <i>nie je</i> prítomný?",
     "c1": "Hlohovec",
     "c2": "Nitra",
     "c3": "Piešťany",
     "c4": "Šarišské Michaľany",
     "c": 3
   },
   {
     "id":21,
     "command": "Potravinársky priemysel",
     "query": "Ktorá z týchto kombinácií <b>nie je</b> pravdivá?",
     "c1": "Pivovar Banská Bystrica<br>Mlyny Trenčín<br>Cukrovary Bratislava",
     "c2": "Mlyny Nitra<br>Pivovar Holíč<br>Konzervárne Levice",
     "c3": "Pivovar Hurbanovo<br>Cukrovary Trnava<br>Mlyny Nitra",
     "c4": "Pekárne Sereď<br>Pivovar Topoľčany<br>Konzervárne Levice",
     "c": 1
   },
   {
     "id":22,
     "command": "Textilný priemysel",
     "query": "Ktorá z týchto kombinácií <b>nie je</b> pravdivá?",
     "c1": "Bavlnárstvo Ružomberok<br>Spracovanie Ľanu Kežmarok",
     "c2": "Hodvábnictvo Žilina<br>Pletiarstvo Trenčín",
     "c3": "Hodvábnictvo Levice<br>Pletiarstvo Bratislava",
     "c4": "Bavlnárstvo Bratislava<br>Pletiarstvo Svit",
     "c": 2
   },
   {
     "id":23,
     "command": "Odevný priemysel",
     "query": "V ktorom z nasledovných miest sa nenachádza odevný závod?",
     "c1": "Sabinov",
     "c2": "Trenčín",
     "c3": "Prešov",
     "c4": "Púchov",
     "c": 1
   },
   {
     "id":24,
     "command": "Odpovedz!",
     "query": "Ktoré tvrdenie je pravdivé?",
     "c1": "V Bánovcách nad Bebravou sa vyrába koža a v Poprade obuv.",
     "c2": "V Bardejove sa vyrába koža a v Bošanoch obuv.",
     "c3": "V Poprade sa vyrába koža a v Liptovskom Mikuláši obuv.",
     "c4": "V Bošanoch sa vyrába koža a v Partizánskom obuv.",
     "c": 4
   },
   {
     "id":25,
     "command": "Stavebné materiály",
     "query": "Ktorá kombinácia <b>nie je</b> pravdivá?",
     "c1": "Cementárne Rohožník a Varín<br>Keramika Lučenec",
     "c2": "Cementárne Dolné Dubové a Ostré<br>Magnezit Košolná",
     "c3": "Cementárne Horné Sŕnie a Bystré<br>Keramika Michalovce",
     "c4": "Cementárne Lietavská Lúčka a Turňa nad Bodvou<br>Magnezit Jelšava",
     "c": 2
   },
   {
     "id":26,
     "command": "Sklársky Priemysel",
     "query": "Ktorý z nasledovných podnikov neexistuje?",
     "c1": "Úžitkové Sklo Zlatno",
     "c2": "Laboratórne Sklo Bratislava",
     "c3": "Vedecké Sklo Poltár",
     "c4": "Obalové Sklo Nemšová",
     "c": 3
   },
   {
     "id":27,
     "command": "Drevospracujúci priemysel",
     "query": "Ktorá kombinácia <b>nie je</b> pravdivá?",
     "c1": "Nábytok Bratislava<br>Celulózka Žilina",
     "c2": "Nábytok Turany<br>Celulózka Pravno",
     "c3": "Nábytok Lučenec<br>Celulózka Ružomberok",
     "c4": "Nábytok Topoľčany<br>Celulózka Štúrovo",
     "c": 2
   },
   {
     "id":28,
     "command": "Polygrafický priemysel",
     "query": "Čomu sa venuje a kde je sústredený?",
     "c1": "Vydávanie novín, časopisov a kníh. (Bratislava, Martin, Nitra, ...)",
     "c2": "Výroba obalov a kartónu. (Prešov, Trenčín, Trebišov, ...)",
     "c3": "Výroba tlačiarní a atramentu. (Komárno, Nitra, Rimavská Sobota, ...)",
     "c4": "Vydávanie plagátov, billboardov a letákov. (Košice, Bratislava, Žilina, ...)",
     "c": 1
   },
   {
     "id":29,
     "command": "História poľnohospodárstva",
     "query": "Aký podiel obyvateľstva pracoval v poľnohospodárstve na začiatku 20. storočia?",
     "c1": "1/5",
     "c2": "2/5",
     "c3": "3/5",
     "c4": "4/5",
     "c": 3
   },
   {
     "id":30,
     "command": "História poľnohospodárstva",
     "query": "Aký veľký pozemok bol zabraný pozemkovou reformou z roku 1919?",
     "c1": "Lesy nad 20ha.",
     "c2": "Polia nad 30ha.",
     "c3": "Orná pôda nad 40ha.",
     "c4": "Všetok nad 50ha.",
     "c": 4
   },
   {
     "id":31,
     "command": "História poľnohospodárstva",
     "query": "Čo bolo v pláne združstevňovania poľnohospodárskej výroby?",
     "c1": "Odovzdávanie pôdy, techniky a zvierat družstvám a štátnym majetkom.",
     "c2": "Odovzdávanie poľnohospodárskych výrobkov a iných hotových produktov družstvám.",
     "c3": "Zoštátnenie všetkých družstiev.",
     "c4": "Odovzdanie štátnych majetkov družstvám.",
     "c": 1
   },
   {
     "id":32,
     "command": "História poľnohospodárstva",
     "query": "Čo sa stalo v 70. rokoch minulého storočia?",
     "c1": "Rozpad poľnohospodárskych družstiev.",
     "c2": "Zlučovanie do aglomerovaných družstiev.",
     "c3": "Zákon o pozemkovej reforme.",
     "c4": "Plán združstevňovania poľnohospodárskej výroby.",
     "c": 2
   },
   {
     "id":33,
     "command": "Poľnohospodárske fakty",
     "query": "Ktoré údaje sú pravdivé o poľnohospodárstve?",
     "c1": "6% Pracujúcich<br>4% HDP<br>32.7% Rozlohy SR",
     "c2": "4% Pracujúcich<br>3.5% HDP<br>49.3% Rozlohy SR",
     "c3": "5% Pracujúcich<br>3% HDP<br>56.6% Rozlohy SR",
     "c4": "7% Pracujúcich<br>5% HDP<br>41.8 Rozlohy SR",
     "c": 2
   },
   {
     "id":34,
     "command": "Poľnohospodárske fakty",
     "query": "Ktoré tvrdenie <b>nie je</b> pravdivé?",
     "c1": "Nastáva postupný úbytok ornej pôdy.",
     "c2": "Celkovo prevláda živočíšna výroba.",
     "c3": "Zvyšuje sa počet chovaných hospodárskych zvierat.",
     "c4": "Väčšinu osevnej plochy zaberajú obilniny.",
     "c": 3
   },
   {
     "id":35,
     "command": "Odpovedz!",
     "query": "Ktoré tvrdenie o kukuričnej p.v.o. <b>nie je</b> pravdivé?",
     "c1": "Má najpriaznivejšie podmienky na rozvoj poľnohospodárstva.",
     "c2": "Vyhovujú černozeme.",
     "c3": "Potrebuje teplo a dostatok závlahy.",
     "c4": "Pahorkatiny od 600 m.n.m.",
     "c": 4
   },
   {
     "id":36,
     "command": "Odpovedz!",
     "query": "Ktoré tvrdenie o repárskej p.v.o. <b>nie je</b> pravdivé?",
     "c1": "Územia 200-300 m.n.m.",
     "c2": "Vyhovujú hnedozeme.",
     "c3": "Ideálny úhrn zrážok: 200-250mm",
     "c4": "Rozvinuté je vinohradníctvo.",
     "c": 3
   },
   {
     "id":37,
     "command": "Odpovedz!",
     "query": "Ktoré tvrdenie o zemiakarskej p.v.o. <b>nie je</b> pravdivé?",
     "c1": "Prevažne stred a sever Slovenska.",
     "c2": "Vyhovujú zrážky okolo 700mm.",
     "c3": "Prevládajú kambizeme.",
     "c4": "Kotliny a nížiny.",
     "c": 4
   },
   {
     "id":38,
     "command": "Odpovedz!",
     "query": "Ktoré tvrdenie o zemiakarsko-ovesnej p.v.o. <b>nie je</b> pravdivé?",
     "c1": "Vysoké priemerné ročné teploty (nad 15°C)",
     "c2": "Tvorí prechod k horskej p.v.o.",
     "c3": "Zemiaky, krmoviny, ovos.",
     "c4": "Vysoko položené kotliny.",
     "c": 1
   },
   {
     "id":39,
     "command": "Odpovedz!",
     "query": "Ktoré tvrdenie o horskej p.v.o. <b>nie je</b> pravdivé?",
     "c1": "Vysoký úhrn zrážok (nad 800mm).",
     "c2": "Oblasti do 600 m.n.m.",
     "c3": "Raž, ovos, zamiaky, ľan, ...",
     "c4": "Podzolové pôdy.",
     "c": 2
   },
   {
     "id":40,
     "command": "Vinárske oblasti",
     "query": "Na Slovensku ich máne 6: Malokarpatskú, Južnoslovenskú, Tokajskú, ?",
     "c1": "Západoslovenskú, Stredoslovenskú a Východoslovenskú.",
     "c2": "Bielokarpatskú, Rubínsku a Juhovýchodoslovenskú.",
     "c3": "Nitriansku, Stredoslovenskú a Východoslovenskú.",
     "c4": "Rubínsku, Nitriansku a Severoslovenskú.",
     "c": 3
   },
   {
     "id":41,
     "command": "Odpovedz!",
     "query": "Ktoré tvrdenie o Slovenských lesoch je pravdivé?",
     "c1": "Pokrývajú približne 41% územia SR.",
     "c2": "Prevažujú ihličnany.",
     "c3": "Delíme ich na 2 kategórie (hospodárske a ochranné).",
     "c4": "Hospodárske lesi využívame na vodohospodárenie.",
     "c": 1
   },
   {
     "id":42,
     "command": "Vodné hospodárstvo",
     "query": "O čo sa nestará?",
     "c1": "Zabezpečenie vody pre obyvateľov a priemysel.",
     "c2": "Sieť kanalizácie a čistenie vody.",
     "c3": "Ochranu ľadovcov pred topením.",
     "c4": "Protipovodňovú ochranu.",
     "c": 3
   },
   {
     "id":43,
     "command": "Odpovedz!",
     "query": "Čo z nasledujúcich možností znečisťuje podzemnú vodu?",
     "c1": "Poľnohospodárstvo a priemysel.",
     "c2": "Domácnosti, sklady a nemocnice.",
     "c3": "Cestovný ruch a doprava.",
     "c4": "Všetko z uvedených.",
     "c": 4
   },
   {
     "id":44,
     "command": "Odpovedz!",
     "query": "Ktoré látky <b>neznečisťujú</b> podzemnú vodu?",
     "c1": "Pesticídy.",
     "c2": "Oxidy vodíka.",
     "c3": "Dusíkaté látky.",
     "c4": "Chlór a ťažké kovy.",
     "c": 2
   }
   ]
}
  
};