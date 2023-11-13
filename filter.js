
let detailsfilter=document.getElementById("detailsfilter")
let printindex=1;
function filteropen()
{
    window.open("filtertask.html","_self")
}
function back()
{
    window.open("index.html","_self")
}
function todoopen()
{
    window.open("filterspace.html","_self")
    localStorage.setItem("choice",1)
}
function progressopen()
{
    window.open("filterspace.html","_self")
    localStorage.setItem("choice",2)
}
function completedopen()
{
window.open("filterspace.html","_self")
localStorage.setItem("choice",3)
}
function durationopen()
{
window.open("filterspace.html","_self")
localStorage.setItem("choice",4)
}
function personopen()
{
    window.open("filterspace.html","_self")
    localStorage.setItem("choice",5)
}
function printcontent(){
    // console.log(choice)
    // console.log(detailsfilter.innerText)
if(localStorage.getItem("Task_Data")!=null)
{
  detailsfilter.innerText=""
  const myArrayOfObjects=JSON.parse(localStorage.getItem("Task_Data"));
  console.log(myArrayOfObjects)
  console.log(localStorage.getItem("choice"))
  console.log(localStorage.getItem("choice")==1)
//   console.log(myArrayOfObjects)
  if(localStorage.getItem("choice")==1)
  {
    console.log(myArrayOfObjects[0].taskprogress)
    for(let i=0;i<myArrayOfObjects.length;i=i+1)
    {
        if(myArrayOfObjects[i].taskprogress=="To-Do")
        {
            detailsfilter.innerText+=(printindex)+")"+"\xa0\xa0Name : "+myArrayOfObjects[i].user+"\n\xa0\xa0Post : "+myArrayOfObjects[i].post+"\n\xa0\xa0Title : "+myArrayOfObjects[i].tasktitle+"\n\xa0\xa0Description : "+myArrayOfObjects[i].taskdescription+"\n\xa0\xa0Date : "+myArrayOfObjects[i].date+"\n\xa0\xa0Time : "+myArrayOfObjects[i].time+"\n\xa0\xa0Status : "+myArrayOfObjects[i].taskprogress+"\n\xa0\xa0Date of Creation : "+myArrayOfObjects[i].creation+"\n\n"
            printindex=printindex+1
        }
        // console.log(detailsfilter.innerText)
    }
  }
  else if(localStorage.getItem("choice")==2)
  {
    console.log(myArrayOfObjects[0].taskprogress)
    for(let i=0;i<myArrayOfObjects.length;i=i+1)
    {
        if(myArrayOfObjects[i].taskprogress=="In-Progress")
        {
            detailsfilter.innerText+=(printindex)+")"+"\xa0\xa0Name : "+myArrayOfObjects[i].user+"\n\xa0\xa0Post : "+myArrayOfObjects[i].post+"\n\xa0\xa0Title : "+myArrayOfObjects[i].tasktitle+"\n\xa0\xa0Description : "+myArrayOfObjects[i].taskdescription+"\n\xa0\xa0Date : "+myArrayOfObjects[i].date+"\n\xa0\xa0Time : "+myArrayOfObjects[i].time+"\n\xa0\xa0Status : "+myArrayOfObjects[i].taskprogress+"\n\xa0\xa0Date of Creation : "+myArrayOfObjects[i].creation+"\n\n"
            printindex=printindex+1
        }
        // console.log(detailsfilter.innerText)
    }

  }
  else if(localStorage.getItem("choice")==3)
  {
    console.log(myArrayOfObjects[0].taskprogress)
    for(let i=0;i<myArrayOfObjects.length;i=i+1)
    {
        if(myArrayOfObjects[i].taskprogress=="Completed")
        {
            detailsfilter.innerText+=(printindex)+")"+"\xa0\xa0Name : "+myArrayOfObjects[i].user+"\n\xa0\xa0Post : "+myArrayOfObjects[i].post+"\n\xa0\xa0Title : "+myArrayOfObjects[i].tasktitle+"\n\xa0\xa0Description : "+myArrayOfObjects[i].taskdescription+"\n\xa0\xa0Date : "+myArrayOfObjects[i].date+"\n\xa0\xa0Time : "+myArrayOfObjects[i].time+"\n\xa0\xa0Status : "+myArrayOfObjects[i].taskprogress+"\n\xa0\xa0Date of Creation : "+myArrayOfObjects[i].creation+"\n\n"
            printindex=printindex+1
        }
        // console.log(detailsfilter.innerText)
    }
      }
  else if(localStorage.getItem("choice")==4)
  {
    let timerangeone=prompt("Enter the minimum date limit in yyyy-mm-dd format : ")
    let timerangetwo=prompt("Enter the maximum date limit in yyyy-mm-dd format : ")
    console.log(myArrayOfObjects[0].taskprogress)
    for(let i=0;i<myArrayOfObjects.length;i=i+1)
    {
        if(myArrayOfObjects[i].date>=timerangeone && myArrayOfObjects[i].date<=timerangetwo )
        {
            detailsfilter.innerText+=(printindex)+")"+"\xa0\xa0Name : "+myArrayOfObjects[i].user+"\n\xa0\xa0Post : "+myArrayOfObjects[i].post+"\n\xa0\xa0Title : "+myArrayOfObjects[i].tasktitle+"\n\xa0\xa0Description : "+myArrayOfObjects[i].taskdescription+"\n\xa0\xa0Date : "+myArrayOfObjects[i].date+"\n\xa0\xa0Time : "+myArrayOfObjects[i].time+"\n\xa0\xa0Status : "+myArrayOfObjects[i].taskprogress+"\n\xa0\xa0Date of Creation : "+myArrayOfObjects[i].creation+"\n\n"
            printindex=printindex+1
        }
        // console.log(detailsfilter.innerText)
    }
  }
  else if(localStorage.getItem("choice")==5)
  {
    let idname=prompt("Enter the user name whose tasks are to be displayed : ")
    // console.log(myArrayOfObjects[0].taskprogress)
    // console.log(idname)
    // console.log(myArrayOfObjects[0].user)
    for(let i=0;i<myArrayOfObjects.length;i=i+1)
    {
        if(myArrayOfObjects[i].user==idname)
        {
            detailsfilter.innerText+=(printindex)+")"+"\xa0\xa0Name : "+myArrayOfObjects[i].user+"\n\xa0\xa0Post : "+myArrayOfObjects[i].post+"\n\xa0\xa0Title : "+myArrayOfObjects[i].tasktitle+"\n\xa0\xa0Description : "+myArrayOfObjects[i].taskdescription+"\n\xa0\xa0Date : "+myArrayOfObjects[i].date+"\n\xa0\xa0Time : "+myArrayOfObjects[i].time+"\n\xa0\xa0Status : "+myArrayOfObjects[i].taskprogress+"\n\xa0\xa0Date of Creation : "+myArrayOfObjects[i].creation+"\n\n"
            printindex=printindex+1
        }
        // console.log(detailsfilter.innerText)
    }
  }
}
}