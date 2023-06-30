//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
let a = 8;
let b = 5;
console.log(a >= b);
//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
for (let i = 1; i <= 5; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}
//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
let n = 0;
while (n <= 4) {
    console.log(Math.floor(Math.random() * 10) + 1);
    n++;
}
console.log(n);
//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
let finder = null;
let array = [10,11,12,13,14,15,16,17,18,19,20,21,22,21,20,19,
18,17,16,15,14,13,12,11,10];
for (let i = 0; i < array.length; i++) {
    if (finder < array[i]) {
        finder = array[i];
    }
}
let arrayMaxNumber = finder;
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
let ranlet = null;
let arrayLetters = [];
for (let i = 1; i <= 100; i++) {
    ranlet = (String.fromCharCode(Math.floor(Math.random() * 4) + 65));
    arrayLetters.push(ranlet);
}
let fullArray = arrayLetters;
let allLettersScore = arrayLetters.length;
//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
let sum = "";
function lygineSuma(a3, b3) {
    if (typeof a3 === "object" && typeof b3 === "object") {
        sum = null;
        sum = a3.length + b3.length
        if (sum % 2 === 1) {
            return "suma nelyginė";
        }
        return sum;
    }
    if (typeof a3 === "number" && isFinite(a3) &&
    typeof b3 == "number" && isFinite(b3)) {
        sum = null;
        sum = a3 + b3;
        if (sum % 2 === 1) {
            return "suma nelyginė";
        }
        return sum;
    }
}
let error = lygineSuma(5, [5]);
let lygSuma = lygineSuma(5, 5);
let nelygSuma = lygineSuma(2, 5);
let arr = ["a", "b"];
let arr2 = ["a", "b"];
//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
function pirminisSkaicius(a2) {
    if (typeof a2 === "number" && isFinite(a2)) {
    return a2 % 1 === 0;
    }
}
//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
//"(XXX) XXX-XXXX". (10 taškų)
function telefonoNumeris(t) {
    return "("+t[0]+t[1]+t[2]+") "+t[3]+t[4]+t[5]+"-"+t[6]+t[7]+
            t[8]+t[9]
}
let tel = [8,4,5,2,6,2,2,7,6,5];