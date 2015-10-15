(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\User01\\Desktop\\Chrome Apps\\reactproject\\src\\js\\App.js":[function(require,module,exports){
// React.render(<Parent />, document.getElementById('app'));
// var ngaiga = require('./poop');
var Parent = require('./Parent');
React.render(React.createElement(Parent, null), document.getElementById('app'));

// fua fs = asyssss

// var var //sdasdjdas

},{"./Parent":"C:\\Users\\User01\\Desktop\\Chrome Apps\\reactproject\\src\\js\\Parent.js"}],"C:\\Users\\User01\\Desktop\\Chrome Apps\\reactproject\\src\\js\\Child.js":[function(require,module,exports){
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

},{}],"C:\\Users\\User01\\Desktop\\Chrome Apps\\reactproject\\src\\js\\Parent.js":[function(require,module,exports){
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

},{"./Child":"C:\\Users\\User01\\Desktop\\Chrome Apps\\reactproject\\src\\js\\Child.js"}]},{},["C:\\Users\\User01\\Desktop\\Chrome Apps\\reactproject\\src\\js\\App.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXFVzZXIwMVxcRGVza3RvcFxcQ2hyb21lIEFwcHNcXHJlYWN0cHJvamVjdFxcc3JjXFxqc1xcQXBwLmpzIiwiQzpcXFVzZXJzXFxVc2VyMDFcXERlc2t0b3BcXENocm9tZSBBcHBzXFxyZWFjdHByb2plY3RcXHNyY1xcanNcXENoaWxkLmpzIiwiQzpcXFVzZXJzXFxVc2VyMDFcXERlc2t0b3BcXENocm9tZSBBcHBzXFxyZWFjdHByb2plY3RcXHNyY1xcanNcXFBhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLDREQUE0RDtBQUM1RCxrQ0FBa0M7QUFDbEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsTUFBTSxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztBQUV6RCxtQkFBbUI7O0FBRW5COzs7QUNQQSxzQkFBc0I7QUFDdEIsSUFBSSwyQkFBMkIscUJBQUE7RUFDN0IsTUFBTSxFQUFFLFVBQVU7SUFDaEI7TUFDRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO0FBQUEsUUFBQSxtQkFBQSxFQUNjLG9CQUFBLEdBQUUsRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFTLENBQUEsRUFBQSxHQUFBO0FBQUEsTUFDckMsQ0FBQTtLQUNQO0dBQ0Y7Q0FDRixDQUFDLENBQUM7QUFDSCxrRUFBa0U7QUFDbEUsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLOzs7QUNYdEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLElBQUksNEJBQTRCLHNCQUFBO0VBQzlCLE1BQU0sRUFBRSxVQUFVO0lBQ2hCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtRQUNILG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUEsdUJBQTJCLENBQUEsRUFBQTtRQUNoQyxvQkFBQyxLQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFBO01BQ2pCLENBQUE7S0FDUDtHQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFJlYWN0LnJlbmRlcig8UGFyZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG4vLyB2YXIgbmdhaWdhID0gcmVxdWlyZSgnLi9wb29wJyk7XHJcbnZhciBQYXJlbnQgPSByZXF1aXJlKCcuL1BhcmVudCcpO1xyXG5SZWFjdC5yZW5kZXIoPFBhcmVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuXHJcbi8vIGZ1YSBmcyA9IGFzeXNzc3NcclxuXHJcbi8vIHZhciB2YXIgLy9zZGFzZGpkYXMiLCIvL0V4YW1wbGUgY2hpbGQgbW9kdWxlXHJcbnZhciBDaGlsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIGFuZCB0aGlzIGlzIHRoZTogPGI+e3RoaXMucHJvcHMubmFtZX08L2I+LlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0pO1xyXG4vL2V4cG9ydHMgdGVsbHMgYnJvd3NlcmlmeSB3aGF0IGlzIG1hZGUgYXZhaWxhYmxlIHdoZW4gXCJyZXF1aXJpbmdcIlxyXG5tb2R1bGUuZXhwb3J0cyA9IENoaWxkOyIsInZhciBDaGlsZCA9IHJlcXVpcmUoJy4vQ2hpbGQnKTtcclxudmFyIFBhcmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+IFRoaXMgaXMgdGhlIHBhcmVudC4gPC9kaXY+XHJcbiAgICAgICAgPENoaWxkIG5hbWU9XCJjaGlsZFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBQYXJlbnQ7Il19
