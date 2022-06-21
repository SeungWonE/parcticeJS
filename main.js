
function modalToggle(){
    var modal = document.getElementById('modal');

    if(modal.style.display =='none'){
        modal.style.display = 'block';
    }
    else{
        modal.style.display = 'none';
    }
}

var modalInButton = document.getElementById('modalIn');
var modalOutButton = document.getElementById('modalOut');

modalInButton.addEventListener("click", modalToggle);
modalOutButton.addEventListener("click", modalToggle);
