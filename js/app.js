// h1 header text color
const heading = document.getElementById('header-heading');
heading.style.color="#E3E525";
heading.style.fontFamily= 'Berkshire Swash', "cursive";

// h1 header text color
const paragraph = document.getElementById('header-prgh');
paragraph.style.fontFamily = 'Manrope', "sans-serif";


// per player budget expense calculation start

function getPlayerExpense(){
    const playerBudgetInput = document.getElementById('player-budget');
    const playerBudgetAmountText = playerBudgetInput.value;
    const playerBudgetAmount = parseFloat(playerBudgetAmountText);

    if(isNaN(playerBudgetAmount) || playerBudgetAmount < 0){
        alert("Type Positive Integer Value");
        document.getElementById('player-expenses').innerText = '';
    }

    else{
    // total expenses 
    const playerExpense = playerBudgetAmount * 5;
    const playerExpenseOutput = document.getElementById('player-expenses');
    playerExpenseOutput.innerText = playerExpense;
    return playerExpense;
    }
}

document.getElementById('playerCalculate-btn').addEventListener('click', function(){
    // function calling 
    getPlayerExpense();

})

// per player budget expense calculation end


// manager and coach budget expense calculation start

function getTotalExpenses(){
    const playerExpenseInput = document.getElementById('player-expenses');
    const playerExpenseAmountText = playerExpenseInput.innerText;
    const playerExpenseAmount = parseFloat(playerExpenseAmountText);

    const managerExpenseInput = document.getElementById('manager-expense');
    const managerExpenseAmountText = managerExpenseInput.value;
    const managerExpenseAmount = parseFloat(managerExpenseAmountText);
    

    const coachExpenseInput = document.getElementById('coach-expense');
    const coachExpenseAmountText = coachExpenseInput.value;
    const coachExpenseAmount = parseFloat(coachExpenseAmountText);

    if(isNaN(managerExpenseAmount) || managerExpenseAmount < 0 || isNaN(coachExpenseAmount) || coachExpenseAmount < 0){
        alert("Type Positive Value");
        document.getElementById('total-expenses').innerText = '';
    }

    else{
    // total expenses 

    const totalCost = managerExpenseAmount + coachExpenseAmount + playerExpenseAmount;
    const totalCostOutput = document.getElementById('total-expenses');
    totalCostOutput.innerText = totalCost;
    return totalCost;
    }
}

// manager and coach budget expense calculation end


// Calculate Button 
document.getElementById('calculate-total').addEventListener('click', function(){
 
    // function calling 
    getTotalExpenses();
})



