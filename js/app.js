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

  //var ul = document.createElement('ul');
  //ul.id = 'result';
  //var li = document.createElement('li');
  //var second = document.createElement('li');
  //second.className = 'results'
  //var secondText = document.createElement('p');
  //secondText.innerHTML = 'is declared but since there is no value assigned,<br> it\'s value is <b>undefined</b>';
  //li.className = 'results';
  //second.appendChild(secondText);
  //var result = li;
  //var p  = document.createElement('p');
  //p.innerHTML += 'var message;';
  //li.appendChild(p);
  //var main = document.getElementById('main-article');
  //var output = document.getElementsByTagName('p')[1];
  //output.appendChild(ul);
  //ul.appendChild(result);
  //ul.appendChild(second);

//}(jQuery, _));

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

var loop = document.querySelector('.loop')
var forEach = document.querySelector('.forEach')
var map = document.querySelector('.map')
var chain = document.querySelector('.chain')
var filter = document.querySelector('.filter')

var code1 = document.querySelector('.code1')
var code2 = document.querySelector('.code2')
var code3 = document.querySelector('.code3')
var code4 = document.querySelector('.code4')
var code5 = document.querySelector('.code5')


//function getStockSymbols (stocks) {
	//var symbols = []
	//var i
	//var stock

	//for (i = 0; i < stocks.length; i += 1) {
		//stock = stocks[i]
		//symbols.push(stock.symbol)
	//}

	//return symbols
//}

code1.innerHTML += '<pre>\
function getStockSymbols (stocks) {<br>\
  var symbols = []<br>\
  var i<br>\
  var stock<br><br>\
for (i = 0; i < stocks.length; i += 1) {<br>\
    stock = stocks[i]<br>\
    symbols.push(stock.symbol)<br>\
  }<br><br>\
  return symbols<br>\
}<br><br>\
var symbols = getStockSymbols([<br>\
  { symbol: "XFS", price: 240.34, volume: 294905 },<br>\
  { symbol: "TNZ", price: 332.77, volume: 275 },<br>\
  { symbol: "JXJ", price: 120.33, volume: 5324 }<br>\
])\
</pre>'

//function getStockSymbols (stocks) {
	//var symbols = []
/* NOW WITH THE forEACH METHO */
	//stocks.forEach(function (stock) {
		//symbols.push(stock.symbol)
	//})

	//return symbols
//}

code2.innerHTML += '<pre>\
function getStockSymbols (stocks) {<br>\
  var symbols = []<br>\
<br><br>\
  stocks.forEach(function (stock) {<br>\
    symbols.push(stock.symbol)<br>\
  })<br><br>\
  return symbols<br>\
}<br><br>\
var symbols = getStockSymbols([<br>\
  { symbol: "XFS", price: 240.34, volume: 294905 },<br>\
  { symbol: "TNZ", price: 332.77, volume: 275 },<br>\
  { symbol: "JXJ", price: 120.33, volume: 5324 }<br>\
])\
</pre>'


function getStockSymbols (stocks) {
	return stocks.map(function (stock) {
		return stock.symbol
	})
}

var symbols = getStockSymbols([
	{ symbol: 'XFS', price: 240.34, volume: 294905 },
	{ symbol: 'TNZ', price: 332.77, volume: 275 },
	{ symbol: 'JXJ', price: 120.33, volume: 5324 }
])

loop.innerHTML += JSON.stringify(symbols)

forEach.innerHTML += JSON.stringify(symbols)


code3.innerHTML += "<pre><br>\
function getStockSymbols (stocks) {<br>\
  return stocks.map(function (stock) {<br>\
    return stocks.symbol<br>\
  })<br>\
}<br><br>\
var symbols = getStockSymbols([<br>\
  { symbol: 'XFS', price: 240.34, volume: 294905 },<br>\
  { symbol: 'TNZ', price: 332.77, volume: 275 },<br>\
  { symbol: 'JXJ', price: 120.33, volume: 5324 }<br>\
])\
</pre>"

map.innerHTML += JSON.stringify(symbols)

function getStocksOver (stocks, minPrice) {
	return stocks.filter(function (stock) {
		return stock.price >= minPrice
	})
	//var results = []

	//stocks.forEach(function (stock) {
		//if (stock.price >= minPrice) {
			//results.push(stock)
		//}
	//})

	//return results
}

Array.prototype.filter = function (predicate) {
	var results = []

	this.forEach(function (item) {
		if (predicate(item)) {
			results.push(item)
		}
	})

	return results
}

var expensiveStocks = getStocksOver([
	{ symbol: "XFX", price: 240.22, volume: 23423 },
	{ symbol: "TNZ", price: 332.28, volume: 352   },
	{ symbol: "JXJ", price: 120.33, volume: 5394  }
],
150.00)

filter.innerHTML += '<pre><br>\
function getStocksOver (stocks, minPrice) {<br />\
  var results = []<br><br>\
  stocks.forEach(function (stock) {<br>\
    if (stock.price >= minPrice) {<br>\
      results.push(stock)<br>\
   }<br>\
  })<br><br>\
  return results<br>\
}<br><br>\
var expensiveStocks = getStocksOver([<br>\
  { symbol: "XFX", price: 240.22, volume: 23423 },<br>\
  { symbol: "TNZ", price: 332.28, volume: 352   },<br>\
  { symbol: "JXJ", price: 120.33, volume: 5394  }<br>\
],<br>\
150.00)<br><br>\
</pre>'

filter.innerHTML += JSON.stringify(expensiveStocks)

filter.innerHTML += '<br><br>Now let us use the filter method<br>'

filter.innerHTML += '<pre><br>\
function getStocksOver (stocks, minPrice) {<br />\
  return stocks.filter(function (stock)) {<br>\
    return stock.filter.price >= minPrice<br>\
  })<br>\
}<br><br>\
var expensiveStocks = getStocksOver([<br>\
  { symbol: "XFX", price: 240.22, volume: 23423 },<br>\
  { symbol: "TNZ", price: 332.28, volume: 352   },<br>\
  { symbol: "JXJ", price: 120.33, volume: 5394  }<br>\
],<br>\
150.00)<br><br>\
</pre>'

var stocks = [
	{ symbol: "ACC", price: 49.21,  volume: 1749700 },
	{ symbol: "BBF", price: 13.81,  volume: 40100   },
	{ symbol: "XEC", price: 138.27, volume: 943000  }
]

var filteredStockSymbols =
	stocks
		.filter(function (stock) {
			return stock.price >= 40.00
		})
		.map(function (stock) {
			return stock.symbol
		})

filteredStockSymbols.forEach(function (symbol) {
  chain.innerHTML += 'Stocks over $30: ' + symbol + '<br>'
})

filter.innerHTML += JSON.stringify(expensiveStocks)

code5.innerHTML += '<pre><br>\
var stocks = [<br>\
  { symbol: "ACC", price: 49.21,  volume: 1749700 },<br>\
  { symbol: "BBF", price: 13.81,  volume: 40100   },<br>\
  { symbol: "XEC", price: 138.27, volume: 943000  }<br>\
]<br><br>\
var filteredStockSymbols =<br>\
  stocks<br>\
    .filter(function (stock) {<br>\
      return stock.price >= 40.00<br>\
    })<br>\
    .map(function (stock) {<br>\
      return stock.symbol<br>\
		})<br><br>\
filteredStockSymbols.forEach(function (symbol) {<br>\
  chain.innerHTML += "Stocks over $30: " + symbol<br>\
})<br>\
</pre>'
