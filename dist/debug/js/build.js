(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\User01\\Desktop\\Chrome Apps\\reatcproject\\src\\js\\App.js":[function(require,module,exports){
// React.render(<Parent />, document.getElementById('app'));
var Parent = require('./Parent');
React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./Parent":"C:\\Users\\User01\\Desktop\\Chrome Apps\\reatcproject\\src\\js\\Parent.js"}],"C:\\Users\\User01\\Desktop\\Chrome Apps\\reatcproject\\src\\js\\Child.js":[function(require,module,exports){
//Example child module
var Child = React.createClass({displayName: "Child",
  render: function(){
    return (
      React.createElement("div", null, 
        "and this is the: ", React.createElement("b", null, this.props.name), "."
      )
    )
  }
});
//exports tells browserify what is made available when "requiring"
module.exports = Child;

},{}],"C:\\Users\\User01\\Desktop\\Chrome Apps\\reatcproject\\src\\js\\Parent.js":[function(require,module,exports){
var Child = require('./Child');
var Parent = React.createClass({displayName: "Parent",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", null, " This is the parent. "), 
        React.createElement(Child, {name: "child"})
      )
    )
  }
});
module.exports = Parent;

},{"./Child":"C:\\Users\\User01\\Desktop\\Chrome Apps\\reatcproject\\src\\js\\Child.js"}]},{},["C:\\Users\\User01\\Desktop\\Chrome Apps\\reatcproject\\src\\js\\App.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXFVzZXIwMVxcRGVza3RvcFxcQ2hyb21lIEFwcHNcXHJlYXRjcHJvamVjdFxcc3JjXFxqc1xcQXBwLmpzIiwiQzpcXFVzZXJzXFxVc2VyMDFcXERlc2t0b3BcXENocm9tZSBBcHBzXFxyZWF0Y3Byb2plY3RcXHNyY1xcanNcXENoaWxkLmpzIiwiQzpcXFVzZXJzXFxVc2VyMDFcXERlc2t0b3BcXENocm9tZSBBcHBzXFxyZWF0Y3Byb2plY3RcXHNyY1xcanNcXFBhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLDREQUE0RDtBQUM1RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxNQUFNLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUNGeEQsc0JBQXNCO0FBQ3RCLElBQUksMkJBQTJCLHFCQUFBO0VBQzdCLE1BQU0sRUFBRSxVQUFVO0lBQ2hCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtBQUFBLFFBQUEsbUJBQUEsRUFDYyxvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBUyxDQUFBLEVBQUEsR0FBQTtBQUFBLE1BQ3JDLENBQUE7S0FDUDtHQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsa0VBQWtFO0FBQ2xFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSzs7O0FDWHRCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQixJQUFJLDRCQUE0QixzQkFBQTtFQUM5QixNQUFNLEVBQUUsVUFBVTtJQUNoQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBLHVCQUEyQixDQUFBLEVBQUE7UUFDaEMsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQTtNQUNqQixDQUFBO0tBQ1A7R0FDRjtDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBSZWFjdC5yZW5kZXIoPFBhcmVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxudmFyIFBhcmVudCA9IHJlcXVpcmUoJy4vUGFyZW50Jyk7XHJcblJlYWN0LnJlbmRlcig8UGFyZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyIsIi8vRXhhbXBsZSBjaGlsZCBtb2R1bGVcclxudmFyIENoaWxkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgYW5kIHRoaXMgaXMgdGhlOiA8Yj57dGhpcy5wcm9wcy5uYW1lfTwvYj4uXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSk7XHJcbi8vZXhwb3J0cyB0ZWxscyBicm93c2VyaWZ5IHdoYXQgaXMgbWFkZSBhdmFpbGFibGUgd2hlbiBcInJlcXVpcmluZ1wiXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hpbGQ7IiwidmFyIENoaWxkID0gcmVxdWlyZSgnLi9DaGlsZCcpO1xyXG52YXIgUGFyZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj4gVGhpcyBpcyB0aGUgcGFyZW50LiA8L2Rpdj5cclxuICAgICAgICA8Q2hpbGQgbmFtZT1cImNoaWxkXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmVudDsiXX0=
