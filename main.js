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

/* slider */
var controlButtons = [document.getElementById('control1'), document.getElementById('control2'), document.getElementById('control3')];
var boxs = [document.getElementById('box1'),document.getElementById('box2'),document.getElementById('box3')];
let moveSliderInterv;

boxs[0].style.left = 206 * 0 + 'px';
boxs[1].style.left = 206 * 1 + 'px';
boxs[2].style.left = 206 * 2 + 'px';

function moveSlider(index){
    var level = parseInt(boxs[0].style.left) - (-(index)*206); // (-(index)*206) = box1's left px we need

    moveSliderInterv = setInterval(function(){level= moveSliderAction(level);}, 1);
}

function moveSliderAction(level){
    if(level>0){
        level -= 1;

        boxs[0].style.left = parseInt(boxs[0].style.left) - 1 + 'px';
        boxs[1].style.left = parseInt(boxs[1].style.left) - 1 + 'px';
        boxs[2].style.left = parseInt(boxs[2].style.left) - 1 + 'px';
    }
    else if(level<0){
        level += 1;

        boxs[0].style.left = parseInt(boxs[0].style.left) + 1 + 'px';
        boxs[1].style.left = parseInt(boxs[1].style.left) + 1 + 'px';
        boxs[2].style.left = parseInt(boxs[2].style.left) + 1 + 'px';
    }
    else{
        clearInterval(moveSliderInterv);
    }

    return(level);
}

function resetControlButton(index){
    for(var i=0; i<3; i++){
     controlButtons[i].innerText = '-';
    }
    controlButtons[index].innerText = '@';
}

controlButtons[0].addEventListener('click', function(){resetControlButton(0);moveSlider(0);});
controlButtons[1].addEventListener('click', function(){resetControlButton(1);moveSlider(1);});
controlButtons[2].addEventListener('click', function(){resetControlButton(2);moveSlider(2);});
