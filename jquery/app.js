//global variables
var compareCount = 0;
var correctCompares = 0;
var correctClicks = [];
var errorClicks = [];
var fixClicks = [];
var clickCount = [];
var startTime;
var endTime;
var clickTime = [];
var product;
var results = [];
//
// function checkCompareCount(){
//   var compareCount = $(".compare-product").css('display', 'flex').length;
//   console.log(compareCount);
//   return compareCount;
// }

function correctClick($time, $button){
  var n = correctClicks.length;
  console.log(n);
  correctClick[$time] = $button;
  console.log(correctClicks);
  x = clickCount.length;
  clickCount[$time] = 'correct';
  console.log(clickCount);
  return;
}
function errorClick($time, $button){
  var n = errorClicks.length;
  console.log(n);
  errorClicks[$time] = $button;
  console.log(errorClicks);
  x = clickCount.length;
  clickCount[$time] = 'error';
  console.log(clickCount);
  return;
}
function fixClick($time, $button){
  var n = fixClicks.length;
  console.log(n);
  fixClicks[$time] = $button;
  console.log(fixClicks);
  x = clickCount.length;
  clickCount[$time] = 'correct';
  console.log(clickCount);
  return;
}

function compareList($a, $time){
  console.log($a);
  console.log($time)
  switch($a) {
  case '1':
    if (!$('#product1').is(':visible')) {
      console.log('product1');
      $('#product1').css('display', 'flex');
      compareCount++;
      correctCompares++;
      correctClick($time, 'compareButton1');
      console.log(compareCount);
    }else{
      console.log('making product1 hidden');
      $('#product1').css('display', 'none');
      compareCount--;
      correctCompares--;
      errorClick($time, 'compareButton1');
      console.log(compareCount);
    }
    break;
  case '2':
    if (!$('#product2').is(':visible')) {
      console.log('making product2 visible');
      $('#product2').css('display', 'flex');
      compareCount++;
      errorClick($time, 'compareButton2');
    }else{
      console.log('making product2 hidden');
      $('#product2').css('display', 'none');
      compareCount--;
      fixClick($time, 'compareButton2');
    }
    break;
  case '3':
    if (!$('#product3').is(':visible')) {
      console.log('product3');
      $('#product3').css('display', 'flex');
      compareCount++;
      errorClick($time, 'compareButton3');
    }else{
      console.log('making product3 hidden');
      $('#product3').css('display', 'none');
      compareCount--;
      fixClick($time, 'compareButton3');
    }
    case '4':
      if (!$('#product4').is(':visible')) {
        console.log('product4');
        $('#product4').css('display', 'flex');
        compareCount++;
        correctCompares++;
        correctClick($time, 'compareButton4');
      }else{
        console.log('making product4 hidden');
        $('#product4').css('display', 'none');
        compareCount--;
        correctCompares--;
        errorClick($time, 'compareButton4');
      }
    break;
    case '5':
      if (!$('#product5').is(':visible')) {
        console.log('product5');
        $('#product5').css('display', 'flex');
        compareCount++;
        errorClick($time, 'compareButton5');
      }else{
        console.log('making product5 hidden');
        $('#product5').css('display', 'none');
        compareCount--;
        fixClick($time, 'compareButton5');
      }
      case '6':
        if (!$('#product6').is(':visible')) {
          console.log('product6');
          $('#product6').css('display', 'flex');
          compareCount++;
          correctCompares++;
          correctClick($time, 'compareButton6');
        }else{
          console.log('making product6 hidden');
          $('#product6').css('display', 'none');
          compareCount--;
          correctCompares--;
          errorClick($time, 'compareButton6');
        }
    // code block
  }
  checkCompareCount(compareCount)
  return compareCount;
}

function checkCompareCount(compareCount){
   compareCount
  console.log(compareCount);
  $('.compareCount').text(''+compareCount+'' );
  if (!compareCount > 0){
    $('.compare-overlay').css('display', 'none');
  }
  return compareCount;
}
function getTime(){
  var dt = new Date();
  time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ':' +dt.getMilliseconds();;
  console.log(time);
  return time;
}
function checkClick(product){
  console.log($a);
  switch($a) {
  case '1':
    if($('div#product1').hasClass('inactive')){
      var n = correctClick.length;
      console.log(n);
      correctClick[n] = getTime();
      console.log(correctClick[n]);
    }else{
      var n = errorClick.length;
      console.log(n);
      errorClick[n] = getTime();
      console.log(errorClick[n]);
    }
    x = clickCount.length;
    clickCount[x , 'product1CompareButton'] = getTime();
    console.log(clickCount);
    break;
  case '2':
    if($('div#product2').hasClass('active')){
      var n = correctClick.length;
      console.log(n);
      correctClick[n] = getTime();
      console.log(correctClick[n]);
    }else{
      var n = errorClick.length;
      console.log(n);
      errorClick[n] = getTime();
      console.log(errorClick[n]);
    }
    x = clickCount.length;
    clickCount[x] = getTime();
    console.log(clickCount);
    break;
  case '3':
    if($('div#product1').hasClass('active')){
      var n = correctClick.length;
      console.log(n);
      correctClick[n] = getTime();
      console.log(correctClick[n]);
    }else{
      var n = errorClick.length;
      console.log(n);
      errorClick[n] = getTime();
      console.log(errorClick[n]);
    }
    x = clickCount.length;
    clickCount[x] = getTime();
    console.log(clickCount);
    break;
    // code block
  }
  return;
}

function removeCompare($a, $time){
  console.log($a);
  switch($a) {
  case '1':
      console.log('making product1 hidden');
      $('#product1').css('display', 'none');
      var n = correctClick.length;
      console.log(n);
      correctClick[n] = getTime();
      console.log(correctClick[n]);
      x = clickCount.length;
      clickCount[x] = getTime();
      console.log(clickCount);
      compareCount--;
      correctCompares--;
      errorClick($time, 'removeButton1')
    break;
  case '2':
    console.log('making product1 hidden');
    $('#product1').css('display', 'none');
    var n = correctClick.length;
    console.log(n);
    correctClick[n] = getTime();
    console.log(correctClick[n]);
    x = clickCount.length;
    clickCount[x] = getTime();
    console.log(clickCount);
    compareCount--;
    fixClick($time, 'removeButton2')
    break;
  case '3':
    console.log('making product1 hidden');
    $('#product3').css('display', 'none');
    var n = correctClick.length;
    console.log(n);
    correctClick[n] = getTime();
    console.log(correctClick[n]);
    x = clickCount.length;
    clickCount[x] = getTime();
    console.log(clickCount);
    compareCount--;
    fixClick($time, 'removeButton2')
    break;
    case '4':
      console.log('making product1 hidden');
      $('#product4').css('display', 'none');
      var n = correctClick.length;
      console.log(n);
      correctClick[n] = getTime();
      console.log(correctClick[n]);
      x = clickCount.length;
      clickCount[x] = getTime();
      console.log(clickCount);
      compareCount--;
      correctcompares--;
      errorClick($time, 'removeButton1')
      break;
    case '5':
      console.log('making product1 hidden');
      $('#product5').css('display', 'none');
      var n = correctClick.length;
      console.log(n);
      correctClick[n] = getTime();
      console.log(correctClick[n]);
      x = clickCount.length;
      clickCount[x] = getTime();
      console.log(clickCount);
      compareCount--;
      fixClick($time, 'removeButton1')
      break;
    case '6':
      console.log('making product1 hidden');
      $('#product6').css('display', 'none');
      var n = correctClick.length;
      console.log(n);
      correctClick[n] = getTime();
      console.log(correctClick[n]);
      x = clickCount.length;
      clickCount[x] = getTime();
      console.log(clickCount);
      compareCount--;
      correctcompares--;
      errorClick($time, 'removeButton1')
      break;
    // code block
  }

  return compareCount;
}



$(document).ready(function() {
    startTime = getTime();
    console.log(startTime);
    $( ".button" ).click(function() {
      product = $(this).siblings("input[type=hidden]").val();
      time = getTime();
      if($(this).hasClass('inactive')){
        $(this).removeClass('inactive');
        $(this).addClass('active');

      }else if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).addClass('inactive');
      }
     //  console.log(checkCompareCount());
      if (!$('.compare-overlay').is(':visible')) {
        console.log('show compare');
        $('.compare-overlay').css('display', 'flex');
      }
      // }else if(compareCount == 0){
      //   console.log('hide compare');
      //   $('.compare-overlay').css('display', 'none');
      // }
      var x = compareList(product, time);
      checkCompareCount(x);

    });
    $( ".remove" ).click(function() {
      product = $(this).siblings("input[type=hidden]").val();
      time = getTime();
      removeCompare(product, time);
      checkCompareCount();
    });
    $("#compareAll").click(function() {
      if(correctCompares == 3){
        $("#main").css('display', 'none');
        $('.compare-overlay').css('display', 'none');
        $("#main2").css('display', 'flex');
        $time = getTime();
        errorClick($time, 'compareAll')
      }else {
        alert('You are trying to select the wrong Laptops!   Please try again!');
      }
      return;
    });
    $(".buyButton").click(function(){
      product = $(this).siblings("input[type=hidden]").val();
      if (product == 6) {
        //move to next pageHref
        results['allClicks' , clickCount];
        results['correctClicks' , correctClicks];
        results['errorClicks' , errorClicks];
        results['fixClicks' , fixClicks];
        results['startime', startTime];
        results['endtime', endTime];

        return;

        console.log(results);
      }else {
        alert('Wrong Laptop! Please compare the Laptops below and try again!');
      }
    });
});
