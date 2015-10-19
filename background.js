chrome.storage.local.get('extension_status', function (result) {

    result_extension_status = result.extension_status;

    if (typeof result_extension_status === 'undefined') {
        result_extension_status = 'On';

    }

    if (result_extension_status === 'On') {

        $(document).ready(function () {
            deleteclass(1000);
        });
        $(document).click(function () {
            deleteclass(500);
        });
        $(document).bind('load', function () {
            deleteclass(10);
        });
        $(window).load(function () {
            deleteclass(1000);
        });
        $(document).scroll(function () {
            deleteclass(10);
        });
        $(document).click(function () {
            deleteclass(10);
        });
    }

    chrome.browserAction.setBadgeText({text: result_extension_status});

});

chrome.browserAction.onClicked.addListener(function (tab) {

    chrome.storage.local.get('extension_status', function (result) {

        result_extension_status = result.extension_status;

        if (result_extension_status === 'On') {
            result_extension_status = 'Off';
        } else {
            result_extension_status = 'On';
        }

        chrome.storage.local.set({'extension_status': result_extension_status});
        chrome.browserAction.setBadgeText({text: result_extension_status});

        chrome.browserAction.onClicked.addListener(function (curtab)
        {
            // get the current window
            chrome.windows.getCurrent(function (win)
            {
                // get an array of the tabs in the window
                chrome.tabs.getAllInWindow(win.id, function (tabs)
                {
                    for (i in tabs) // loop over the tabs
                    {
                        chrome.tabs.reload(tabs[i].id);

                    }
                });
            });
        });


    });
});

chrome.storage.onChanged.addListener(
        function (changes, namespace) {

            if (changes.extension_status.newValue === 'Off') {
                console.log(changes);
            }
            else if (changes.extension_status.newValue === 'On') {
                console.log(changes);
                $(document).ready(function () {
                    deleteclass(1000);
                });
                $(document).click(function () {
                    deleteclass(500);
                });
                $(document).bind('load', function () {
                    deleteclass(10);
                });
                $(window).load(function () {
                    deleteclass(1000);
                });
                $(document).scroll(function () {
                    deleteclass(10);
                });
                $(document).click(function () {
                    deleteclass(10);
                });
            }
        });