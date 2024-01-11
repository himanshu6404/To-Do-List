let a=document.getElementById("text");

let list=document.querySelector(".list");

let btn=document.querySelector("#btn");
let resetBtn=document.querySelector("#resetBtn");

btn.addEventListener("click",hi);

let count=1;




function hi(){
    if(a.value===" "){
        alert("Plz Write Something");
    }
    else{
  
    let evt=document.createElement("li");
    let plus=document.createElement("span");
    
    evt.innerHTML=`${count}. ${a.value}`;

    plus.innerHTML="\u00d7";

    // plus.classList.add("sign");

    evt.append(plus);

    list.append(evt);

    count++;
    }

    a.value=" ";
    saveData();

 
}




list.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});



//Storing Data:

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    list.innerHTML=localStorage.getItem("data");
}

showTask();

resetBtn.addEventListener("click",reset);
function reset(){
    list.innerHTML=localStorage.clear();
    list.innerHTML="";
}

