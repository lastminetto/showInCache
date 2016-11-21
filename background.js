chrome.browserAction.onClicked.addListener(function(tab){
	if(tab.url.indexOf("webcache.googleusercontent") == -1){
		var newUrl = "http://webcache.googleusercontent.com/search?q=cache:" + tab.url;
		chrome.tabs.update(tab.id, {url: newUrl});
	}
});