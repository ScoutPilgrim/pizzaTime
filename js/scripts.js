//Pizza class setup and prototypes
class Pizza{
  constructor(sizeStr, toppingArr){
    this.size = sizeStr;
    this.toppings = toppingArr;
    this.toppingsAmt = toppingArr.length;
  }
}


//Front-end logic
$(document).ready(function(){
  $('#additionalTopping').click(function(){
    $('form div.form-row:last').after($('form div.form-row:last').clone());
    $('form div.form-row:last').find('.removeTopping').show();
  });
  $('#pizzaForm').on('click', '.removeBut', function(event){
    console.log('removeBut is being clicked');
    $(this).parent().parent().remove();
  });
});
