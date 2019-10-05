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

  // $(document).mouseup(function(e) {
  //   let container = $('.full-screen-search');

  //   // if the target of the click isn't the container nor a descendant of the container
  //   if (!container.is(e.target) && container.has(e.target).length === 0) 
  //   {
  //       container.parent('#modal-search').removeClass('modal--is-visible');
  //   }
  // });

  // $('.carousel').on('slid.bs.carousel', function() {
  //   $("ol.carousel-indicators li").removeClass("active");
  //   let indicators = $("ol.carousel-indicators li.active").data("slide-to");
  //   $("ol.carousel-indicators").find("[data-slide-to='" + indicators + "']").addClass("active");
  // })

});