



function modifValues(){
        var val = $('#progress1 progress').attr('value');
        if(val>=70){val=70;}
        var newVal = val*1+2;     
      
        $('#progress1 progress').attr('value',newVal).text(txt);
        $('#progress1 strong').html(txt);

}
setInterval(function(){ modifValues(); },40);



function modifValues(){
        var val = $('#progress2 progress').attr('value');
        if(val>=70){val=70;}
        var newVal = val*1+2;     
      
        $('#progress2 progress').attr('value',newVal).text(txt);
        $('#progress2 strong').html(txt);

}
setInterval(function(){ modifValues(); },40);
