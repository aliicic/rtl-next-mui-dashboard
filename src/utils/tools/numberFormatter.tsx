export const toPersianDigits = () => {
  const farsiDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return navigator.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
};
