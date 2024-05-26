function logIn(){
    document.getElementById("logIn").style.display="inline-block";
    document.getElementById("signUp").style.display = "none";
} 
function signUp(){
    document.getElementById("logIn").style.display="none";
    document.getElementById("signUp").style.display = "inline-block";
}
function closeLogin(){
    document.getElementById("logIn").style.display="none";
    
}
function closeSignup(){
    document.getElementById("signUp").style.display="none";
    
}