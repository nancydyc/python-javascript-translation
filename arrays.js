"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = []

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }
  console.log(result)
}


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  const sliced_items = items.slice(0, n);
  sliced_items.reverse();
  console.log(sliced_items)

}
