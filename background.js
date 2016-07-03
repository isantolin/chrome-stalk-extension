// On Chrome Init
chrome.storage.local.get('extension_status', function (result) {

    result_extension_status = result.extension_status;

    if (typeof result_extension_status === 'undefined') {
        result_extension_status = 'On';
    }

    if (result_extension_status === 'On') {
        ruleApplier();

    } else {
        result_extension_status = 'Off';
    }
    changesApplier(result_extension_status);

});

if (typeof chrome.browserAction !== "undefined") {
    chrome.browserAction.onClicked.addListener(function (tab) {

        chrome.storage.local.get('extension_status', function (result) {

            result_extension_status = result.extension_status;

            if (result_extension_status === 'On') {
                result_extension_status = 'Off';
            } else {
                result_extension_status = 'On';
            }

            chrome.windows.getCurrent(function (win) {
                chrome.tabs.getAllInWindow(win.id, function (tabs) {
                    for (i in tabs) {
                        chrome.tabs.reload(tabs[i].id);

                    }
                });
            });
            changesApplier(result_extension_status);
        });
    });
}



chrome.storage.onChanged.addListener(
        function (changes, namespace) {

            if (changes.extension_status.newValue === 'Off') {
            } else if (changes.extension_status.newValue === 'On') {
                ruleApplier();
            }
            changesApplier(changes.extension_status.newValue);
        });