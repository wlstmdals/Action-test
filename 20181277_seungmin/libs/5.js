//20181277 진승민 5.js
function count(obj) {
  const adjectives = Object.values(obj);
  const count = {};
  adjectives.forEach((adj) => {
    if (count[adj]) {
      count[adj]++;
    } else {
      count[adj] = 1;
    }
  });
  return count;
}
/*
finally done
const obj0 = {
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot",
};

const obj1 = {
  a: "moron",
  b: "moron",
  c: "moron",
};

const obj2 = {
  a: "idiot",
  b: "scumbag",
};
*/

/*
const input = [obj0, obj1, obj2];

for (let i = 0; i < 3; i++) {
  console.log(
    `<Object` +
      i +
      `>
  countNumberOfOccurrences(\n`,
    input[i],
    `)\n  -> `,
    count(input[i]),
    `\n`
  );
}
*/
/*
for (let item of input){
  console.log(item)
}
  
  console.log(count(obj1));

 
for (let i =0; i <3; i++ ){
  
  console.log(input[i]);
  console.log(count(input[i]))
}

for (let item of input){
  console.log(item)
}
*/

module.exports = count;
