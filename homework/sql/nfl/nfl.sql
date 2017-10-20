# STEP 3 | QUERIES

## 1 | LIST THE NAMES OF ALL NFL TEAMS

nfl=# SELECT (name) FROM teams;
         name
----------------------
 Buffalo Bills
 Miami Dolphins
 New England Patriots
 New York Jets
 Baltimore Ravens
 Cincinnati Bengals
 Cleveland Browns
 Pittsburgh Steelers
 Houston Texans
 Indianapolis Colts
 Jacksonville Jaguars
 Tennessee Titans
 Denver Broncos
 Kansas City Chiefs
 Oakland Raiders
 San Diego Chargers
 Dallas Cowboys
 New York Giants
 Philadelphia Eagles
 Washington Redskins
 Chicago Bears
 Detroit Lions
 Green Bay Packers
 Minnesota Vikings
 Atlanta Falcons
 Carolina Panthers
:

## 2 | LIST THE STADIUM NAME AND HEAD COACH OF ALL NFC TEAMS

nfl=# SELECT (stadium, head_coach) FROM teams WHERE conference = 'NFC';
-[ RECORD 1 ]-----------------------------------------
row | ("AT&T Stadium","Jason Garrett")
-[ RECORD 2 ]-----------------------------------------
row | ("MetLife Stadium","Tom Coughlin")
-[ RECORD 3 ]-----------------------------------------
row | ("Lincoln Financial Field","Chip Kelly")
-[ RECORD 4 ]-----------------------------------------
row | (FedExField,"Jay Gruden")
-[ RECORD 5 ]-----------------------------------------
row | ("Soldier Field","Marc Trestman")
-[ RECORD 6 ]-----------------------------------------
row | ("Ford Field","Jim Caldwell")
-[ RECORD 7 ]-----------------------------------------
row | ("Lambeau Field","Mike McCarthy")
-[ RECORD 8 ]-----------------------------------------
row | ("TCF Bank Stadium","Mike Zimmer")
-[ RECORD 9 ]-----------------------------------------
row | ("Georgia Dome","Mike Smith")
-[ RECORD 10 ]----------------------------------------
row | ("Bank of America Stadium","Ron Rivera")
-[ RECORD 11 ]----------------------------------------
row | ("Mercedes-Benz Superdome","Sean Payton")
-[ RECORD 12 ]----------------------------------------
row | ("Raymond James Stadium","Lovie Smith")
-[ RECORD 13 ]----------------------------------------
row | ("University of Phoenix Stadium","Bruce Arians")
-[ RECORD 14 ]----------------------------------------
row | ("Edward Jones Dome","Jeff Fisher")
:

## 3 | LIST THE HEAD COACHES OF THE AFC SOUTH

nfl=# SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';
-[ RECORD 1 ]--------------
head_coach | Bill OBrien
-[ RECORD 2 ]--------------
head_coach | Chuck Pagano
-[ RECORD 3 ]--------------
head_coach | Gus Bradley
-[ RECORD 4 ]--------------
head_coach | Ken Whisenhunt

## 4 | THE TOTAL NUMBER OF PLAYERS IN THE NFL

nfl=# SELECT id FROM players ORDER BY id DESC;
-[ RECORD 1 ]
id | 1532
-[ RECORD 2 ]
id | 1531
-[ RECORD 3 ]
id | 1530
-[ RECORD 4 ]
id | 1529
-[ RECORD 5 ]
id | 1528
-[ RECORD 6 ]
id | 1527
-[ RECORD 7 ]
id | 1526
-[ RECORD 8 ]
id | 1525
-[ RECORD 9 ]
id | 1524
-[ RECORD 10 ]
id | 1523
-[ RECORD 11 ]
id | 1522
-[ RECORD 12 ]
id | 1521
-[ RECORD 13 ]
id | 1520
-[ RECORD 14 ]
id | 1519
:

## 5 | THE TEAM NAMES AND HEAD COACHES OF THE NFC NORTH AND AFC EAST

nfl=# SELECT (name, head_coach) FROM teams WHERE conference = 'NFC' OR conference = 'AFC' AND division= 'North' OR division = 'East';
                    row
-------------------------------------------
 ("Buffalo Bills","Doug Marrone")
 ("Miami Dolphins","Joe Philbin")
 ("New England Patriots","Bill Belichick")
 ("New York Jets","Rex Ryan")
 ("Baltimore Ravens","John Harbaugh")
 ("Cincinnati Bengals","Marvin Lewis")
 ("Cleveland Browns","Mike Pettine")
 ("Pittsburgh Steelers","Mike Tomlin")
 ("Dallas Cowboys","Jason Garrett")
 ("New York Giants","Tom Coughlin")
 ("Philadelphia Eagles","Chip Kelly")
 ("Washington Redskins","Jay Gruden")
 ("Chicago Bears","Marc Trestman")
 ("Detroit Lions","Jim Caldwell")
 ("Green Bay Packers","Mike McCarthy")
 ("Minnesota Vikings","Mike Zimmer")
 ("Atlanta Falcons","Mike Smith")
 ("Carolina Panthers","Ron Rivera")
 ("New Orleans Saints","Sean Payton")
 ("Tampa Bay Buccaneers","Lovie Smith")
 ("Arizona Cardinals","Bruce Arians")
 ("St. Louis Rams","Jeff Fisher")
 ("San Francisco 49ers","Jim Harbaugh")
 ("Seattle Seahawks","Pete Carroll")
(24 rows)

nfl=#

## 6 | THE 50 PLAYERS WITH THE HIGHEST SALARIES

nfl=# SELECT (name, salary) FROM players ORDER BY salary DESC LIMIT 50;
                 row
--------------------------------------
 ("Peyton Manning",18000000)
 ("Drew Brees",15760000)
 ("Dwight Freeney",14035000)
 ("Elvis Dumervil",14000000)
 ("Michael Vick",12500000)
 ("Sam Bradford",12000000)
 ("Jared Allen",11619850)
 ("Matt Ryan",11500000)
 ("Matthew Stafford",11500000)
 ("Tamba Hali",11250000)
 ("Jake Long",11200000)
 ("Nnamdi Asomugha",11000000)
 ("Trent Williams",11000000)
 ("Vincent Jackson",11000000)
 ("Cliff Avril",10600000)
 ("Calais Campbell",10600000)
 ("Joe Thomas",10500000)
 ("Brent Grimes",10431000)
 ("Peyton Manning (buyout)",10400000)
 ("Chris Long",10310000)
 ("Philip Rivers",10200000)
 ("Jason Smith",10000000)
 ("David Harris",9900000)
 ("Wes Welker",9515000)
 ("Davin Joseph",9500000)
 ("Dwayne Bowe",9443000)
 ("Asante Samuel",9400000)
 ("Brandon Marshall",9300000)
 ("Ndamukong Suh",9250000)
 ("Tony Romo",9000000)
 ("Julius Peppers",8900000)
 ("Anthony Spencer",8800000)
 ("Karlos Dansby",8800000)
 ("Jordan Gross",8500000)
 ("Tyson Jackson",8005000)
 ("Adrian Peterson",8000000)
 ("Champ Bailey",8000000)
 ("Chris Johnson",8000000)
 ("Aaron Rodgers",8000000)
 ("Jason Peters",7900000)
 ("Eric Wright",7750000)
 ("Steve Smith",7750000)
 ("Santonio Holmes",7750000)
 ("Jay Cutler",7700000)
 ("Matt Forte",7700000)
 ("Ray Rice",7700000)
 ("Brian Urlacher",7500000)
 ("Johnathan Joseph",7250000)
 ("Gary Brackett",7200000)
 ("Ed Reed",7200000)
(50 rows)

## 7 | THE AVERAGE SALARY OF ALL NFL PLAYERS

nfl=# SELECT AVG(salary) FROM players;
         avg
----------------------
 1579692.539817232376
(1 row)

## 8 | THE NAMES AND POSITIONS OF PLAYERS WITH A SALARY ABOVE 10_000_000

nfl=# SELECT (name, position, salary) FROM players WHERE salary >  100000;
                    row
--------------------------------------------
 ("Mario Williams",DE,5900000)
 ("Drayton Florence",CB,4000000)
 ("Shawne Merriman",LB,4000000)
 ("Dwan Edwards",DT,3800000)
 ("Chris Kelsay",DE,3500000)
 ("Kyle Williams",DT,3000000)
 ("Nick Barnett",LB,3000000)
 ("Spencer Johnson",DT,3000000)
 ("Ryan Fitzpatrick",QB,2800000)
 ("Steve Johnson",WR,2500000)
 ...
