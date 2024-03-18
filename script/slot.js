// IFTTT Slottt Machine by Jen Hamon
// jen@ifttt.com
// github.com/jhamon

// var wordlist = [
//   'office',
//   'official',
//   'teamwork',
//   'monitor',
//   'schedule',
//   'prepare',
//   'track',
//   'record',
//   'remember',
//   'make a note',
//   'archive',
//   'timeshift',
// ]


var wordlist = [
  "It is certain!",
  "It is decidedly so!",
  "Without a doubt!",
  "Yes definitely!",
  "You may rely on it!",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes!",
  "Signs point to yes.",
  "Reply hazy, try again...",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it!",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful...",
  
  ]  
  
  function buildSlotItem (text) {
      return $('<div>').addClass('slottt-machine-recipe__item')
                       .text(text)
  }
  
  function buildSlotContents ($container, wordlist) {
    $items = wordlist.map(buildSlotItem);
    $container.append($items);
  }
  
  function popPushNItems ($container, n) {
      $children = $container.find('.slottt-machine-recipe__item');
      $children.slice(0, n).insertAfter($children.last());
  
      if (n === $children.length) {
        popPushNItems($container, 1);
      }
  }
  
  // After the slide animation is complete, we want to pop some items off
  // the front of the container and push them onto the end. This is
  // so the animation can slide upward infinitely without adding
  // inifinte div elements inside the container.
  
  
  function rotateContents ($container, n) {
      setTimeout(function () {
        popPushNItems($container, n);
        $container.css({top: 0});
      }, 300);    
  }
  
  
  function randomSlotttIndex(max) {
    var randIndex = (Math.random() * max | 0);
    return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
  }
  
    
    
  function animate() {
    var wordIndex = randomSlotttIndex(wordlist.length);
    $wordbox.animate({top: -wordIndex*150}, 500, 'swing', function () {
      rotateContents($wordbox, wordIndex);
    });
  }
  
  
  // $(function () {
  //   $wordbox = $('#wordbox .slottt-machine-recipe__items_container');
  //   buildSlotContents($wordbox, wordlist);  
  //   // buildSlotContents($wordbox, wordlist);  
  //   // buildSlotContents($wordbox, wordlist);  
  //   // buildSlotContents($wordbox, wordlist);  
    
  //   setInterval(animate, 2000);
    
  // });
  
  
  $("img").click(function () {
    $wordbox = $('#wordbox .slottt-machine-recipe__items_container');
    
    buildSlotContents($wordbox, wordlist);  
    // buildSlotContents($wordbox, wordlist);  
    // buildSlotContents($wordbox, wordlist);  
    // buildSlotContents($wordbox, wordlist);
    
    
    setTimeout(animate, 0);
    
  });
  