let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function (element) {
    urls.push(urlify(element));
  });
  return urls;
}

console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map((element) => urlify(element));
}

console.log(functionalUrls(states));

function generateUrls(elements) {
  return elements.map(
    (element) => `https://www.example.com/${urlify(element)}`
  );
}

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function (element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter((element) => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

function filterIncludesDakota(elements) {
  return elements.filter((element) => element.includes("Dakota"));
}

function filterRegex(elements) {
  return elements.filter((element) => element.split(/\s+/).length === 2);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function (n) {
    total += n;
  });
  return total;
}

console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => {
    return (total += n);
  });
}

console.log(functionalSum(numbers));
