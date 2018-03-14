$(function(){
       var rewidth=$('#rect-width');
       var reheight=$('#rect-height');
       var recalc=$('#rect-calc');
       var reperi=$('#rect-peri');
       var rearea=$('#rect-area');


            recalc.click(function(){
                  var width=parseFloat(rewidth.val());
                  var height=parseFloat(reheight.val());
                  
                   if(parseInt(rewidth.val()) < 0){
                      $('#rectangle-width-validate').html('输入数值不能小于0！');
                            rewidth.select();
                               return false;  
                   }
                  
                   if(rewidth.val() === ''){
                      $('#rectangle-width-validate').html('输入内容不能为空！');
                            rewidth.select();
                              return false;   
                   }
                   rewidth.keydown(function(){
                      if(rewidth.val() != ''){
                      $('#rectangle-width-validate').html('');
                       return false;
                     }
                
                   })

                  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(rewidth.val())){
                      $('#rectangle-width-validate').html('输入内容必须为数值！');
                            rewidth.select();
                            return false;
                                
                   }


                   if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(reheight.val())){
                      $('#rectangle-height-validate').html('输入内容必须为数值！');
                            reheight.select();
                               return false;  
                   }

                   if(reheight.val() == ''){
                      $('#rectangle-height-validate').html('输入内容不能为空！');
                            reheight.select();
                               return false;  
              }
                  
                    if(parseInt(reheight.val()) < 0){
                      $('#rectangle-height-validate').html('输入数值不能小于0！');
                            reheight.select();
                                return false; 
              }

                    reheight.keydown(function(){
                      if(rewidth.val() != ''){
                      $('#rectangle-height-validate').html('');
                           return false;
                      }
                
            })

                 $('#rectangle-width-validate').html('');
                 $('#rectangle-height-validate').html('');
                  reperi.val(perimeter(width,height));
                  rearea.val(area(width,height));
                                
            })
            
            rewidth.keypress(function(event){
              if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(event.key)) event.preventDefault();
            })


            reheight.keypress(function(event){
              if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(event.key)) event.preventDefault();
            })
    
            

  

            function perimeter(w,h){

                return (w + h)*2
                    
            }

            function area(w,h){

                return w*h
                    
            }





})

