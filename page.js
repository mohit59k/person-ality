
$(document).ready(function(){
  $('button').click(function(){
   const name = $('#fname').val();
   $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);
   const b = $('.imgchange');
  });
 });
