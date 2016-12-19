/* GETTING HANDLES TO DOM ELEMENTS */
var loop    = document.querySelector('.loop')
var forEach = document.querySelector('.forEach')
var map     = document.querySelector('.map')
var chain   = document.querySelector('.chain')
var filter  = document.querySelector('.filter')
var concat  = document.querySelector('.concat')
var concat2 = document.querySelector('.concat2')
var concat3 = document.querySelector('.concat3')
var observ  = document.querySelector('.observ')
var observ2 = document.querySelector('.observ2')
var mapOb   = document.querySelector('.mapOb')
var mapObserv = document.querySelector('mapObserv')

var code1 = document.querySelector('.code1')
var code2 = document.querySelector('.code2')
var code3 = document.querySelector('.code3')
var code4 = document.querySelector('.code4')
var code5 = document.querySelector('.code5')
var code6 = document.querySelector('.code6')
var code7 = document.querySelector('.code7')
var code8 = document.querySelector('.code8')
var code9 = document.querySelector('.code9')
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


var exchanges = [
	[
		{ symbol: 'XFX', price: 240.22, volume: 23434 },
		{ symbol: 'TNZ', price: 333.27, volume: 237   }
	],
	[
		{ symbol: 'JXJ', price: 120.33, volume: 5342  },
		{ symbol: 'NYN', price: 88.46 , volume: 98233 }
	]
]

exchanges.forEach(function (exchange) {
	exchange.forEach(function (stock) {
		concat.innerHTML += JSON.stringify(stock)
	})
})

Array.prototype.concatAll = function () {
	var results = []

	this.forEach(function (subArray) {
		subArray.forEach(function (item) {
			results.push(item)
		})
	})

	return results
}

var stocks = exchanges.concatAll()

stocks.forEach(function (stock) {
	concat2.innerHTML += JSON.stringify(stock)
})


/* USING OBSERVABLES with RX.JS */
var Observable = Rx.Observable
var button = document.getElementById('button')

/*var handler = function (e) {
	console.log('clicked')
	observ.innerHTML += 'Clicked!<br />'
	button.removeEventListener('click', handler)
}

button.addEventListener('click', handler)
*/

/* WE DO THIS, WHEN IT'S ASYNCHRONOUS */
var clicks = Observable.fromEvent(button, 'click')

var subscription =
	clicks.forEach(
		function onNext (e) {
			console.log("I've been clicked!");
			observ2.innerHTML += 'clicked!<br />'
			subscription.dispose()
		},
		function onError (error) {
			console.log('ERROR!')
		},
		function onCompleted () {
			console.log('done')
			throw 'error'
		})


/* WE DO THIS, WHEN IT'S SYNCHRONOUS */
try {
	var nums = [1,2,3]
	nums.forEach(function (i) {
		console.log(i)
	})
} catch (e) {
	console.log('ERROR!')
}

var nums2 = ['four','five','six','seven','eight','nine']
nums2.forEach(function (i) {
	console.log(i)
})

var btn2 = document.getElementById('button2')
/* WE DO THIS, WHEN IT'S ASYNCHRONOUS */
var clicks = Observable.fromEvent(btn2, 'click')

var points =
	clicks.map(function(e) {
		return { x: e.clientX, y: e.clientY }
	})

var subscription =
	points.forEach(
		function onNext (point) {
			console.log('clicked: ' + JSON.stringify(point))
			mapOb.innerHTML += 'clicked: ' +JSON.stringify(point)+ '<br>'
			subscription.dispose()
		},
		function onError (error) {
			console.log('ERROR!')
		},
		function onCompleted () {
			console.log('done')
			throw 'error'
		})

var exchanges = [
	{
		name: 'NYSE',
		stocks: [
			{ symbol: "APPL", price: 115.97, vol: 34000000 },
			{ symbol: "JPM" , price: 84.89 , vol: 23008520 },
			{ symbol: "ORCL", price: 39.10 , vol: 46224181 }
		]
	},
	{
		name: 'NIKKEI',
		stocks: [
			{ symbol: "TMC", price: 60.91, vol: 6668400 },
			{ symbol: "SNE", price: 35.85, vol: 2974900 },
			{ symbol: "HMC", price: 30.12, vol: 3654600 }
		]
	},
	{
		name: 'HSI',
		stocks: [
			{ symbol: "PTR", price: 76.15, vol: 104859834 },
			{ symbol: "HKG", price: 13.80, vol: 8154051   },
			{ symbol: "LFC", price: 20.15, vol: 47439861 }
		]
	}
]

var names =
	exchanges
	.map(function(name) {
		return name
	})

names.forEach(function (stocks) {
	console.log(name)
	concat3.innerHTML += 'Stock exchange: ' + stocks.name + '<br>'
})

var stocks =
	exchanges
		.map(function(exchange) {
			return exchange.stocks
				.filter(function (stock) {
					return stock.price >= 50.00
				})
		})
		.concatAll()

stocks.forEach(function(stock) {
	console.log(JSON.stringify(stock))
	concat3.innerHTML += '<br>' + JSON.stringify(stock)
})

/* DRAG & DROP */
var parent = document.getElementById('parent')
var widget = document.getElementById('widget')

var mouseDowns			 = Observable.fromEvent(widget, 'mousedown')
var parentMouseMoves = Observable.fromEvent(parent, 'mousemove')
var parentMouseUps   = Observable.fromEvent(parent, 'mouseup')

var drags =
	mouseDowns
		.map(function (e) {
			return parentMouseMoves
				.takeUntil(parentMouseUps)
		})
		.concatAll()

drags.forEach(function (e) {
	widget.style.left  = e.clientX + 'px'
	widget.style.top	 = e.clientY + 'px'
})


