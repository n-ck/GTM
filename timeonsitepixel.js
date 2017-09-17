<script>
if (!sessionStorage.getItem('socialFulcrum')){
      sessionStorage.setItem('socialFulcrum', new Date());
    }

function checkId(){
  var data = sessionStorage.getItem('socialFulcrum');
  var x = Date.parse(data)
  currentDate = new Date();
  if ((currentDate.getTime() - x) / 60000 >= 1 ) {
    fbq('track', 'ViewContent');
    window.clearInterval(start);
    sessionStorage.setItem('pixelFired', 'true');
  }
}

if(!sessionStorage.getItem('pixelFired')){
  start = window.setInterval(checkId, 3000)
}
</script>