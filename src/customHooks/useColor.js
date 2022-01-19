const colorArr = [
    "#6A8FF1",
    "#8DC4BB",
    "#8DC4BB",
    "#8DC4BB",
    "#6A8FF1"
];

const getRandomColor = () => {
    return colorArr[Math.floor((Math.random() * (colorArr.length - 1)))];
}

const useColor = () => {
    return { getRandomColor };
};

export  default useColor;