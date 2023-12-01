console.log(require('fs').readFileSync('./input.txt', 'utf8').split('\n')
    .map(v => v.split('').filter(w => Number(w)))
    .map(v => v[0] + v[v.length - 1])
    .reduce((x, a) => Number(x) + Number(a), 0)
  );

console.log(require('fs').readFileSync('./input.txt', 'utf8').split('\n')
    .map(v =>
        (Number(v.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/)[1]
            .replace('one', '1')
            .replace('two', '2')
            .replace('three', '3')
            .replace('four', '4')
            .replace('five', '5')
            .replace('six', '6')
            .replace('seven', '7')
            .replace('eight', '8')
            .replace('nine', '9')) * 10)
        + (Number(v.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)/)[1]
            .replace('one', '1')
            .replace('two', '2')
            .replace('three', '3')
            .replace('four', '4')
            .replace('five', '5')
            .replace('six', '6')
            .replace('seven', '7')
            .replace('eight', '8')
            .replace('nine', '9')))
    )
    .reduce((x, a) => x + a, 0)
);