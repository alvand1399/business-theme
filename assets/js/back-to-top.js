"use strict";
// When the user scrolls down 700px from the top of the document, show the button
window.onscroll = function() {backToTop.scroll();};
const backToTop = {
  btn: document.getElementById("back-to-top"), //Get the button
  // Show and hide the button
  scroll: function() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      this.btn.style.display = "block";
    } else {
      this.btn.style.display = "none";
    }
  },
  // When the user clicks on the button, scroll to the top of the document
  top: function() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }
};