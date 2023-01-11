$(document).ready(function() {
    $(".schedule").change(function() {
        $("input[name='checkin'").val();
        const start = moment($("input[name='checkin'").val());
        const end = moment($("input[name='checkout'").val());
        const days = moment.duration(end.diff(start)).asDays();
        const numAdults = $("select[name='adults']").val();
        const cost = days * numAdults * 150;
        if (!isNaN(days)) $("input[name='days']").attr("value", days);
        if (!isNaN(cost)) $("input[name='cost']").attr("value", cost);
    });

    $("button[type='reset']").click(function() {
        $("input[name='days']").removeAttr("value");
        $("input[name='cost']").removeAttr("value");
    });
});