const input = `3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5`;

let commands = input.split(',').map(c => +c);
let i = 0;

const permutations = xs => {
  const go = xs =>
    xs.length
      ? concatMap(
          x => concatMap(ys => [[x].concat(ys)], go(delete_(x, xs))),
          xs,
        )
      : [[]];
  return go(xs);
};

const concatMap = (f, xs) => xs.reduce((a, x) => a.concat(f(x)), []);

const delete_ = (x, xs) => {
  const go = xs => {
    return 0 < xs.length
      ? x === xs[0]
        ? xs.slice(1)
        : [xs[0]].concat(go(xs.slice(1)))
      : [];
  };
  return go(xs);
};

const phases = permutations([5, 6, 7, 8, 9]);
let maxSignal = Number.MIN_SAFE_INTEGER;
let maxSignalPhase = null;

for (let p of phases) {
  let signal = 0;
  let computers = [];

  for (let amp = 0; amp < 5; amp++) {
    // let commands = [...init_commands];
    signal = computer(p[amp], signal);
  }

  if (signal > maxSignal) {
    maxSignal = signal;
    maxSignalPhase = p;
  }
}

console.log(maxSignal, maxSignalPhase);

function computer(phase, signal) {
  this.phase = phase;
  this.signal = signal;
  let lastOutput = 0;
  let i = 0;
  while (
    commands[i] == 99 ||
    commands[i]
      .toString()
      .padStart(5, '0')
      .endsWith('01') ||
    commands[i]
      .toString()
      .padStart(5, '0')
      .endsWith('02') ||
    commands[i]
      .toString()
      .padStart(3, '0')
      .endsWith('03') ||
    commands[i]
      .toString()
      .padStart(3, '0')
      .endsWith('04') ||
    commands[i]
      .toString()
      .padStart(4, '0')
      .endsWith('05') ||
    commands[i]
      .toString()
      .padStart(4, '0')
      .endsWith('06') ||
    commands[i]
      .toString()
      .padStart(5, '0')
      .endsWith('07') ||
    commands[i]
      .toString()
      .padStart(5, '0')
      .endsWith('08')
  ) {
    if (commands[i] === 99) {
      break;
    } else if (
      commands[i]
        .toString()
        .padStart(5, '0')
        .endsWith('01')
    ) {
      const com = commands[i].toString().padStart(5, '0');
      commands[commands[i + 3]] =
        +commands[!+com[2] ? +commands[i + 1] : i + 1] +
        +commands[!+com[1] ? +commands[i + 2] : i + 2];
      i += 4;
    } else if (
      commands[i]
        .toString()
        .padStart(5, '0')
        .endsWith('02')
    ) {
      const com = commands[i].toString().padStart(5, '0');
      commands[commands[i + 3]] =
        +commands[!+com[2] ? +commands[i + 1] : i + 1] *
        +commands[!+com[1] ? +commands[i + 2] : i + 2];
      i += 4;
    } else if (
      commands[i]
        .toString()
        .padStart(3, '0')
        .endsWith('03')
    ) {
      const com = commands[i].toString().padStart(3, '0');
      if (this.phase !== null) {
        commands[!+com[0] ? commands[i + 1] : i + 1] = +this.phase;
        this.phase = null;
      } else {
        commands[!+com[0] ? commands[i + 1] : i + 1] = +this.signal;
      }

      i += 2;
    } else if (
      commands[i]
        .toString()
        .padStart(3, '0')
        .endsWith('04')
    ) {
      const com = commands[i].toString().padStart(3, '0');
      lastOutput = commands[!+com[0] ? commands[i + 1] : i + 1];
      i += 2;
    } else if (
      commands[i]
        .toString()
        .padStart(4, '0')
        .endsWith('05')
    ) {
      const com = commands[i].toString().padStart(4, '0');

      if (commands[!+com[1] ? commands[i + 1] : i + 1] !== 0) {
        i = commands[!+com[0] ? commands[i + 2] : i + 2];
      } else {
        i += 3;
      }
    } else if (
      commands[i]
        .toString()
        .padStart(4, '0')
        .endsWith('06')
    ) {
      const com = commands[i].toString().padStart(4, '0');

      if (commands[!+com[1] ? commands[i + 1] : i + 1] === 0) {
        i = commands[!+com[0] ? commands[i + 2] : i + 2];
      } else {
        i += 3;
      }
    } else if (
      commands[i]
        .toString()
        .padStart(5, '0')
        .endsWith('07')
    ) {
      const com = commands[i].toString().padStart(5, '0');

      if (
        commands[!+com[2] ? commands[i + 1] : i + 1] <
        commands[!+com[1] ? commands[i + 2] : i + 2]
      ) {
        commands[commands[i + 3]] = 1;
      } else {
        commands[commands[i + 3]] = 0;
      }
      i += 4;
    } else if (
      commands[i]
        .toString()
        .padStart(5, '0')
        .endsWith('08')
    ) {
      const com = commands[i].toString().padStart(5, '0');

      if (
        commands[!+com[2] ? commands[i + 1] : i + 1] ===
        commands[!+com[1] ? commands[i + 2] : i + 2]
      ) {
        commands[commands[i + 3]] = 1;
      } else {
        commands[commands[i + 3]] = 0;
      }
      i += 4;
    }
  }

  return lastOutput;
}
