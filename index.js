// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{
  let result = driver;
  // for (const key in driver) {
  //   result[key] = driver[key];
  // }
  result[key] = value;
  result;
}
