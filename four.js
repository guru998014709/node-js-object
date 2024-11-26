class account{
    acc_id=101;
    open_account(){
        console.log("account opened successfully!")
    }
    deposit_amount(){
        console.log("amount deposited successfully!")
    }
}
let a1=new account();
console.log(a1)
console.log(a1.acc_id)
a1.open_account()
a1.deposit_amount()