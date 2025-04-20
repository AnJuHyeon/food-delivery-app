 import {Schema , model} from 'mongoose';


 const verificationRequestSchema = new Schema({
    identifier : {type : String, requierd : true},
    token : {type : String, requierd : true},
    expires : {type : Date, required : true},
    createdAt : {type : Date, required : true},
    updatedAt : {type : Date, required : true},
 })

 export const VerificationRequest = model(
    'VerificationRequest',
    verificationRequestSchema
 )