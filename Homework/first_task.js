let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true  
};

// первый цикл (for)

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную строку расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдется?', '');
   
        if ( (typeof(a)) === 'string' && (typeof(b)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            alert('Введите, пожалуйста, корректные данные');
            i--;
        }    
    } 
}
chooseExpenses();

// второй цикл (while)
// let i = 0;
// while (i<2) {
//     let a = prompt('Введите обязательную строку расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');

//     if ( (typeof(a)) === 'string' && (typeof(b)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         alert('Введите, пожалуйста, корректные данные');
//         i--;
//     } 
    
//     i++;
// };

// третий цикл (do... while)
// let i = 0;
// do {
//     let a = prompt('Введите обязательную строку расходов в этом месяце', ''),
//     b = +prompt('Во сколько обойдется?', '');

//     if ( (typeof(a)) === 'string' && (typeof(b)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//     console.log('done');
//     appData.expenses[a] = b;
//     } else {
//     alert('Введите, пожалуйста, корректные данные');
//     i--;
//     } 

//     i++;
// } while (i < 2);

function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Ошибка в данных');
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt('Статья необязательных расходов?');

        if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50) {
            appData.optionalExpenses[i] = a; 
        } else {
            i--;
        }
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = +(save/100/12*percent).toFixed();
        alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();