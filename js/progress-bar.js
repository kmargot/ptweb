

/* function modifValues(){
    $('.progressbar').each(function(){
        var val = $(this).attr('value');
        var score = $(this).attr('score');
//        console.log('test');
         if(val < score){
             val = val+1;
             $(this).attr(value) = val;
         }
        else {
            clearInterval(x);
        }
    })
}

var x = setInterval(function(){ modifValues(); },40); */

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3500);
	});
});


