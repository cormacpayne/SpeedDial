document.addEventListener('DOMContentLoaded', function() {

    var shortcutText = document.getElementById('shortcut');

    shortcutText,addEventListener('keyup', function(event) {
        var shortcut = document.getElementById('shortcut').value;
        if (event.keyCode == 13 && shortcut.match(/\S/)) {            
            chrome.storage.sync.get(shortcut, function(data) {
                var site = data[shortcut]
                chrome.tabs.create({"url":site, "active":true}, function(tab) {
                    
                });
            }); 
        }
    }, false);
    
    var siteShortcutText = document.getElementById('siteShortcut');

    siteShortcutText.addEventListener('keyup', function(event) {
        if (event.keyCode == 13) {
            var site = document.getElementById('siteShortcut').value;
            var shortcut = document.getElementById('newShortcut').value;

            var ob = {};
            ob[shortcut] = site;

            chrome.storage.sync.set(ob, function() {
                
            });

            document.getElementById('newShortcut').value = "";
            document.getElementById('siteShortcut').value = "";            
        }
    }, false);

    var viewShortcutsButton = document.getElementById('viewShortcuts');

    viewShortcutsButton.addEventListener('click', function() {
        chrome.storage.sync.get(null, function(data){
            var res = "";
            for (var key in data) {
                res += key + ": " + data[key] + "\n";
            }
            alert(res);
        });
    }, false);

    var removedShortcutText = document.getElementById('removedShortcut');

    removedShortcutText.addEventListener('keyup', function(event) {
        var shortcut = document.getElementById('removedShortcut').value;
        if (event.keyCode == 13 && shortcut.match(/\S/)) {
            chrome.storage.sync.remove(shortcut, function() {
                
            });
            document.getElementById('removedShortcut').value = "";
        }
    }, false);
}, false);