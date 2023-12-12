import { Model } from "mongoose";


export type TOrders = {
    productName : string;
    price : number;
    quantity : number;
}

export type TOrder = {
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


 export type CustomerMethods = {
    isCustomerExists(userId:string): Promise<TCustomer | null>
  }

export type CustomerCheckModel = Model<TCustomer, Record<string, never>, CustomerMethods>
