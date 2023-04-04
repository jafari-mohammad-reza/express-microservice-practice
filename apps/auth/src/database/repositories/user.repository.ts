import UserModel from "../models/user.model";
import {Types} from "mongoose"
import * as crypto from "crypto";
export async function createUser(email:string,username:string,password:string,salt:string){
    try{
        return await UserModel.create({email,username,password,salt})
    }catch (err:any) {
        throw new Error(err)
    }
}
export async function getUserByEmail(email:string){
    try {


    return await UserModel.findOne({email})
}catch (err:any) {
    throw new Error(err)
}
}
export async function getUserById(id:string){
    try {
        return await UserModel.findOne({_id:new Types.ObjectId(id)})

    }catch (err:any) {
        throw new Error(err)
    }
}

