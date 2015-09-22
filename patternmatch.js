/*
PatternMatch JavaScript Library v1.0
*/

(function() {
  // should this 'use strict';

  window.pattern = {};

  // PATTERN KEYWORDS

  // character classes

  // add 'all' keyword?
  pattern.any = '.'; // any character except newline
  pattern.word = '\\w'; // [a-zA-Z0-9]
  pattern.nonWord = '\\W';
  pattern.letter = '[a-zA-Z]';
  pattern.space = '\\s'; // whitespace
  pattern.nonSpace = '\\S';
  pattern.digit = '\\d';
  pattern.nonDigit = '\\D'
  // add [\b] (literal backspace) in future

  // repetition characters
  pattern.optional = '*'; // matches 0 or more
  pattern.noMoreThanOne = '?'; // matches 0 or one
  pattern.atleastOne = '+'; // matches one or more

  // anchor characters
  pattern.startsWith = '^';
  pattern.endsWith = '$';
  pattern.boundary = '\\b';
 
  // Future additions
  // {n, m}       match n–m times
  // ??, +?, *?   following the repetition characters with a "?" makes them nongreedy
  // (?:...)      group but don't remember in the match (will  not create a numbered reference)
  // (?=...)      positive lookahead
  // (?!...)      negative lookahead

  // Flags:
  // i  ignore case/case-insensitive
  // g  global/find all matches
  // m  multiline mode

  // make a version for global and ignore case
  pattern.make = function(description, g, i) { 
    // should work if multiple words are passed as args
    // or if a sentence is passed
    // ignores words it does not recognize
    var params = description.split(/\s+/);
    var newPattern = '';

    for (var i = 0; i < params.length; i++) {
      if (this[params[i]]) {
        if (this[params[i]] === 'startsWith') {
          newPattern += this[params[i + 1]] + this[params[i]];
          i = i + 1;
        } else {
          newPattern += this[params[i]];
        }
      } else {
        newPattern += params[i];
      }
    }

    if (g && i) {
      var regex = new RegExp(newPattern, "gi");
    } else if (g) {
      var regex = new RegExp(newPattern, "g");
    } else if (i) {
      var regex = new RegExp(newPattern, "i");
    } else {
      var regex = new RegExp(newPattern);
    }

    return regex;
  };

  pattern.search = function(string, description) {
    var regex = this.make(description);
    console.log(regex);
    return string.search(regex);
  };

  pattern.replaceAll = function(string, description, replacement) {
    var regex = this.make(description, "g");    
    console.log(regex);
    return string.replace(regex, replacement);
  };


}());











