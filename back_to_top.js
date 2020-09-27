<html>
  <head> 
   <style>
    #scrollUp{position: fixed;bottom : 10px;right: -100px;opacity: 0.5;}
   </style>
   <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
   <script>
            jQuery(function(){
                $(function () {
                    $(window).scroll(function () {
                        if ($(this).scrollTop() > 200 ) { 
                            $('#scrollUp').css('right','10px');
                        } else { 
                            $('#scrollUp').removeAttr( 'style' );
                        }
                    });
                });
            });
   </script>
 </head> 
</html>
