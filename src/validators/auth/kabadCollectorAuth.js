import { object, string, number } from "yup";
export const validationSignupCollector = object().shape({
  fullname: string().required(),
  email: string().required().email(),
  password: string().required(),
  pincode: number().required(),
  phoneNumber: string().required(),
});

export const validationLoginCollector = object().shape({
  email: string().required().email(),
  password: string().required(),
});
