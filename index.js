// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{
  let result = driver;
  for (const k in driver) {
    result[k] = driver[k];
  }
  result[key] = value;
  result;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
  driver[key] = value;
  driver;
}

function deleteFromDriverByKey(driver, key)
{
  let result = driver;
  for (const k in driver) {
    if (k != key) {
      result[k] = driver[k];
    }
  }
}
