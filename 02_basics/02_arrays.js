const marvvel_heroes = ["thor", "ironman", "hulk"];
const dc_heroes = ["superman", "batman","flash"]

//marvvel_heroes.push(dc_heroes);
//console.log(marvvel_heroes)

//marvvel_heroes.concat(dc_heroes);
//console.log(marvvel_heroes);

//const all_heroes = marvvel_heroes.concat(dc_heroes);
//console.log(all_heroes);

const all_heroes = [...marvvel_heroes, ...dc_heroes];
//console.log(all_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("akshat"))
