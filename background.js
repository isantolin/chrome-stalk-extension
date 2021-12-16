function ruleApplier() {
    document.querySelectorAll("[data-testid=like]").forEach(e => e.remove());
    document.querySelectorAll("[data-testid=placementTracking]").forEach(e => e.remove());
    document.querySelectorAll("[data-testid*='follow']").forEach(e => e.remove());
    document.querySelectorAll("[aria-label='Add Friend']").forEach(e => e.remove());
    document.querySelectorAll("[aria-label='React']").forEach(e => e.remove());

    document.addEventListener('scroll', function () {
        document.querySelectorAll("[data-testid=like]").forEach(e => e.remove());
        document.querySelectorAll("[data-testid=placementTracking]").forEach(e => e.remove());
        document.querySelectorAll("[data-testid*='follow']").forEach(e => e.remove());
        document.querySelectorAll("[aria-label='Add Friend']").forEach(e => e.remove());
        document.querySelectorAll("[aria-label='React']").forEach(e => e.remove());

    });
};

// Initialization
chrome.storage.local.get('extension_status', function (result) {
    result_extension_status = result.extension_status;

    if (typeof result_extension_status === 'undefined') {
        result_extension_status = 'On';
    }

    if (result_extension_status === 'On') {

        console.log(result_extension_status);
        chrome.tabs.query({}, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                console.log(tabs[i].id);
                chrome.scripting.executeScript({
                    target: {tabId: tabs[i].id},
                    func: ruleApplier});
            }
        }
        );

    } else {
        result_extension_status = 'Off';
    }

    chrome.storage.local.set({'extension_status': result_extension_status});
    chrome.action.setBadgeText({text: result_extension_status});
});


// On Icon click Change status
chrome.action.onClicked.addListener(function (tab) {
    chrome.storage.local.get('extension_status', function (result) {

        result_extension_status = result.extension_status;
        console.log(result_extension_status)
        if (result_extension_status === 'On') {
            result_extension_status = 'Off';
            chrome.tabs.query({}, function (tabs) {
                tabs.forEach(function (tabs) {
                    chrome.tabs.reload(tabs.id);
                });
            });
            chrome.storage.local.set({'extension_status': result_extension_status});
            chrome.action.setBadgeText({text: result_extension_status});
        } else {
            result_extension_status = 'On';
            chrome.tabs.query({}, function (tabs) {
                tabs.forEach(function (tabs) {
                    chrome.scripting.executeScript({
                        target: {tabId: tabs.id},
                        func: ruleApplier,
                    });
                });
            });
            chrome.storage.local.set({'extension_status': result_extension_status});
            chrome.action.setBadgeText({text: result_extension_status});

        }

    });
});

// On Update Status
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (result_extension_status === 'On') {
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            func: ruleApplier,
        });

    }
})