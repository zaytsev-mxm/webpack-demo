const cond = process.env.CONDITION === 1;

if (cond) {
    const { foo } = require('./module');
    foo();
} else {
    const { bar } = require('./module');
    bar();
}
