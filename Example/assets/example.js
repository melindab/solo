$(document).ready(function() {
  
  //var test = pattern.indexOf('what are you doing', 'y');
  
  //var replaceIt = pattern.replaceAll('01abcf2l34Ap5', 'letter', '');
    
  $('.ones').click(function() {
    var findIt = pattern.indexOf($('p').text(), '"thing"');
    console.log($('p').text().search(/thing/));
    //$('p').text(findIt);
  });

  $('.wallet').click(function() {
    var replaceIt = pattern.replaceAll($('p').text(), '"Ra" atleast one "b" 1 letter', 'Walle');
    $('p').text(replaceIt);
  });
  
  $('.match').click(function() {
    var matchIt = pattern.match($('p').text(), 'space 4 letters space');
    console.log(matchIt);
  });
});

