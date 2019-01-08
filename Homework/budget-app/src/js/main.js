// Получить кнопку "Начать расчет" через id
let btnStart = document.getElementById('start');

/* Получить все блоки в правой части программы через классы
(которые имеют класс название-value, начиная с и заканчивая */
let budgetValue = document.getElementsByClassName('budget-value');
let dayBudgetValue = document.getElementsByClassName('daybudget-value');
let levelValue = document.getElementsByClassName('level-value');
let expensesValue = document.getElementsByClassName('expenses-value');
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value');
let incomeValue = document.getElementsByClassName('income-value');
let monthSavingsValue = document.getElementsByClassName('monthsavings-value');
let yearSavingsValue = document.getElementsByClassName('yearsavings-value');

/* Получить поля(input) c обязательными расходами через класс.
(class=”expenses-item”) */
let expensesItem = document.getElementsByClassName('expenses-item');

/* Получить кнопки “Утвердить” и “Рассчитать” через Tag,
каждую в своей переменной.*/
let allBtn = document.getElementsByTagName('button');

let expensesItemBtn = allBtn[0];
let optionalExpensesBtn = allBtn[1];
let countBudgetBtn = allBtn[2];

/* Получить поля для ввода необязательных расходов
(optionalexpenses-item) при помощи querySelectorAll */
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

/* Получить оставшиеся поля через querySelector
(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день) */
let incomeInput = document.querySelector('#income');
let savingsChkbox = document.querySelector('#savings');
let sumInput = document.querySelector('#sum');
let percentInput = document.querySelector('#percent');
let yearValueInput = document.querySelector('.year-value');
let monthValueInput = document.querySelector('.month-value');
let dayValueInput = document.querySelector('.day-value');