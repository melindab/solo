$(document).ready(function() {
    
  $('.ones').click(function() {
    var findIt = pattern.indexOf($('.example').text(), '"A" 4 letters space');
    $('.returns').html('<strong>Returns: </strong>' + findIt);
  });

  $('.wallet').click(function() {
    var replaceIt = pattern.replaceAll($('.example').text(), '"Ra" at least one "b" 1 letter', 'Walle');
    $('.example').text(replaceIt);
    $('.returns').html('<strong>Returns: </strong>A new string with all matches replaced.');
  });
  
  $('.match').click(function() {
    var matchIt = pattern.match($('.example').text(), 'space 4 letters space');
    $('.returns').html('<strong>Returns: </strong>' + matchIt);
  });

  $('.makeExample').click(function() {
    $('.returns').html('<strong>Returns: </strong>' + pattern.make('"A" 5 letters at least one digit', true, false));
  });
});


