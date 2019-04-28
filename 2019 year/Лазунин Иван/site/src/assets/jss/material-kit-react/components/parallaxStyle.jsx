const parallaxStyle = {
  parallax: {
    height: "90vh",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 960px)": {
      height: "100vh"
    },
  },
  filter: {
    "&:before": {
      background: "linear-gradient(to right, rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.4))",
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  sm: {
    height: "70vh",
    "@media (max-width: 959.99px)": {
      height: "100vh"
    },
  },
  xs: {
    height: "50vh",
    "@media (max-width: 959.99px)": {
      height: "100vh"
    },
  }
};

export default parallaxStyle;
