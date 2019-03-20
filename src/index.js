// Формула перевода величин из градусов 
// Фаренгейта -> Цельсий
// F - фаренгей 
// С - цельсий
//
// C = (F-32)/1.8
// F = (C * 2) + 32

// The formula for converting values from degrees
// Fahrenheit -> Celsius
// F - Fahrenhey
// C - Celsius
//
// C = (F-32) / 1.8
// F = (C * 2) + 32

module.exports = function warmup(temperature) {
  // your implementation here
  var celsius = temperature;
  fahrenheit = ((Math.round(temperature) * 1.8) + 32);
  console.log(fahrenheit);
  return fahrenheit;
};
