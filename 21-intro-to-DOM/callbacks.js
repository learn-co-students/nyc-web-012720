function myMap (arr, callback){
  // √accept an array
  // √iterate through each item
  // √execute some logic on each item (callback)
  // √initialize empty array
  // √return a new array with these new things

  const newArray = []
  
  arr.forEach(function(item){
    let newItem = callback(item)
    newArray.push(newItem)
  })

  return newArray
}

// --------------