$(document).ready(function() {
  // test
  var test = pattern.search("what are you doing", "y");
  console.log(test); // 9

  var replaceIt = pattern.replaceAll("01abcf2l34Ap5", "letter", "");
  console.log(replaceIt); // "12345"
  
  $('code').click(function() {
    var replaceIt2 = pattern.replaceAll($('p').text(), "letter", "1");
    $('p').text(replaceIt2);
  });

  $('ex').click(function() {
    var replaceIt2 = pattern.replaceAll($('p').text(), "letter", "1");
    $('p').text(replaceIt2);
  });
  // Ra atleastOne b
});

