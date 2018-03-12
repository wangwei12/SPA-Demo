var range=$('#range');
var age=$('#age');


$(function(){
  age.html(range.val())
  
  range.change(function(){
    age.html(range.val())
  });
})
