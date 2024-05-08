//Storing Constant Data for Email and Password
const EmailData = 'himanshu.k@sankeysolutions.com';
const passData = 'Himanshu@36';


const redirectToHomePage = ()=>{

        window.location.href = "Home.html"

}


//Get the Value of the Input Elements 
const submitTask = (event) => {
    event.preventDefault();
    let email = document.getElementById('emailId').value;
    let pass = document.getElementById('passW').value;
    let passValidator = document.getElementById('inValidPasswordMessage')
    let emailChecker = document.getElementById('inValidEmailMessage')
    
    //Regular Expression for Password Validation
    let checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    //Checking the Password with .test( ) method
    if (!checkPassword.test(pass)) {
        passValidator.innerText = 'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character.';
        return false // Prevent Submission of Form

    } else {
        passValidator.innerText = "";

        //Checking if Email or Password Exist in Database

        if (email !== EmailData){
            emailChecker.innerText = "Invalid Email"
            return false;
        }
        else{
            emailChecker.innerText = "";
            if(pass !== passData){
                passValidator.innerText = "Invalid Password";
                return false;
    
            }else{
                passValidator.innerText = "";
                redirectToHomePage();
            }
        }
        

    }







}