//Pizza class setup and prototypes
class Pizza{
  constructor(sizeStr, toppingMap){
    this.size = sizeStr;
    this.toppings = toppingMap;
    this.toppingsAmt = toppingMap.length;
  }
}

//global variables
let toppingMap = new Map();
let thisSize = 'X-Small';

//Front-end logic
$(document).ready(function(){
  $('#pizzaForm').submit(function(event){
    event.preventDefault();
  });
  $('#pizzaSize').change(function(){
    thisSize = $('#pizzaSize').val();
    console.log('Size chnaged to ' +thisSize);
  });
  $('#pizzaForm').on('change', '.thisTopping', function(event){
    
  });
  $('#additionalTopping').click(function(){
    $('form div.form-row:last').after($('form div.form-row:last').clone());
    $('form div.form-row:last').find('.removeTopping').show();
  });
  $('#pizzaForm').on('click', '.removeBut', function(event){
    console.log('removeBut is being clicked');
    $(this).parent().parent().remove();
  });
});
