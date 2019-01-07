{
    class Helper {
    playPauseAndUpdate(song){
    //  if (player.playState !== 'playing') { return; }
     player.playPause(song)
      const duration = player.currentlyPlaying.duration;
      $('#time-control .total-time').text( duration );
    //    player.playPause(song)
    }
  };

  var helper = new Helper();
}
