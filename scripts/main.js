$(document).on('load', function () {
  $.ajax({
    url: "https://api.imgflip.com/get_memes",
    method: "GET",
    success: function (data) {
      var memes = data.data.memes;
      for (var i = 0; i < memes.length; i++) {
        console.log(memes[i]);
      }
    }
  });




});
