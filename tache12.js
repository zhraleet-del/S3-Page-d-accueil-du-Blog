let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
let CAtotal = 0;
let max = ventes[0];
let min = ventes[0];
let nbunique = 0;
let unitotal = 0;

for(let i = 0; i < ventes.length;i++){
    let v = ventes[i];
    CAtotal =  CAtotal + v;
    if(v > max){
        max = v ;
    }
    if (v < min){
        min= v;
    }

    if(v >= 130){
        nbunique++;
        unitotal = unitotal + v;
    }
}

console.log(ventes.length, "ventes");
console.log("CA total",CAtotal);
console.log("max",max);
console.log("min",min);
console.log(nbunique,"ventes exceptionnelles générant",unitotal,"de CA");