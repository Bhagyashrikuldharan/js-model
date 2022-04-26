'use strict';

const btnShowModel =  document.getElementById('btn-show');
const modelcontainer = document.getElementById('model-container');

const overlaycontainer= document.getElementById('overlay');
btnShowModel.addEventListener('click',function(){
    modelcontainer.classList.add('show');
    overlaycontainer.classList.add('show');

})
