# SLAP JACK
 
![logo](docs/readme-assets/logo.png)

# Gameplay:

* Players alternate turns playing cards face-up into the central pile
* Any player can slap at any time, with several outcomes!
* If a player slaps a Jack, Double (two cards of the same value on top), or Sandwich (two cards of the same value with one other card between), the entire central pile is added to the player’s hand, and their hand is shuffled.
* If a player slaps anything other than a Jack, Double, or Sandwich, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.
* If one player loses all their cards, they have one chance to not lose and continue the game:  
   
   The player with cards left continues to deal from their hand into the central pile until a Jack is revealed. If the player with cards left deals all their cards into the center without revealing a Jack, the central pile returns to that player’s hand, is shuffled, and the player must continue dealing until a Jack is revealed.  
   When a Jack is revealed, the player who is out of cards can slap it. The central pile is then their new hand, the game continues as normal.  
   If however, the player who is out of cards slaps something that is not a Jack, or if the player who still has cards slaps the Jack first, then the player who is out of cards loses and the game is over!
Doubles and Sandwiches are not valid when one player is completely out of cards - in this case, only a Jack can save them!
The only way the player who still has cards can win is by slapping the Jack before the player without cards left does.

## Built With

-  javascript
-  CSS
-  HTML

## SetUp

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing
1. Fork this project to your own Github account
2. Clone the repository to your local machine
3. cd into the project

### How to see the product

To open the project locally open index.html in a browser.

## Authors

👤 **Tyler Haglund** 
- Contributor
- Github: [relyt4me](https://github.com/relyt4me)

👤 **Casey Dallavalle** 
- Project Manager
- Github: [cbdallavalle](https://github.com/cbdallavalle)

## ScreenShots of Functionality
Regular Play of the Game:  
![Gif of game play](docs/readme-assets/start-game.gif)

End of Game Play:  
![Gif of game play](docs/readme-assets/end-game.gif)


## Resources and Project Details

[Original Project Specifications](https://frontend.turing.io/projects/module-1/slapjack.html)   
   
   This was a project done for the Turing School to showcase our ability at the end of the first module of teaching to combine knowlege of CSS, HTML, and Javascript. This project tested my ability to think through logic problems of turning the card game of slapjack into something that could be played on a single keyboard between two players. I had to ensure to keep in mind data model and DOM seperation, DRY code, and basics of javascript functionality, to include: Classes, Objects, Loops, Functions, Conditionals and Local Storage.  
   
   In doing the project I found a quick win in how quickly I was able to create the base HTML and CSS layout for the page. I also found that I had a pretty good handle on building out classes to handle what that class should be able to do including adding properties and methods specific to that class. My thought process was to build out the player class and game class in a way that I could run the game through calling methods in the console. This thinking made for a very solid workflow and logical way to follow errors. I struggled most with deciding on the best logic for determining the rules after a player had an empty hand. I finally determined the use of a property in the player class called 'onTheRopes' was my best and most logical solution.
   
## Future Ideas  
   * I would like to eventually allow for players to enter their own names instead of the default player 1 and player 2. Then I would like to use local storage to have constant track of any player that had scored a win on that computer.  
   * I would also liket to use transformation in html and css to make the playing of and slapping of cards a bit more visually appealing.

## Acknowledgements

Background Image by: [Keith Misner](https://unsplash.com/@keithmisner)

I would like to thank my Mentor, [Jarret Kong](https://github.com/jarrettkong), for helping me to see the class seperation potential of the playCard method and teaching me some tricks with spread-opperators and Switch-Case to be used in the future.  

I would also like to thank the project manager, Casey Dallavalle, for the nudge to putting local storage within the player class.
