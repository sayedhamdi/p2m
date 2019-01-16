$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('nav').addClass('change');
	}
	else {
		$('nav').removeClass('change');
	}
})
function myFunction(x) {
    if (x.matches) { 
        document.getElementById("myNavbar").classList.remove("pull-right");
    } else {
        document.getElementById("myNavbar").classList.add("pull-right");
        $('#sidecollapse').css('display','block');
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) 
x.addListener(myFunction) 

$('.counter').counterUp({
    delay: 10,
    time: 1000
});
$('#showallstaff').click(function(){
	$('#mrhatem').css("display",'block');
	$('#SousseStaff').css("display",'block');
	$('#MonastirStaff').css("display",'block');
	$('#KsarStaff').css("display",'block');
	$('#Mokninestaff').css("display",'block');
});
$('#showonlysousse').click(function(){
	$('#mrhatem').css("display",'block');
	$('#SousseStaff').css("display",'block');
	$('#MonastirStaff').css('display','none');
	$('#KsarStaff').css('display','none');
	$('#Mokninestaff').css('display','none');
})
$('#showonlymonastir').click(function(){
	$('#mrhatem').css("display",'block');
	$('#SousseStaff').css('display','none');
	$('#MonastirStaff').css("display",'block');
	$('#KsarStaff').css('display','none');
	$('#Mokninestaff').css('display','none');
})
$('#showonlyksar').click(function(){
	$('#mrhatem').css("display",'block');
	$('#SousseStaff').css('display','none');
	$('#MonastirStaff').css('display','none');
	$('#KsarStaff').css("display",'block');
	$('#Mokninestaff').css('display','none');
})
$('#showonlymoknine').click(function(){
	$('#mrhatem').css("display",'block');
	$('#SousseStaff').css('display','none');
	$('#MonastirStaff').css('display','none');
	$('#KsarStaff').css('display','none');
	$('#Mokninestaff').css("display",'block');
})
function toggle(){
        var toggle=document.getElementById('sidecollapse');
        if (toggle.style.display == "block") {
            toggle.style.display = "none";
        } else {
            toggle.style.display = "block";
        }        
    }