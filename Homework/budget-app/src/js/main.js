let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time, sumExpenses = 0;

let allBtn = document.querySelectorAll('button');

for (i=0; i < allBtn.length; i++) {
    allBtn[i].setAttribute('disabled', 'disabled');
    allBtn[i].style.opacity = '.2';
}
startBtn.removeAttribute('disabled');
startBtn.style.opacity = '1';

startBtn.addEventListener('click', function() {
    for (i=0; i < allBtn.length; i++) {
        allBtn[i].removeAttribute('disabled');
        allBtn[i].style.opacity = '1';
    }
    
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');


    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    sumExpenses = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
   
        if ( (typeof(a)) === 'string' && (typeof(b)) != null && (typeof(b)) != null &&
            a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sumExpenses += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sumExpenses;
});

function optExp() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let a = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = a; 
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
   
    for (let y = 0; y < optionalExpensesItem.length; y++) {
        if (optionalExpensesItem[y].value != 0) {
            optionalExpensesBtn.removeEventListener('click', optExp);
        }
    }    
}
optionalExpensesBtn.addEventListener('click', optExp);

countBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((+appData.budget - sumExpenses) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay <= 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'произошла ошибка';
    }  
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = +(sum/100/12*percent).toFixed(1);
        appData.yearIncome = +(sum/100*percent).toFixed(1);
        
        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = +(sum/100/12*percent).toFixed(1);
        appData.yearIncome = +(sum/100*percent).toFixed(1);
        
        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome; 
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};