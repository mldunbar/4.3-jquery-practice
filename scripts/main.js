(function(){
  'use strict';
});

  $(document).ready(function(){
    $('.subheadings').hide();
  });

$('.headings').click(function(){
  $('.subheadings').slideUp("slow", function(){});
  $(this).next().slideDown("slow", function(){});
});
