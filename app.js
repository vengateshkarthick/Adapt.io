//Menuicon
    const menuIcon=document.getElementById("icon");
    //Menu List
    const mnuList=document.getElementById("mnlist");
    const popup=document.getElementById("popup");
    function getContact(swapDisplay){
         if(swapDisplay){
              
               popup.style.display="flex";
          }
          else{
      
               popup.style.display="none"
          }
    }
    let getDisplay = () =>{
      if(mnuList.style.display=="flex")
            mnuList.style.display="none"
       else
            mnuList.style.display="flex";
    }
    menuIcon.addEventListener('click',getDisplay)
    menuIcon.addEventListener('keyup',getDisplay)
    
/*Chart Creation*/
google.charts.load('current', {'packages':['corechart'],'language':'en'}).then(drawChart);
function drawChart(){
     let data=google.visualization.arrayToDataTable([
          ['Departments','Contacts',{role:'style'}],
          ['Sales',49,'color: #76A7FA'],
          ['Marketing',171,'color: #76A7FA'],
          ['Engineering',41,'color: #76A7FA'],
          ['IT',43,'color: #76A7FA'],
          ['Finance',49,'color: #76A7FA'],
          ['Other',148,'color: #76A7FA']
     ])
      let options={
           title:'Contacts by Departments',
           fontSize:'5px',
           bar:{groupWidth:'25%'},
          
      }
      var chart =new google.visualization.ColumnChart(document.getElementById('googleCharts'));
      chart.draw(data,options) 



}
