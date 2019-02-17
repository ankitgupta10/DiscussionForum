var s=0;
var t=0;
function showHide1()
{
    document.getElementById("sel1").style.display="inline";
    document.getElementById("sel2").style.display="none";
    s=1;
    t=0;
}
function showHide2()
{
    document.getElementById("sel1").style.display="none";
    document.getElementById("sel2").style.display="inline";
    s=0;
    t=1;
}
function hideAll()
{
    document.getElementById("sel1").style.display="none";
    document.getElementById("sel2").style.display="none";
    document.getElementById("name").style.display="none";
    document.getElementById("name1").style.display="none";
    document.getElementById("email").style.display="none";
    document.getElementById("phone").style.display="none";
    document.getElementById("pass1").style.display="none";
    document.getElementById("pass2").style.display="none";
    document.getElementById("uid1").style.display="none";
    document.getElementById("pin").style.display="none";
}
function validateForm()
{
    var fn=document.getElementById("fname").value;
    var ln=document.getElementById("lname").value;
    var em=document.getElementById("em").value;
    var mn=document.getElementById("mob").value;
    var p1=document.getElementById("pass").value;
    var p2=document.getElementById("repass").value;
    var id=document.getElementById("uid").value;
    var sp=document.getElementById("sel1").value;
    var tp=document.getElementById("sel2").value;
    var atpos = em.indexOf("@");
    var dotpos = em.lastIndexOf(".");
    var flag=0;
    if(fn==null || fn=="" || ln==null || fn=="")
    {
        document.getElementById("name1").style.display="inline";
        flag=1;
    }
    for (var i=0;i<fn.length;i++)
	    { 
			if(fn.indexOf(i) >= 0)
				{
					document.getElementById("name").style.display="inline";
                    flag=1;
					break;
				}
        }
	for (var i=0;i<ln.length;i++)
		{ 
			if(ln.indexOf(i) >= 0)
				{
					document.getElementById("name").style.display="inline";
                    flag=1;
					break;
				}
		}
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=em.length)
    {
        document.getElementById("email").style.display="inline";
        flag=1;
    }
    if(mn.length!=10 || mn==null || mn=="")
    {
        document.getElementById("phone").style.display="inline";
        flag=1;
    }
    for (var i=0;i<mn.length;i++)
		{ 
			if(mn.charCodeAt(i)<48 || mn.charCodeAt(i)>57)
				{
					document.getElementById("phone").style.display="inline";
                    flag=1;
					break;
				}
		}
    if(p1!=p2)
    {
        document.getElementById("pass1").style.display="inline";
        flag=1;
    }
    if(p1==null || p1=="" || p2==null || p2=="")
    {
        document.getElementById("pass2").style.display="inline";
        flag=1;
    }
    if(id==null || id=="")
    {
        document.getElementById("uid1").style.display="inline";
        flag=1;
    }
    if((sp==null || sp=="") && (tp==null || tp==""))
    {
        document.getElementById("pin").style.display="inline";
        flag=1;
    }
    if(s==1)
    {
        document.getElementById("sel1").style.display="inline";
    }
    if(t==1)
    {
        document.getElementById("sel2").style.display="inline";
    }
    if(flag==1)
    {
        return false;
    }
    else
    {
        return true;
    }
}