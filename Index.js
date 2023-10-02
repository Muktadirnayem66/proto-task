// the __proto__ property is simple accessor property on the object. prototype is a consisting getter and setter function

const customer={
    id:"",
    name:"",
    email:"",
    fee:"",
    qty: "",
    location:"",
    __proto__:{
        Ticket:false,
        register(name, email, id){
            this.name = name;
            this.email = email;
            this.id = id;
            console.log("You are successfully registered");
        },
        signIn(id, email){
            if(this.id === id && this.email === email){
                this.Ticket = true
            }else{
                this.Ticket = false
                console.log("you are not registered or your account balance is null");
            }
        },
        TicketGenerate(name, email, id, fee, qty, location){
            return `${this.name = name}
             ${this.email = email}
              ${this.id = id}
               ${this.fee = fee } 
               ${this.qty = qty}
                ${this.location = location}`
        },

        
    }

}

customer.register("nayem", "nayem@gmail.com", "tt1")
customer.signIn("tt1", "nayem@gmail.com")
if(customer.Ticket){
console.log("Now you show your ticket Information", 
customer.TicketGenerate("nayem","nayem@gmail.com", "tt1", 400, 2, "Dhaka"));
}else{
    console.log("Your ticket information invalid");
}

console.log(customer);



//practice Section

// const user = {
//     id:"",
//     name:"",
//     email:"",
//     userName:"",
//     address:"",
//     phone:"",
//     __proto__:{
//         isSingin:false,
//         register(name, email, userName){
//             this.name = name;
//             this.email = email;
//             this.userName = userName;
//             console.log("register successful");
//         },
//         logIn(userName, email){
//             if(this.userName === userName && this.email === email ){
//                 this.isSingin = true
//             }else{
//                 console.log("your userName or email is incorrect");
//                 this.isSingin = false
//             }
//         }
//     }
// }

// user.register("nayem", "nayem@gmail.com", "nayem321")
// user.logIn("nayem32", "nayem@gmail.com")
// if(user.isSingin){
//     console.log("welcome", user.name);

// }else{
//     console.log("You are not registered");
// }
// console.log(user);