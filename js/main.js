let black=true
$(".card").hover(function(){
      let index =  $(this).find("img").attr('src').charAt(17)
      let src="res/whatwedo/icon"
  if (black){
    $(this).css("background-color", "white");
      $(this).css("color", "red");
      src+= index+"rouge.PNG"

    black=false
  }
  else if  (!black){
      $(this).css("background-color", "black");
      $(this).css("color", "white");
      src+=index+".PNG"
      black=true
  }
  $(this).find("img").attr('src', src);

});
