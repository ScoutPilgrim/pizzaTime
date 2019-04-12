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
  $('#pizzaForm').submit(function(event){
    event.preventDefault();
  });
  $('#pizzaSize').change(function(){
    thisSize = $('#pizzaSize').val();
    console.log('Size changed to ' +thisSize);
  });
  $('#pizzaForm').on('change', '.thisTopping', function(event){
    thisKey = parseInt($(this).attr('id'));
    console.log(thisKey);
    if($(this).val() === 'None'){
      toppingMap.delete(thisKey);
      console.log('User decided None for this topping, deleting key at '+thisKey);
      console.log('Size of Map is now: ' +toppingMap.size);
      console.log(toppingMap);
      return;
    }
    toppingMap.set(thisKey, $(this).val());
    console.log('Inserted ' +toppingMap.get(thisKey)+ ' into map at key: ' +thisKey+ '!');
  });
  $('#additionalTopping').click(function(){
    idIter++;
    $('form div.form-row:last').after($('form div.form-row:last').clone());
    $('form div.form-row:last').find('.removeTopping').show();
    $('form div.form-row:last').find('.thisTopping').attr('id', idIter.toString());
    // toppingMap.set(idIter, 'None');
    // console.log(toppingMap.size);
  });
  $('#pizzaForm').on('click', '.removeBut', function(event){
    var thisId = parseInt($(this).parent().prev().find('.thisTopping').attr('id'));
    console.log(thisId);
    console.log('Deleting topping at id: ' +thisId);
    toppingMap.delete(thisId);
    console.log(toppingMap.size);
    $(this).parent().parent().remove();
  });
});
