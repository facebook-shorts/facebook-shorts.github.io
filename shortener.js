function shorten() {
  var originalUrl = document.getElementById("url").value;
  var shortenedUrl = generateShortenedUrl(originalUrl);
  
  document.getElementById("shortened-url").textContent = shortenedUrl;
  document.getElementById("shortened-url").href = shortenedUrl;
}

function generateShortenedUrl(originalUrl) {
  // In a real implementation, you would generate a short code using a hash or random string.
  // For this example, let's pretend we're just adding a hash of the original URL.
  var shortCode = "short/" + hashCode(originalUrl);
  
  // Your GitHub Pages URL
  var domain = "https://facebook-shorts.github.io/";
  
  return domain + shortCode;
}

function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(36);
    }
