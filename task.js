let details=document.getElementById("details")
// if(localStorage.getItem("Task_Data")!=null)
// {
//   details.innerText=""
//   const myArrayOfObjects=JSON.parse(localStorage.getItem("Task_Data"));
//   for(let i=0;i<myArrayOfObjects.length;i=i+1)
//   {
//   details.innerText+=myArrayOfObjects[i].user+" "+myArrayOfObjects[i].post+" "+myArrayOfObjects[i].task+" "+myArrayOfObjects[i].taskprogress+" "+myArrayOfObjects[i].date+"\n"
//   }
// }
let username=document.getElementById("name")
let usertasktitle=document.getElementById("titleoftask")
let usertaskdesc=document.getElementById("descriptionoftask")
let deadlinedate=document.getElementById("deadlinedate")
let deadlinetime=document.getElementById("deadlinetime")
let to_do=document.getElementById("to-do")
let progress=document.getElementById("progress")
let completed=document.getElementById("completed")
let normaluser=document.getElementById("normaluser")
let admin=document.getElementById("admin")
let userpost;
let userprogress;
let d = new Date();

function submittask()
{
  window.open("todo.html","_self")
}
function newtask() 
{
    const mynewArrayOfObjects=[];
    if(username.value==""){
      alert("Enter proper name in the name field")}

    else if(usertasktitle.value==""){
      alert("Enter proper task in the name field")}

    if(normaluser.checked){
      userpost=normaluser.value}
    
    else{
      userpost=admin.value}

    if(to_do.checked){
      userprogress=to_do.value}
    
    else if(progress.checked){
      userprogress=progress.value}
      else{
        userprogress=completed.value
      }

    if(deadlinedate.value==""){
      deadlinedate.value=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}

    if(deadlinetime.value==""){
      deadlinetime.value=d.getHours()+":"+d.getMinutes()}

    if(username.value!="" && usertasktitle.value!="")
    {
      let newtask={user: username.value, tasktitle: usertasktitle.value, taskdescription: usertaskdesc.value, post: userpost,taskprogress: userprogress, date: deadlinedate.value, time: deadlinetime.value, creation: d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+", "+d.getHours()+":"+d.getDate()+":"+d.getSeconds()}
      if(localStorage.getItem("Task_Data")==null)
      {  
        mynewArrayOfObjects.push(newtask);
        localStorage.setItem("Task_Data",JSON.stringify(mynewArrayOfObjects),);
      }
      else
      {
        const myArrayOfObjects=JSON.parse(localStorage.getItem("Task_Data"));
        localStorage.removeItem("Task_Data")
        for(let i=0;i<myArrayOfObjects.length;i=i+1)
        {
          mynewArrayOfObjects.push(myArrayOfObjects[i])
        }
        mynewArrayOfObjects.push(newtask)
        console.log(mynewArrayOfObjects)
        localStorage.setItem("Task_Data",JSON.stringify(mynewArrayOfObjects))
        function openback()
        {
          window.open("index.html","_self")
        }
        setInterval(openback, 500);
      }
    }
}
