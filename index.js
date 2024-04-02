#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 5000; //Dollar
let myPin = 1234;
console.log("Welcome to Savera's ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, Login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawal method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: "select amount",
                    choices: [1000, 3000, 4000]
                }
            ]);
            if (fastCashAns.FastCash > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= fastCashAns.FastCash;
                console.log(`${fastCashAns.FastCash} withdraw Successfully!`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
