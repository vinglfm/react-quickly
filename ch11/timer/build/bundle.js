/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./timer.jsx ***!
  \*******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var _this = this;\n\nconst RingLoader = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"RingLoader\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst Timer = props => {\n  if (props.timeLeft == 0) {\n    dispatchEvent(new CustomEvent('playSound', {}));\n  }\n  if (props.timeLeft == null || props.timeLeft == 0) {\n    return React.createElement('div', null);\n  }\n  return React.createElement(\n    'div',\n    null,\n    React.createElement(\n      'h1',\n      null,\n      'Time left: ',\n      props.timeLeft\n    ),\n    React.createElement(RingLoader, { color: '#123abc', loading: _this.state.loading })\n  );\n};\n\nclass Sound extends React.Component {\n  constructor(props) {\n    super(props);\n    this.sound = this.sound.bind(this);\n  }\n\n  sound() {\n    this.refs.sound.play();\n  }\n  componentDidMount() {\n    window.addEventListener('playSound', this.sound);\n  }\n  render() {\n    return React.createElement('audio', { ref: 'sound', src: this.props.file, preload: 'auto' });\n  }\n}\n\nconst StartButton = props => {\n  return React.createElement(\n    'button',\n    {\n      type: 'button',\n      className: 'btn-default btn',\n      onClick: () => {\n        props.startTimer(props.time);\n      } },\n    props.time,\n    ' seconds'\n  );\n};\n\nconst Button = props => {\n  return React.createElement(\n    'button',\n    { type: 'button', className: 'btn-default btn', disabled: props.disabled, onClick: () => {\n        props.apply();\n      } },\n    props.labelText\n  );\n};\n\nclass TimerWrapper extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { timeLeft: null, timeFrom: null, timer: null, paused: false };\n    this.startTimer = this.startTimer.bind(this);\n    this.pause = this.pause.bind(this);\n    this.resume = this.resume.bind(this);\n    this.cancel = this.cancel.bind(this);\n    this.reset = this.reset.bind(this);\n  }\n  startTimer(timeLeft) {\n    clearInterval(this.state.timer);\n    let timer = setInterval(() => {\n      var timeLeft = this.state.timeLeft - 1;\n      if (timeLeft == 0) {\n        clearInterval(timer);\n      }\n      this.setState({ timeLeft: timeLeft });\n    }, 1000);\n    return this.setState({ timeLeft: timeLeft, timeFrom: timeLeft, timer: timer });\n  }\n  pause() {\n    if (this.state.timeLeft > 0 && !this.state.paused) {\n      this.setState({ paused: true });\n      clearInterval(this.state.timer);\n    }\n  }\n  resume() {\n    if (this.state.paused && this.state.timeLeft > 0) {\n      this.setState({ paused: false });\n      this.startTimer(this.state.timeLeft);\n    }\n  }\n  cancel() {\n    if (this.state.timeLeft > 0) {\n      this.setState({\n        timeLeft: null,\n        paused: false\n      });\n      clearInterval(this.state.timer);\n    }\n  }\n  reset() {\n    if (this.state.timeLeft > 0) {\n      this.setState({ timeLeft: this.state.timeFrom });\n    }\n  }\n  render() {\n    console.log('render');\n    return React.createElement(\n      'div',\n      { className: 'row-fluid' },\n      React.createElement(\n        'h2',\n        null,\n        'Timer'\n      ),\n      React.createElement(\n        'div',\n        { className: 'btn-group', role: 'group' },\n        React.createElement(StartButton, { time: '5', startTimer: this.startTimer }),\n        React.createElement(StartButton, { time: '10', startTimer: this.startTimer }),\n        React.createElement(StartButton, { time: '15', startTimer: this.startTimer })\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { className: 'btn-group', role: 'group' },\n          React.createElement(Button, { labelText: 'Pause', apply: this.pause, disabled: this.state.paused }),\n          React.createElement(Button, { labelText: 'Resume', apply: this.resume, disabled: !this.state.paused }),\n          React.createElement(Button, { labelText: 'Cancel', apply: this.cancel }),\n          React.createElement(Button, { labelText: 'Reset', apply: this.reset })\n        )\n      ),\n      React.createElement(Timer, { timeLeft: this.state.timeLeft }),\n      React.createElement(Sound, { file: 'flute_c_long_01.wav' })\n    );\n  }\n}\n\nReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById('timer-app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90aW1lci5qc3g/ZTE1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSaW5nTG9hZGVyID0gcmVxdWlyZSgnUmluZ0xvYWRlcicpO1xuXG5jb25zdCBUaW1lciA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy50aW1lTGVmdCA9PSAwKSB7XG4gICAgICBkaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGxheVNvdW5kJywge30pKTtcbiAgICB9XG4gICAgaWYgKHByb3BzLnRpbWVMZWZ0ID09IG51bGwgfHwgcHJvcHMudGltZUxlZnQgPT0gMCkge1xuICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgIDxoMT5UaW1lIGxlZnQ6IHtwcm9wcy50aW1lTGVmdH08L2gxPlxuICAgICAgICAgIDxSaW5nTG9hZGVyIGNvbG9yPXsnIzEyM2FiYyd9IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz5cbiAgICAgICAgPC9kaXY+KTtcbiAgfTtcblxuY2xhc3MgU291bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNvdW5kID0gdGhpcy5zb3VuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc291bmQoKSB7XG4gICAgdGhpcy5yZWZzLnNvdW5kLnBsYXkoKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGxheVNvdW5kJywgdGhpcy5zb3VuZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8YXVkaW8gcmVmPVwic291bmRcIiBzcmM9e3RoaXMucHJvcHMuZmlsZX0gcHJlbG9hZD1cImF1dG9cIj48L2F1ZGlvPlxuICB9XG59XG5cbmNvbnN0IFN0YXJ0QnV0dG9uID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPVwiYnRuLWRlZmF1bHQgYnRuXCJcbiAgICAgIG9uQ2xpY2s9eygpPT57cHJvcHMuc3RhcnRUaW1lcihwcm9wcy50aW1lKX19PlxuICAgICAge3Byb3BzLnRpbWV9IHNlY29uZHNcbiAgICA8L2J1dHRvbj5cbiAgfTtcblxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XG4gICAgICByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuLWRlZmF1bHQgYnRuXCIgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBvbkNsaWNrPXsoKT0+e3Byb3BzLmFwcGx5KCl9fT5cbiAgICAgICAge3Byb3BzLmxhYmVsVGV4dH1cbiAgICAgIDwvYnV0dG9uPlxuICB9O1xuXG5jbGFzcyBUaW1lcldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gIHt0aW1lTGVmdDogbnVsbCwgdGltZUZyb206IG51bGwsIHRpbWVyOiBudWxsLCBwYXVzZWQ6IGZhbHNlfTtcbiAgICB0aGlzLnN0YXJ0VGltZXIgPSB0aGlzLnN0YXJ0VGltZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhdXNlID0gdGhpcy5wYXVzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzdW1lID0gdGhpcy5yZXN1bWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbmNlbCA9IHRoaXMuY2FuY2VsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgfVxuICBzdGFydFRpbWVyKHRpbWVMZWZ0KSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLnRpbWVyKTtcbiAgICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB2YXIgdGltZUxlZnQgPSB0aGlzLnN0YXRlLnRpbWVMZWZ0IC0gMTtcbiAgICAgIGlmICh0aW1lTGVmdCA9PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZUxlZnQ6IHRpbWVMZWZ0fSk7XG4gICAgfSwgMTAwMClcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7dGltZUxlZnQ6IHRpbWVMZWZ0LCB0aW1lRnJvbTogdGltZUxlZnQsIHRpbWVyOiB0aW1lcn0pO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIGlmKHRoaXMuc3RhdGUudGltZUxlZnQgPiAwICYmICF0aGlzLnN0YXRlLnBhdXNlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF1c2VkOiB0cnVlfSk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUudGltZXIpO1xuICAgIH1cbiAgfVxuICByZXN1bWUoKSB7XG4gICAgaWYodGhpcy5zdGF0ZS5wYXVzZWQgJiYgdGhpcy5zdGF0ZS50aW1lTGVmdCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BhdXNlZDogZmFsc2V9KTtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcih0aGlzLnN0YXRlLnRpbWVMZWZ0KTtcbiAgICB9XG4gIH1cbiAgY2FuY2VsKCkge1xuICAgIGlmKHRoaXMuc3RhdGUudGltZUxlZnQgPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGltZUxlZnQ6IG51bGwsXG4gICAgICAgIHBhdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLnRpbWVyKTtcbiAgICB9XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgaWYodGhpcy5zdGF0ZS50aW1lTGVmdCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVMZWZ0OnRoaXMuc3RhdGUudGltZUZyb219KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdyZW5kZXInKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctZmx1aWRcIj5cbiAgICAgICAgPGgyPlRpbWVyPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgICA8U3RhcnRCdXR0b24gdGltZT1cIjVcIiBzdGFydFRpbWVyPXt0aGlzLnN0YXJ0VGltZXJ9Lz5cbiAgICAgICAgICA8U3RhcnRCdXR0b24gdGltZT1cIjEwXCIgc3RhcnRUaW1lcj17dGhpcy5zdGFydFRpbWVyfS8+XG4gICAgICAgICAgPFN0YXJ0QnV0dG9uIHRpbWU9XCIxNVwiIHN0YXJ0VGltZXI9e3RoaXMuc3RhcnRUaW1lcn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbFRleHQ9XCJQYXVzZVwiIGFwcGx5PXt0aGlzLnBhdXNlfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wYXVzZWR9Lz5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWxUZXh0PVwiUmVzdW1lXCIgYXBwbHk9e3RoaXMucmVzdW1lfSBkaXNhYmxlZD17IXRoaXMuc3RhdGUucGF1c2VkfS8+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsVGV4dD1cIkNhbmNlbFwiIGFwcGx5PXt0aGlzLmNhbmNlbH0vPlxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbFRleHQ9XCJSZXNldFwiIGFwcGx5PXt0aGlzLnJlc2V0fS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VGltZXIgdGltZUxlZnQ9e3RoaXMuc3RhdGUudGltZUxlZnR9Lz5cbiAgICAgICAgPFNvdW5kIGZpbGU9XCJmbHV0ZV9jX2xvbmdfMDEud2F2XCIvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFRpbWVyV3JhcHBlci8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXItYXBwJylcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0aW1lci5qc3giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQWhCQTtBQW1CQTtBQXJFQTtBQUNBO0FBdUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);