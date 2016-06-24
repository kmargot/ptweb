//FIXED MENU
$( window ).scroll(function() {
    if ($(this).scrollTop() > 1 ) {//Début du scroll
                $( ".header-menu" ).css( "background-color", "#171717" );
                $( ".header" ).css( "position", "fixed" );
            }  else {
                $( ".header-menu" ).css( "background-color", "transparent" ); //Menu au top
            }
});

//SMOOTH SCROLL
$('a[href^="#"]').click(function(){ //au clic
	var the_id = $(this).attr("href"); //enrengistre la valeur

	$('html, body').animate({ //faire une animation
		scrollTop:$(the_id).offset().top //action et cible
	}, 'slow'); //lentenment
	return false; //évite le comportement de l'ancre (et affichage url)
});

//MENU BURGER
var leMenu = $('#menu');
var leBouton = $('#unfold');

leBouton.click(function (evt){ 
    leMenu.toggleClass('open'); 
    evt.preventDefault();
});