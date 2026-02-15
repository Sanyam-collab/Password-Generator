const passwordbox=document.getElementById("password");
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="`~!@#$%^&*()_-+=*/|}{][;':,.\<>?";
function generatepassword(){
    let password="";
    const length=12;
    while(length>password.length){
        password+=uppercase[Math.floor(Math.random()*26)];
        password+=lowercase[Math.floor(Math.random()*26)];
        password+=number[Math.floor(Math.random()*10)];
        password+=symbols[Math.floor(Math.random()*15)];
    }
    passwordbox.value=password;
}
function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
}