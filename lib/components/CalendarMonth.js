module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("airbnb-prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("object.assign");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-with-styles");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("../shapes/ScrollableOrientationShape");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-moment-proptypes");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = require("../shapes/DayOfWeekShape");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("../utils/toISODateString");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-addons-shallow-compare");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("../utils/isSameDay");

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("../utils/calculateDimension");

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

module.exports = require("../utils/getCalendarMonthWeeks");

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

module.exports = require("./CalendarDay");

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _object = __webpack_require__(2);

var _object2 = _interopRequireDefault(_object);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = __webpack_require__(15);

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactMomentProptypes = __webpack_require__(11);

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = __webpack_require__(1);

var _reactWithStyles = __webpack_require__(6);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _defaultPhrases = __webpack_require__(5);

var _getPhrasePropTypes = __webpack_require__(7);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _CalendarDay = __webpack_require__(51);

var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

var _calculateDimension = __webpack_require__(44);

var _calculateDimension2 = _interopRequireDefault(_calculateDimension);

var _getCalendarMonthWeeks = __webpack_require__(46);

var _getCalendarMonthWeeks2 = _interopRequireDefault(_getCalendarMonthWeeks);

var _isSameDay = __webpack_require__(23);

var _isSameDay2 = _interopRequireDefault(_isSameDay);

var _toISODateString = __webpack_require__(14);

var _toISODateString2 = _interopRequireDefault(_toISODateString);

var _ScrollableOrientationShape = __webpack_require__(9);

var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

var _DayOfWeekShape = __webpack_require__(13);

var _DayOfWeekShape2 = _interopRequireDefault(_DayOfWeekShape);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /* eslint react/no-array-index-key: 0 */

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)((0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, {
  month: _reactMomentProptypes2['default'].momentObj,
  isVisible: _propTypes2['default'].bool,
  enableOutsideDays: _propTypes2['default'].bool,
  modifiers: _propTypes2['default'].object,
  orientation: _ScrollableOrientationShape2['default'],
  daySize: _airbnbPropTypes.nonNegativeInteger,
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,
  renderMonth: _propTypes2['default'].func,
  renderDay: _propTypes2['default'].func,
  firstDayOfWeek: _DayOfWeekShape2['default'],
  setMonthHeight: _propTypes2['default'].func,

  focusedDate: _reactMomentProptypes2['default'].momentObj, // indicates focusable day
  isFocused: _propTypes2['default'].bool, // indicates whether or not to move focus to focusable day

  // i18n
  monthFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.CalendarDayPhrases))
}));

var defaultProps = {
  month: (0, _moment2['default'])(),
  isVisible: true,
  enableOutsideDays: false,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  daySize: _constants.DAY_SIZE,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),

  renderMonth: null,
  renderDay: null,
  firstDayOfWeek: null,
  setMonthHeight: function () {
    function setMonthHeight() {}

    return setMonthHeight;
  }(),

  focusedDate: null,
  isFocused: false,

  // i18n
  monthFormat: 'MMMM YYYY', // english locale
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CalendarMonth = function (_React$Component) {
  _inherits(CalendarMonth, _React$Component);

  function CalendarMonth(props) {
    _classCallCheck(this, CalendarMonth);

    var _this = _possibleConstructorReturn(this, (CalendarMonth.__proto__ || Object.getPrototypeOf(CalendarMonth)).call(this, props));

    _this.state = {
      weeks: (0, _getCalendarMonthWeeks2['default'])(props.month, props.enableOutsideDays, props.firstDayOfWeek == null ? _moment2['default'].localeData().firstDayOfWeek() : props.firstDayOfWeek)
    };

    _this.setCaptionRef = _this.setCaptionRef.bind(_this);
    _this.setGridRef = _this.setGridRef.bind(_this);
    _this.setMonthHeight = _this.setMonthHeight.bind(_this);
    return _this;
  }

  _createClass(CalendarMonth, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.setMonthHeightTimeout = setTimeout(this.setMonthHeight, 0);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var month = nextProps.month,
            enableOutsideDays = nextProps.enableOutsideDays,
            firstDayOfWeek = nextProps.firstDayOfWeek;

        if (!month.isSame(this.props.month) || enableOutsideDays !== this.props.enableOutsideDays || firstDayOfWeek !== this.props.firstDayOfWeek) {
          this.setState({
            weeks: (0, _getCalendarMonthWeeks2['default'])(month, enableOutsideDays, firstDayOfWeek == null ? _moment2['default'].localeData().firstDayOfWeek() : firstDayOfWeek)
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        if (this.setMonthHeightTimeout) {
          clearTimeout(this.setMonthHeightTimeout);
        }
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'setMonthHeight',
    value: function () {
      function setMonthHeight() {
        var setMonthHeight = this.props.setMonthHeight;

        var captionHeight = (0, _calculateDimension2['default'])(this.captionRef, 'height', true, true);
        var gridHeight = (0, _calculateDimension2['default'])(this.gridRef, 'height');

        setMonthHeight(captionHeight + gridHeight + 1);
      }

      return setMonthHeight;
    }()
  }, {
    key: 'setCaptionRef',
    value: function () {
      function setCaptionRef(ref) {
        this.captionRef = ref;
      }

      return setCaptionRef;
    }()
  }, {
    key: 'setGridRef',
    value: function () {
      function setGridRef(ref) {
        this.gridRef = ref;
      }

      return setGridRef;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            month = _props.month,
            monthFormat = _props.monthFormat,
            orientation = _props.orientation,
            isVisible = _props.isVisible,
            modifiers = _props.modifiers,
            onDayClick = _props.onDayClick,
            onDayMouseEnter = _props.onDayMouseEnter,
            onDayMouseLeave = _props.onDayMouseLeave,
            renderMonth = _props.renderMonth,
            renderDay = _props.renderDay,
            daySize = _props.daySize,
            focusedDate = _props.focusedDate,
            isFocused = _props.isFocused,
            styles = _props.styles,
            phrases = _props.phrases;
        var weeks = this.state.weeks;

        var monthTitle = renderMonth ? renderMonth(month) : month.format(monthFormat);

        var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;

        return _react2['default'].createElement('div', _extends({}, (0, _reactWithStyles.css)(styles.CalendarMonth, orientation === _constants.HORIZONTAL_ORIENTATION && styles.CalendarMonth__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.CalendarMonth__vertical, verticalScrollable && styles.CalendarMonth__verticalScrollable), {
          'data-visible': isVisible
        }), _react2['default'].createElement('div', _extends({
          id: 'CalendarMonth__caption',
          ref: this.setCaptionRef
        }, (0, _reactWithStyles.css)(styles.CalendarMonth_caption, verticalScrollable && styles.CalendarMonth_caption__verticalScrollable)), _react2['default'].createElement('strong', null, monthTitle)), _react2['default'].createElement('table', _extends({}, (0, _reactWithStyles.css)(styles.CalendarMonth_table), { role: 'presentation' }), _react2['default'].createElement('tbody', { ref: this.setGridRef }, weeks.map(function (week, i) {
          return _react2['default'].createElement('tr', { key: i }, week.map(function (day, dayOfWeek) {
            return _react2['default'].createElement(_CalendarDay2['default'], {
              day: day,
              daySize: daySize,
              isOutsideDay: !day || day.month() !== month.month(),
              tabIndex: isVisible && (0, _isSameDay2['default'])(day, focusedDate) ? 0 : -1,
              isFocused: isFocused,
              key: dayOfWeek,
              onDayMouseEnter: onDayMouseEnter,
              onDayMouseLeave: onDayMouseLeave,
              onDayClick: onDayClick,
              renderDay: renderDay,
              phrases: phrases,
              modifiers: modifiers[(0, _toISODateString2['default'])(day)]
            });
          }));
        }))));
      }

      return render;
    }()
  }]);

  return CalendarMonth;
}(_react2['default'].Component);

CalendarMonth.propTypes = propTypes;
CalendarMonth.defaultProps = defaultProps;

exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
      color = _ref$reactDates.color,
      font = _ref$reactDates.font,
      spacing = _ref$reactDates.spacing;
  return {
    CalendarMonth: {
      background: color.background,
      textAlign: 'center',
      padding: '0 13px',
      verticalAlign: 'top',
      userSelect: 'none'
    },

    CalendarMonth_table: {
      borderCollapse: 'collapse',
      borderSpacing: 0
    },

    CalendarMonth_caption: {
      color: color.text,
      fontSize: font.captionSize,
      textAlign: 'center',
      paddingTop: spacing.captionPaddingTop,
      paddingBottom: spacing.captionPaddingBottom,
      captionSide: 'initial'
    },

    CalendarMonth_caption__verticalScrollable: {
      paddingTop: 12,
      paddingBottom: 7
    }
  };
})(CalendarMonth);

/***/ })
/******/ ]);