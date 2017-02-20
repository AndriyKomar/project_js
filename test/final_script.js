     var rating =  localStorage.getItem("your_res");
     var com =document.getElementsByClassName("comment");
      console.log(rating);
    if (rating <= 6) 
    {
        com[0].innerHTML += "So Bad!";
    } 
    else if (rating <= 12)
    {
        com[0].innerHTML += " So-so!";
    } 
    else if (rating <= 18) 
    {
        com[0].innerHTML += "Quiet Good!";
    } 
    else if (rating <= 24)  
    {
        com[0].innerHTML += " Amazing!";
    }
     else if (rating <= 30)  
    {
        com[0].innerHTML += " Genius!";
    }

   document.getElementById("result").innerHTML=rating*7;