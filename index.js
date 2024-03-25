#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operator to perform operations",
        type: "list",
        name: "Operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// conditional statement
if (answer.Operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.Operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.Operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.Operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please Enter A Valid Operator");
}
