$(document).ready(function () {
    $('#targetTable').DataTable({
        "paging": false,
        "info": false,
        "order": [[ 3, "desc" ]],
    });
    });

    // $(document).ready(function () {
    //     $('#targetTable').DataTable({
    //         "searching": false,
    //         "paging": false,
    //         "info": false
    //     });
    // });