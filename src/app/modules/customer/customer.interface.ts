
export type TOrders = {
    productName : string;
    price : number;
    quantity : number;
}

export type TCustomer = {
    userId : string;
    username : string;
    password : string;
    fullName :{
        firstName : string;
        lastName : string;
    },
    age : number;
    email : string;
    isActive : boolean;
    hobbies : string[];
    address : {
        street : string;
        city : string;
        country : string;
    },
    orders : TOrders[]
  }