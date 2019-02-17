function showModal()
{
    var modal=document.getElementById('myModal');
    var span=document.getElementById("cancel");

    document.getElementById("nav").style.webkitFilter="blur(3px)";
    document.getElementById("trend").style.webkitFilter="blur(3px)";
    document.getElementById("disc").style.webkitFilter="blur(3px)";
    document.getElementById("latest").style.webkitFilter="blur(3px)";
    modal.style.display="block";

    span.onclick = function()
    {
        modal.style.display = "none";
        document.getElementById("nav").style.webkitFilter="blur(0px)";
        document.getElementById("trend").style.webkitFilter="blur(0px)";
        document.getElementById("disc").style.webkitFilter="blur(0px)";
        document.getElementById("latest").style.webkitFilter="blur(0px)";
    }
}