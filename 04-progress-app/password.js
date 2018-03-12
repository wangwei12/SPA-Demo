
var n=0;

var timeout=0;

var pro=$('#LordPro');
var sta=$('#btnStart');
var sto=$('#btnStop');
var res=$('#btnReset');
$(function(){
  sta.click(function(){
    timeout=window.setInterval(function(){
      
      pro.attr('value',n++);
    },10);
  })

  sto.click(function(){
    window.clearInterval(timeout);
    timeout=0;
  })
  res.click(function(){
    pro.attr('value',0);
  })
  })
