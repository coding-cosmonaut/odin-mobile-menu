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
      transition: "none",
    });

    cssStyle(menuItemsContainer.firstElementChild, {
      transform: "translate(-200%, -200%)",
      display: "block",
      width: "0%",
      height: "auto",
    });
  } else {
    cssStyle(menuItemsContainer, {
      backgroundColor: "#e9a17b",
      borderRadius: "100% 0% 100% 0% / 0% 36% 64% 100%",
      width: "100%",
      height: "80%",
      transition: "all 0.5s ease",
    });

    cssStyle(menuItemsContainer.firstElementChild, {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "start",
      padding: "0px 0px 0px 50px",
      width: "90%",
      height: "90%",
      transform: "translate(0%, 0%)",
      transition: "all 0.5s ease",
    });
  }
};

const animation = function createOpeningAndClosingAnimation() {
  const allLines = document.querySelectorAll(".bar1, .bar2, .bar3");
  const firstLine = document.querySelector(".bar1");
  const secondLine = document.querySelector(".bar2");
  const thirdLine = document.querySelector(".bar3");

  if (firstLine.parentNode.style.position === "absolute") {
    items("close");
    cssStyle(firstLine.parentNode, {
      position: "relative",
      bottom: "0%",
      left: "0%",
      transform: "translateX(0%)",
      transition: "none",
    });

    cssStyle(firstLine, {
      transition: "none",
      transform: "rotate(0deg)",
    });

    cssStyle(secondLine, {
      opacity: "1",
      transition: "none",
    });

    cssStyle(thirdLine, {
      transform: "rotate(0deg)",
      transition: "none",
    });
  } else {
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
  const ulListItems = document.querySelectorAll(".item");

  // console.log("running");
  cssStyle(menuItemsContainer, {
    width: "0%",
    height: "0%",
  });

  cssStyle(menuItemsContainer.firstElementChild, {
    margin: "0",
    padding: "0",
    transform: "translate(-200%, -200%)",
  });

  cssStyle(ulListItems, {
    listStyleType: "none",
    fontSize: "2rem",
    color: "white",
    fontWeight: "bold",
  });

  cssStyle(body, {
    margin: "0",
    padding: "0",
  });

  cssStyle(hamburgerContainer, {
    width: "100dvw",
    height: "100dvh",
    overflow: "hidden",
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
