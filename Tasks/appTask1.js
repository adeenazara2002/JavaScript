function salary(){
    let monthlySalary = prompt('Enter your monthly salary')
    if(monthlySalary <= 50000 && monthlySalary > 0){
        console.log('Salary: '+monthlySalary);
    }

    else if(monthlySalary >= 50000){
        let tax = ((25/100) * monthlySalary)
        let SalaryAfterTax = monthlySalary - tax
        console.log('Monthly Salary: '+monthlySalary);
        console.log('Salary after tax: '+SalaryAfterTax);
    }


    else{
        console.log('Only numbers are allowed');
    }
    
  
}
salary();