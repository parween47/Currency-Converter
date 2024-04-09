import inquirer from "inquirer"

const rates:any={
    USD:1,// base currency
    PKR:280,
    INR:75.36,
    EUR:0.8498,
    GBP:0.7353,
} 

let userAnswer=await inquirer.prompt([
    {
        name:'From',
        type:'list',
        message:'Enter From currency!',
        choices:['USD','PKR','INR','EUR','GBP']
    },
    {
        name:'To',
        type:'list',
        message:'Enter To currency!',
        choices:['USD','PKR','INR','EUR','GBP']
    },
    {
        name:'Amount',
        type:'number',
        message:'Enter the amount!'
    }
])
let from=rates[userAnswer.From]
let to=rates[userAnswer.To] 
let amount=userAnswer.Amount
let inBase=amount/from
let outAmount=inBase*to
console.log(`${Math.round(outAmount)}`)