monthDisplay = document.getElementById('p');
dayList = document.getElementById("days");
list_el = document.getElementsByTagName('li');

const months = ["Jan", "Feb", "Mar","Apr","May","June","July", "Aug", "Sep","Oct", "Nov","Dec"]; 
//need to implement the change month buttons

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
console.log(month);

monthDisplay.innerHTML = months[month];
document.getElementById('p2').innerHTML = day;
console.log(monthDisplay.innerHTML);



switch(monthDisplay.innerHTML) {
    case "Jan":
    case "Mar":
    case "May":
    case "Jul":
    case "Aug":
    case "Oct":
    case "Dec":

        console.log(true);
        
        daysOftheMonth(31);
        break;

    case "Feb":
        daysOftheMonth(29);
        break;

    case "Apr":
    case "Jun":
    case "Sep":
    case "Nov":
        daysOftheMonth(30);





}

function daysOftheMonth(j) {
    for(let i = 1; i<= j; i++) {
        list = document.createElement('li');
        dayList.appendChild(list);

        if(i == day) {
           
           list.outerHTML = '<li><div class="active">'+i+'</div></li>';
           continue;
        }
        
        textnode = document.createTextNode(i);
        list.appendChild(textnode);
        

        
   }
}