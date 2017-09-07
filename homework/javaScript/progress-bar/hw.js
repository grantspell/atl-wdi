// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = { //global variable being established, containing four sectons** of code that make up the interface and funtionality of the timer/progress bar
    drawNumericDisplay: function(timerValue){ // calling on the time value function which will be the foundation for which the other modules operate, allowing us to create the timer display
      
      document.getElementById('numeric-display').textContent = timerValue; //tells us that this information is meant to be assigned to the 'numeric-display' ID ran in JS and also the <h2> in our HTML
      
       var numericDisplay = document.getElementById('numeric-display'); //creating our base variable to build JS upon for the 'numeric-display' 
       numericDisplay.textContent = timerValue;
       if (timerValue <= 10) { // the code following this will be executed when/if the timer is at 10 or less seconds
         numericDisplay.style.color = 'red'; //if this condition is true, the timer display's font-color will change from black to red
         var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2); // when the timer dips below 11 seconds, it increases the font-size with each second increment
         numericDisplay.style.fontSize = newSize + 'em'; // adjusts the size of the display counter and also makes the text bold
       }
    },
    drawProgressBars: function(timerValue){ // declares that the following code will be pertaining to the progressBars
      
      var timeElapsed = 100 - timerValue; // declares that we are starting at '100' and decreasing the 'timerValue' by one increment
      document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%'; // declares that we are referrencing the 'progress-bar' class in all the HTML and CSS external files and that the progress bar's width is changed as time decreases
      
       var progress = 100 - timerValue; // says that the progress bar should be growing in width as the timer value decreases away from '100'
       var bars = document.getElementsByClassName('progress-bar'); // declares that we are writing code for the 'progress-bar' class
       for (var i = 0; i < bars.length; i++) { 
         bars[i].style.width = progress + '%'; // this for loop is signifying that with each decrease from 'bars' var that the 'progress-bar' grows
       }
    },
    drawLitFuses: function(timerValue){ // this declares that the following section of code is inteded for the 'Fuses' section of our timer UI
    
      var percentUnburnt = timerValue/100; // declares that we are dividing our timerValue by 100 to get a percentage that will be displayed as the percentUnburnt var (meaning how much flame is left to burn)
      document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt*98 + '%';
      document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)*98 + '%'; // the two lines above will display how much of the fuse is left to be 'burnt' (displayed) and what is left to be 'burnt'(not-displayed)
      
       var percentUnburnt = timerValue/100; // declares that we are dividing our timerValue by 100 to get a percentage that will be displayed as the percenBurnt var (meaning how much flame has already been 'burnt')
       var numFuses = document.getElementsByClassName('fuse').length; // 
       for (var i = 0; i < numFuses; i++){
         document.getElementsByClassName('unburnt')[i].style.width = percentUnburnt*98 + '%';
         document.getElementsByClassName('burnt')[i].style.width = (1 - percentUnburnt)*98 + '%';
       }
    },
    drawCrawlers: function(timerValue){
    
      var timeElapsed = 100 - timerValue;
      if (timerValue%2 === 0) {
        document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
      }
      else {
        document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
      }
      document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElapsed*10) + 'px';
       
       var timeElapsed = 100 - timerValue;
       var crawlers = document.getElementsByClassName('crawler');
       for (var i = 0; i < crawlers.length; i++) {
         if (timerValue%2 === 0) {
           crawlers[i].style.marginTop = '0px';
         }
         else {
           crawlers[i].style.marginTop = '10px';
         }
         crawlers[i].style.marginLeft = (timeElapsed*10) + 'px';
      }
    }
  };
  
  // I worked with Jayme on this homework project. We referenced the homework solutions file and worked backwords to understand the code and functionality of the code even though we could not create it ourselves. Ultimately this was a learning exercise for myself since I had to copy the source code.
  // All code credits go to GA, I only created the comments to display my knowledge of how the code works and is applied