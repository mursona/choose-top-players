// h1 header text color
const heading = document.getElementById('header-heading');
heading.style.color="#E3E525";
heading.style.fontFamily= 'Berkshire Swash', "cursive";

// h1 header text color
const paragraph = document.getElementById('header-prgh');
paragraph.style.fontFamily = 'Manrope', "sans-serif";


// per player budget player-budget

function getPlayerExpense(){
    const playerBudgetInput = document.getElementById('player-budget');
    const playerBudgetAmountText = playerBudgetInput.value;
    const playerBudgetAmount = parseFloat(playerBudgetAmountText);

    playerBudgetInput.value = '';

    if(isNaN(playerBudgetAmount) || playerBudgetAmount < 0){
        alert("Type Positive Integer Value");
        document.getElementById('player-expenses').innerText = '';
    }

    else{
    // total expenses 
    const playerExpense = playerBudgetAmount * 5;
    const playerExpenseOutput = document.getElementById('player-expenses');
    playerExpenseOutput.innerText = 'Player Expenses : $' + playerExpense;
    return playerExpense;
    }
}

document.getElementById('playerCalculate-btn').addEventListener('click', function(){
    // function calling 
    getPlayerExpense();

})





