$(document).ready(function()
{
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    var sds = 1000;
    var mts = sds*60;
    var hrs = mts*60;
    var dayUnit = hrs*24;
    setTable();
    
    //var x = document.getElementById("myDate").value
    $("#myDate").change(function()
    {                  
    
        var inputDate = $( "#myDate" ).val();
        var splitText = inputDate.split("-");
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
     
    });
    
    function setTable(){
    $("#courseTable").empty();    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");    
    for(var x=0;x<topicCount;x++)
    {   console.log(x);
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append("<td>"+(new Date(startDate.getTime()+7*x*dayUnit)).toLocaleDateString()+"</td>");
        $("#courseTable").append("<td>"+topic[x]+"</td>");
        $("#courseTable").append("</tr>");  
    };};
});


    
    
    
  
