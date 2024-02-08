document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
        perPage: 1,
        autoplay:true,

    } );
    splide.mount();
  } );

  document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide2', {
        perPage: 3,
        autoplay:true,

    } );
    splide.mount();
  } );