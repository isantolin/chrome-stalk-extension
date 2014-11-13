$(document).ready(function () {

    chrome.browserAction.setBadgeText({text: "On"});
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