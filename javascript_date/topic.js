var topic =[
  "尚未開學",
  "國定假日",
  "環境準備",
  "運動會",    
  "家長會",
  "萬聖節",
    "New Year"
];

 var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1,startDay);
 //startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);    
}

//setMonthAndDay(2,21);