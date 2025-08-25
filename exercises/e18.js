/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "../exercises/e17.js";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let findAsteroid = (acc, discoveryYear) => {
    let asteroid = acc.find((year) => year.discoveryYear === discoveryYear);
    if (!asteroid) {
      return [...acc, { discoveryYear, number: 1 }];
    } else {
      acc[acc.indexOf(asteroid)].number++;
      return acc;
    }
  };

  let arr = data.asteroids.reduce((acc, value) => {
    return findAsteroid(acc, value.discoveryYear);
  }, []);
  let find = maxBy(arr, (asteroid) => asteroid.number);
  return find.discoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
