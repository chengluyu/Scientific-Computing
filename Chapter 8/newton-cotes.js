

const M = (f, a, b) => (b - a) * f((a + b) / 2);
const T = (f, a, b) => ((b - a) / 2) * (f(a) + f(b));
const S = (f, a, b) => ((b - a) / 6) * (f(a) + 4 * f((a + b) / 2) + f(b));

const f = x => Math.exp(- x * x);

const exactValue = 0.746824;

[M, T, S].forEach(I => {
    const quadratureValue = I(f, 0, 1)
    console.log('Function: ', I.toString())
    console.log('Computed Value: ', quadratureValue)
    console.log('Error: ', Math.abs(quadratureValue - exactValue))
    console.log()
});