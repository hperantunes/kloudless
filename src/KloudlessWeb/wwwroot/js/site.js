$(function () {
    var accountId,
        service;

    $(".external").click(function () {
        if (accountId) {
            saveFile();
        }
    });

    $.get(
        "/api/kloudless/appid"
    )
    .done(function (data) {
        console.log("AppId: " + data);
        Kloudless.authenticator(
            $(".external"),
            { 'app_id': data },
            function (err, result) {
                if (err) {
                    $(".status").text("An error occurred! (" + err + ")");
                    return;
                }
                accountId = result.id;
                console.log("AccountId: " + accountId);

                service = result.service;
                Kloudless.stop($(".external"));
                saveFile();
            }
        );
    });

    function saveFile() {
        $(".status").text("Saving...");

        var projectId = $('.project').val();
        var folderId = $('.folder').val();
        var fileId = $('.file').val();
        var jqXHR = $.post(
            "/api/kloudless/upload/" + accountId + "/" + fileId)
            .done(function (data, status, jqXHR) {
                $(".status").text("Done! (" + status + ")");
            })
            .fail(function () {
                $(".status").text("An error occurred!");
            });
    }
});