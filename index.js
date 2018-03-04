var musicians = ["John", "Paul", "George", "Ringo"];
var instruments = ["Guitar", "Bass", "Lead", "drums"];

function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(arr) {
  var result= [];
  var i = 0;
  while(i < arr.length) {
    result.push(arr[i] + '!!!')
    i++;
  }
  return result;
}

function iLoveTheBeatles(number) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!");
    number++
  } while (number < 15);

  return beatles
}
