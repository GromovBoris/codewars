// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result
// in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
  let rgbArr = [r, g, b];
  rgbArr = rgbArr.map((el) => (el > 255 ? 255 : el));
  rgbArr = rgbArr.map((el) => (el < 0 ? 0 : el));
  rgbArr = rgbArr.map((el) => el.toString(16));
  rgbArr = rgbArr.map((el) => (el.length < 2 ? (el = "0" + el) : el));
  return rgbArr.join("").toUpperCase();
}
