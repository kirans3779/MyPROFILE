 
  const texts = [ "UI Developer.","Angular Developer."];
  let textIndex = 0;
  let index = 0;
  let isDeleting = false;
  let cursorVisible = true;
  
  function typeWriter() {
    const element = document.getElementById("text-write");
    const currentText = texts[textIndex];
    const currentTextLength = currentText.length;
  
    if (!isDeleting) {
      if (cursorVisible) {
        element.textContent = currentText.substring(0, index) + "|";
      } else {
        element.textContent = currentText.substring(0, index);
      }
      index++;
  
      if (index === currentTextLength + 1) {
        isDeleting = true;
        setTimeout(typeWriter, 500);
        return;
      }
    } else {
      element.textContent = currentText.substring(0, index - 1) + "|";
      index--;
  
      if (index === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 200);
        return;
      }
    }
  
    cursorVisible = !cursorVisible; // Toggle cursor visibility
    setTimeout(typeWriter, 100);
  }
  
  typeWriter(); 