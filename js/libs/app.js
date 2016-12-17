// setup responsive menu

$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });
});


// create some elements and append them to the page
;( function ($, _) {

  var ul = document.createElement('ul');
  ul.id = 'result';
  var li = document.createElement('li');
  var second = document.createElement('li');
  second.className = 'results'
  var secondText = document.createElement('p');
  secondText.innerHTML = 'is declared but since there is no value assigned,<br> it\'s value is <b>undefined</b>';
  li.className = 'results';
  second.appendChild(secondText);
  var result = li;
  var p  = document.createElement('p');
  p.innerHTML += 'var message;';
  li.appendChild(p);
  var main = document.getElementById('main-article');
  var output = document.getElementsByTagName('p')[1];
  output.appendChild(ul);
  ul.appendChild(result);
  ul.appendChild(second);

}(jQuery, _));

// set up the event handler
$('a[href^="#"]').on('click', function(e) {
  var target = $( $(this).attr('href')  );

  if( target.length  ) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

// set up the 'to top' event
$(function() {

  $(window).scroll(function() {
    if ( $(this).scrollTop() > 300 ) {
      $('.go-top').fadeIn(300);
    } else {
      $('.go-top').fadeOut(300);
    }
  });

  $('.go-top').on('click', function(e) {
    e.preventDefault();
    $('html').velocity('scroll', {
        duration: 700,
        easing: 'swing'
    });
  });

});

  // MomentJS date and time function
  var datetime = null,
        date = null;

  // this is the function that updates the time
  var update = function () {
    // add a Date object to our date variable
    date = moment(new Date());
    // set the datetime variable with jQuery's html to update the DOM with
    // our new formatted date
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
  };

    // add the formatted date to the page
    // using jQuery to target a DOM element
    // with an ID of 'datetime'
    datetime = $('#datetime');
    // execute our update function
    update();
    // call our update function every
    // second
    setInterval(update, 1000);

