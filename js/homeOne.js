
document.addEventListener("DOMContentLoaded",function() {
   var menu = document.querySelectorAll('.navbar');
   var menu = menu[0];
       //Truy xuất div menu
       var trangthai="duoi840";
   window.addEventListener("scroll",function(){
       var x = pageYOffset;
       if(x > 840){
           if(trangthai == "duoi840")
           {
               trangthai="tren840";
               menu.classList.add('fixed-navbar');
           }
       }
       else{
           if(trangthai=="tren840"){
           menu.classList.remove('fixed-navbar');
           trangthai="duoi840";}
       }
   });
});
