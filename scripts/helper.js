{
  // var helper = class {
  // };

  class helper {
    playPauseAndUpdate(song){
      if (player.playState !== 'playing') { return; }
      const duration = player.getDuration();
      $('#time-control .total-time').text( duration );
      
      player.playPause(song) =
    }
  };

  var helper = new helper();

//For Reference. Delete Later.
//  setInterval( () => {
  //   if (player.playState !== 'playing') { return; }
  //   const currentTime = player.getTime();
  //   const duration = player.getDuration();
  //   const percent = (currentTime / duration) * 100;
  //   $('#time-control .current-time').text( currentTime );
  //   $('#time-control input').val(percent);
  // }, 1000);
  //end Delete
}
