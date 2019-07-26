const stylesList = {
  container: "container",
  imgResponsiveWidth: "imgResponsiveWidth",
  imgResponsiveHeight: "imgResponsiveHeight",
  column: "column",
  columnReverse: "columnReverse",
  row: "row",
  rowReverse: "rowReverse",
  opa0: "opa0",
  opa1: "opa1",
  visiShow: "visiShow",
  visiHidden: "visiHidden",
  zIndexLower: "zIndexLower",
  zIndexLow: "zIndexLow",
  zIndexMid: "zIndexMid",
  zIndexTop: "zIndexTop",
  zIndexUpper: "zIndexUpper",
  bold: "bold",
  bolder: "bolder",
  normal: "normal",
  jcCenter: "jcCenter",
  jcStart: "jcStart",
  jcEnd: "jcEnd",
  jcBetween: "jcBetween",
  jcAround: "jcAround",
  jcEvenly: "jcEvenly",
  txtLeft: "txtLeft",
  txtCenter: "txtCenter",
  txtRight: "txtRight",
  txtJustify: "txtJustify",
  aiStart: "aiStart",
  aiEnd: "aiEnd",
  aiCenter: "aiCenter",
  aiStretch: "aiStretch",
  aiBaseline: "aiBaseline",
  posAbsolute: "posAbsolute",
  posFixed: "posFixed",
  posRelative: "posRelative",
  posStatic: "posStatic",
  disBlock: "disBlock",
  disInlineBlock: "disInlineBlock",
  disNone: "disNone",
  disFlex: "disFlex",
  disInlineFlex: "disInlineFlex",
  overScroll: "overScroll",
  overAuto: "overAuto",
  overHidden: "overHidden",
  overXScroll: "overXScroll",
  overXAuto: "overXAuto",
  overXHidden: "overXHidden",
  overYScroll: "overYScroll",
  overYAuto: "overYAuto",
  overYHidden: "overYHidden",
  xsPadAll: "xsPadAll",
  smPadAll: "smPadAll",
  mdPadAll: "mdPadAll",
  lgPadAll: "lgPadAll",
  xlPadAll: "xlPadAll",
  xsPadTop: "xsPadTop",
  smPadTop: "smPadTop",
  mdPadTop: "mdPadTop",
  lgPadTop: "lgPadTop",
  xlPadTop: "xlPadTop",
  xsPadRight: "xsPadRight",
  smPadRight: "smPadRight",
  mdPadRight: "mdPadRight",
  lgPadRight: "lgPadRight",
  xlPadRight: "xlPadRight",
  xsPadBottom: "xsPadBottom",
  smPadBottom: "smPadBottom",
  mdPadBottom: "mdPadBottom",
  lgPadBottom: "lgPadBottom",
  xlPadBottom: "xlPadBottom",
  xsPadLeft: "xsPadLeft",
  smPadLeft: "smPadLeft",
  mdPadLeft: "mdPadLeft",
  lgPadLeft: "lgPadLeft",
  xlPadLeft: "xlPadLeft",
  xsMarAll: "xsMarAll",
  smMarAll: "smMarAll",
  mdMarAll: "mdMarAll",
  lgMarAll: "lgMarAll",
  xlMarAll: "xlMarAll",
  xsMarTop: "xsMarTop",
  smMarTop: "smMarTop",
  mdMarTop: "mdMarTop",
  lgMarTop: "lgMarTop",
  xlMarTop: "xlMarTop",
  xsMarRight: "xsMarRight",
  smMarRight: "smMarRight",
  mdMarRight: "mdMarRight",
  lgMarRight: "lgMarRight",
  xlMarRight: "xlMarRight",
  xsMarBottom: "xsMarBottom",
  smMarBottom: "smMarBottom",
  mdMarBottom: "mdMarBottom",
  lgMarBottom: "lgMarBottom",
  xlMarBottom: "xlMarBottom",
  xsMarLeft: "xsMarLeft",
  smMarLeft: "smMarLeft",
  mdMarLeft: "mdMarLeft",
  lgMarLeft: "lgMarLeft",
  xlMarLeft: "xlMarLeft",
  xsLineHeight: "xsLineHeight",
  smLineHeight: "smLineHeight",
  mdLineHeight: "mdLineHeight",
  lgLineHeight: "lgLineHeight",
  xlLineHeight: "xlLineHeight",
  black: "black",
  bilbao: "bilbao",
  blackRussian: "blackRussian",
  babyBlue: "babyBlue",
  cobalt: "cobalt",
  charcoal: "charcoal",
  cerulean: "cerulean",
  carmine: "carmine",
  columbiaBlue: "columbiaBlue",
  columbiaBlue2: "columbiaBlue2",
  deepSkyBlue: "deepSkyBlue",
  denim: "denim",
  darkGrey: "darkGrey",
  gainsboro: "gainsboro",
  gainsboro2: "gainsboro2",
  grey: "grey",
  grey2: "grey2",
  lightningYellow: "lightningYellow",
  nightRider: "nightRider",
  navyBlue: "navyBlue",
  nobel: "nobel",
  nobel2: "nobel2",
  pattensBlue: "pattensBlue",
  pattensBlue2: "pattensBlue2",
  pumpkin: "pumpkin",
  pacificBlue: "pacificBlue",
  summerSky: "summerSky",
  summerSky2: "summerSky2",
  sapphire: "sapphire",
  salomie: "salomie",
  tomato: "tomato",
  venetianRed: "venetianRed",
  venetianRed2: "venetianRed2",
  vidaLoca: "vidaLoca",
  white: "white",
  whisper: "whisper",
  yellowGreen: "yellowGreen",
  bgBlack: "bgBlack",
  bgBilbao: "bgBilbao",
  bgBlackRussian: "bgBlackRussian",
  bgBabyBlue: "bgBabyBlue",
  bgCobalt: "bgCobalt",
  bgCharcoal: "bgCharcoal",
  bgCerulean: "bgCerulean",
  bgCarmine: "bgCarmine",
  bgColumbiaBlue: "bgColumbiaBlue",
  bgColumbiaBlue2: "bgColumbiaBlue2",
  bgDeepSkyBlue: "bgDeepSkyBlue",
  bgDenim: "bgDenim",
  bgDarkGrey: "bgDarkGrey",
  bgGainsboro: "bgGainsboro",
  bgGainsboro2: "bgGainsboro2",
  bgGrey: "bgGrey",
  bgGrey2: "bgGrey2",
  bgLightningYellow: "bgLightningYellow",
  bgNightRider: "bgNightRider",
  bgNavyBlue: "bgNavyBlue",
  bgNobel: "bgNobel",
  bgNobel2: "bgNobel2",
  bgPattensBlue: "bgPattensBlue",
  bgPattensBlue2: "bgPattensBlue2",
  bgPumpkin: "bgPumpkin",
  bgPacificBlue: "bgPacificBlue",
  bgSummerSky: "bgSummerSky",
  bgSummerSky2: "bgSummerSky2",
  bgSapphire: "bgSapphire",
  bgSalomie: "bgSalomie",
  bgTomato: "bgTomato",
  bgTransparent: "bgTransparent",
  bgVenetianRed: "bgVenetianRed",
  bgVenetianRed2: "bgVenetianRed2",
  bgVidaLoca: "bgVidaLoca",
  bgWhite: "bgWhite",
  bgWhisper: "bgWhisper",
  bgYellowGreen: "bgYellowGreen"
};

const stylesProps = {
  xs: {
    spacing: "4px",
    container: "100%",
    minWidth: "0px",
    maxWidth: "599px"
  },
  sm: {
    spacing: "8px",
    container: "582px",
    minWidth: "600px",
    maxWidth: "959px"
  },
  md: {
    spacing: "16px",
    container: "938px",
    minWidth: "960px",
    maxWidth: "1279px"
  },
  lg: {
    spacing: "32px",
    container: "1250px",
    minWidth: "1280px",
    maxWidth: "1919px"
  },
  xl: {
    spacing: "64px",
    container: "1250px",
    minWidth: "1920px"
  }
};

const breakpoints = {
  up: key => `@media (min-width: ${stylesProps[key].minWidth})`,
  down: key => {
    if (key === "xl") {
      return "@media (min-width: 0px)";
    } else {
      return `@media (max-width: ${stylesProps[key].maxWidth})`;
    }
  },
  only: key => {
    if (key === "xl") {
      return `@media (min-width: ${stylesProps[key].minWidth})`;
    } else {
      return `@media (min-width: ${stylesProps[key].minWidth}) 
      and (max-width: ${stylesProps[key].maxWidth})`;
    }
  },
  between: (start, end) => {
    if (end === "xl") {
      return `@media (min-width: ${stylesProps[start].minWidth})`;
    } else {
      return `@media (min-width: ${stylesProps[start].minWidth}) 
      and @media (max-width: ${stylesProps[end].minWidth})`;
    }
  }
};

const colors = {
  //B
  black: "#000000",
  bilbao: "#417505",
  blackRussian: "#171719",
  babyBlue: "#55f3f4",
  //C
  cobalt: "#005197",
  charcoal: "#4a4a4a",
  cerulean: "#0070b8",
  columbiaBlue: "#9ce2fc",
  carmine: "#b00020",
  columbiaBlue2: "#9BE4FF",
  //D
  deepSkyBlue: "#00a1ff",
  denim: "#1a69c1",
  darkGrey: "#A7A7A7",
  //G
  gainsboro: "#d8d8d8",
  gainsboro2: "#DDDDDD",
  grey: "#7A7A7A",
  grey2: "#838383",
  //L
  lightningYellow: "#f5a623",
  //N
  nightRider: "#353535",
  navyBlue: "#0081cc",
  nobel: "#9b9b9b",
  nobel2: "#979797",
  //P
  pattensBlue: "#d0f0fb",
  pumpkin: "#f57c23",
  pacificBlue: "#0097CE",
  pattensBlue2: "#ccf1ff",
  //S
  summerSky: "#2dbdf1",
  summerSky2: "#43C8F4",
  sapphire: "#022777",
  salomie: "#ffcf80",
  //T
  tomato: "#ff7043",
  //V
  venetianRed: "#d9001b",
  venetianRed2: "#d0021b",
  vidaLoca: "#538c15",
  //W
  white: "#FFFFFF",
  whisper: "#e5e5e5",
  //Y
  yellowGreen: "#7ed321"
};

const globalStyles = {
  // Default Styles
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      border: "none",
      fontFamily: "'Roboto', sans-serif",
      listStyle: "none",
      textDecoration: "none"
    },
    body: {
      backgroundColor: "#F5F5F5"
    }
  },

  //Container
  container: {
    [breakpoints.only("xs")]: {
      width: stylesProps.xs.container
    },
    [breakpoints.only("sm")]: {
      width: stylesProps.sm.container
    },
    [breakpoints.only("md")]: {
      width: stylesProps.md.container
    },
    [breakpoints.only("lg")]: {
      width: stylesProps.lg.container
    },
    [breakpoints.only("xl")]: {
      width: stylesProps.xl.container
    }
  },

  //Grid (Not Included In List)
  //xs
  xs1: {
    [breakpoints.up("xs")]: {
      maxWidth: "8.3333333%",
      flexGrow: 0,
      flexBasis: "8.3333333%",
      boxSizing: "border-box"
    }
  },
  xs2: {
    [breakpoints.up("xs")]: {
      maxWidth: "16.6666667%",
      flexGrow: 0,
      flexBasis: "16.6666667%",
      boxSizing: "border-box"
    }
  },
  xs3: {
    [breakpoints.up("xs")]: {
      maxWidth: "25%",
      flexGrow: 0,
      flexBasis: "25%",
      boxSizing: "border-box"
    }
  },
  xs4: {
    [breakpoints.up("xs")]: {
      maxWidth: "33.33333333%",
      flexGrow: 0,
      flexBasis: "33.33333333%",
      boxSizing: "border-box"
    }
  },
  xs5: {
    [breakpoints.up("xs")]: {
      maxWidth: "41.66666667%",
      flexGrow: 0,
      flexBasis: "41.66666667%",
      boxSizing: "border-box"
    }
  },
  xs6: {
    [breakpoints.up("xs")]: {
      maxWidth: "50%",
      flexGrow: 0,
      flexBasis: "50%",
      boxSizing: "border-box"
    }
  },
  xs7: {
    [breakpoints.up("xs")]: {
      maxWidth: "58.33333333%",
      flexGrow: 0,
      flexBasis: "58.33333333%",
      boxSizing: "border-box"
    }
  },
  xs8: {
    [breakpoints.up("xs")]: {
      maxWidth: "66.66666667%",
      flexGrow: 0,
      flexBasis: "66.66666667%",
      boxSizing: "border-box"
    }
  },
  xs9: {
    [breakpoints.up("xs")]: {
      maxWidth: "75%",
      flexGrow: 0,
      flexBasis: "75%",
      boxSizing: "border-box"
    }
  },
  xs10: {
    [breakpoints.up("xs")]: {
      maxWidth: "83.33333333%",
      flexGrow: 0,
      flexBasis: "83.33333333%",
      boxSizing: "border-box"
    }
  },
  xs11: {
    [breakpoints.up("xs")]: {
      maxWidth: "91.66666667%",
      flexGrow: 0,
      flexBasis: "91.66666667%",
      boxSizing: "border-box"
    }
  },
  xs12: {
    [breakpoints.up("xs")]: {
      maxWidth: "100%",
      flexGrow: 0,
      flexBasis: "100%",
      boxSizing: "border-box"
    }
  },
  //sm
  sm1: {
    [breakpoints.up("sm")]: {
      maxWidth: "8.3333333%",
      flexGrow: 0,
      flexBasis: "8.3333333%",
      boxSizing: "border-box"
    }
  },
  sm2: {
    [breakpoints.up("sm")]: {
      maxWidth: "16.6666667%",
      flexGrow: 0,
      flexBasis: "16.6666667%",
      boxSizing: "border-box"
    }
  },
  sm3: {
    [breakpoints.up("sm")]: {
      maxWidth: "25%",
      flexGrow: 0,
      flexBasis: "25%",
      boxSizing: "border-box"
    }
  },
  sm4: {
    [breakpoints.up("sm")]: {
      maxWidth: "33.33333333%",
      flexGrow: 0,
      flexBasis: "33.33333333%",
      boxSizing: "border-box"
    }
  },
  sm5: {
    [breakpoints.up("sm")]: {
      maxWidth: "41.66666667%",
      flexGrow: 0,
      flexBasis: "41.66666667%",
      boxSizing: "border-box"
    }
  },
  sm6: {
    [breakpoints.up("sm")]: {
      maxWidth: "50%",
      flexGrow: 0,
      flexBasis: "50%",
      boxSizing: "border-box"
    }
  },
  sm7: {
    [breakpoints.up("sm")]: {
      maxWidth: "58.33333333%",
      flexGrow: 0,
      flexBasis: "58.33333333%",
      boxSizing: "border-box"
    }
  },
  sm8: {
    [breakpoints.up("sm")]: {
      maxWidth: "66.66666667%",
      flexGrow: 0,
      flexBasis: "66.66666667%",
      boxSizing: "border-box"
    }
  },
  sm9: {
    [breakpoints.up("sm")]: {
      maxWidth: "75%",
      flexGrow: 0,
      flexBasis: "75%",
      boxSizing: "border-box"
    }
  },
  sm10: {
    [breakpoints.up("sm")]: {
      maxWidth: "83.33333333%",
      flexGrow: 0,
      flexBasis: "83.33333333%",
      boxSizing: "border-box"
    }
  },
  sm11: {
    [breakpoints.up("sm")]: {
      maxWidth: "91.66666667%",
      flexGrow: 0,
      flexBasis: "91.66666667%",
      boxSizing: "border-box"
    }
  },
  sm12: {
    [breakpoints.up("sm")]: {
      maxWidth: "100%",
      flexGrow: 0,
      flexBasis: "100%",
      boxSizing: "border-box"
    }
  },
  //md
  md1: {
    [breakpoints.up("md")]: {
      maxWidth: "8.3333333%",
      flexGrow: 0,
      flexBasis: "8.3333333%",
      boxSizing: "border-box"
    }
  },
  md2: {
    [breakpoints.up("md")]: {
      maxWidth: "16.6666667%",
      flexGrow: 0,
      flexBasis: "16.6666667%",
      boxSizing: "border-box"
    }
  },
  md3: {
    [breakpoints.up("md")]: {
      maxWidth: "25%",
      flexGrow: 0,
      flexBasis: "25%",
      boxSizing: "border-box"
    }
  },
  md4: {
    [breakpoints.up("md")]: {
      maxWidth: "33.33333333%",
      flexGrow: 0,
      flexBasis: "33.33333333%",
      boxSizing: "border-box"
    }
  },
  md5: {
    [breakpoints.up("md")]: {
      maxWidth: "41.66666667%",
      flexGrow: 0,
      flexBasis: "41.66666667%",
      boxSizing: "border-box"
    }
  },
  md6: {
    [breakpoints.up("md")]: {
      maxWidth: "50%",
      flexGrow: 0,
      flexBasis: "50%",
      boxSizing: "border-box"
    }
  },
  md7: {
    [breakpoints.up("md")]: {
      maxWidth: "58.33333333%",
      flexGrow: 0,
      flexBasis: "58.33333333%",
      boxSizing: "border-box"
    }
  },
  md8: {
    [breakpoints.up("md")]: {
      maxWidth: "66.66666667%",
      flexGrow: 0,
      flexBasis: "66.66666667%",
      boxSizing: "border-box"
    }
  },
  md9: {
    [breakpoints.up("md")]: {
      maxWidth: "75%",
      flexGrow: 0,
      flexBasis: "75%",
      boxSizing: "border-box"
    }
  },
  md10: {
    [breakpoints.up("md")]: {
      maxWidth: "83.33333333%",
      flexGrow: 0,
      flexBasis: "83.33333333%",
      boxSizing: "border-box"
    }
  },
  md11: {
    [breakpoints.up("md")]: {
      maxWidth: "91.66666667%",
      flexGrow: 0,
      flexBasis: "91.66666667%",
      boxSizing: "border-box"
    }
  },
  md12: {
    [breakpoints.up("md")]: {
      maxWidth: "100%",
      flexGrow: 0,
      flexBasis: "100%",
      boxSizing: "border-box"
    }
  },
  //lg
  lg1: {
    [breakpoints.up("lg")]: {
      maxWidth: "8.3333333%",
      flexGrow: 0,
      flexBasis: "8.3333333%",
      boxSizing: "border-box"
    }
  },
  lg2: {
    [breakpoints.up("lg")]: {
      maxWidth: "16.6666667%",
      flexGrow: 0,
      flexBasis: "16.6666667%",
      boxSizing: "border-box"
    }
  },
  lg3: {
    [breakpoints.up("lg")]: {
      maxWidth: "25%",
      flexGrow: 0,
      flexBasis: "25%",
      boxSizing: "border-box"
    }
  },
  lg4: {
    [breakpoints.up("lg")]: {
      maxWidth: "33.33333333%",
      flexGrow: 0,
      flexBasis: "33.33333333%",
      boxSizing: "border-box"
    }
  },
  lg5: {
    [breakpoints.up("lg")]: {
      maxWidth: "41.66666667%",
      flexGrow: 0,
      flexBasis: "41.66666667%",
      boxSizing: "border-box"
    }
  },
  lg6: {
    [breakpoints.up("lg")]: {
      maxWidth: "50%",
      flexGrow: 0,
      flexBasis: "50%",
      boxSizing: "border-box"
    }
  },
  lg7: {
    [breakpoints.up("lg")]: {
      maxWidth: "58.33333333%",
      flexGrow: 0,
      flexBasis: "58.33333333%",
      boxSizing: "border-box"
    }
  },
  lg8: {
    [breakpoints.up("lg")]: {
      maxWidth: "66.66666667%",
      flexGrow: 0,
      flexBasis: "66.66666667%",
      boxSizing: "border-box"
    }
  },
  lg9: {
    [breakpoints.up("lg")]: {
      maxWidth: "75%",
      flexGrow: 0,
      flexBasis: "75%",
      boxSizing: "border-box"
    }
  },
  lg10: {
    [breakpoints.up("lg")]: {
      maxWidth: "83.33333333%",
      flexGrow: 0,
      flexBasis: "83.33333333%",
      boxSizing: "border-box"
    }
  },
  lg11: {
    [breakpoints.up("lg")]: {
      maxWidth: "91.66666667%",
      flexGrow: 0,
      flexBasis: "91.66666667%",
      boxSizing: "border-box"
    }
  },
  lg12: {
    [breakpoints.up("lg")]: {
      maxWidth: "100%",
      flexGrow: 0,
      flexBasis: "100%",
      boxSizing: "border-box"
    }
  },
  //xl
  xl1: {
    [breakpoints.up("xl")]: {
      maxWidth: "8.3333333%",
      flexGrow: 0,
      flexBasis: "8.3333333%",
      boxSizing: "border-box"
    }
  },
  xl2: {
    [breakpoints.up("xl")]: {
      maxWidth: "16.6666667%",
      flexGrow: 0,
      flexBasis: "16.6666667%",
      boxSizing: "border-box"
    }
  },
  xl3: {
    [breakpoints.up("xl")]: {
      maxWidth: "25%",
      flexGrow: 0,
      flexBasis: "25%",
      boxSizing: "border-box"
    }
  },
  xl4: {
    [breakpoints.up("xl")]: {
      maxWidth: "33.33333333%",
      flexGrow: 0,
      flexBasis: "33.33333333%",
      boxSizing: "border-box"
    }
  },
  xl5: {
    [breakpoints.up("xl")]: {
      maxWidth: "41.66666667%",
      flexGrow: 0,
      flexBasis: "41.66666667%",
      boxSizing: "border-box"
    }
  },
  xl6: {
    [breakpoints.up("xl")]: {
      maxWidth: "50%",
      flexGrow: 0,
      flexBasis: "50%",
      boxSizing: "border-box"
    }
  },
  xl7: {
    [breakpoints.up("xl")]: {
      maxWidth: "58.33333333%",
      flexGrow: 0,
      flexBasis: "58.33333333%",
      boxSizing: "border-box"
    }
  },
  xl8: {
    [breakpoints.up("xl")]: {
      maxWidth: "66.66666667%",
      flexGrow: 0,
      flexBasis: "66.66666667%",
      boxSizing: "border-box"
    }
  },
  xl9: {
    [breakpoints.up("xl")]: {
      maxWidth: "75%",
      flexGrow: 0,
      flexBasis: "75%",
      boxSizing: "border-box"
    }
  },
  xl10: {
    [breakpoints.up("xl")]: {
      maxWidth: "83.33333333%",
      flexGrow: 0,
      flexBasis: "83.33333333%",
      boxSizing: "border-box"
    }
  },
  xl11: {
    [breakpoints.up("xl")]: {
      maxWidth: "91.66666667%",
      flexGrow: 0,
      flexBasis: "91.66666667%",
      boxSizing: "border-box"
    }
  },
  xl12: {
    [breakpoints.up("xl")]: {
      maxWidth: "100%",
      flexGrow: 0,
      flexBasis: "100%",
      boxSizing: "border-box"
    }
  },

  //Image Responsive
  imgResponsiveWidth: {
    maxWidth: "100%",
    height: "auto"
  },
  imgResponsiveHeight: {
    maxHeight: "100%",
    width: "auto"
  },

  //Column and Row
  column: {
    display: "flex",
    flexDirection: "column"
  },
  columnReverse: {
    display: "flex",
    flexDirection: "column-reverse"
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  rowReverse: {
    display: "flex",
    flexDirection: "row-reverse"
  },

  // Flex (Not Included In List)
  flex0: {
    flex: 0
  },
  flex1: {
    flex: 1
  },

  // Flex-Wrap (Not Included In List)
  fwNoWrap: {
    flexWrap: "nowrap"
  },
  fwWrap: {
    flexWrap: "wrap"
  },
  fwWrapReverse: {
    flexWrap: "wrap-reverse"
  },

  //Opacity
  opa0: {
    opacity: 0
  },
  opa1: {
    opacity: 1
  },

  //Visibility
  visiShow: {
    visibility: "visible"
  },
  visiHidden: {
    visibility: "hidden"
  },

  //Z-Index
  zIndexLower: {
    zIndex: 0
  },
  zIndexLow: {
    zIndex: 100
  },
  zIndexMid: {
    zIndex: 200
  },
  zIndexTop: {
    zIndex: 300
  },
  zIndexUpper: {
    zIndex: 400
  },

  //Box-Shadow (Not Included In List)
  shadowLower: {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
  },
  shadowLow: {
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  },
  shadowMid: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
  },
  shadowTop: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  },
  shadowUpper: {
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  },

  //Border-Radius (Not Included In List)
  square: {
    borderRadius: 0
  },
  rounded: {
    borderRadius: 8
  },
  circle: {
    borderRadius: "50%"
  },

  //Font-Weight
  bold: {
    fontWeight: "bold"
  },
  bolder: {
    fontWeight: "bolder"
  },
  normal: {
    fontWeight: "normal"
  },

  //Justify Content
  jcNormal: {
    justifyContent: "normal" // Not Included In List
  },
  jcCenter: {
    justifyContent: "center"
  },
  jcStart: {
    justifyContent: "flex-start"
  },
  jcEnd: {
    justifyContent: "flex-end"
  },
  jcBetween: {
    justifyContent: "space-between"
  },
  jcAround: {
    justifyContent: "space-around"
  },
  jcEvenly: {
    justifyContent: "space-evenly"
  },

  //Text Align
  txtLeft: {
    textAlign: "left"
  },
  txtCenter: {
    textAlign: "center"
  },
  txtRight: {
    textAlign: "right"
  },
  txtJustify: {
    textAlign: "justify"
  },

  //Align Items
  aiNormal: {
    alignItems: "normal" // Not Included In List
  },
  aiStart: {
    alignItems: "flex-start"
  },
  aiEnd: {
    alignItems: "flex-end"
  },
  aiCenter: {
    alignItems: "center"
  },
  aiStretch: {
    alignItems: "stretch"
  },
  aiBaseline: {
    alignItems: "baseline"
  },

  //Position
  posAbsolute: {
    position: "absolute"
  },
  posFixed: {
    position: "fixed"
  },
  posRelative: {
    position: "relative"
  },
  posStatic: {
    position: "static"
  },

  //Display
  disBlock: {
    display: "block"
  },
  disInlineBlock: {
    display: "inline-block"
  },
  disNone: {
    display: "none"
  },
  disFlex: {
    display: "flex"
  },
  disInlineFlex: {
    display: "inline-flex"
  },

  //Overflow
  overScroll: {
    overflow: "scroll"
  },
  overAuto: {
    overflow: "auto"
  },
  overHidden: {
    overflow: "hidden"
  },

  //Overflow-X
  overXScroll: {
    overflowX: "scroll"
  },
  overXAuto: {
    overflowX: "auto"
  },
  overXHidden: {
    overflowX: "hidden"
  },

  //Overflow-Y
  overYScroll: {
    overflowY: "scroll"
  },
  overYAuto: {
    overflowY: "auto"
  },
  overYHidden: {
    overflowY: "hidden"
  },

  //Width (Not Included In List)
  fullWidth: {
    width: "100%"
  },
  halfWidth: {
    width: "50%"
  },

  //Padding All
  xsPadAll: {
    padding: stylesProps.xs.spacing
  },
  smPadAll: {
    padding: stylesProps.sm.spacing
  },
  mdPadAll: {
    padding: stylesProps.md.spacing
  },
  lgPadAll: {
    padding: stylesProps.lg.spacing
  },
  xlPadAll: {
    padding: stylesProps.xl.spacing
  },
  //Padding Top
  xsPadTop: {
    paddingTop: stylesProps.xs.spacing
  },
  smPadTop: {
    paddingTop: stylesProps.sm.spacing
  },
  mdPadTop: {
    paddingTop: stylesProps.md.spacing
  },
  lgPadTop: {
    paddingTop: stylesProps.lg.spacing
  },
  xlPadTop: {
    paddingTop: stylesProps.xl.spacing
  },
  //Padding Right
  xsPadRight: {
    paddingRight: stylesProps.xs.spacing
  },
  smPadRight: {
    paddingRight: stylesProps.sm.spacing
  },
  mdPadRight: {
    paddingRight: stylesProps.md.spacing
  },
  lgPadRight: {
    paddingRight: stylesProps.lg.spacing
  },
  xlPadRight: {
    paddingRight: stylesProps.xl.spacing
  },
  //Padding Bottom
  xsPadBottom: {
    paddingBottom: stylesProps.xs.spacing
  },
  smPadBottom: {
    paddingBottom: stylesProps.sm.spacing
  },
  mdPadBottom: {
    paddingBottom: stylesProps.md.spacing
  },
  lgPadBottom: {
    paddingBottom: stylesProps.lg.spacing
  },
  xlPadBottom: {
    paddingBottom: stylesProps.xl.spacing
  },
  //Padding Left
  xsPadLeft: {
    paddingLeft: stylesProps.xs.spacing
  },
  smPadLeft: {
    paddingLeft: stylesProps.sm.spacing
  },
  mdPadLeft: {
    paddingLeft: stylesProps.md.spacing
  },
  lgPadLeft: {
    paddingLeft: stylesProps.lg.spacing
  },
  xlPadLeft: {
    paddingLeft: stylesProps.xl.spacing
  },

  //Margin All
  xsMarAll: {
    margin: stylesProps.xs.spacing
  },
  smMarAll: {
    margin: stylesProps.sm.spacing
  },
  mdMarAll: {
    margin: stylesProps.md.spacing
  },
  lgMarAll: {
    margin: stylesProps.lg.spacing
  },
  xlMarAll: {
    margin: stylesProps.xl.spacing
  },
  //Margin Top
  xsMarTop: {
    marginTop: stylesProps.xs.spacing
  },
  smMarTop: {
    marginTop: stylesProps.sm.spacing
  },
  mdMarTop: {
    marginTop: stylesProps.md.spacing
  },
  lgMarTop: {
    marginTop: stylesProps.lg.spacing
  },
  xlMarTop: {
    marginTop: stylesProps.xl.spacing
  },
  //Margin Right
  xsMarRight: {
    marginRight: stylesProps.xs.spacing
  },
  smMarRight: {
    marginRight: stylesProps.sm.spacing
  },
  mdMarRight: {
    marginRight: stylesProps.md.spacing
  },
  lgMarRight: {
    marginRight: stylesProps.lg.spacing
  },
  xlMarRight: {
    marginRight: stylesProps.xl.spacing
  },
  //Margin Bottom
  xsMarBottom: {
    marginBottom: stylesProps.xs.spacing
  },
  smMarBottom: {
    marginBottom: stylesProps.sm.spacing
  },
  mdMarBottom: {
    marginBottom: stylesProps.md.spacing
  },
  lgMarBottom: {
    marginBottom: stylesProps.lg.spacing
  },
  xlMarBottom: {
    marginBottom: stylesProps.xl.spacing
  },
  //Margin Left
  xsMarLeft: {
    marginLeft: stylesProps.xs.spacing
  },
  smMarLeft: {
    marginLeft: stylesProps.sm.spacing
  },
  mdMarLeft: {
    marginLeft: stylesProps.md.spacing
  },
  lgMarLeft: {
    marginLeft: stylesProps.lg.spacing
  },
  xlMarLeft: {
    marginLeft: stylesProps.xl.spacing
  },

  //Line Height
  xsLineHeight: {
    lineHeight: stylesProps.xs.spacing
  },
  smLineHeight: {
    lineHeight: stylesProps.sm.spacing
  },
  mdLineHeight: {
    lineHeight: stylesProps.md.spacing
  },
  lgLineHeight: {
    lineHeight: stylesProps.lg.spacing
  },
  xlLineHeight: {
    lineHeight: stylesProps.xl.spacing
  },

  //Line Spacing (Not Included In List)
  xsLetterSpacing: {
    letterSpacing: "1px"
  },
  smLetterSpacing: {
    letterSpacing: "2px"
  },
  mdLetterSpacing: {
    letterSpacing: "3px"
  },
  lgLetterSpacing: {
    letterSpacing: "4px"
  },
  xlLetterSpacing: {
    letterSpacing: "5px"
  },

  //Colors
  //B
  clBlack: {
    color: colors.black
  },
  clBilbao: {
    color: colors.bilbao
  },
  clBlackRussian: {
    color: colors.blackRussian
  },
  clBabyBlue: {
    color: colors.babyBlue
  },
  //C
  clCobalt: {
    color: colors.cobalt
  },
  clCharcoal: {
    color: colors.charcoal
  },
  clCerulean: {
    color: colors.cerulean
  },
  clCarmine: {
    color: colors.carmine
  },
  clColumbiaBlue: {
    color: colors.columbiaBlue
  },
  clColumbiaBlue2: {
    color: colors.columbiaBlue2
  },
  //D
  clDeepSkyBlue: {
    color: colors.deepSkyBlue
  },
  clDenim: {
    color: colors.denim
  },
  clDarkGrey: {
    color: colors.darkGrey
  },
  //G
  clGainsboro: {
    color: colors.gainsboro
  },
  clGainsboro2: {
    color: colors.gainsboro2
  },
  clGrey: {
    color: colors.grey
  },
  clGrey2: {
    color: colors.grey2
  },
  //L
  clLightningYellow: {
    color: colors.lightningYellow
  },
  //N
  clNightRider: {
    color: colors.nightRider
  },
  clNavyBlue: {
    color: colors.navyBlue
  },
  clNobel: {
    color: colors.nobel
  },
  clNobel2: {
    color: colors.nobel2
  },
  //P
  clPattensBlue: {
    color: colors.pattensBlue
  },
  clPattensBlue2: {
    color: colors.pattensBlue2
  },
  clPumpkin: {
    color: colors.pumpkin
  },
  clPacificBlue: {
    color: colors.pacificBlue
  },
  //S
  clSummerSky: {
    color: colors.summerSky
  },
  clSummerSky2: {
    color: colors.summerSky2
  },
  clSapphire: {
    color: colors.sapphire
  },
  clSalomie: {
    color: colors.salomie
  },
  //T
  clTomato: {
    color: colors.tomato
  },
  //V
  clVenetianRed: {
    color: colors.venetianRed
  },
  clVenetianRed2: {
    color: colors.venetianRed2
  },
  clVidaLoca: {
    color: colors.vidaLoca
  },
  //W
  clWhite: {
    color: colors.white
  },
  clWhisper: {
    color: colors.whisper
  },
  //Y
  clYellowGreen: {
    color: colors.yellowGreen
  },

  //BackgroundColor
  //B
  bgBlack: {
    backgroundColor: colors.black
  },
  bgBilbao: {
    backgroundColor: colors.bilbao
  },
  bgBlackRussian: {
    backgroundColor: colors.blackRussian
  },
  bgBabyBlue: {
    backgroundColor: colors.babyBlue
  },
  //C
  bgCobalt: {
    backgroundColor: colors.cobalt
  },
  bgCharcoal: {
    backgroundColor: colors.charcoal
  },
  bgCerulean: {
    backgroundColor: colors.cerulean
  },
  bgCarmine: {
    backgroundColor: colors.carmine
  },
  bgColumbiaBlue: {
    backgroundColor: colors.columbiaBlue
  },
  bgColumbiaBlue2: {
    backgroundColor: colors.columbiaBlue2
  },
  //D
  bgDeepSkyBlue: {
    backgroundColor: colors.deepSkyBlue
  },
  bgDenim: {
    backgroundColor: colors.denim
  },
  bgDarkGrey: {
    backgroundColor: colors.darkGrey
  },
  //G
  bgGainsboro: {
    backgroundColor: colors.gainsboro
  },
  bgGainsboro2: {
    backgroundColor: colors.gainsboro2
  },
  bgGrey: {
    backgroundColor: colors.grey
  },
  bgGrey2: {
    backgroundColor: colors.grey2
  },
  //L
  bgLightningYellow: {
    backgroundColor: colors.lightningYellow
  },
  //N
  bgNightRider: {
    backgroundColor: colors.nightRider
  },
  bgNavyBlue: {
    backgroundColor: colors.navyBlue
  },
  bgNobel: {
    backgroundColor: colors.nobel
  },
  bgNobel2: {
    backgroundColor: colors.nobel2
  },
  //P
  bgPattensBlue: {
    backgroundColor: colors.pattensBlue
  },
  bgPattensBlue2: {
    backgroundColor: colors.pattensBlue2
  },
  bgPumpkin: {
    backgroundColor: colors.pumpkin
  },
  bgPacificBlue: {
    backgroundColor: colors.pacificBlue
  },
  //S
  bgSummerSky: {
    backgroundColor: colors.summerSky
  },
  bgSummerSky2: {
    backgroundColor: colors.summerSky2
  },
  bgSapphire: {
    backgroundColor: colors.sapphire
  },
  bgSalomie: {
    backgroundColor: colors.salomie
  },
  //T
  bgTomato: {
    backgroundColor: colors.tomato
  },
  bgTransparent: {
    backgroundColor: "transparent"
  },
  //V
  bgVenetianRed: {
    backgroundColor: colors.venetianRed
  },
  bgVenetianRed2: {
    backgroundColor: colors.venetianRed2
  },
  bgVidaLoca: {
    backgroundColor: colors.vidaLoca
  },
  //W
  bgWhite: {
    backgroundColor: colors.white
  },
  bgWhisper: {
    backgroundColor: colors.whisper
  },
  //Y
  bgYellowGreen: {
    backgroundColor: colors.yellowGreen
  },

  //Gradient-Color (Not Included in List)
  gradAsh: {
    background:
      "linear-gradient(to right, #3f4c6b, #606c88)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradVirgin: {
    background:
      "linear-gradient(to right, #FFAFBD, #C9FFBF)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradEarthly: {
    background:
      "linear-gradient(to right, #DBD5A4, #649173)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradDirtyFog: {
    background:
      "linear-gradient(to right, #8CA6DB, #B993D6)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradTheStrain: {
    background:
      "linear-gradient(to right, #190A05, #870000)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradReef: {
    background:
      "linear-gradient(to right, #3a7bd5, #00d2ff)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradCandy: {
    background:
      "linear-gradient(to right, #BFE6BA, #D3959B)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradAutumn: {
    background:
      "linear-gradient(to right, #B0DAB9, #DAD299)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradNeslon: {
    background:
      "linear-gradient(to right, #ff9472, #f2709c)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradWinter: {
    background:
      "linear-gradient(to right, #274046, #E6DADA)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradForeverLost: {
    background:
      "linear-gradient(to right, #A8CABA, #5D4157)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradAlmost: {
    background:
      "linear-gradient(to right, #faaca8, #ddd6f3)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradMoor: {
    background:
      "linear-gradient(to right, #9bc5c3, #616161)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradAqualicious: {
    background:
      " linear-gradient(to right, #96DEDA, #50C9C3)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradMistyMeadow: {
    background:
      "linear-gradient(to right, #e4e4d9, #215f00)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradKyoto: {
    background:
      "linear-gradient(to right, #ffc500, #c21500)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradPetrichor: {
    background:
      "linear-gradient(to right, #999966, #666600)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradALostMemory: {
    background:
      "linear-gradient(to right, #FFB88C, #DE6262)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradVasily: {
    background:
      "linear-gradient(to right, #333333, #e9d362)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradBlurryBleach: {
    background:
      "linear-gradient(to right, #cbad6d, #d53369)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradNamn: {
    background:
      "linear-gradient(to right, #7a2828, #a73737)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradDayTripper: {
    background:
      "linear-gradient(to right, #ff5858, #f857a6)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradPinotNoir: {
    background:
      "linear-gradient(to right, #182848, #4b6cb7)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradMiaka: {
    background:
      "linear-gradient(to right, #0ABFBC, #FC354C)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradArmy: {
    background:
      "linear-gradient(to right, #727a17, #414d0b)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradShrimpy: {
    background:
      "linear-gradient(to right, #e65245, #e43a15)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  gradInfluenza: {
    background:
      "linear-gradient(to right, #480048, #C04848)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
};

export { stylesList, colors, globalStyles };
