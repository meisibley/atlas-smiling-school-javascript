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
  $.ajax({
      method: 'GET',
      url: 'https://smileschool-api.hbtn.info/popular-tutorials',
      dataType: 'json',
      success: function(data) {
          $('.loader').hide();
          if (data && data.length > 0) {
              $.each(data, function(index, item){

                  let stars = '';
                      for (let i = 0; i < item.star; i++) {
                          stars += '<img src="images/star_on.png" alt="star on" width="15px"/>';
                      }
                      for (let i = item.star; i < 5; i++) {
                          stars += '<img src="images/star_off.png" alt="star off" width="15px"/>';
                      }

                  let ptCard = '<div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">' +
                  '<div class="card pl-sm-3 pr-sm-3 pl-md-0 pr-md-0">' +
                  '<img src=' + item.thumb_url + ' class="card-img-top" alt="Video thumbnail' + (index + 1) + '"/>' +
                  '<div class="card-img-overlay text-center">' +
                  '<img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>' +
                  '</div>' +
                  '<div class="card-body">' +
                  '<h5 class="card-title font-weight-bold">' + item.title + '</h5>' +
                  '<p class="card-text text-muted">' + item['sub-title'] + '</p>' +
                  '<div class="creator d-flex align-items-center">' +
                  '<img src=' + item.author_pic_url + ' alt="Creator of Video ' + (index + 1) + '" width="30px" class="rounded-circle"/>' +
                  '<h6 class="pl-3 m-0 main-color">' + item['author'] + '</h6>' +
                  '</div>' +
                  '<div class="info pt-3 d-flex justify-content-between">' +
                  '<div class="rating">' + stars + '</div>' +
                  '<span class="main-color">' + item.duration + '</span>'+
                  '</div>' +
                  '</div>' +
                  '</div>' +
                  '</div>';

                  $('.ptCarousel').append(ptCard);
              });

              $('.ptCarousel').slick({
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  autoplay: false,
                  autoplaySpeed: 2000,
                  centerMode: false,
                  responsive: [
                      {
                          breakpoint: 768,
                          settings: {
                              slidesToShow: 2
                          }
                      },
                      {
                          breakpoint: 576,
                          settings: {
                              slidesToShow: 1
                          }
                      }
                  ] 
              });
          }
      },

      error: function(xhr, status, error) {
          console.error(xhr);
          console.error(status + ': ' + error);
          $('.loader').hide();
      }
  });

  /* latest videos */
  $.ajax({
      method: 'GET',
      url: 'https://smileschool-api.hbtn.info/latest-videos',
      dataType: 'json',
      success: function(data) {
          $('.loader').hide();

          if (data && data.length > 0) {

              $.each(data, function(index, item){

                  let stars = '';
                      for (let i = 0; i < item.star; i++) {
                          stars += '<img src="images/star_on.png" alt="star on" width="15px"/>';
                      }
                      for (let i = item.star; i < 5; i++) {
                          stars += '<img src="images/star_off.png" alt="star off" width="15px"/>';
                      }

                  let lvCard = '<div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">' +
                  '<div class="card pl-sm-3 pr-sm-3 pl-md-0 pr-md-0">' +
                  '<img src=' + item.thumb_url + ' class="card-img-top" alt="Video thumbnail' + (index + 1) + '"/>' +
                  '<div class="card-img-overlay text-center">' +
                  '<img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>' +
                  '</div>' +
                  '<div class="card-body">' +
                  '<h5 class="card-title font-weight-bold">' + item.title + '</h5>' +
                  '<p class="card-text text-muted">' + item['sub-title'] + '</p>' +
                  '<div class="creator d-flex align-items-center">' +
                  '<img src=' + item.author_pic_url + ' alt="Creator of Video ' + (index + 1) + '" width="30px" class="rounded-circle"/>' +
                  '<h6 class="pl-3 m-0 main-color">' + item['author'] + '</h6>' +
                  '</div>' +
                  '<div class="info pt-3 d-flex justify-content-between">' +
                  '<div class="rating">' + stars + '</div>' +
                  '<span class="main-color">' + item.duration + '</span>'+
                  '</div>' +
                  '</div>' +
                  '</div>' +
                  '</div>';

                  $('.lvCarousel').append(lvCard);
              });

              $('.lvCarousel .col-lg-3').slice(0, 4).clone().appendTo('.lvCarousel');

              $('.lvCarousel .col-lg-3').slice(0, 4).remove();

              $('.lvCarousel').append($('.lvCarousel .col-lg-3').slice(0, 4).clone());

              $('.lvCarousel').slick({
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  autoplay: false,
                  autoplaySpeed: 2000,
                  centerMode: false,
                  responsive: [
                      {
                          breakpoint: 768,
                          settings: {
                              slidesToShow: 2
                          }
                      },
                      {
                          breakpoint: 576,
                          settings: {
                              slidesToShow: 1
                          }
                      }
                  ] 
              });

          }
      },

      error: function(xhr, status, error) {
          console.error(xhr);
          console.error(status + ': ' + error);
          $('.loader').hide();
      }
  });
});