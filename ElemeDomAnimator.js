var React = require('react');
var DomAnimator = require('./domAnimator.src');

var ElemeDomAnimator = React.createClass({
  shouldComponentUpdate(){
    // This component shouldn't update in any time.
    return false;
  },

  render: function() {
    const domAnimator = new DomAnimator();

    // The graph below will show in the console
    const burger = ['',
      '  ___________ ',
      ' /           \\',
      '|_____________|',
      ' |___________|',
      '_|___________|_',
      '\\_____________/'];

    const drink = ['       ||     ',
      '  _____||_____ ',
      ' /____________\\',
      '  \\          /',
      '   \\        /',
      '    \\      /',
      '     \\____/'];

    const melon = ['       /\\     ',
      '      /..\\     ',
      '     /....\\     ',
      '    /......\\     ',
      '   /........\\     ',
      '  /\\________/\\     ',
      '  \\__________/     '];

    const icecream = ['',
      '        () ',
      '       (__) ',
      '     (______) ',
      '      \\    /',
      '       \\  /',
      '        \\/'];

    domAnimator.addFrame(burger);
    domAnimator.addFrame(drink);
    domAnimator.addFrame(melon);
    domAnimator.addFrame(icecream);
    domAnimator.animate(1000);

    return React.DOM.div();
  }
});

module.exports = ElemeDomAnimator;