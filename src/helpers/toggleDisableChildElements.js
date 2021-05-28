function toggleDisableChildElements(element) {
    if (element.length <= 0) return;
    if (element === null) {
      console.error('Element sent to disableChildren is null.');
      return null;
    }
  
    for(let i = 0; i < element.length; i++) {
      element.children[i].disabled = !element.children[i].disabled;
    }
  }

  export default toggleDisableChildElements;