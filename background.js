chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
            if (request.method == "RedirectServer")
                sendResponse({status: localStorage["prefix"]});
            else
                sendResponse({});
        });