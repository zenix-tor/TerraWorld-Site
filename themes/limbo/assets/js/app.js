new WOW().init();

$('#server').on('show.bs.modal', function (event) {
    $.request('onRenderServer', {
        data: {
            server_id: $(event.relatedTarget).data('server-id')
        },
        update: {
            server: '.server-modal'
        }
    });
});

$(document).click(function(event) {
    let target = $(event.target);

    let choseServerButton = ('.chose-server-button');
    let servers = $('.servers');

    if (target.closest(choseServerButton).length) {
        choseServerButtonClick();
    } else if (!target.closest(servers).length && !servers.hasClass('d-none')) {
        servers.addClass('d-none');
    }
});

function choseServerButtonClick() {
    let servers = $('.servers');
    if (servers.hasClass('d-none')) {
        servers.removeClass('d-none');
    } else {
        servers.addClass('d-none');
    }
}

function copyToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    $.oc.flashMsg({
        'text': 'Скопировано',
        'class': 'success',
        'interval': 1.5
    })
}
