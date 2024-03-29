$(document).ready(function() {
  $('.loader').show();
  /* quotes */
  $.ajax({
    method: 'GET',
    url: 'https://smileschool-api.hbtn.info/quotes',
    dataType: 'json',
    jsonp: false,
    cache: false,
    success: function(quoteData) {
      // carousel 1
      $("#item1").html("");
      $("#item1").append(
        `<div class="row align-items-center justify-content-center" id="item1">
					<div class="col-3 col-md-2 mx-auto">
						<img class="rounded-circle" id ="IDpic1" src="${quoteData[0].pic_url}" height="160" width="160"
							alt="First slide">
					</div>
					<div class="col-md-5 mx-auto">
						<div class="card-body">
							<h1 class="lead text-white" id="IDtext1">${quoteData[0].text}</h1>
							<h5 class="text-white font-weight-bold" id="IDname1">${quoteData[0].name}</h5>
							<p class="text-white font-italic" id="IDtitle1">${quoteData[0].title}</p>
						</div>
					</div>
			  </div>`);
      // carousel 2
      $("#item2").html("");
      $("#item2").append(
        `<div class="row align-items-center justify-content-center" id="item2">
					<div class="col-3 col-md-2 mx-auto">
						<img class="rounded-circle" id ="IDpic2" src="${quoteData[1].pic_url}" height="160" width="160"
							alt="First slide">
					</div>
					<div class="col-md-5 mx-auto">
						<div class="card-body">
							<h1 class="lead text-white" id="IDtext2">${quoteData[1].text}</h1>
							<h5 class="text-white font-weight-bold" id="IDname2">${quoteData[1].name}</h5>
							<p class="text-white font-italic" id="IDtitle2">${quoteData[1].title}</p>
						</div>
					</div>
			  </div>`);
    },
    error: function(error) {
      console.log(error);
    },
    complete: function() {
      $('.loader').hide();
    }
  });

  /* popular tutorials */
  $.ajax({
    method: 'GET',
    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
    dataType: 'json',
    jsonp: false,
    cache: false,
    success: function(tutorData) {
      $("#itemCard").html("");
      if (tutorData) {
        $.each(tutorData, function(tutorItem) {
        $("#itemCard").append(
          `<div class="row align-items-center mx-auto" class="itemCards">
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
            <div class="card">
              <img src="${tutorItem['thumb_url']}" class="card-img-top" alt="Video thumbnail"/>
              <div class="card-img-overlay text-center">
                <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
              </div>
              <div class="card-body">
                <h5 class="card-title font-weight-bold">${tutorItem.title}</h5>
                <p class="card-text text-muted">${tutorItem['sub-title']}</p>
                <div class="creator d-flex align-items-center">
                  <img src="${tutorItem['author_pic_url']}" alt="Creator of Video" width="30px" class="rounded-circle"/>
                  <h6 class="pl-3 m-0 main-color">${tutorItem['author']}</h6>
                </div>
                <div class="info pt-3 d-flex justify-content-between">
                  <div class="rating">${getStars(tutorItem.star)}</div>
                  <span class="main-color">${tutorItem.duration}</span>
                </div>
              </div>
            </div>
          </div>
        `);
        });
        $("#itemCard").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          centerMode: false,
          infinite: true,
          responsive: [{breakpoint: 768, settings: {slidesToShow: 2}}, {breakpoint: 576, settings: {slidesToShow: 1}}]
        });
      }
    },
    error: function(error) {
      console.log(error);
    },
    complete: function() {
      $('.loader').hide();
    }
  });
  function getStars(stars) {
    let starLine = '';
    for (let i = 0; i < stars; i++) {
      starLine += '<img src="images/star_on.png" alt="star on" width="15px"/>'; 
    }
    for (let j = stars; j < 5; j++) {
      starLine += '<img src="images/star_off.png" alt="star off" width="15px"/>';
    }
    return starLine;
  }
});