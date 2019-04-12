//Pizza class setup and prototypes
class Pizza{
  constructor(sizeStr, toppingMap){
    this.size = sizeStr;
    this.toppings = toppingMap;
    this.toppingsAmt = toppingMap.size;
  }
}

//global variables
let toppingMap = new Map();
let thisSize = 'X-Small';
let idIter = 1;

//Front-end logic
$(document).ready(function(){
  toppingMap.set(1, 'None'); //Setting the non dynamic Topping
  $('#pizzaForm').submit(function(event){
    event.preventDefault();
  });
  $('#pizzaSize').change(function(){
    thisSize = $('#pizzaSize').val();
    console.log('Size changed to ' +thisSize);
  });
  $('#pizzaForm').on('change', '.thisTopping', function(event){

  });
  $('#additionalTopping').click(function(){
    idIter++;
    $('form div.form-row:last').after($('form div.form-row:last').clone());
    $('form div.form-row:last').find('.removeTopping').show();
    $('form div.form-row:last').attr('id', idIter.toString());
    toppingMap.set(idIter, 'None');
    console.log(toppingMap.size);
  });
  $('#pizzaForm').on('click', '.removeBut', function(event){
    var thisId = parseInt($(this).parent().parent().attr('id'));
    console.log(thisId);
    console.log('Deleting topping at id: ' +thisId);
    toppingMap.delete(thisId);
    console.log(toppingMap.size);
    $(this).parent().parent().remove();
  });
});
