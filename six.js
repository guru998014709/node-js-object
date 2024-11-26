class account{
    acc_name="rahul";
    acc_bal=0;

    deposit_amount(amount){
        console.log(amount)
    }

}
let a1=new account();
console.log(a1)
console.log(a1.acc_name)
console.log(a1.acc_bal)
a1.deposit_amount(501)
a1.deposit_amount(50)

