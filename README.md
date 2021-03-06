A big thanks to Jeff Hlywa for chess.js, Chris Oakman for chessboard.js, and Gary Linscott for garbochess.js. We use their code in accordance with their licenses. A big thanks to Bramwell Pace and Jay Hixson as well for working with me to create this fun project.

----------

Copyright (c) 2017, Jeff Hlywa (jhlywa@gmail.com)
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.

----------

Copyright 2013 Chris Oakman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

----------

Copyright (c) 2011 Gary Linscott
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. The name of the author may not be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

----------

What is your project

We made a low-degree of freedom chess game called ‘Chess 4 Everyone’ which allows people with some cognitive disability to play the game of chess against a computer, against competent chess players, or against others with similar conditions. In this chess game, depending on the degree of freedom (1, 2, or 3), the player can cycle through a list of suggested moves with the “spacebar” or the “left arrow” key. Then, the player can select his/her move using the “enter” key or the “right arrow” key. This allows for the player to easily choose their moves by using standard mover/picker switch methods. In the main menu of our game, players are given the option to quick start a game as a limited player vs the computer under two degrees of freedom (two choices per move). On the bottom of the main menu page, there is text that details what the game is. The other option in the main menu screen is the settings option. In this menu, players can choose their settings for their specific game. The first button details a player select option where players can either choose: Limited player vs. Computer, limited player vs. limited player, limited player vs. unlimited player, unlimited player vs. computer, and unlimited player vs. unlimited player. The next option decides the difficulty for the game. The player sets how many degrees of freedom (one, two, or three) for the limited player only. If the game only consists of unlimited players, then this option is not available. However, if there is a limited and unlimited player, then the difficulty can be chosen. After all the desired settings have been selected, the player can start the game from here. Also, if the settings are not desirable, then the player can reset the selections to their default settings using the “default settings” button. Finally, if players wanted to resume their saved game, the settings page has the load game button which takes you to the load game menu. On the load game menu, players/guardians can input their FEN strings that they acquired from pressing the “s” key on their previous chess game. However, if the
player/guardian inputs an incorrect FEN string, a message on the bottom of the page would appear saying “Not a valid game”. On the load game menu, there is a load game button that players/guardians can press once their correct FEN was inputted, or there is a main menu button. When players start their game, there is a chessboard in the middle of the webpage that the players can play using the same switch methods as before. The unlimited players can use the drag and drop method with their mouse to move the desired chess piece where they want. If one limited and one unlimited player are playing against each other, then the limited player has the switch method of browsing and selecting their moves while the unlimited player can use the drag and drop method of playing.
The possible move choices that are given to the limited players are generated by the program to represent at least one good move. One of the choices will always be the best move possible determined by our artificial intelligence. If there is more than one option, the program provides the best possible move mixed in with randomly generated moves. This allows the game to move forward relatively quickly and where true learning can take place.

Who is it designed to benefit

We wanted to create a chess game for those with some cognitive disability. The purpose of our chess game is to teach those who aren’t able to play with a physical chess game or deal with the complexity of chess head-on. We achieve this by giving the players only a few options where they just have to either click the “enter” key or the “right arrow” key on the keyboard. However, this is only for those who are limited due to their disability. The players can learn to play chess because they have to make a decision for which move they would rather choose from the given options. The one degree of freedom chess game is very good for players to learn the
basic functionality of the game by having only one option. Therefore, the players can see how each chess piece moves, and how some chess pieces don’t move. We also have a functionality so that anyone can play this chess game. So, two people without disabilities can play a chess game with no limitations. This is done by allowing the players the ability to manually choose (using drag and drop) their chess pieces and moves. Anyone can play chess together.

How is it implemented and how well does it work

Our entire program is implemented as a set of state machines, with different functions representing different machines. The same page is always used throughout the program and we use JQuery to delete elements or add elements at different times. At the very beginning of execution when the document is ready, executeMainMenu() is called which appends the main menu HTML and sets up the state machine for moving between or selecting the “quickplay” and “settings” buttons. When “settings” is selected, the board is cleared and executeSettings() is called. This appends the settings HTML and sets up the state machine for navigating through the settings options and the “reset”, “launch”, and “load game” buttons. If “reset” is selected, the body is cleared and executeSettings() is called again . If “load game” is selected, the body is cleared and executeLoadGame() is called with parameters related to the settings selected in the menu. This appends the load game HTML and sets up the state machine for switching between the “main menu” and “launch” buttons. When quickplay is pressed in the main menu, when launch is pressed in settings, or when launch is pressed in load game, executeGame() is called with parameters relating to the settings of the game. The parameters within executeGame() are difficultySetting, playerSetting, and fen. If fen is not null, we know we are loading a game. Else,
we are starting a new one. executeGame() also acts as a state machine but the states and the functions defined for those states are different depending on the passed in settings.
For example, if 0 and 1 are passed, this signifies a limited vs computer game with 1 degree of freedom. A Chess.js game is then created and functions aiMove() and userMove() are defined accordingly. To start the game, aiMove() or userMove() is called at random to randomly assign a player to white or black. In each function, after a move is made, each function simply calls the other function, creating a constant switch between the two functions until an end-game event is triggered. If 0 and 2 are passed, this signifies a limited vs limited game with 1 degree of freedom. Thus only one userMove() function is defined and it recurses over and over until an end-game event is triggered. If 0 and 3 are passed, this would be a unlimited vs limited game with 1 degree of freedom and again only one userMove() would be defined. The unlimited player uses a mouse to move and the onDrop event inherent to Chess.js calls userMove() upon a success. When userMove() is called, it disables the mouse from being used and after userMove() finishes, the mouse is re-enabled. This effectively allows switching between turns. At any time during a player move or specifically a limited player move, depending on the game mode, one can restart the game by pressing “r”, which relaunches executeMainMenu(), or save the game by pressing “s”. Pressing “s” appends a textbox to the screen with the FEN representing the game state. This can be copied and recorded to use to load a game in the settings menu. When an endgame event is triggered, we clear the body and call endGame(), passing in a parameter indicating whether black won, white won, or it was a draw, as well as the game settings parameters. This function appends HTML to the screen according to who won and also sets up a state machine for switching between the “replay” or “main menu” button. If “replay” is selected,
executeGame() is recalled with the same settings as before. If “main menu” is selected, executeMainMenu() is called.
Using this state machine approach, one can play any amount of games in a given sitting with any settings they desire for each game. We also designed the game load to work with any settings. Therefore, one can take the FEN from a limited vs. unlimited game that had to be paused and load the same game back up as limited vs. comp, if they wished. Further, one can take the FEN from any chess game, such as the Chess.com daily puzzle, and load it into our application. As far as we have seen, we have succeeded in implementing all of the listed features of this project.
