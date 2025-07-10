function showDialogue(){
let userInput=prompt("enter your name:");
if(userInput){
    localStorage.setItem("username",userInput);

    let name=localStorage.getItem("username");
    alert("hello" + name +"! ur name is strored in the local stroage");
}
else{
    alert("no valid input");
}
}