function deleteClass(time) {


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

function ruleApplier() {
    $(document).ready(function () {
        deleteClass(1000);
    });
    $(document).click(function () {
        deleteClass(500);
    });
    $(document).bind('load', function () {
        deleteClass(10);
    });
    $(window).load(function () {
        deleteClass(1000);
    });
    $(document).scroll(function () {
        deleteClass(10);
    });
    $(document).click(function () {
        deleteClass(10);
    });
}

function changesApplier(value) {
    chrome.storage.local.set({'extension_status': value});
    chrome.browserAction.setBadgeText({text: value});
}