
//Studio - Gallery
$(document).ready(function () {

    $(".gallery-img").click(function(){
      var t = $(this).attr("src");
      $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
      $("#myModal").modal();
    });
  
  
  });
  
  //Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  //Navbar changes colour on scroll
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  
  //Scroll to top
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("go-top").style.display = "block";
    } else {
      document.getElementById("go-top").style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }