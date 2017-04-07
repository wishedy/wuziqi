/**
 * Created by ALLIN on 2017/4/7.
 */
$(document).ready(function(){
        console.log()
    console.log();
        var chess = {
          "init":function(){
              var w = this;
              w.config.ele.chessContainer.css({"height":Math.ceil($(document).height()/1.1)-60,"width":Math.ceil($(document).width()/1.5)-60})
          },
            "config":{
              "ele":{
                  chessContainer:$("#chessboard")
              }
            }
        };
        chess.init();
});