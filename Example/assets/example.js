$(document).ready(function() {
  // test
  var test = pattern.search("what are you doing", "y");
  console.log(test); // 9

  var replaceIt = pattern.replaceAll("01abcf2l34Ap5", "letter", "");
  console.log(replaceIt); // "12345"
  
  $('.ones').click(function() {
    var replaceIt2 = pattern.replaceAll($('p').text(), "letter", "1");
    $('p').text(replaceIt2);
  });

  $('.wallet').click(function() {
    var replaceIt2 = pattern.replaceAll($('p').text(), "Ra atleastOne b letter letter", "Walle");
    $('p').text(replaceIt2);
  });
  
});

