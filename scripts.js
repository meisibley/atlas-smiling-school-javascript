$(document).ready(function() {
  $('.loader').show();
  /* quotes and price */
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
                        <img class="img-fluid d-block align-self-center rounded-circle ml-sm-2 mx-auto mx-sm-0" src="${quoteItem.pic_url}" style="width: 160px !Important;" alt="Carousel Pic ' + (index + 1)'"/>
                      </div>
                      <div class="col-12 col-sm-7  col-lg-9 offset-lg-0">
                        <div class="quote-text">
                          <p class="text-white">${quoteItem.text}</p>
                          <h4 class="text-white font-weight-bold">${quoteItem.name}</h4>
                          <span class="text-white">${quoteItem.title}</span>
                        </div>
                      </div>
                    </div>`
                  );
              });
              $('.quoteCarousel').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 1500,
                  centerMode: false
              });
          }
      },
      error: function(xhr, status, error) {
        $('.loader').hide();
        console.error(xhr);
        console.error(status + ': ' + error);
      }
  });

  /* popular tutorials */
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
    method: 'GET',
    dataType: 'json',
    success: function(tutorialData) {
        $('.loader').hide();
        if (tutorialData) {
          $.each(tutorialData, function(index, tutorialItem){
            let starLine = '';
            for (let i = 0; i < 5; i++) {
              if (i <= tutorialItem.star) {
                starLine += '<img src="images/star_on.png" alt="star on" width="15px"/>';
              } else {
                starLine += '<img src="images/star_off.png" alt="star off" width="15px"/>';
              }
            }
            $('.tutorialCarousel').append(
              `<div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                <div class="card pl-sm-3 pr-sm-3 pl-md-0 pr-md-0">
                  <img class="card-img-top" src="${tutorialItem.thumb_url}" alt="Video thumbnail ' + (index + 1)'"/>
                  <div class="card-img-overlay text-center">
                    <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">${tutorialItem.title}</h5>
                    <p class="card-text text-muted">${tutorialItem['sub-title']}</p>
                    <div class="creator d-flex align-items-center">
                      <img src="${tutorialItem.author_pic_url}" alt="Creator of Video ' + (index + 1)'" width="30px" class="rounded-circle"/>
                      <h6 class="pl-3 m-0 main-color">${tutorialItem['author']}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating">${starLine}</div>
                      <span class="main-color">${tutorialItem.duration}</span>
                    </div>
                  </div>
                </div>
              </div>`
            );
          });
          $('.tutorialCarousel').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            centerMode: false,
            responsive: [{breakpoint: 768, settings: {slidesToShow: 2}},
                          {breakpoint: 576, settings: {slidesToShow: 1}}]
          });
        }
    },
    error: function(xhr, status, error) {
      $('.loader').hide();
      console.error(xhr);
      console.error(status + ': ' + error);
    }
  });

  /* latest videos */
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/latest-videos',
    method: 'GET',
    dataType: 'json',
    success: function(videoData) {
      $('.loader').hide();
      if (videoData) {
        $.each(videoData, function(index, videoItem) {
          let starLine = '';
          for (let i = 0; i < 5; i++) {
            if (i <= videoItem.star) {
                starLine += '<img src="images/star_on.png" alt="star on" width="15px"/>';
            } else {
                starLine += '<img src="images/star_off.png" alt="star off" width="15px"/>';
            }
          }
          $('.videoCarousel').append(
            `<div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
              <div class="card pl-sm-3 pr-sm-3 pl-md-0 pr-md-0">
                <img class="card-img-top" src="${videoItem.thumb_url}" alt="Video thumbnail' + (index + 1) + '"/> 
                <div class="card-img-overlay text-center">
                  <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
                </div>
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">${videoItem.title}</h5>
                  <p class="card-text text-muted">${videoItem['sub-title']}</p>
                  <div class="creator d-flex align-items-center">
                    <img src="${videoItem.author_pic_url}" alt="Creator of Video ' + (index + 1)'" width="30px" class="rounded-circle"/>
                    <h6 class="pl-3 m-0 main-color">${videoItem['author']}</h6>
                  </div>
                  <div class="info pt-3 d-flex justify-content-between">
                    <div class="rating">${starLine}</div>
                    <span class="main-color">${videoItem.duration}</span>
                  </div>
                </div>
              </div>
            </div>`
          );
        });
        $('.videoCarousel .col-lg-3').slice(0, 4).clone().appendTo('.videoCarousel');
        /*$('.videoCarousel .col-lg-3').slice(0, 4).remove();
        $('.videoCarousel').append($('.videoCarousel .col-lg-3').slice(0, 4).clone());*/
        $('.videoCarousel').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            centerMode: false,
            responsive: [{breakpoint: 768, settings: {slidesToShow: 2}},
                          {breakpoint: 576, settings: {slidesToShow: 1}}]
        });
      }
    },
    error: function(xhr, status, error) {
      $('.loader').hide();
      console.error(xhr);
      console.error(status + ': ' + error);
    }
  });

  /* courses */
  function dropdownMenus(menuItems, menuId, click) {
    let dropdownItems = $('#' + menuId);
    dropdownItems.empty();
    menuItems.forEach(function(item) {
        let itemContent = item.replace('_', ' ');
        itemContent = itemContent.charAt(0).toUpperCase() + itemContent.slice(1).toLowerCase();
        let dropdownItem = $('<a class="dropdown-item" href="#" data-value="' + itemContent + '">' + itemContent + '</a>');
        dropdownItem.click(function() {
            click(itemContent)
        });
        dropdownItems.append(dropdownItem);
    });
  }

  $('#searchText').on('keypress', function(event) {
    if (event.which === 13 || event.keyCode === 13) {
        filterVideoCards();
    }
  });

  function searchWord(videos, keywords) {
    if (!keywords) {
        return videos;
    } else {
        return videos.filter(function(video) {
            if (Array.isArray(video.keywords)) {
                return video.keywords.join(' ').toLowerCase().includes(keywords.toLowerCase());
            }
            return false;
        });
    }
  }

  function filterVideoCards() {
    let searchValue = $('#searchText').val().toLowerCase();
    let topicValue = $('#topicMenuLink span').text().toLowerCase();
    let sortValue = $('#sortMenuLink span').text().toLowerCase();
    $.ajax({
        url: 'https://smileschool-api.hbtn.info/courses',
        method: 'GET',
        dataType: 'json',
        data: {
            q: searchValue,
            topic: topicValue,
            sort: sortValue
        },
        success: function(data) {
            $('.loader').show();
            $('.courses').hide();
            setTimeout(function() {
                $('.loader').hide();
                $('.courses').show();
                let videos = [];
                $.each(data.courses, function(index, item) {
                    videos.push({
                        video: item,
                        views: item.views,
                        published_at: new Date(item.published_at),
                        topic: item.topic,
                        keywords: item.keywords
                    });
                });
                resultVideoCards(videos);
            }, 1500);
        },
        error: function(xhr, status, error) {
          console.error(xhr);
          console.error(status + ': ' + error);
        }
    });
  }

  function resultVideoCards(videos) {
    $('.courses').empty();
    let keywords = $('#searchText').val().toLowerCase();
    let filteredVideos = searchWord(videos, keywords);
    $.each(filteredVideos, function(index, obj) {
        let item = obj.video;
        let starLine = '';
        for (let i = 0; i < 5; i++) {
          if (i <= item.star) {
            starLine += '<img src="images/star_on.png" alt="star on" width="15px"/>';
          } else {
            starLine += '<img src="images/star_off.png" alt="star off" width="15px"/>';
          }
        }
        $('.courses').append(
          `<div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
            <div class="card pl-sm-3 pr-sm-3 pl-md-0 pr-md-0">
              <img src="${item.thumb_url}" class="card-img-top" alt="Video thumbnail' + (index + 1)'"/>
              <div class="card-img-overlay text-center">
                <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
              </div>
              <div class="card-body">
                <h5 class="card-title font-weight-bold">${item.title}</h5>
                <p class="card-text text-muted">${item['sub-title']}</p>
                <div class="creator d-flex align-items-center">
                  <img src="${item.author_pic_url}" alt="Creator of Video ' + (index + 1)'" width="30px" class="rounded-circle"/>
                  <h6 class="pl-3 m-0 main-color">${item['author']}</h6>
                </div>
                <div class="info pt-3 d-flex justify-content-between">
                <div class="rating">${starLine}</div>
                  <span class="main-color">${item.duration}</span>
                </div>
              </div>
            </div>
          </div>`
        );
    });

    if (filteredVideos.length !== 1) {
        $('.video-count').text(filteredVideos.length + ' videos');
    } else {
        $('.video-count').text(filteredVideos.length + ' video');
    }
  }

  $.ajax({
    url: 'https://smileschool-api.hbtn.info/courses',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      if (data && data.topics && data.sorts) {
        dropdownMenus(data.topics, 'topicMenu', function(itemText) {
          $('#topicMenuLink span').text(itemText);
          filterVideoCards();
        });
        dropdownMenus(data.sorts, 'sortMenu', function(itemText) {
          $('#sortMenuLink span').text(itemText);
          filterVideoCards();
        });
        let dropdownTopicMenu = $('#' + 'topicMenu');
        let firstTopicText = dropdownTopicMenu.find('.dropdown-item').first().text();
        $('#topicMenuLink').append('<span id="topicSpan">' + firstTopicText + '</span>');

        let dropdownSortMenu = $('#' + 'sortMenu');
        let firstSortText = dropdownSortMenu.find('.dropdown-item').first().text();
        $('#sortMenuLink').append('<span id="sortSpan">' + firstSortText + '</span>');
      }
      $('#searchText').val(data.q);

      let videos = [];
      $.each(data.courses, function(index, item) {
        videos.push({
          video: item,
          views: item.views,
          published_at: new Date(item.published_at),
          topic: item.topic,
          keywords: item.keywords
        });
      });
      resultVideoCards(videos);
    },
    error: function(xhr, status, error) {
        console.error(xhr);
        console.error(status + ': ' + error);
    }
  });
});