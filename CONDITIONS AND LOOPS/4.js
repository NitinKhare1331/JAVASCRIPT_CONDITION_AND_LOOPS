const num1 = 10;
const num2 = 25;

let output = "";
for (let i = num1; i <= num2; i++) {
    output = output + i;
    if (i < num2) {
        output = output + ",";
    }
}
console.log(output);
