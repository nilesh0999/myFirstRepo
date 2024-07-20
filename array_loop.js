//  5 ways of iteration thr. array
{
  //  For Loop

  let array = [12, 15, 89, 69, 19, 21];
  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }
  console.log("for loop", array); //  for loop [ 13, 16, 90, 70, 20, 22 ]
}

{
  //  While Loop

  let array = [12, 15, 89, 69, 19, 21];
  let i = 0;
  while (i < array.length) {
    array[i]++;
    i++;
  }
  console.log("while loop", array); //  for loop [ 13, 16, 90, 70, 20, 22 ]
}

{
  //  ForEach Loop

  let array = [12, 15, 89, 69, 19, 21];
  array.forEach((item, index) => {
    array[index] = ++item;
  });

  console.log("foreach loop", array); //  for loop [ 13, 16, 90, 70, 20, 22 ]
}

{
  //  Filter
  let array = [12, 15, 89, 69, 19, 21];
  array = array.filter((item) => item > 67);
  console.log("filter", array); //  filter [ 89, 69 ]
}

{
  //  Map
  let array = [12, 15, 89, 69, 19, 21];
  array = array.map((item, index) => item - index);
  console.log("map", array); //  map [ 12, 14, 87, 66, 15, 16 ]
}
