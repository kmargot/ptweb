
//FORMATION1
var leBouton1 = $('#formation1');
var leMenu1 = $('#formation-content1');

leBouton1.click(function (evt){ 
    leMenu1.toggleClass('open'); 
    evt.preventDefault();
});

//FOMRATION2
var leBouton2 = $('#formation2');
var leMenu2 = $('#formation-content2');

leBouton2.click(function (evt){ 
    leMenu2.toggleClass('open'); 
    evt.preventDefault();
});

//FORMATION3
var leBouton3 = $('#formation3');
var leMenu3 = $('#formation-content3');

leBouton3.click(function (evt){ 
    leMenu3.toggleClass('open'); 
    evt.preventDefault();
});