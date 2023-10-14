$.request('onGetComponents', {
    success: function (components) {
        if (components) {
            for (let component in components) {
                $.request(component + '::onRender');
            }
        }
    }
});

$(document).on('ajaxSetup', function (event, context) {
    context.options.beforeSend = function () {
        let loadingIndicator = $('.stripe-loading-indicator');
        if (loadingIndicator.hasClass('loaded')) {
            loadingIndicator.removeClass('loaded');
        }

        let body = $('body');
        if (!body.hasClass('oc-loading')) {
            body.addClass('oc-loading');
        }
    }

    context.options.complete = function (data) {
        let loadingIndicator = $('.stripe-loading-indicator');
        if (!loadingIndicator.hasClass('loaded')) {
            loadingIndicator.addClass('loaded');
        }

        let body = $('body');
        if (body.hasClass('oc-loading')) {
            body.removeClass('oc-loading');
        }
    }
});
