/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let asteroids = data.asteroids;
  let yearCounts = {};
  for (let i = 0; i < asteroids.length; i++) {
    let year = asteroids[i].discoveryYear;
    if (yearCounts[year] === undefined) {
      yearCounts[year] = 1;
    } else {
      yearCounts[year]++;
    }
  }
  let yearArray = [];
  for (let year in yearCounts) {
    yearArray.push({ year: Number(year), count: yearCounts[year] });
  }
  let max = maxBy(yearArray, function (x) {
    return x.count;
  });
  console.log("Most discoveries:", max);
  return max.year;
}

//maxBy function
function maxBy(array, cb) {
  // Your code goes here...
  if (array.length === 0) return undefined;
  let highest = cb(array[0]);
  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    let value = cb(array[i]);
    if (value > highest) {
      highest = value;
      result = array[i];
    }
  }
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
