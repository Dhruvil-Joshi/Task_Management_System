let updateusername=document.getElementById("updatename")
let updateusertasktitle=document.getElementById("updatetitleoftask")
let updateusertaskdesc=document.getElementById("updatedescriptionoftask")
let updatedeadlinedate=document.getElementById("updatedeadlinedate")
let updatedeadlinetime=document.getElementById("updatedeadlinetime")
let updateto_do=document.getElementById("updateto-do")
let updateprogress=document.getElementById("updateprogress")
let updatecompleted=document.getElementById("updatecompleted")
let updatenormaluser=document.getElementById("updatenormaluser")
let updateadmin=document.getElementById("updateadmin")
let updatenumber=document.getElementById("updateindex")
let updatepost;
let updateindexnumbervalue;
let updateuserpost;
let updateuserprogress;
    function updateopen()
    {
        window.open("updatetask.html","_self")
    }
    function updatetask()
    {
        const myArrayOfObjects=JSON.parse(localStorage.getItem("Task_Data"));
        
      if(updateusername.value=="")
      {
        alert("Enter the updater's name!")
      }
      else if(updatenumber.value=="")
      {
        alert("Enter the index of task to update!")
      }
      else if(updatenumber.value<1||updatenumber.value>myArrayOfObjects.length)
      {
        alert("Given index is not within the range of tasks")
      }
      else
      {
        if(updatenormaluser.checked){
            updatepost=updatenormaluser.value}
          
          else{
            updatepost=updateadmin.value} 

    if(updateto_do.checked){
        updateuserprogress=updateto_do.value}
      
      else if(updateprogress.checked){
        updateuserprogress=updateprogress.value}
        else{
          updateuserprogress=updatecompleted.value
        }
        updateindexnumbervalue=(updatenumber.value).valueOf()-1;
        // let updateusernamecheck = (myArrayOfObjects[(updateindexnumbervalue).valueOf()].user)
    
        let newtask=myArrayOfObjects[updateindexnumbervalue]
        // console.log(post)
        // console.log(newtask.user)
        // console.log(updateusername.value)
    //     newtask={user: myArrayOfObjects[updateindexnumbervalue].user, tasktitle: updateusertasktitle.value, taskdescription: updateusertaskdesc.value, updatepost: myArrayOfObjects[updateindexnumbervalue].post,taskprogress: updateuserprogress, date: updatedeadlinedate.value, time: updatedeadlinetime.value, creation: myArrayOfObjects[updateindexnumbervalue].creation  }
    // console.log(newtask)    
         if(updatepost=="Admin" || newtask.user==updateusername.value)
        {
        const mynewArrayOfObjects=[];
        for(let i=0;i<updateindexnumbervalue;i=i+1)
        {
            mynewArrayOfObjects.push(myArrayOfObjects[i])
        }
        // console.log(updatedeadlinedate.value)
        // console.log(updatedeadlinetime.value)
        if(updateusertasktitle.value=="")
        {
          updateusertasktitle.value=myArrayOfObjects[updateindexnumbervalue].tasktitle
        }
        if(updateusertaskdesc.value=="")
        {
            updateusertaskdesc.value=myArrayOfObjects[updateindexnumbervalue].taskdescription
        }
        if(updatedeadlinedate.value=="")
        {
            updatedeadlinedate.value=myArrayOfObjects[updateindexnumbervalue].date
        }
        if(updatedeadlinetime.value=="")
        {
            updatedeadlinetime.value=myArrayOfObjects[updateindexnumbervalue].time
        }
        
        // console.log(myArrayOfObjects[updateindexnumbervalue].date)
        // console.log(myArrayOfObjects[updateindexnumbervalue].time)
        newtask={user: myArrayOfObjects[updateindexnumbervalue].user, tasktitle: updateusertasktitle.value, taskdescription: updateusertaskdesc.value, post: myArrayOfObjects[updateindexnumbervalue].post,taskprogress: updateuserprogress, date: updatedeadlinedate.value, time: updatedeadlinetime.value, creation: myArrayOfObjects[updateindexnumbervalue].creation  }
        mynewArrayOfObjects.push(newtask)     
        for(let i=updateindexnumbervalue+1;i<myArrayOfObjects.length;i=i+1)
        {
            mynewArrayOfObjects.push(myArrayOfObjects[i])
        }
        localStorage.removeItem("Task_Data")
        localStorage.setItem("Task_Data",JSON.stringify(mynewArrayOfObjects))
        }
        else
        {
            alert("You have no access to update this task")
        }
        window.open("index.html","_self")
      }
    }
    