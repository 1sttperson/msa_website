$(document).ready(function () {
  $.ajax({
    url: "https://api.imgflip.com/get_memes",
    method: "GET",
    success: function (data) {
      var memes = data.data.memes;
      for (var i = 0; i < memes.length; i++) {
        var meme = document.createElement("img");
        meme.height = memes[i].height;
        meme.width = memes[i].width;
        meme.src = memes[i].url;
        document.body.appendChild(meme);
        console.log(memes[i]);
      }
    }
  });
});
