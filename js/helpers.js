function moveleft(item){     document.getElementById(item).style.transform = "translateX(50%)";  }
function moverigth(item){ document.getElementById(item).style.transform = "translateX(-50%)"; }

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