// FUNCTIONS USED MORE THAN ONCE AND COULD BE USED ON OTHER PROJECTS
// TO MOVE AN ELEMENT ON X USED FOR THE TRANSITIONS OF THE BOXES
function moveH(item,percentage){ document.getElementById(item).style.transform = "translateX("+percentage+"%)";  }

function domItem(type,value,atb1,atbv1,atb2,atbv2){ // USED TO CREATE ELEMENTS AND ADD ATRIBUTES IN ONE LINE
    element = document.createElement(type);
    data = document.createTextNode(value);
    element.appendChild(data);
    element.setAttribute(atb1,atbv1);
    element.setAttribute(atb2,atbv2);
    return element;
}

function notification(icon,text){ // USED TO SEND FLOATING WINDOWS WITH CUSTOM MESSAGES
    Swal.fire({
      icon: ''+icon,
      title: 'Notification',
      text: ''+text,
    })
  }

function notificationCorner() { // USED TO SEND TEMP NOTIFICATIONS
    Toastify({
      text: "Item Saved",
      duration: 3000,
      gravity: 'top',
      position: 'left',
      style: {
        background: "var(--darkcolor)",
      },
  }).showToast(); 
}
  