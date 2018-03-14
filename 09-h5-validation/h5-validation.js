$(function(){
   var rewidth=$('#rect-width');
   var reheight=$('#rect-height');
   var recalc=$('#rect-calc');
   var reperi=$('#rect-peri');
   var rearea=$('#rect-area');

   $('.rectangle form').submit(function(e){
      e.preventDefault(); 


         var width=parseFloat(rewidth.val());
         var height=parseFloat(reheight.val());

         reperi.val(perimeter(width,height));
         rearea.val(area(width,height));

   })                        


            function perimeter(w,h){

                return (w + h)*2
                    
            }

            function area(w,h){

                return w*h
                    
            }





})
