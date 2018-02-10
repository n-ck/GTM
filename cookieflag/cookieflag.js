
// Function to retreive cookie name and value
function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
}

var pixelflagcookie = getCookie("pixelflag");
  
if (pixelflagcookie != 1) {
	// Fire a custom FB Pixel Event
    fbq('trackCustom', 'CustomEvent');
    // Set cookie value to 1
	document.cookie = "pixelflag=1; path=/; domain=.yourdomain.com";
}