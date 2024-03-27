#!/usr/bin/env node

import inquirer from "inquirer";
let myBalance = 50000;
let pinCode = 1234;

let pinAnwser= await inquirer.prompt 
(
 [
    {
    name:"pin",
    message:"enter your pin",
    type:"number"
    }
 ]
);
if (pinAnwser.pin === pinCode){
    console.log("correct pin code !!"); 
    
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw" , "check balance", "fast cash"]

            }
        ]
    );
    console.log(operationAns);
    
    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"number"
                }
            ]
        );
        if(amountAns.amount < myBalance)
       { myBalance -= amountAns.amount
        console.log(`"Your remaning blance is: " ${myBalance}`);
    }else if (amountAns.amount > myBalance){
        console.log(`insuffient balance`);
        
    }

    }else if (operationAns.operation === "check balance"){
        console.log("Your balance is: " + myBalance);
        
    }else if (operationAns.operation === "fast cash"){
        let cashamount = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "list",
                    choices: ["5000","10000","20000","50000"],
                }
            ]
        );     if(cashamount.amount < myBalance)
        { myBalance -= cashamount.amount
         console.log(`"Your remaning blance is: " ${myBalance}`);
     }else if (cashamount.amount > myBalance){
         console.log(`insuffient balance`);
         
     }
    }   
  
    


}else{
    console.log("Incorrect pin Code !");
    
}

