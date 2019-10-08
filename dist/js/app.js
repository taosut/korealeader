jQuery(document).ready(function($) {

  $('.list-group [data-toggle="collapse"]').on('click touchstart', function() {
      let id = $(this).attr('href');
      $(this).addClass('active');
      $(this).parent('.list-group').find('[data-toggle="collapse"]').each(function() {
        let nextId = $(this).attr('href');
        if (id != nextId) {
          $(nextId).removeClass('show');
          $(this).removeClass('active');
        }
      });
  });

  $('[aria-controls="modal-search"]').on('click touchstart', function() {
    $('#modal-search').addClass('modal--is-visible');
  });

  $('.modal__close-btn').on('click touchstart', function() {
    $('#modal-search').removeClass('modal--is-visible');
  });

  $('#introduction-tab a').on('click touchstart', function() {
    let slide = parseInt($(this).attr('data-slide-to'));
    $('#carouselAbout').carousel(slide);
  });

});