$(document).ready(function(){
    $("input").click(function()
    {
        //$("H1").text($("li").eq(2).text());
        var numberOfListItem=$("#choices li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        $("H1").text($("#choices li").eq(randomChildNumber).text()+ "Oooo");
        
    });
});