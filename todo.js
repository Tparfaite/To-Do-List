let whole=document.getElementById("whole");
// console.log("this is todo list");
let text=document.createElement("input");
whole.appendChild(text);
text.setAttribute("type","text");
text.setAttribute("placeholder","Add what to do");
text.id="texte";
text.classList.add("todo");

let button=document.createElement("button");
whole.appendChild(button);
button.setAttribute("type","text");
button.textContent="+";
button.classList.add("btn");
let br1=document.createElement("br");
whole.appendChild(br1);

let text1=document.getElementById("texte");





button.addEventListener("click",function(e){
    e.preventDefault();
   let down=document.createElement("down");
   down.classList.add("down");
   down.textContent=text.value;
   whole.appendChild(down);
   text.value="";







    

})

 
