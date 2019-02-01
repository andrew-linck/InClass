const selfMultiply = function (num1) {
    return num1 * num1;
}

selfMultiply(3);

const fullName = function (firstname, lastname) {
    const name = `${lastname}, ${firstname}`;
    return name;
}

fullName("George", "Yoo");

const numCheck = function (num) {
    return (num % 2 === 0);
}

numCheck(2);
numCheck(3);