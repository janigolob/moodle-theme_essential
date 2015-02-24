$(function() {
    $("#menu-main").mobileMenu({
        switchWidth: '979',
        prependTo: '#page-header nav .container-fluid',
        topOptionText: 'Menu'
    });

    $('#page-mod-booking-report .paging')
        .insertBefore('#fgroup_id_buttonar')
        .css({"text-align": "right"});
});