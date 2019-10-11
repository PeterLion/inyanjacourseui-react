$('.chapitercollapse').click(function () {
    var chapiter_id = $(this).attr('data-chapiter');
    $('#Collapse' + chapiter_id).on('shown.bs.collapse', function () {
        alert(chapiter_id);
        $('#collapsebtn' + chapiter_id).find(".fa")
            .removeClass("fa-angle-down")
            .addClass("fa-angle-up");
    });
});