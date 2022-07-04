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
let br2=document.createElement("br");
whole.appendChild(br2);

let text1=document.getElementById("texte");





button.addEventListener("click",function(e){
    e.preventDefault();
   let down=document.createElement("down");
   down.classList.add("down");
   down.textContent=text.value;
   whole.appendChild(down);
   text.value="";
   down.style.backgroundColor="rgb(135,144,144";
   let br3=document.createElement("br");
whole.appendChild(br3);

   let done=document.createElement("button");
   done.setAttribute("type","submit");
   done.classList.add("done");
   down.appendChild(done);
   done.textContent="Done";
   done.style.color="green";

   let  delet=document.createElement("button");
   delet.setAttribute("type","submit");
   delet.classList.add("delete");
   delet.textContent="Delete";
   down.appendChild(delet);
   delet.style.color="red";


done.addEventListener("click",function(e){
    down.style.textDecoration="line-through";
})


delet.addEventListener("click",function(e){
  confirm(`Do you want to delete ?`);
    whole.removeChild(down);
})





    

})

 
