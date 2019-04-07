window.onload=function(){
    let newtodo =document.getElementById('newtask')
    let list =document.getElementById('todolist')
    let addtodo =document.getElementById('addtask')
addtodo.onclick=function(){
   let li =document.createElement('li')
   li.innerText=newtodo.value
   let xbtn=document.createElement('button')
   xbtn.innerText='*'
   xbtn.onclick=function(event){
       event.target.parentElement.remove()
   }
   li.appendChild(xbtn)
   list.appendChild(li)
} 
}