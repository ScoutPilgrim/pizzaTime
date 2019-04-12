$(document).ready(function(){
  $('#additionalTopping').click(function(){
    $('form div.form-row:last').after($('form div.form-row:last').clone());
  });
});
