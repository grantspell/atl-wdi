/* ANSWERS HERE */

# 1 | ANSWER

carmen=# SELECT (name, region, population) FROM country WHERE region = 'Southern Europe';

-[ RECORD 1 ]-------------------------------------------------
row | ("Holy See (Vatican City State)","Southern Europe",1000)

# 2 | ANSWER

carmen=# SELECT (code, name) FROM country WHERE name = 'Holy See (Vatican City State)';
-[ RECORD 1 ]------------------------------
row | (VAT,"Holy See (Vatican City State)")

carmen=# SELECT (countrycode, language) FROM countryLanguage WHERE countrycode = 'VAT';
-[ RECORD 1 ]------
row | (VAT,Italian)

# 3 | ANSWER

carmen=# SELECT * FROM countryLanguage WHERE language = 'Italian' AND percentage = '100';
-[ RECORD 1 ]--------
countrycode | SMR
language    | Italian
isofficial  | t
percentage  | 100

carmen=# SELECT name FROM country WHERE code = 'SMR';
-[ RECORD 1 ]----
name | San Marino

# 4 | ANSWER

carmen=# SELECT * FROM city WHERE countrycode = 'SMR';
-[ RECORD 1 ]------------------
id          | 3170
name        | Serravalle
countrycode | SMR
district    | Serravalle/Dogano
population  | 4802
-[ RECORD 2 ]------------------
id          | 3171
name        | San Marino
countrycode | SMR
district    | San Marino
population  | 2294

# 5 | ANSWER

carmen=# SELECT * FROM city WHERE name LIKE 'Serr%';
-[ RECORD 1 ]------------------
id          | 265
name        | Serra
countrycode | BRA
district    | Espï¿½rito Santo
population  | 302666
-[ RECORD 2 ]------------------
id          | 3170
name        | Serravalle
countrycode | SMR
district    | Serravalle/Dogano
population  | 4802

carmen=# SELECT * FROM country WHERE code = 'BRA';
-[ RECORD 1 ]--+--------------------------
code           | BRA
name           | Brazil
continent      | South America
region         | South America
surfacearea    | 8.5474e+06
indepyear      | 1822
population     | 170115000
lifeexpectancy | 62.9
gnp            | 776739.00
gnpold         | 804108.00
localname      | Brasil
governmentform | Federal Republic
headofstate    | Fernando Henrique Cardoso
capital        | 211
code2          | BR

# 6 | ANSWER

carmen=# SELECT name FROM city WHERE id = 211;
-[ RECORD 1 ]----
name | Brasï¿½lia

# 7 && 8 | ANSWER

carmen=# SELECT * FROM city WHERE population = '91084';
-[ RECORD 1 ]-------------
id          | 4060
name        | Santa Monica
countrycode | USA
district    | California
population  | 91084


-- She's in ____________shes____heading_____to____cali___!
