import { calculatePortfolioValue, getPortfolioAllocation} from "./portfolio.js";
import { Transaction } from "./transaction.js";

//Declaring necessary arguments
let portfolioValue = calculatePortfolioValue()
let portfolioAllocation = getPortfolioAllocation()

//Creating some transactions and updating values
const transaction1 = new Transaction(1,'buy',50)
transaction1.updateAssetQuantity()

const transaction2 = new Transaction(2,'buy',40)
transaction2.updateAssetQuantity()

const transaction3 = new Transaction(1,'sell',100)
transaction3.updateAssetQuantity()

const transaction4 = new Transaction(2,'sell',70)
transaction4.updateAssetQuantity()

//Logging Portfolio value and allocation
console.log(`Total Portfolio Value: ${portfolioValue}`)

console.log(`Portfolio Allocation: ${portfolioAllocation}`)


//HTML addition
let div1 = document.getElementById("portfolio-value")
div1.textContent = `Portfolio Value: $${portfolioValue}`

let div2 = document.getElementById("portfolio-allocation")
div2.textContent = `Portfolio Allocation: ${portfolioAllocation}`

let p1 = document.getElementById("transaction1")
p1.textContent = transaction1.updateAssetQuantity()

let p2 = document.getElementById("transaction2")
p2.textContent = transaction2.updateAssetQuantity()

let p3 = document.getElementById("transaction3")
p3.textContent = transaction3.updateAssetQuantity()

let p4 = document.getElementById("transaction4")
p4.textContent = transaction4.updateAssetQuantity()




