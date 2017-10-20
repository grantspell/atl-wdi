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