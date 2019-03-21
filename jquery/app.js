//global variables
var compareCount = 0;
//
// function checkCompareCount(){
//   var compareCount = $(".compare-product").css('display', 'flex').length;
//   console.log(compareCount);
//   return compareCount;
// }
function compareList($a){
  console.log($a);
  switch($a) {
  case '1':
    if (!$('#product1').is(':visible')) {
      console.log('product1');
      $('#product1').css('display', 'flex');
    }
    break;
  case '2':
    if (!$('#product2').is(':visible')) {
      console.log('product2');
      $('#product2').css('display', 'flex');
    }
    break;
  case '3':
    if (!$('#product3').is(':visible')) {
      console.log('product3');
      $('#product3').css('display', 'flex');
    }
    break;
    // code block
  }
  return;
}

$(document).ready(function() {

$( ".button" ).click(function() {
  var product = $(this).siblings("input[type=hidden]").val();
  if($(this).hasClass('inactive')){
    $(this).removeClass('inactive');
    $(this).addClass('active');
  }else if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).addClass('inactive');
  }
//  console.log(checkCompareCount());
  if (!$('.compare-overlay').is(':visible')) {
    console.log('true');
    $('.compare-overlay').css('display', 'flex');
  }
  compareList(product);

});

});
