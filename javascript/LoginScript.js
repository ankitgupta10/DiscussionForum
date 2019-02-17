function validateLogin()
{
    var un=document.getElementById("un").value;
    var pw=document.getElementById("pw").value;

    if(un==null || un=="" || pw==null || pw=="")
    {
        document.getElementById("wc").style.display="none";
        document.getElementById("warn").style.display="inline";
        return false;
    }
}