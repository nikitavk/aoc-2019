const start = 168630;
const end = 718098;

let count = 0;

for (let i = start; i <= end; i++) {
  const adjacentSame = i
    .toString()
    .split("")
    .reduce(
      (acc, curr, i, a) =>
        curr === a[i - 1] && curr != a[i + 1] && curr != a[i - 2] ? true : acc,
      false
    );

  const neverDecrease =
    i.toString() ===
    i
      .toString()
      .split("")
      .sort()
      .join("");

  if (adjacentSame && neverDecrease) count++;
}

console.log(count);
