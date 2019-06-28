let money = prompt('Ваш бюджет на месяц?','');
console.log(money);
alert(money);
let time = prompt('Введите дату в формате YYYY-MM-DD','');
console.log(time);
alert(time);
let appData = {
    budget: money,
    timeData: time,
    expensesData: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
let a1=prompt('Введите обязательную статью расходов в этом месяце',''),
    a2=prompt('Во сколько обойдется?',''),
    a3=prompt('Введите обязательную статью расходов в этом месяце',''),
    a4=prompt('Во сколько обойдется?','');
appData.expenses.a1=a2;
appData.expenses.a3=a4;
alert(appData.budget/30)
