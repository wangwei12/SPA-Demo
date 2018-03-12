var btn=$('#btn');
var a=9;

$(function(){
  btn.val('agree('+a+'s)');
  btn.attr("disabled","disabled");
  
  var timer=window.setInterval(function(){
    btn.val('agree('+a--+'s)');
    if(a<0){
      window.clearInterval(timer);
      btn.css("background-color","green");
      btn.val('agree');
      btn.removeAttr('disabled');
    }
  },1000)
  btn.click(function(){
    alert('agree!!!!')
  })
});
