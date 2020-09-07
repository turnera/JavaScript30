document.addEventListener("keydown", function(e) {
    let div = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  
  if(!div)
    return undefined;
    
  div.classList.add("playing")
  audio.currentTime = 0;
  audio.play();
  
  let keyArr = document.querySelectorAll(".key");
  
  keyArr.forEach(element => 
    {
      element.addEventListener("transitionend", function()
      {
        element.classList.remove("playing");
      });
    });
  });