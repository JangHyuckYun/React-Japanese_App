const margins = {
    sm: ".5rem",
    base: "1rem",
    lg: "2rem",
    xl: "3rem",
};

const paddings = {
    sm: ".5rem",
    base: "1rem",
    lg: "2rem",
    xl: "3rem",
};

const borderRadius = {
  base: "15px"
};

const fonts = {
    family: {
        base: `'Noto Sans KR', sans-serif`,
        title: `'Merriweather', serif`,
    },
    size: {
        min:"1.0rem",
        sm: "1.4rem",
        base: "1.6rem",
        lg: "2rem",
        xl: "2.5rem",
        title: "6rem",
    },
    weight: {
        light: 100,
        normal: 400,
        bold: 700,
    },
};

const colors = {
    red: "#ff4d4d",
    yellow: "#ffff4d",
    blue: "#0099ff",
    green: "#9FE3C1",
};

const size = {
    mobile: "425px",
    tablet: "768px",
    desktop: "1440px",
};

const device = {
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    tablet: `@media only screen and (max-width: ${size.tablet})`,
    desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

const lightThemeColors = {
    ...colors,
    primary: "#333",
    secondary: "#F4F6F8",
    tertiary: "#808080",
};

const darkThemeColors = {
    ...colors,
    primary: "#fff",
    secondary: "#333",
    tertiary: "#d4d0c4",
};

const buttons = {
    colors
}

const defalutTheme = {
    margins,
    paddings,
    borderRadius,
    fonts,
    device,
    buttons,
};

export const darkTheme = {
    ...defalutTheme,
    colors: darkThemeColors,
};

export const lightTheme = {
    ...defalutTheme,
    colors: lightThemeColors,
};