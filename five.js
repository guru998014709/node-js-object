class Account{
        acc_Id=101;
        open_Account(){
            console.log("Account Opened Successfully!")
        }
        deposit_Amount(){
            console.log("Amount Deposited Successfully!")
        }
        withdrawl_Amount(){
            console.log("insuffienet funds")
        }
}
let a1 = new Account();
console.log(a1)
console.log(a1.acc_Id)
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl_Amount()