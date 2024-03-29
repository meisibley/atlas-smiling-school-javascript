$(document).ready(function() {
  $('.loader').show();
  /* quotes */
  $.ajax({
      method: 'GET',
      url: 'https://smileschool-api.hbtn.info/quotes',
      dataType: 'json',
      success: function(quoteData) {
          $('.loader').hide();
          if (quoteData) {
              $.each(quoteData, function(index, quoteItem){
                  $('.quoteCarousel').append(
                    `<div class="row mx-auto align-items-center">
                      <div class="col-12 col-sm-4 col-lg-2 offset-lg-1 text-center">
                      <img class="img-fluid d-block align-self-center rounded-circle ml-sm-2 mx-auto mx-sm-0" src="${quoteItem.pic_url}" style="width: 160px !Important;" alt="Carousel Pic ' + (index + 1) + '">
                      </div>
                      <div class="col-12 col-sm-7  col-lg-9 offset-lg-0">
                        <div class="quote-text">
                        <p class="text-white">${quoteItem.text}</p>
                        <h4 class="text-white font-weight-bold">${quoteItem.name}</h4>
                        <span class="text-white">${quoteItem.title}</span>
                      </div>
                    </div>`
                  );
              });

              $('.quoteCarousel').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: false,
                  autoplaySpeed: 2000,
                  centerMode: false
              });
          }
      },

      error: function(xhr, status, error) {
        console.error(xhr);
        console.error(status + ': ' + error);
        $('.loader').hide();
      }
  });

  /* popular tutorials */
  

  /* latest videos */
  
});