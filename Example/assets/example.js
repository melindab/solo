$(document).ready(function() {
  
  //var test = pattern.indexOf('what are you doing', 'y');
  
  //var replaceIt = pattern.replaceAll('01abcf2l34Ap5', 'letter', '');
    
  $('.ones').click(function() {
    var replaceIt2 = pattern.replaceAll($('p').text(), 'letter', '1');
    $('p').text(replaceIt2);
  });

  $('.wallet').click(function() {
    var replaceIt2 = pattern.replaceAll($('p').text(), 'Ra atleastOne b 1 letter', 'Walle');
    $('p').text(replaceIt2);
  });
  
});

