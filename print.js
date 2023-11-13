let detailshere=document.getElementById("details")
if(localStorage.getItem("Task_Data")!=null)
{
  detailshere.innerText=""
  const myArrayOfObjects=JSON.parse(localStorage.getItem("Task_Data"));
  for(let i=0;i<myArrayOfObjects.length;i=i+1)
  {
    detailshere.innerText+=(i+1)+")"+"\xa0\xa0Name : "+myArrayOfObjects[i].user+"\n\xa0\xa0Post : "+myArrayOfObjects[i].post+"\n\xa0\xa0Title : "+myArrayOfObjects[i].tasktitle+"\n\xa0\xa0Description : "+myArrayOfObjects[i].taskdescription+"\n\xa0\xa0Date : "+myArrayOfObjects[i].date+"\n\xa0\xa0Time : "+myArrayOfObjects[i].time+"\n\xa0\xa0Status : "+myArrayOfObjects[i].taskprogress+"\n\xa0\xa0Date of Creation : "+myArrayOfObjects[i].creation+"\n\n"
  }
}