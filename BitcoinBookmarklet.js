javascript: (function () {
    while(true) {
        /*setTimeout(function () { */
            function Get(yourUrl) {
                var Httpreq = new XMLHttpRequest();
                Httpreq.open("GET",yourUrl,false);
                Httpreq.send(null);
                return Httpreq.responseText;          
            }

            var json_obj = JSON.parse(Get("https://api.coindesk.com/v1/bpi/currentprice.json"));            

            var newTitle = "$" + json_obj.bpi.USD.rate_float + " || €" + json_obj.bpi.EUR.rate_float || Powered by CoinDesk;
            alert(newTitle);
            
            /*
            var updateTitle = { 'title': newTitle };
            chrome.bookmarks.update(bookmarkBar.id, object, null);
            */
        /*}, 60000)*/
    }
})();;
