{

  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl)
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);

  //This is broken code I can work off for the next checkpoint to add things to columns
  // $('#song-list').each(function(album){
  //   var index = 1;
  // //  "song-number-column": index;
  //   $("#song-number-column").text(index);
  //   $("#song-title-column").text(album.songs.title);
  //   $("#song-duration-column").text(album.songs.duration);
  //   index++;
  // });

}
