/*

    author: Hannah Phillips (github: @hanphps)
    date: 15 Jan. 2023

    log:
        VERSION 0.0.1: Creation

*/

/* Imports */

/* Variables */

/* Functions */
function getArchive(){
    var query = "https://www.archive.today/submit/?url=";
    var currTab = browser.tabs.query({active: true, currentWindow: true})
        .then((tab)=>{return tab[0].url;}, console.log)
        .then((url)=>{
            if (url){
                var newTab = browser.tabs.create({ url: query+url });
            };
        })
    
}

/* Listeners */
browser.browserAction.onClicked.addListener(getArchive);

/* Loaders */
