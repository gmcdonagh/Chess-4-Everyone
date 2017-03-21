function executeGame(playerSetting, difficultySetting) {
    // do not pick up pieces if the game is over
    // only pick up pieces for White
    var board;

    var onDragStart = function(source, piece, position, orientation) {
      if (game.in_checkmate() === true || game.in_draw() === true ||
        piece.search(/^b/) !== -1) {
        return false;
      }
    };

    var makeRandomMove = function() {
      var possibleMoves = game.moves();

      // game over
      if (possibleMoves.length === 0) return;

      var randomIndex = Math.floor(Math.random() * possibleMoves.length);
      game.move(possibleMoves[randomIndex]);
      board.position(game.fen());
    };

    var onDrop = function(source, target) {
      // see if the move is legal
      var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) return 'snapback';

      // make random legal move for black
      window.setTimeout(makeRandomMove, 250);
    };

    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    var onSnapEnd = function() {
      board.position(game.fen());
    };

    var cfg = {
      draggable: true,
      position: 'start',
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd
    };

    var game = new Chess();

    board = ChessBoard('board', cfg);
    alert("D: " + playerSetting + " P: " + difficultySetting);
};

function executeMainMenu(){
    curr_state = "quickplay";
    $('#body').append("<div id= \"qplay\"> Quickplay </div>");
    $('#body').append("<div id=\"settings\"> Settings </div>");
    $('#qplay').css("color", "orange");
    
    $(window).on("keypress", function(e){
       if(curr_state == "quickplay")
        {
            if(e.which == 0 || e.which == 32) 
            {
                $('#qplay').css("color", "");
                $('#settings').css("color", "");
                $('#qplay').css("color", "black");
                $('#settings').css("color", "orange");
                curr_state = "settings";
            }
            
            else if (e.which == 13)
            {
                $(window).off("keypress");
                $(body).empty();
                $(body).append("<div id=\"board\" style=\"width: 400px\"></div>");
                executeGame(1,1);
            }
            
        } 
        
        else if (curr_state == "settings")
        {
            if(e.which == 0 || e.which == 32) 
            {
                $('#qplay').css("color", "");
                $('#settings').css("color", "");
                $('#qplay').css("color", "orange");
                $('#settings').css("color", "black");
                curr_state = "quickplay";
            }
            
            else if (e.which == 13)
            {
                $(window).off("keypress");
                $(body).empty();
                executeSettings();
            }
        } 
    }); 
};

function executeSettings() {
    curr_state = "dof_1";
    difficulty = -1;
    players = -1;
    $('#body').append("<div> Degrees of Freedom: </div>");
    $('#body').append("<div id= \"dof_1\"> 0 DOF </div>");
    $('#body').append("<div id=\"dof_2\"> 1 DOF </div>");
    $('#body').append("<div id=\"dof_3\"> 2 DOF </div>");
    $('#body').append("<div> Players: </div>");
    $('#body').append("<div id= \"play_1\"> PvC </div>");
    $('#body').append("<div id=\"play_2\"> PvP </div>");
    $('#body').append("<div id= \"launch\"> Launch </div>");
    $('#body').append("<div id=\"reset\"> Reset </div>");
    $('#dof_1').css("color", "orange");

    
    $(window).on("keypress", function(e){
       if(curr_state == "dof_1")
        {
            if(e.which == 0 || e.which == 32) 
            {
                $('#dof_1').css("color", "");
                $('#dof_2').css("color", "");
                $('#dof_3').css("color", "");
                $('#dof_1').css("color", "black");
                $('#dof_2').css("color", "orange");
                $('#dof_3').css("color", "black");
                curr_state = "dof_2";
            }
            
            else if (e.which == 13)
            {
                difficulty = 0;
                $('#dof_1').css("color", "");
                $('#dof_2').css("color", "");
                $('#dof_3').css("color", "");
                $('#dof_1').css("color", "orangered");
                $('#dof_2').css("color", "black");
                $('#dof_3').css("color", "black");
                curr_state = "play_1";
                $('#play_1').css("color", "");
                $('#play_1').css("color", "orange");
            }
            
        } 
        
        else if(curr_state == "dof_2")
        {
            if(e.which == 0 || e.which == 32) 
            {
                $('#dof_1').css("color", "");
                $('#dof_2').css("color", "");
                $('#dof_3').css("color", "");
                $('#dof_1').css("color", "black");
                $('#dof_2').css("color", "black");
                $('#dof_3').css("color", "orange");
                curr_state = "dof_3";
            }
            
            else if (e.which == 13)
            {
                difficulty = 1;
                $('#dof_1').css("color", "");
                $('#dof_2').css("color", "");
                $('#dof_3').css("color", "");
                $('#dof_1').css("color", "black");
                $('#dof_2').css("color", "orangered");
                $('#dof_3').css("color", "black");   
                curr_state = "play_1";
                $('#play_1').css("color", "");
                $('#play_1').css("color", "orange");
            }
        } 
        
        else if(curr_state == "dof_3")
        {
            if(e.which == 0 || e.which == 32) 
            {
                $('#dof_1').css("color", "");
                $('#dof_2').css("color", "");
                $('#dof_3').css("color", "");
                $('#dof_1').css("color", "orange");
                $('#dof_2').css("color", "black");
                $('#dof_3').css("color", "black");
                curr_state = "dof_1";
            }
            
            else if (e.which == 13)
            {
                difficulty = 2;
                $('#dof_1').css("color", "");
                $('#dof_2').css("color", "");
                $('#dof_3').css("color", "");
                $('#dof_1').css("color", "black");
                $('#dof_2').css("color", "black");
                $('#dof_3').css("color", "orangered");  
                curr_state = "play_1";
                $('#play_1').css("color", "");
                $('#play_1').css("color", "orange");

                

            }
        } 
        
        else if (curr_state == "play_1")
        {
            if(e.which == 0 || e.which == 32) 
            {
                $('#play_1').css("color", "");
                $('#play_2').css("color", "");
                $('#play_1').css("color", "black");
                $('#play_2').css("color", "orange");
                curr_state = "play_2";
            }
            
            else if (e.which == 13)
            {
                players = 1;
                $('#play_1').css("color", "");
                $('#play_2').css("color", "");
                $('#play_1').css("color", "orangered");
                $('#play_2').css("color", "black"); 
                curr_state = "launch";
                $('#launch').css("color", "");
                $('#launch').css("color", "orange");
            }
        }
        
        else if (curr_state == "play_2")
        {
            if(e.which == 0 || e.which == 32) 
            {
                $('#play_1').css("color", "");
                $('#play_2').css("color", "");
                $('#play_1').css("color", "orange");
                $('#play_2').css("color", "black");
                curr_state = "play_1";
            }
            
            else if (e.which == 13)
            {
                players = 2;
                $('#play_1').css("color", "");
                $('#play_2').css("color", "");
                $('#play_1').css("color", "black");
                $('#play_2').css("color", "orangered"); 
                curr_state = "launch";
                $('#launch').css("color", "");
                $('#launch').css("color", "orange");
            }
        }
        
        else if (curr_state == "launch")
        {
            if(e.which == 0 || e.which == 32) 
            {
                $('#launch').css("color", "");
                $('#reset').css("color", "");
                $('#launch').css("color", "black");
                $('#reset').css("color", "orange");
                curr_state = "reset";
            }
            
            else if (e.which == 13)
            {
                $(body).empty();
                $(body).append("<div id=\"board\" style=\"width: 400px\"></div>");
                $(window).off("keypress");
                executeGame(difficulty, players);
            }
        }
        
        else if (curr_state == "reset")
        {
            if(e.which == 0 || e.which == 32) 
            {
                $('#launch').css("color", "");
                $('#reset').css("color", "");
                $('#launch').css("color", "orange");
                $('#reset').css("color", "black");
                curr_state = "launch";
            }
            
            else if (e.which == 13)
            {
                $(body).empty();
                $(window).off("keypress");
                executeSettings();
            }
        }
    }); 
}

$(document).ready(function () {
    executeMainMenu(0,0);
});

