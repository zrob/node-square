module.exports = x => {
    const xx = x ** 2;
    console.log(`the square of ${x} is ${xx}`);
    return ["square result:", xx.toString(), "--", "value of environment variable test:", process.env.test].join(' ');
}
