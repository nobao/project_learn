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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную строку расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдется?', '');
       
            if ( (typeof(a)) === 'string' && (typeof(b)) != null && (typeof(b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }       
    },
    detectDayBudget: function() {
        appData.moneyPerDay = +(appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay <= 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = +(save/100/12*percent).toFixed();
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt('Статья необязательных расходов?');
    
            if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50) {
                appData.optionalExpenses[i] = a; 
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 1; i < 2; i++) {
            let items = prompt('Что принесет дополнительный доход?\n(Перечислите через запятую)', '');

            if ((typeof(items)) === 'string' && items != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?', ''));
                appData.income.sort();
            } else {
                i = i - 1;
            }    
        }
        appData.income.forEach(function(item, i, mass) {
            alert('Способы доп. заработка: ' + (i + 1) + '. ' + item);
        });         
    }
};

alert('Наша программа включает в себя данные: ');
for (var key in appData) {
    alert('Cвойство (метод) ' + key + '\nимеет значение:\n' + appData[key]);
}