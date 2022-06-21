/* modal */
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

/* menu */
var menuButtons = [document.getElementById('menu1'), document.getElementById('menu2'), document.getElementById('menu2_1'), document.getElementById('menu2_2')];
var menu2Container = document.getElementById('menu2_container')

function removeChoseMenu(event){
    for(var i=0; i<4; i++){
        menuButtons[i].classList.remove("selected");
    }
}

menuButtons[1].addEventListener("mouseover", function(event){menu2Container.style.display = 'flex';});
menu2Container.addEventListener("mouseover", function(event){menu2Container.style.display = 'flex';});
menuButtons[1].addEventListener("mouseout", function(event){menu2Container.style.display = 'none';});
menu2Container.addEventListener("mouseout", function(event){menu2Container.style.display = 'none';});

menuButtons[0].addEventListener("click", removeChoseMenu);
menuButtons[0].addEventListener("click", function(){menuButtons[0].classList.add("selected");});
menuButtons[1].addEventListener("click", removeChoseMenu);
menuButtons[1].addEventListener("click", function(){menuButtons[1].classList.add("selected");});
menuButtons[2].addEventListener("click", removeChoseMenu);
menuButtons[2].addEventListener("click", function(){menuButtons[2].classList.add("selected");});
menuButtons[3].addEventListener("click", removeChoseMenu);
menuButtons[3].addEventListener("click", function(){menuButtons[3].classList.add("selected");});
