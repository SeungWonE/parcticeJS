
function modalToggle(){
    var modal = document.getElementById('modal');
    alert(modal.style.display);
    if(modal.style.display =='none'){
        modal.style.display = 'show';
    }
    else{
        modal.style.display = 'none';
    }
}

var modalInButton = document.getElementById('modalIn');
var modalOutButton = document.getElementById('modalOut');

modalInButton.addEventListener("click", modalToggle());
modalOutButton.addEventListener("click", modalToggle());
