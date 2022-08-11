function moveH(item,percentage){ document.getElementById(item).style.transform = "translateX("+percentage+"%)";  }

function domItem(type,value,atb1,atbv1,atb2,atbv2){
    element = document.createElement(type);
    data = document.createTextNode(value);
    element.appendChild(data);
    element.setAttribute(atb1,atbv1);
    element.setAttribute(atb2,atbv2);
    return element;
}

function notification(icon,text){
    Swal.fire({
      icon: ''+icon,
      title: 'Notification',
      text: ''+text,
    })
  }

function notificationCorner() {
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
  