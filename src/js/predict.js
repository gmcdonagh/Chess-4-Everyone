var g_startOffset = null;
var g_selectedPiece = null;
var moveNumber = 1;

var g_allMoves = [];
var g_playerWhite = true;
var g_changingFen = false;
var g_analyzing = false;

var g_uiBoard;
var g_cellSize = 45;
var finalData = "default";
var haschanged = 0;

var g_backgroundEngineValid = true;
var g_backgroundEngine;

function InitializeBackgroundEngine() {
    if (!g_backgroundEngineValid) {
        return false;
    }

    if (g_backgroundEngine == null) {
        g_backgroundEngineValid = true;
        try {
          //alert("new worker");
            g_backgroundEngine = new Worker("garbochess.js");
            //alert("worker?")
            g_backgroundEngine.onmessage = function (e) {
                if (e.data.match("^pv") == "pv") {
                    set_final(e.data);
                    //alert(finalData);
                    UpdatePVDisplay(e.data.substr(3, e.data.length - 3));
                } else if (e.data.match("^sam") == "sam") {

                } else if (e.data.match("^message") == "message") {
                    EnsureAnalysisStopped();
                    UpdatePVDisplay(e.data.substr(8, e.data.length - 8));
                } else {
                    //alert(e.data);
                    UIPlayMove(GetMoveFromString(e.data), null);
                }
            }
            //alert("on message defined");
            g_backgroundEngine.error = function (e) {
                alert("Error from background worker:" + e.message);
            }
            //alert("posting");
            g_backgroundEngine.postMessage("position " + GetFen());
            //alert("posted");
        } catch (error) {
          //alert(finalData);
            g_backgroundEngineValid = false;
        }
    }
    //alert(finalData);
    return g_backgroundEngineValid;
}


function set_final(new_move) {
    //alert(new_move);
    haschanged = 1;
    finalData = new_move;
}
function get_final() {
  var moveOutput = finalData.substring(4);
  return moveOutput;
}

function get_move(fen) {
    var moveOutput = "default";
    var game = new Chess();
    game.load(fen);
    evaluatePosition(game);
    //alert(get_final());
    setTimeout(function(){
      //alert(finalData.substring(4));
      moveOutput = finalData.substring(4);
      return moveOutput;
    }, 2000);
}

function call_this(fen) {
  haschanged = 0;
  let myFirstPromise = new Promise(function (resolve, reject) {
    if (haschanged==1) {
      setTimeout(function(){
        //alert(get_final());
        resolve(get_final());
      }, 1000);
      //resolve(get_final()); // fulfilled
    } else {
      var reason = new Error('mom is not happy');
      reject(reason); // reject
    }

  });

    var run = function () {
      myFirstPromise
      .then(function (fulfilled) {
        // yay, you got a new phone
        var final = get_final();
        //
        //alert(final);
        console.log(final);
        // output: { brand: 'Samsung', color: 'black' }
      })
      .catch(function (error) {
        // oops, mom don't buy it
        console.log(error.message);
        // output: 'mom is not happy'
      });
    };
    get_move(fen);
    return run();
}

function evaluatePosition(game) {
    //InitializeBackgroundEngine();
    var possibleMoves = game.moves();

    //alert(game.fen())

    if (possibleMoves.length === 0) {
        //alert('checkmate')
          return;
    };

      if (g_backgroundEngine) {

        g_backgroundEngine.postMessage("position " + game.fen());
        g_backgroundEngine.postMessage("analyze");

      } else {

        InitializeBackgroundEngine();
        g_backgroundEngine.postMessage("position " + game.fen());
        g_backgroundEngine.postMessage("analyze");

      };
}


//get_move("rnbqkbnr/pp1p1ppp/2p5/4p3/Q1P5/5P2/PP1PP1PP/RNB1KBNR b KQkq - 1 3");

//alert(get_final());
