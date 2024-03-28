window.onload = function run() {
  getQuotes();
}

function getQuotes() {
  $('.loader').show();
  $.ajax({
    type: 'GET',
    url: 'https://smileschool-api.hbtn.info/quotes',
    dataType: 'json',
    jsonp: false,
    cache: false,
    success: function(quoteData) {
      /* carousel 1 */
      $("#item1").html("");
      $("#item1").append(
        `<div class="row align-items-center justify-content-center" id="item1">
					<div class="col-3 col-md-2 mr-5">
						<img class="rounded-circle" id ="IDpic1" src="${quoteData[0].pic_url}" height="160" width="160"
							alt="First slide">
					</div>
					<div class="col-md-5 pr-4 mr-4">
						<div class="card-body">
							<h1 class="lead text-white" id="IDtext1">${quoteData[0].text}</h1>
							<h5 class="text-white font-weight-bold" id="IDname1">${quoteData[0].name}</h5>
							<p class="text-white font-italic" id="IDtitle1">${quoteData[0].title}</p>
						</div>
					</div>
				</div>
			</div>`);
      /* carousel 2 */
      $("#item2").html("");
      $("#item2").append(
        `<div class="row align-items-center justify-content-center" id="item2">
					<div class="col-3 col-md-2 mr-5">
						<img class="rounded-circle" id ="IDpic2" src="${quoteData[1].pic_url}" height="160" width="160"
							alt="First slide">
					</div>
					<div class="col-md-5 pr-4 mr-4">
						<div class="card-body">
							<h1 class="lead text-white" id="IDtext2">${quoteData[1].text}</h1>
							<h5 class="text-white font-weight-bold" id="IDname2">${quoteData[1].name}</h5>
							<p class="text-white font-italic" id="IDtitle2">${quoteData[1].title}</p>
						</div>
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
}