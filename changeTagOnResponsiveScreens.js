function changeTagName(el, newTagName) {
  var n = document.createElement(newTagName);
  var attr = el?.attributes;
  if (attr) {
    for (var i = 0, len = attr?.length; i < len; ++i) {
      n.setAttribute(attr[i].name, attr[i].value);
    }
  }
  if (n) {
    n.innerHTML = el?.innerHTML;
    el?.parentNode.replaceChild(n, el);
  }
}

function handleResize() {
  if (window.innerWidth >= 576) {
    //desktop
    changeTagName(
      document
        .getElementsByTagName("page-title")?.[0]
        .getElementsByTagName("h1")?.[0],
      "p"
    );
    changeTagName(
      document
        .getElementsByTagName("heading")?.[0]
        .getElementsByTagName("p")?.[0],
      "h1"
    );
  } else {
    // mobile
    changeTagName(
      document
        .getElementsByTagName("heading")?.[0]
        .getElementsByTagName("h1")?.[0],
      "p"
    );
    changeTagName(
      document
        .getElementsByTagName("page-title")?.[0]
        .getElementsByTagName("p")?.[0],
      "h1"
    );
  }
}

function updateDuplicateH1() {
  window.addEventListener("resize", handleResize);
  handleResize();
}

updateDuplicateH1();
