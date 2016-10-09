/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnBack */
    
    
        /* button  Materi */
    
    
        /* button  Soal */
    
    
        /* button  .uib_w_7 */
    
    
        /* button  .uib_w_9 */
    
    
        /* button  #btnBack */
    $(document).on("click", "#btnBack", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_82_14"); 
         return false;
    });
    
        /* button  Materi */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_84_74"); 
         return false;
    });
    
        /* button  Soal */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_83_83"); 
         return false;
    });
    
        /* button  .uib_w_9 */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_82_14"); 
         return false;
    });
    
        /* button  .uib_w_7 */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_82_14"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
