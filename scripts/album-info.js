{

  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl)
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
  $('#song-list').each(function(album){
    var index = 1;
  //  "song-number-column": index;
    $("#song-number-column").text(index);
    $("#song-title-column").text(album.songs.title);
    $("#song-duration-column").text(album.songs.duration);
    index++;
  });

}
