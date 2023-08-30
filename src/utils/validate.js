export const checkValidData=(email,password,Name)=>{

    if(Name){
        const isNameValid=/^[a-zA-Z ]{2,30}$/.test(Name);
        if(!isNameValid) return "Name is not valid";
    }
    const isEmailValid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password);

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}