// const x = 5;
// const y = true;

// y ? (x > 4 ? console.log("xxx") : console.log("yyy")) : console.log("ok");

const str01 = "user name {{userName}}, and user Id {{userId}}";

// const getStr01Res = (str, mapObjects) => {
//     let res = str;
//     mapObjects.forEach((el) => {
//         const regex = new RegExp(el?.regex);
//         res = res.replace(regex, el?.data);
//     });
//     return res;
// };

// console.log(
//     getStr01Res(str01, [
//         { regex: "{{userName}}", data: "Kika" },
//         { regex: "{{userId}}", data: "123" },
//     ])
// );

const arr = [1, 2];

function calculateTop3Odds(arr) {
    const sorted = arr.sort((a, b) => b - a);

    let numbers = [];
    for (let i = 0; i < sorted.length; i++) {
        if (numbers.length === 3) {
            break;
        }

        sorted[i] % 2 !== 0 && numbers.push(sorted[i]);
    }
    console.log(numbers);

    const sum = numbers.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0);

    return sum;
}

console.log(calculateTop3Odds(arr));
