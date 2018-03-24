console.log('sanity check');

$(document).on("ready", function(){
  console.log('up and running');
  $.ajax({
  // What kind of request
    method: 'GET',

  // The URL for the request
    url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',

  // The type of data we want back
    dataType: 'json',

  // Code to run if the request succeeds; the JSON
  // response is passed to the function as an argument.
    success: onSuccess
    });

// defining the callback function that will happen
// if the request succeeds.
  function onSuccess(json) {
      console.log(json);
      var allMyGifs=json.data;
      allMyGifs.forEach(function(gifObj){
        var gifImageUrl = gifObj.images.original.url
        $('.gif-gallery').append(`<img src="${ gifImageUrl }">`)

      })

      // celebrate! - 25images search
      $('form').on('submit', function(event){
        event.preventDefault();
        $.ajax({
          method: 'GET',
          url: 'http://api.giphy.com/v1/gifs/search',
          data: $('form').serialize(),
          success: function(json){
            console.log(json);
            var allMyGifs=json.data;
            $('.gif-gallery').empty();
            allMyGifs.forEach(function(gifObj){
              gifImageUrl = gifObj.images.original.url
              // debugger

              $('.gif-gallery').append(`<img src="${ gifImageUrl }">`);
            })
          }
        });
      });

      // extended search
      $('button').on('click', function(event){
        let newOffset = parseInt($('form #offset').val()) + 25;
        $('form #offset').val(newOffset);
        $.ajax({
          method: 'GET',
          url: 'http://api.giphy.com/v1/gifs/search', //offset:26
          data: $('form').serialize(),
          success: function(json){
            console.log(json);
            var allMyGifs=json.data;
            allMyGifs.forEach(function(gifObj){
              gifImageUrl = gifObj.images.original.url
              // debugger

              $('.gif-gallery').append(`<img src="${ gifImageUrl }">`);
            })
          }
        });
      });
  };

});
