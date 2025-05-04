//Variable Declarations & DOM Access
let btn =document.getElementById('roll-button');  // accesing rool button
let rollhistory=document.getElementById('roll-history') //accessing roll history
let historylist=[]   //created arrey to store history
const die_el=document.getElementById('dice'); //accesing dice
die_el.style.fontSize = "8rem";  // Adjust the size as needed


// Adding an Event Listener for Button Click
btn.addEventListener("click",function(){ // animation handler on click of button 
    die_el.classList.add('roll-animation');
    setTimeout(() => {
        die_el.classList.remove('roll-animation');
        rolldice();
    }, 1000); // set time of 1s 
});

//Rolling the Dice
 function rolldice(){   //created fuction for generating random number between 1 to 6
   const rollresult=Math.floor(Math.random()*6)+1;
  const dieface=getdieface(rollresult);  // store result
  die_el.innerHTML=dieface; // showing in dice class
  historylist.push(rollresult); // updating array by rollresult
  updaterollhistory(); //accesing fuction
}

//Updating the Roll History
function  updaterollhistory(){ //created function for creating child element "li" for showing history
    rollhistory.innerHTML="";  // clear 
    for(let i=0;i<historylist.length;i++){ //running loop for 
        const listitem=document.createElement("li") //accesing created child element 
        let span = document.createElement("span"); //created span elment
        span.innerHTML = getdieface(historylist[i]); // showing result of switch case in span 
        listitem.textContent = "Roll " + (i + 1) + ": ";
        listitem.appendChild(span);
        
        rollhistory.appendChild(listitem) // addind "li " elements as repeating
    }

}

//Getting Dice Unicode Characters
 function getdieface(rollresult){
    switch (rollresult) {
        case 1:
            return "&#9856;";
            
        case 2:
            return "&#9857;";

        case 3:
            return "&#9858;";
                
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
                    
        case 6:
            return "&#9861;";
    
        default:
            break;
    }

 }
