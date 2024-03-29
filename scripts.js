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
      $("item").html("");
      $("item").append(
        `<div class="row align-items-center mx-auto">
          <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
            <div class="card">
              <img src="images/thumbnail_4.jpg" class="card-img-top" alt="Video thumbnail"/>
              <div class="card-img-overlay text-center">
                <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
              </div>
              <div class="card-body">
                <h5 class="card-title font-weight-bold">Diagonal Smile</h5>
                <p class="card-text text-muted">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                <div class="creator d-flex align-items-center">
                  <img src="images/profile_1.jpg" alt="Creator of Video" width="30px" class="rounded-circle"/>
                  <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                </div>
                <div class="info pt-3 d-flex justify-content-between">
                  <div class="rating">
                    <img src="images/star_on.png" alt="star on" width="15px"/>
                    <img src="images/star_on.png" alt="star on" width="15px"/>
                    <img src="images/star_on.png" alt="star on" width="15px"/>
                    <img src="images/star_on.png" alt="star on" width="15px"/>
                    <img src="images/star_off.png" alt="star on" width="15px"/>
                  </div>
                  <span class="main-color">8 min</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3 d-none d-sm-flex justify-content-md-start justify-content-lg-center">
            <div class="card">
                <img
                        src="images/thumbnail_3.jpg"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">Sad Smile</h5>
                        <p class="card-text text-muted">
                          Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="images/profile_1.jpg"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_off.png"
                              alt="star on"
                              width="15px"
                            />
                          </div>
                          <span class="main-color">8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 d-none d-lg-flex justify-content-center">
                    <div class="card">
                      <img
                        src="images/thumbnail_1.jpg"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">
                          Natural Smile
                        </h5>
                        <p class="card-text text-muted">
                          Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="images/profile_1.jpg"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_off.png"
                              alt="star on"
                              width="15px"
                            />
                          </div>
                          <span class="main-color">8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 d-none d-lg-flex justify-content-center">
                    <div class="card">
                      <img
                        src="images/thumbnail_2.jpg"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">Happy Smile</h5>
                        <p class="card-text text-muted">
                          Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="images/profile_1.jpg"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_off.png"
                              alt="star on"
                              width="15px"
                            />
                          </div>
                          <span class="main-color">8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
        `);
    },
    error: function(error) {
      console.log(error);
    },
    complete: function() {
      $('.loader').hide();
    }
  });
});