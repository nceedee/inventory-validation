function ValidatorSchema() {
    this.errorMessage = null;
    this.successMessage = null;

    const rules = {
        alphabet: /^[A-Za-z]+$/,
        number: /^[0-9]+$/,
        alphaNumeric: /^[A-Za-z0-9\s]+$/,
        char: /^[@.A-Za-z0-9]+$/
    }

    this.validate = function (data, rule,message= "Sorry, Your data fails the validation rule") {
        //GET VALIDATOR RULE FROM THE LOCAL RULES
        
        const validatorRule = rules[rule];
    
        //CHECK IF RULE IS FOUND
    
        if (!validatorRule) {
            this.errorMessage = 'Please check the rule you passed';
            return false;
        }
    
        if (!validatorRule.test(data)) {
            this.errorMessage = message;
            return false;
        }
    
        this.successMessage = 'Data is valid';
        this.errorMessage = null;
    
        
        return true;
    }
};
























const validator = new ValidatorSchema();  //INSTANTIATION

const username = 'david';
const age = "19213";
const address = 'NO 12 Awka Road';
const email = 'nnajidavid58@gmail.com';

if (validator.validate(username, "alphabet")) {
    console.log(validator.successMessage);
}
else {
    console.log(validator.errorMessage)
}


if (validator.validate(age, "number")) {
    console.log(validator.successMessage);
}
else {
    console.log(validator.errorMessage)
}

if (validator.validate(address, "alphaNumeric")) {
    console.log(validator.successMessage);
}
else {
    console.log(validator.errorMessage)
}

if (validator.validate(email, "char")) {
    console.log(validator.successMessage);
}
else {
    console.log(validator.errorMessage)
}


















const expenseStore = [];


const davidExpense = new Expense({
    amount: '5000',
    purpose: 'bought car',
    date: new Date(),
});



const kelvinExpense = new Expense({
    amount: '200',
    purpose: 'bought machine',
    date: new Date(),
});



function Expense(expense) {
    this.expenses = [];

    //CREATING A NEW EXPENSE
    //CONSTRUCTOR FUNCTION

    ((_expense) => {
        const validator = new ValidatorSchema();

        //VALIDATE AMOUNT

        if (!validator.validate(expense.amount, 'number')) {
            console.log(validator.errorMessage);
        }

        else {
            expenseStore.push(expense);
            this.expenses.push(expense);
        }
    })(expense);
    
   
}






console.log(davidExpense.expenses);
console.log(kelvinExpense.expenses);
console.log(expenseStore);





