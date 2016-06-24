
jQuery(document).ready(function()
{
     jQuery('.galerie').hide();
   // On cache la zone 
   // jQuery('.graphisme').hide();
  //  jQuery('.integration').hide();
   // jQuery('.autre').hide();
//jQuery('.webdesign').hide();
  
    //lorsque le lien avec l'ID #.. est cliqué
   jQuery('a.integration-link').click(function()
  {
       jQuery('.infographie-content').hide();
       
      jQuery('.integration-content').show(800);
      return false;
   });
    jQuery('a.infographie-link').click(function()
  {
        jQuery('.integration-content').hide();
        
      jQuery('.infographie-content').show(800);
      return false;
   });
});