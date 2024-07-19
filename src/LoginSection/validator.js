import { Password } from "@mui/icons-material";

export const emailValidator = Email =>{
    const emailregex =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailregex.test(Email);
}

export const passwordValidator = Password =>{
    const passwordregex =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@.#$!%*?&^]).{8,}$/;
    return passwordregex.test(Password);
}