const cssStyle = function addCssStyle(element, styles) {
  if (element instanceof NodeList) {
    element.forEach((el) => Object.assign(el.style, styles));
  } else {
    Object.assign(element.style, styles);
  }
};

const items = function mobileItems(action) {
  const menuItemsContainer = document.querySelector(".mobile-items");

  if (action === "close") {
    cssStyle(menuItemsContainer, {
      width: "0%",
      height: "0%",
    });
  } else {
    cssStyle(menuItemsContainer, {
      backgroundColor: "#FBCEB1",
      borderBottomRightRadius: "600px 450px",
      width: "100%",
      height: "80%",
      transition: "all 0.5s ease",
    });
  }
};

const animation = function createOpeningAndClosingAnimation() {
  const allLines = document.querySelectorAll(".bar1, .bar2, .bar3");
  const firstLine = document.querySelector(".bar1");
  const secondLine = document.querySelector(".bar2");
  const thirdLine = document.querySelector(".bar3");

  console.log(firstLine.parentNode.style.position);

  if (firstLine.parentNode.style.position === "absolute") {
    console.log("true - close");
    items("close");
    cssStyle(firstLine.parentNode, {
      position: "relative",
      bottom: "0%",
      left: "0%",
      transform: "translateX(0%)",
    });

    cssStyle(firstLine, {
      transform: "rotate(0deg)",
    });

    cssStyle(secondLine, {
      opacity: "1",
    });

    cssStyle(thirdLine, {
      transform: "rotate(0deg)",
    });
  } else {
    console.log("false - open");
    cssStyle(allLines, {
      transition: "all 300ms ease",
    });

    cssStyle(firstLine, {
      transform: "rotate(45deg)",
      transformOrigin: "top left",
    });

    cssStyle(firstLine.parentNode, {
      position: "absolute",
      bottom: "5%",
      left: "50%",
      transform: "translateX(-50%)",
      transition: "all 0.3s ease",
      borderRadius: "50%",
    });

    cssStyle(secondLine, {
      transformOrigin: "center",
      opacity: "0",
    });

    cssStyle(thirdLine, {
      transform: "rotate(-45deg)",
      transformOrigin: "bottom left",
    });

    items();
  }
};

const attach = function attachClickEventToHamburgerButton(el, func) {
  el.addEventListener("click", func);
};

const mobile = function mobileMenu() {
  const hamburgerContainer = document.querySelectorAll(".mobile-container");
  const hamburgerBttn = document.querySelector(".mobile-hamburger");
  const hamburgerLines = document.querySelectorAll(".bar");
  const body = document.querySelectorAll("body");
  const menuItemsContainer = document.querySelector(".mobile-items");

  // console.log("running");
  cssStyle(menuItemsContainer, {
    width: "0%",
    height: "0%",
  });

  cssStyle(body, {
    margin: "0",
    padding: "0",
  });

  cssStyle(hamburgerContainer, {
    width: "100dvw",
    height: "100dvh",
  });

  cssStyle(hamburgerBttn, {
    position: "relative",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    bottom: "0%",
  });

  cssStyle(hamburgerLines, {
    width: "80%",
    height: "8%",
    backgroundColor: "black",
  });

  attach(hamburgerBttn, animation);
};

export default mobile;