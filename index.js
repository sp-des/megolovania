var player = require('play-sound')(opts = {})

setInterval(function() {
    player.play('megolovania.mp3', function(err){
        if (err) throw err
    })
}, 60000);
