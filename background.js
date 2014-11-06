$(document).ready(function () {

    chrome.browserAction.setBadgeText({text: "On"});
    deleteclass(1000);
});


$(document).click(function () {
    deleteclass(1000);
});

$(document).bind('load', function () {
    deleteclass(1000);
});

$(window).load(function () {
    deleteclass(1000);
});

$(document).scroll(function () {
    deleteclass(1000);
});


$(document).click(function () {
    deleteclass(1000);
});

function deleteclass(time) {


    setTimeout(function () {

        if ($(".UFILikeLink").length > 0) {
            $('.UFILikeLink').remove();
        }

// Actualizaciones

        if ($(".follow-button").length > 0) {
            $('.follow-button').remove();
        }

        if ($(".ProfileTweet-action.ProfileTweet-action--favorite.js-toggleState").length > 0) {
            $('.ProfileTweet-action.ProfileTweet-action--favorite.js-toggleState').remove();
        }

        if ($(".FriendButton").length > 0) {
            $('.FriendButton').remove();
        }


    }, time);


}
