var count = 1;
function fill(control)
{

    
    if(count%2==0)
    {
        document.getElementById(control.id).innerHTML = "O";
        count+=1;

    }
    else
    {
        document.getElementById(control.id).innerHTML = "X";
        count+=1;
        
    }
    if(result())
    {
        if(count%2==0)
        {
            alert("Player X wins");
        }
       if(count%2!=0)
       {
           alert("Player 0 wins");
           
       }
        reset();
        return false;
    }
    if(count>9)
    {
        alert("Draw");
        count=1;
        reset();
    }
}
function reset()
{
    for(var i =1;i<=9;i++)
    {
        document.getElementById('div'+i).innerHTML="";
    }
    count = 0;
}
function result()
{
    if(document.getElementById('div1').innerHTML!="" && document.getElementById('div2').innerHTML!="" && document.getElementById('div3').innerHTML!=""
    && document.getElementById('div1').innerHTML == document.getElementById('div2').innerHTML && document.getElementById('div2').innerHTML == document.getElementById('div3').innerHTML)
    {
        document.getElementById('div1').style.color = "green";
        document.getElementById('div2').style.color = "green";
        document.getElementById('div3').style.color = "green";
        return true;

    }
    if(document.getElementById('div3').innerHTML!="" && document.getElementById('div6').innerHTML!="" && document.getElementById('div9').innerHTML!=""
    && document.getElementById('div3').innerHTML == document.getElementById('div6').innerHTML && document.getElementById('div6').innerHTML == document.getElementById('div9').innerHTML)
    {
        document.getElementById('div3').style.color = "green";
        document.getElementById('div6').style.color = "green";
        document.getElementById('div9').style.color = "green";
        return true;
    }
    if(document.getElementById('div7').innerHTML!="" && document.getElementById('div8').innerHTML!="" && document.getElementById('div9').innerHTML!=""
    && document.getElementById('div7').innerHTML == document.getElementById('div8').innerHTML && document.getElementById('div8').innerHTML == document.getElementById('div9').innerHTML)
    {
        document.getElementById('div7').style.color = "green";
        document.getElementById('div8').style.color = "green";
        document.getElementById('div9').style.color = "green";
        return true;
    }
    if(document.getElementById('div1').innerHTML!="" && document.getElementById('div4').innerHTML!="" && document.getElementById('div7').innerHTML!=""
    && document.getElementById('div1').innerHTML == document.getElementById('div4').innerHTML && document.getElementById('div4').innerHTML == document.getElementById('div7').innerHTML)
    {
        document.getElementById('div1').style.color = "green";
        document.getElementById('div4').style.color = "green";
        document.getElementById('div7').style.color = "green";
        return true;
    }
    if(document.getElementById('div1').innerHTML!="" && document.getElementById('div5').innerHTML!="" && document.getElementById('div9').innerHTML!=""
    && document.getElementById('div1').innerHTML == document.getElementById('div5').innerHTML && document.getElementById('div5').innerHTML == document.getElementById('div9').innerHTML)
    {
        document.getElementById('div1').style.color = "green";
        document.getElementById('div5').style.color = "green";
        document.getElementById('div9').style.color = "green";
        return true;
    }
    if(document.getElementById('div3').innerHTML!="" && document.getElementById('div5').innerHTML!="" && document.getElementById('div7').innerHTML!=""
    && document.getElementById('div3').innerHTML == document.getElementById('div5').innerHTML && document.getElementById('div5').innerHTML == document.getElementById('div7').innerHTML)
    {
        document.getElementById('div3').style.color = "green";
        document.getElementById('div5').style.color = "green";
        document.getElementById('div7').style.color = "green";
        return true;
    }
    if(document.getElementById('div2').innerHTML!="" && document.getElementById('div5').innerHTML!="" && document.getElementById('div8').innerHTML!=""
    && document.getElementById('div2').innerHTML == document.getElementById('div5').innerHTML && document.getElementById('div5').innerHTML == document.getElementById('div8').innerHTML)
    {
        document.getElementById('div2').style.color = "green";
        document.getElementById('div5').style.color = "green";
        document.getElementById('div8').style.color = "green";
        return true;
    }
    if(document.getElementById('div4').innerHTML!="" && document.getElementById('div5').innerHTML!="" && document.getElementById('div6').innerHTML!=""
    && document.getElementById('div4').innerHTML == document.getElementById('div5').innerHTML && document.getElementById('div5').innerHTML == document.getElementById('div6').innerHTML)
    {
        document.getElementById('div4').style.color = "green";
        document.getElementById('div5').style.color = "green";
        document.getElementById('div6').style.color = "green";
        return true;
    }
}
