/*
PatternMatch JavaScript Library v1.0
*/

(function() {
  // should this 'use strict';

  window.pattern = {};

  // PATTERN KEYWORDS ////////////////////////////////////////////////////////////

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

  // REGEX CREATOR /////////////////////////////////////////////////////////////

  pattern.make = function(description, global, caseSensitive) { 
    // should work if multiple words are passed as args
    // or if a sentence is passed
    // ignores words it does not recognize
    var params = description.replace(/at least one/gi, 'atleastOne');
    params = params.replace(/'|"/g, '');
    params = params.replace(/letters/g, 'letter');
    params = params.replace(/digit/g, '\\d');
    params = params.split(/\s+/);

    var newPattern = '';


    for (var i = 0; i < params.length; i++) {
      if (this[params[i]]) {
        if (params[i] === 'atleastOne') {
          newPattern += params[i + 1] + '+';
          i = i + 1;
        } else {
          newPattern += this[params[i]];
        }
      } else if (params[i] === 'digit') {
          newPattern += '\\d';
      } else if (/\d+/.test(params[i])) {
          newPattern += this[params[i + 1]] + '{' + params[i] + '}';
          i = i + 1;
      } else {
        newPattern += params[i];
      }
    }

    if (global && !caseSensitive) {
      var regex = new RegExp(newPattern, 'gi');
    } else if (global) {
      var regex = new RegExp(newPattern, 'g');
    } else if (!caseSensitive) {
      var regex = new RegExp(newPattern, 'i');
    } else {
      var regex = new RegExp(newPattern);
    }
    console.log(regex);
    return regex;
  };

  // UTILITY FUNCTIONS //////////////////////////////////////////////////////////

  // case takes true if case matters, false if it does not
  pattern.indexOf = function(string, description, caseSensitive) { 
    if (!caseSensitive) {
      caseSensitive = true; // defaults to case-sensitive
    }
    var regex = this.make(description, false, caseSensitive);
    return string.search(regex);
  };

  pattern.replace = function(string, description, replacement, caseSensitive) {
    if (!caseSensitive) {
      caseSensitive = true; // defaults to case-sensitive
    }
    var regex = this.make(description, false, caseSensitive);    
    return string.replace(regex, replacement);
  };

  pattern.replaceAll = function(string, description, replacement, caseSensitive) {
    if (!caseSensitive) {
      caseSensitive = true; // defaults to case-sensitive
    }
    var regex = this.make(description, true, caseSensitive);    
    return string.replace(regex, replacement);
  };

  pattern.match = function(string, description, caseSensitive) {
    if (!caseSensitive) {
      caseSensitive = true; // defaults to case-sensitive
    }
    var regex = this.make(description, false, caseSensitive);    
    return string.match(regex);
  };


}());











