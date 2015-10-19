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

function ruleapplier() {
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