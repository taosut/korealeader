jQuery(document).ready(function($) {

    $('.list-group [data-toggle="collapse"]').on('click touchstart', function() {
        let id = $(this).attr('href');
        $(this).parent('.list-group').find('[data-toggle="collapse"]').each(function() {
          let nextId = $(this).attr('href');
          if (id != nextId) {
            $(nextId).removeClass('show');
            $(this).addClass('collapsed');
          }
        });
    });

});