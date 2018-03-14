$(function(){
    var rewidth=$('#rect-width');
    var reheight=$('#rect-height');
    var recalc=$('#rect-calc');
    var reperi=$('#rect-peri');
    var rearea=$('#rect-area');


            recalc.click(function(){
                  var width=parseFloat(rewidth.val());
                      var height=parseFloat(reheight.val());

                          reperi.val(perimeter(width,height));
                              rearea.val(area(width,height));
                                
            })
            rewidth.keypress(function(e){
              if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
            })
            reheight.keypress(function(e){
              if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
            })
            rewidth.blur(function(){

              if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(rewidth.val())){
                      $('#rectangle-width-validate').html('输入内容必须为数值！');
                            rewidth.select();
                                
              }


              if(rewidth.val() === ''){
                      $('#rectangle-width-validate').html('输入内容不能为空！');
                            rewidth.select();
                                
              }


              if(parseInt(rewidth.val()) < 0){
                      $('#rectangle-width-validate').html('输入数值不能小于0！');
                            rewidth.select();
                                
              }

                
            })
            rewidth.keydown(function(){
              if(rewidth.val() != ''){
                      $('#rectangle-width-validate').html('');
                          
              }
                
            })


            reheight.blur(function(){

              if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(reheight.val())){
                      $('#rectangle-height-validate').html('输入内容必须为数值！');
                            reheight.select();
                                
              }

              if(reheight.val() == ''){
                      $('#rectangle-height-validate').html('输入内容不能为空！');
                            reheight.select();
                                
              }
                  
              if(parseInt(reheight.val()) < 0){
                      $('#rectangle-height-validate').html('输入数值不能小于0！');
                            reheight.select();
                                
              }

                
            })
            reheight.keydown(function(){
              if(rewidth.val() != ''){
                      $('#rectangle-height-validate').html('');
                          
              }
                
            })

            function perimeter(w,h){

                return (w + h)*2
                    
            }

            function area(w,h){

                return w*h
                    
            }





})
