<!DOCTYPE html>
<html>
 <body>
   <form width="400px" action="javascript:void(0);">
    <input style="text-align:center;" type="text" id="q" name="q"  />
    <input type="submit" onclick="submitform();" value=" " style="background: transparent url(/search/search_mini.png) no-repeat right bottom; border: none; width: 18px;"/>
   </form>
  <script type="text/javascript">
    function submitform(){
       var site = "https://duckduckgo.com/?q=site:www.faxkryp.blogspot.com ";
       var query = document.getElementById("q").value;
       var win = window.open(site.concat(query), '_blank');
       win.focus();
       }
  </script>
 </body>
</html>
