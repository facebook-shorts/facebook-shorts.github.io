function shorten() {
  var originalUrl = document.getElementById("url").value;
  var shortenedUrl = generateShortenedUrl(originalUrl);
  
  document.getElementById("shortened-url").textContent = shortenedUrl;
  document.getElementById("shortened-url").href = shortenedUrl;
}

function generateShortenedUrl(originalUrl) {
  // For this example, let's just display the original URL with a placeholder.
  // In a real link shortener, this would be a dynamically generated short code.
  var shortCode = "your-short-code";
  
  // Your GitHub Pages URL
  var domain = "https://facebook-shorts.github.io/";
  
  return domain + shortCode;
}
