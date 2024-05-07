const submitTask =()=>{
    let email = document.getElementById('emailId').value;
    let pass = document.getElementById('passW').value;
    console.log({
        data:{
            Email: email,
            Password: pass
        }
    })
    document.getElementById('emailId').value = "";
    document.getElementById('passW').value = "";
}