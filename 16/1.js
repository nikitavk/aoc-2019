const input = `03036732577212944063491565474664`.repeat(10000);

const pattern = [0, 1, 0, -1];

let signal = input.split('').map(s => +s);

const phases = 100;
let output = [...signal];

for (let p = 0; p < phases; p++) {
  let outputRes = [];
  for (let i = 0; i < input.length; i++) {
    // let pat = flatten(
    //   pattern.map(e => {
    //     return Array(i + 1).fill(e);
    //   }),
    // );
    // let patI = 1;
    // let counter = 0;
    // let res = 0;
    // for (let j = 0; j < output.length; j++) {
    //   res += output[j] * pattern[patI];

    //   counter++;
    //   if (counter === i + 1) {
    //     counter = 0;
    //     patI++;
    //   }

    //   if (patI === (i + 1) * pattern.length) {
    //     patI = 0;
    //   }
    // }

    let res = 0;
    let j = 0;
    output.splice(j, i);
    console.time('while');
    while (j < output.length) {
      for (let k = j; k < j + i + 1; k++) {
        res += output[k];
      }

      output.splice(j, (i + 1) * 2);

      if (j >= output.length) {
        break;
      }

      for (let k = j; k < j + i + 1; k++) {
        res -= output[k];
      }

      j += (i + 1) * 2;

      if (j >= output.length) {
        break;
      }
    }
    console.timeEnd('while');
    outputRes.push(+res.toString()[res.toString().length - 1]);
  }
  console.log(p);
  output = [...outputRes];
}

const skip = +output.slice(0, 8).join('');
console.log(skip);
// console.log(output.slice(skip, skip + 8).join(''));
