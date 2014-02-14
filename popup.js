chrome.tabs.getSelected(null, function(tab) {
				chrome.tabs.executeScript(tab.id, {	file: "newpage.js" }, function() {
					chrome.tabs.executeScript(tab.id, {	code: "newPage()" }, function() {
						document.getElementById('msg').innerText = "checkPage ~~";
					});
				});
			});