
//function showNode (oNode) {
	//var nLeft = 0, nTop = 0;
	//for (
		//var oItNode = oNode;
		//oItNode; nLeft += oItNode.offsetLeft,
		//nTop += oItNode.offsetTop,
		//oItNode = oItNode.offsetParent
	//)
	//document.documentElement.scrollTop = nTop
	//document.documentElement.scrollLeft = nLeft
//}

//function showBookmark (sBookmark, bUseHash) {
	//if (arguments.length === 1 || bUseHash) {
		//location.hash = sBookmark
			//return
	//}
	//var oBookmark = document.querySelector(sBookmark)
	//if (oBookmark) {
		//showNode(oBookmark)
	//}
//}

var showBookmark = (function () {
	var  _useHash,
			 _scrollX,
			 _scrollY,
			 _nodeX,
			 _nodeY,
			 _itFrame,
			 _isBot,
			 _scrollId = -1,
			 _bookMark,
       /*
       * nDuration: the duration in milliseconds of each frame
       * nFrames: number of frames for each scroll
       */
			 nDuration = 400,
			 nFrames = 1

  function _next () {
		if (_itFrame > nFrames) {
			clearInterval(_scrollId)
			_scrollId = -1
			return
		}
    _isBot = true;
    document.documentElement.scrollTop = Math.round(_scrollY + (_nodeY - _scrollY) * _itFrame / nFrames);
    document.documentElement.scrollLeft = Math.round(_scrollX + (_nodeX - _scrollX) * _itFrame / nFrames);
    if (_useHash && _itFrame === nFrames) { location.hash = _bookMark; }
    _itFrame++;
  }

  function _chkOwner () {
    if (_isBot) { _isBot = false; return; }
    if (_scrollId > -1) { clearInterval(_scrollId); _scrollId = -1; }
  }

  if (window.addEventListener) { window.addEventListener("scroll", _chkOwner, false); }
  else if (window.attachEvent) { window.attachEvent("onscroll", _chkOwner); }

  return function (sBookmark, bUseHash) {
    _scrollY = document.documentElement.scrollTop;
    _scrollX = document.documentElement.scrollLeft;
    _bookMark = sBookmark;
    _useHash = arguments.length === 1 || bUseHash;
    for (
      var nLeft = 0, nTop = 0, oNode = document.querySelector(sBookmark);
      oNode;
      nLeft += oNode.offsetLeft, nTop += oNode.offsetTop, oNode = oNode.offsetParent
    );
    _nodeX = nLeft, _nodeY = nTop, _itFrame = 1;
    if (_scrollId === -1) { _scrollId = setInterval(_next, Math.round(nDuration / nFrames)); }
  };
})();
