let deletename=document.getElementById("deletename")
let number=document.getElementById("deleteindex")
let deleteadmin=document.getElementById("deleteadmin")
let deleteuser=document.getElementById("deletenormaluser")
let post;
let indexnumbervalue;
function deleteopen()
{
    window.open("delete.html","_self")
}
function deletetask()
{
    const myArrayOfObjects=JSON.parse(localStorage.getItem("Task_Data"));
    if(deleteuser.checked)
  {
    post=deleteuser.value
  }
  else{
    post=deleteadmin.value
  }
  if(deletename.value=="")
  {
    alert("Enter the user name first : ")
  }
  else if(number.value<1||number.value>myArrayOfObjects.length)
  {
    alert("Given index is not within the range of tasks")
  }
  else
  {
    indexnumbervalue=(number.value).valueOf()-1;
    let deleteusername = (myArrayOfObjects[(indexnumbervalue).valueOf()].user)

     if(post=="Admin" || deletename.value==deleteusername)
    {
    const mynewArrayOfObjects=[];
    for(let i=0;i<indexnumbervalue;i=i+1)
    {
        mynewArrayOfObjects.push(myArrayOfObjects[i])
    }
    for(let i=indexnumbervalue+1;i<myArrayOfObjects.length;i=i+1)
    {
        mynewArrayOfObjects.push(myArrayOfObjects[i])
    }
    localStorage.removeItem("Task_Data")
    localStorage.setItem("Task_Data",JSON.stringify(mynewArrayOfObjects))
    }
    else
    {
        alert("You have no access to delete this task")
    }
    window.open("index.html","_self")
  }
}
