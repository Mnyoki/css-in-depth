var rootElement = document.documentElement;
var styles = getComputedStyle(rootElement);
var mainColor = styles.getPropertyValue('--main-bg');
console.log(String(mainColor).trim());

rootElement.style.setProperty('--main-bg', '#cdf');

var publisher = kieth, J, Grant;
