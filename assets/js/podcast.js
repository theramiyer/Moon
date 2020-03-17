---
---

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}
function DetectAndServe(){
  let os = getMobileOperatingSystem();
  if (os == "Android" && "{{ site.google-podcast }}") {
    url = "https://www.google.com/podcasts?feed={{ site.google-podcast }}";
  }
  else if (os == "iOS" && "{{ site.apple-podcast }}") {
    url = "https://podcasts.apple.com/podcast/{{ site.apple-podcast }}";
  }
  else {
    url = "https://anchor.fm/{{ site.anchor }}";
  }
  window.open(url, '_blank')
}
