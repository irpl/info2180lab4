var win; //= false;
var lose; //= false;

$(function()
{
    //starting the game
    $("#start").click(function()
    {
        $(".boundary").removeClass("youlose");
        $("#status").text("Move your mouse over the \"S\" to begin.");
        init();
        
        $(".boundary").mouseover(function()
        {
            if(!win)
            {
                youLose();
            } 
        });
        
        $("#end").mouseover(function()
        {
            if(!lose)
            {
                youWin();
            }
        });
        
        $("#maze").mouseleave(function()
        {
            if(!win)
            {
                youLose();
            }
        });
    });
});

var init = function()
{
    win = false;
    lose = false;
}

var youLose = function()
{
    $("#maze div.boundary").addClass("youlose");
    $("#status").text("You Lose!");
    lose = true;
    win = false;
}
var youWin = function()
{
    $("#maze div.boundary").removeClass("youlose");
    $("#status").text("You Win!");
    lose = false;
    win = true;
}