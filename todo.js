let whole=document.getElementById("whole");
let text=document.createElement("input");
whole.appendChild(text);
text.setAttribute("type","text");
text.setAttribute("placeholder","Add what to do");
text.id="texte";
text.classList.add("todo");

text.addEventListener("keyup",(e)=>{
  console.log(e);
  if(e.target!=undefined){
    e.target.value=e.target.value.toUpperCase();
  }
})

let button=document.createElement("button");
whole.appendChild(button);
button.setAttribute("type","text");
button.textContent="+";
button.classList.add("btn");
let br1=document.createElement("br");
whole.appendChild(br1);
let br2=document.createElement("br");
whole.appendChild(br2);




button.addEventListener("click",function(e){
    e.preventDefault();
   let paragraph=document.createElement("paragraph");
   paragraph.classList.add("down");
   whole.appendChild(paragraph);
   e.target.style.backgroundColor="yellow";
   paragraph.textContent=text.value;
   text.value="";
   paragraph.style.backgroundColor="rgb(135,144,144";
   let br3=document.createElement("br");
   whole.appendChild(br3);

   let done=document.createElement("button");
   done.setAttribute("type","submit");
   done.classList.add("done");
   paragraph.appendChild(done);
   done.textContent="Done";
   done.style.color="aqua";

   let  delet=document.createElement("button");
   delet.setAttribute("type","submit");
   delet.classList.add("delete");
   delet.textContent="Delete";
   paragraph.appendChild(delet);
   delet.style.color="red";


done.addEventListener("click",function(e){
    paragraph.style.textDecoration="line-through";
    e.target.style.backgroundColor="green";
})


delet.addEventListener("click",function(e){
  e.target.style.backgroundColor="green";
  if(confirm(`Do you want to delete `+paragraph.innerText+'?')){
    whole.removeChild(paragraph);
  }
   
})





    

})

 
