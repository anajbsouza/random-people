import Joi from "joi";
import { People } from "protocols/peopleProtocol";

export const peopleSchema = Joi.object<People>({
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
})