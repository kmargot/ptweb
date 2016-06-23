var leBouton = $('#formation');
var leMenu = $('#formation-content');

leBouton.click(function (evt){ 
    leMenu.toggleClass('open'); 
    evt.preventDefault();
});

var leBouton1 = $('#formation1');
var leMenu1 = $('#formation-content1');

leBouton1.click(function (evt){ 
    leMenu1.toggleClass('open'); 
    evt.preventDefault();
});

var leBouton2 = $('#formation2');
var leMenu2 = $('#formation-content2');

leBouton2.click(function (evt){ 
    leMenu2.toggleClass('open'); 
    evt.preventDefault();
});