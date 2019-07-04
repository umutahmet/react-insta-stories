'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Header = function Header(_ref) {
  var profileImage = _ref.profileImage,
      heading = _ref.heading,
      subheading = _ref.subheading;
  return React__default.createElement(
    'div',
    { style: styles.main },
    profileImage && React__default.createElement('div', { style: _extends({}, styles.img, { backgroundImage: 'url(' + profileImage + ')' }) }),
    React__default.createElement(
      'span',
      { style: styles.text },
      React__default.createElement(
        'p',
        { style: styles.heading },
        heading
      ),
      React__default.createElement(
        'p',
        { style: styles.subheading },
        subheading
      )
    )
  );
};

var styles = {
  main: {
    display: 'flex'
  },
  img: {
    width: 60,
    height: 60,
    minHeight: 'auto',
    borderRadius: 60,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%'
  },
  heading: {
    fontSize: '1.5rem',
    fontFamily: '"Abril Titling Bold", "Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  subheading: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.9)'
  }
};

Header.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  profileImage: PropTypes.string
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "body{\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.styles_inner__x-amJ {\n  background: #fff;\n  height: 100%;\n  max-width: 100%;\n  transform-origin: center left;\n\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  backface-visibility: hidden;\n\n  -webkit-perspective: 1000;\n  -moz-perspective: 1000;\n  -ms-perspective: 1000;\n  perspective: 1000;\n}\n\np{\n  margin: 0\n}\n\n@keyframes styles_slidein__1q-h- {\n  from { \n    -webkit-transform: scale3d(0, 1, 1);\n    -moz-transform: scale3d(0, 1, 1);\n    -ms-transform: scale3d(0, 1, 1);\n    -o-transform: scale3d(0, 1, 1);\n    transform: scale3d(0, 1, 1); \n  }\n  to { \n    -webkit-transform: scale3d(1, 1, 1);\n    -moz-transform: scale3d(1, 1, 1);\n    -ms-transform: scale3d(1, 1, 1);\n    -o-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); \n  }\n}\n\n.styles_spinner__1CK7F {\n  width: 40px;\n  height: 40px;\n  margin: 100px auto;\n  background-color: #fff;\n\n  border-radius: 100%;  \n  -webkit-animation: styles_sk-scaleout__1hEQ2 1.0s infinite ease-in-out;\n  animation: styles_sk-scaleout__1hEQ2 1.0s infinite ease-in-out;\n}\n\n@-webkit-keyframes styles_sk-scaleout__1hEQ2 {\n  0% { -webkit-transform: scale(0) }\n  100% {\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n@keyframes styles_sk-scaleout__1hEQ2 {\n  0% { \n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 100% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n.styles_autoHide__83H_q{\n  transition: opacity 400ms ease-in-out\n}\n\n.styles_seeMore__1dyHs{\n  height: 10vh;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.styles_seeMore__1dyHs:hover{\n  cursor: pointer;\n}\n\n.styles_seeMore__1dyHs .styles_seemoreText__1wvli{\n  color: white;\n  text-align: center;\n  letter-spacing: 0.2em;\n  margin-bottom: 2.2vh;\n  text-transform: capitalize;\n  opacity: 0.6;\n  font-size: 0.7em;\n  transition: opacity 300ms ease-in-out  \n}\n\n.styles_seeMore__1dyHs .styles_seemoreIcon__1rAV5{\n  color: white;\n  text-align: center;\n  letter-spacing: 0.2em;\n  margin-bottom: 0.5vh;\n  opacity: 0.6;\n  text-transform: capitalize;\n  transition: opacity 300ms ease-in-out\n}\n\n.styles_seeMore__1dyHs:hover > .styles_seemoreIcon__1rAV5 {\n  opacity: 0.9;\n}\n\n.styles_seeMore__1dyHs:hover > .styles_seemoreText__1wvli {\n  opacity: 0.9;\n}\n\n.styles_seemoreIcon__1rAV5 img {\n  width: 5vh;\n}\n\n.styles_seeMoreExpanded__1l-e8 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  z-index: 99999;\n}\n\n.styles_seeMoreClose__3jq_i{\n  position: absolute;\n  filter: drop-shadow(0 3px 2px #ccc);\n  right: 0.5rem;\n  top: 0.5rem;\n  font-size: 1.5rem;\n  opacity: 0.7;\n  padding: 1rem\n}\n\n.styles_seeMoreClose__3jq_i:hover{\n  cursor: pointer;\n}";
var style = { "inner": "styles_inner__x-amJ", "spinner": "styles_spinner__1CK7F", "sk-scaleout": "styles_sk-scaleout__1hEQ2", "autoHide": "styles_autoHide__83H_q", "seeMore": "styles_seeMore__1dyHs", "seemoreText": "styles_seemoreText__1wvli", "seemoreIcon": "styles_seemoreIcon__1rAV5", "seeMoreExpanded": "styles_seeMoreExpanded__1l-e8", "seeMoreClose": "styles_seeMoreClose__3jq_i", "slidein": "styles_slidein__1q-h-" };
styleInject(css);

var up = "data:image/png;base64,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";

function seeMore(props) {
  return props.showContent ? React__default.createElement(
    'div',
    { className: style.seeMoreExpanded },
    props.seeMoreContent,
    React__default.createElement(
      'div',
      { onClick: function onClick() {
          props.toggleMore(false);
          props.action('play');
        }, className: style.seeMoreClose },
      React__default.createElement(
        'span',
        null,
        '\u2715'
      )
    )
  ) : React__default.createElement(
    'div',
    { onClick: function onClick() {
        props.toggleMore(true);
        props.action('pause');
      }, className: style.seeMore },
    React__default.createElement(
      'span',
      { className: style.seemoreIcon },
      React__default.createElement('img', { src: up })
    ),
    React__default.createElement(
      'span',
      { className: style.seemoreText },
      'Read more'
    )
  );
}

seeMore.propTypes = {
  seeMoreContent: PropTypes.object,
  showContent: PropTypes.bool,
  action: PropTypes.func,
  toggleMore: PropTypes.func
};

var Story = function (_React$Component) {
  inherits(Story, _React$Component);

  function Story(props) {
    classCallCheck(this, Story);

    var _this = possibleConstructorReturn(this, (Story.__proto__ || Object.getPrototypeOf(Story)).call(this, props));

    _this.toggleMore = function (show) {
      _this.setState({ showMore: show });
    };

    _this.imageLoaded = function () {
      try {
        if (_this.pauseId) clearTimeout(_this.pauseId);
        _this.setState({ loaded: true });
        _this.props.action('play', true);
      } catch (e) {
        console.log(e);
      }
    };

    _this.videoLoaded = function () {
      try {
        _this.props.getVideoDuration(_this.vid.duration);
        _this.vid && _this.vid.play().then(function () {
          _this.imageLoaded();
        }).catch(function (e) {
          _this.props.action('pause');
          console.log(e);
        });
      } catch (e) {
        console.log(e);
      }
    };

    _this.state = {
      loaded: false
    };
    _this.getStoryContent = _this.getStoryContent.bind(_this);
    return _this;
  }

  createClass(Story, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.story !== prevProps.story) {
        this.pauseId && clearTimeout(this.pauseId);
        this.pauseId = setTimeout(function () {
          _this2.setState({ loaded: false });
        }, 300);
        this.props.action('pause', true);
        this.vid && this.vid.addEventListener('waiting', function () {
          _this2.props.action('pause', true);
        });
        this.vid && this.vid.addEventListener('playing', function () {
          _this2.props.action('play', true);
        });
      }
      if (this.vid && this.props.playState !== prevProps.playState && !this.props.bufferAction) {
        if (this.props.playState) {
          this.vid.pause();
        } else {
          this.vid.play().catch(function (e) {
            return console.log(e);
          });
        }
      }
    }
  }, {
    key: 'getStoryContent',
    value: function getStoryContent() {
      var _this3 = this;

      var source = _typeof(this.props.story) === 'object' ? this.props.story.url : this.props.story;
      var storyContentStyles = this.props.story.styles || this.props.storyContentStyles || styles$1.storyContent;
      var type = this.props.story.type === 'video' ? 'video' : 'image';
      return type === 'image' ? React__default.createElement('img', {
        style: storyContentStyles,
        src: source,
        onLoad: this.imageLoaded
      }) : type === 'video' ? React__default.createElement('video', { ref: function ref(r) {
          _this3.vid = r;
        }, style: storyContentStyles, src: source, controls: false, onLoadedData: this.videoLoaded, autoPlay: true, playsInline: true }) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var isHeader = _typeof(this.props.story) === 'object' && this.props.story.header;
      var headerStyles = {
        position: 'absolute',
        left: 12,
        bottom: 20,
        zIndex: 19
      };
      return React__default.createElement(
        'div',
        { style: _extends({}, styles$1.story, { width: this.props.width, height: this.props.height }) },
        this.getStoryContent(),
        isHeader && React__default.createElement(
          'div',
          { style: headerStyles },
          this.props.header ? function () {
            return _this4.props.header(_this4.props.story.header);
          } : React__default.createElement(Header, { heading: this.props.story.header.heading, subheading: this.props.story.header.subheading, profileImage: this.props.story.header.profileImage })
        ),
        !this.state.loaded && React__default.createElement(
          'div',
          { style: { width: this.props.width, height: this.props.height, position: 'absolute', left: 0, top: 0, background: 'rgba(0, 0, 0, 0.9)', zIndex: 9, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ccc' } },
          this.props.loader || React__default.createElement('div', { className: style.spinner })
        ),
        this.props.story.seeMore && React__default.createElement(
          'div',
          { style: { position: 'absolute', margin: 'auto', bottom: 0, zIndex: 9999, width: '100%' } },
          React__default.createElement(seeMore, { action: this.props.action, toggleMore: this.toggleMore, showContent: this.state.showMore, seeMoreContent: this.props.story.seeMore })
        )
      );
    }
  }]);
  return Story;
}(React__default.Component);


var styles$1 = {
  story: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden'
  },
  storyContent: {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto'
  }
};

Story.propTypes = {
  story: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  height: PropTypes.number,
  width: PropTypes.number,
  action: PropTypes.func,
  loader: PropTypes.element,
  header: PropTypes.element,
  playState: PropTypes.bool,
  getVideoDuration: PropTypes.func,
  bufferAction: PropTypes.bool,
  storyContentStyles: PropTypes.object
};

var ProgressWrapper = function ProgressWrapper(props) {
  return React__default.createElement(
    'div',
    { className: style.autoHide, style: _extends({}, styles$2.progress, getProgressWrapperStyle(props)) },
    props.children
  );
};

var getProgressWrapperStyle = function getProgressWrapperStyle(_ref) {
  var width = _ref.width,
      pause = _ref.pause,
      bufferAction = _ref.bufferAction;
  return {
    width: width * 100 + '%',
    opacity: pause && !bufferAction ? 0 : 1
  };
};

var styles$2 = {
  progress: {
    height: 2,
    maxWidth: '100%',
    background: '#555',
    margin: 2
  }
};

ProgressWrapper.propTypes = {
  children: PropTypes.node
};

var Progress = function (_React$PureComponent) {
  inherits(Progress, _React$PureComponent);

  function Progress() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Progress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Progress.__proto__ || Object.getPrototypeOf(Progress)).call.apply(_ref, [this].concat(args))), _this), _this.next = function () {
      _this.props.next();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Progress, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.inner) {
        this.inner.addEventListener('webkitAnimationEnd', this.next, false);
        this.inner.addEventListener('animationend', this.next, false);
        this.inner.addEventListener('oanimationend', this.next, false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          width = _props.width,
          pause = _props.pause,
          bufferAction = _props.bufferAction,
          active = _props.active;

      return React__default.createElement(
        ProgressWrapper,
        { width: width, pause: pause, bufferAction: bufferAction },
        React__default.createElement('div', {
          ref: function ref(r) {
            _this2.inner = r;
          },
          className: style.inner,
          style: getProgressStyle({ active: active, pause: pause, duration: this.state.duration }) })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var current = props.currentStory;
      if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
        if (current.type && props.videoDuration) return { duration: props.videoDuration * 1000 };
        if (current.duration) return { duration: current.duration };
        return { duration: props.defaultInterval };
      } else {
        return { duration: props.defaultInterval };
      }
    }
  }]);
  return Progress;
}(React__default.PureComponent);


var animation = function animation(duration) {
  return duration + 'ms linear 0ms ' + style.slidein;
};
var animationPlayState = function animationPlayState(pause) {
  return pause ? 'paused' : 'running';
};

var getProgressStyle = function getProgressStyle(_ref2) {
  var active = _ref2.active,
      duration = _ref2.duration,
      pause = _ref2.pause;

  switch (active) {
    case 2:
      return { width: '100%' };
    case 1:
      return { animation: animation(duration), animationPlayState: animationPlayState(pause) };
    case 0:
      return { width: 0 };
    default:
      return { width: 0 };
  }
};

Progress.propTypes = {
  width: PropTypes.number,
  defaultInterval: PropTypes.number,
  pause: PropTypes.bool,
  next: PropTypes.func,
  active: PropTypes.number,
  bufferAction: PropTypes.bool,
  videoDuration: PropTypes.number,
  currentStory: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

var ProgressArray = function (_React$Component) {
  inherits(ProgressArray, _React$Component);

  function ProgressArray() {
    classCallCheck(this, ProgressArray);
    return possibleConstructorReturn(this, (ProgressArray.__proto__ || Object.getPrototypeOf(ProgressArray)).apply(this, arguments));
  }

  createClass(ProgressArray, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        'div',
        { style: styles$3.progressArr },
        this.props.length.map(function (i, index) {
          return React__default.createElement(Progress, {
            key: index,
            width: 1 / _this2.props.length.length,
            next: _this2.props.next,
            defaultInterval: _this2.props.defaultInterval,
            videoDuration: _this2.props.videoDuration,
            currentStory: _this2.props.currentStory,
            active: i === _this2.props.progress.id ? 1 : i < _this2.props.progress.id ? 2 : 0,
            pause: _this2.props.pause,
            bufferAction: _this2.props.bufferAction
          });
        })
      );
    }
  }]);
  return ProgressArray;
}(React__default.Component);


var styles$3 = {
  progressArr: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    flexWrap: 'row',
    position: 'absolute',
    width: '98%',
    padding: 5,
    paddingTop: 7,
    alignSelf: 'center',
    zIndex: 99,
    filter: 'drop-shadow(0 1px 8px #000)'
  }
};

ProgressArray.propTypes = {
  length: PropTypes.array,
  progress: PropTypes.object,
  pause: PropTypes.bool,
  next: PropTypes.func,
  currentStory: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  defaultInterval: PropTypes.number,
  videoDuration: PropTypes.number,
  bufferAction: PropTypes.bool
};

var Container = function (_React$PureComponent) {
  inherits(Container, _React$PureComponent);

  function Container(props) {
    classCallCheck(this, Container);

    var _this = possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this.pause = function (action, bufferAction) {
      _this.setState({ pause: action === 'pause', bufferAction: bufferAction });
    };

    _this.previous = function () {
      if (_this.state.currentId > 0) {
        _this.setState({
          currentId: _this.state.currentId - 1,
          count: 0
        });
      }
    };

    _this.next = function () {
      if (_this.props.loop) {
        _this.updateNextStoryIdForLoop();
      } else {
        _this.updateNextStoryId();
      }
    };

    _this.handleKeyup = function (event) {
      // Keyboard left arrow
      if (event.keyCode === 37) {
        event.preventDefault();
        _this.previous();
      }
      // Keyboard right arrow
      if (event.keyCode === 39) {
        event.preventDefault();
        _this.next();
      }
    };

    _this.updateNextStoryIdForLoop = function () {
      _this.setState({
        currentId: (_this.state.currentId + 1) % _this.props.stories.length,
        count: 0
      });
    };

    _this.updateNextStoryId = function () {
      if (_this.state.currentId < _this.props.stories.length - 1) {
        _this.setState({
          currentId: _this.state.currentId + 1,
          count: 0
        });
      }
    };

    _this.debouncePause = function (e) {
      e.preventDefault();
      _this.mousedownId = setTimeout(function () {
        _this.pause('pause');
      }, 200);
    };

    _this.mouseUp = function (e, type) {
      e.preventDefault();
      _this.mousedownId && clearTimeout(_this.mousedownId);
      if (_this.state.pause) {
        _this.pause('play');
      } else {
        type === 'next' ? _this.next() : _this.previous();
      }
    };

    _this.getVideoDuration = function (duration) {
      _this.setState({ videoDuration: duration });
    };

    _this.toggleMore = function (show) {
      if (_this.story) {
        _this.story.toggleMore(show);
        return true;
      } else return false;
    };

    _this.state = {
      currentId: 0,
      pause: true,
      count: 0,
      storiesDone: 0
    };
    _this.defaultInterval = props.defaultInterval;
    _this.width = props.width;
    _this.height = props.height;
    return _this;
  }

  createClass(Container, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keyup', this.handleKeyup);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.addEventListener('keyup', this.handleKeyup);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        'div',
        { style: _extends({}, styles$4.container, { width: this.width, height: this.height }) },
        React__default.createElement(ProgressArray, {
          next: this.next,
          pause: this.state.pause,
          bufferAction: this.state.bufferAction,
          videoDuration: this.state.videoDuration,
          length: this.props.stories.map(function (_, i) {
            return i;
          }),
          defaultInterval: this.defaultInterval,
          currentStory: this.props.stories[this.state.currentId],
          progress: { id: this.state.currentId, completed: this.state.count / (this.props.stories[this.state.currentId] && this.props.stories[this.state.currentId].duration || this.defaultInterval) }
        }),
        React__default.createElement(Story, {
          ref: function ref(s) {
            return _this2.story = s;
          },
          action: this.pause,
          bufferAction: this.state.bufferAction,
          height: this.height,
          playState: this.state.pause,
          width: this.width,
          story: this.props.stories[this.state.currentId],
          loader: this.props.loader,
          header: this.props.header,
          getVideoDuration: this.getVideoDuration,
          storyContentStyles: this.props.storyContentStyles
        }),
        React__default.createElement(
          'div',
          { style: styles$4.overlay },
          React__default.createElement('div', { style: { width: '50%', zIndex: 999 }, onTouchStart: this.debouncePause, onTouchEnd: function onTouchEnd(e) {
              return _this2.mouseUp(e, 'previous');
            }, onMouseDown: this.debouncePause, onMouseUp: function onMouseUp(e) {
              return _this2.mouseUp(e, 'previous');
            } }),
          React__default.createElement('div', { style: { width: '50%', zIndex: 999 }, onTouchStart: this.debouncePause, onTouchEnd: function onTouchEnd(e) {
              return _this2.mouseUp(e, 'next');
            }, onMouseDown: this.debouncePause, onMouseUp: function onMouseUp(e) {
              return _this2.mouseUp(e, 'next');
            } })
        )
      );
    }
  }]);
  return Container;
}(React__default.PureComponent);

var styles$4 = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#111',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    height: 450,
    width: 'inherit',
    display: 'flex'
  },
  left: {},
  right: {}
};

Container.propTypes = {
  stories: PropTypes.array,
  defaultInterval: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  loader: PropTypes.element,
  header: PropTypes.element,
  storyContentStyles: PropTypes.object,
  loop: PropTypes.bool
};

Container.defaultProps = {
  defaultInterval: 4000,
  width: 360,
  height: 640
};

var ReactInstaStories = function (_Component) {
  inherits(ReactInstaStories, _Component);

  function ReactInstaStories(props) {
    classCallCheck(this, ReactInstaStories);

    var _this = possibleConstructorReturn(this, (ReactInstaStories.__proto__ || Object.getPrototypeOf(ReactInstaStories)).call(this, props));

    _this.pause = _this.pause.bind(_this);
    _this.play = _this.play.bind(_this);
    _this.previous = _this.previous.bind(_this);
    _this.next = _this.next.bind(_this);
    return _this;
  }

  createClass(ReactInstaStories, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.stories.map(function (s) {
        var i = new Image();
        if (!((typeof s === 'undefined' ? 'undefined' : _typeof(s)) === 'object' && s.type === 'video')) {
          i.src = (typeof s === 'undefined' ? 'undefined' : _typeof(s)) === 'object' ? s.url : s;
        }
      });
    }
  }, {
    key: 'pause',
    value: function pause() {
      if (this.c) {
        this.c.pause('pause');
        return true;
      } else return false;
    }
  }, {
    key: 'play',
    value: function play() {
      if (this.c) {
        this.c.pause('play');
        return true;
      } else return false;
    }
  }, {
    key: 'previous',
    value: function previous() {
      if (this.c) {
        this.c.previous();
        return true;
      } else return false;
    }
  }, {
    key: 'next',
    value: function next() {
      if (this.c) {
        this.c.next();
        return true;
      } else return false;
    }
  }, {
    key: 'toggleSeeMore',
    value: function toggleSeeMore(show) {
      if (this.c) {
        return this.c.toggleMore(show);
      } else return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        'div',
        null,
        React__default.createElement(Container, {
          ref: function ref(c) {
            return _this2.c = c;
          },
          stories: this.props.stories,
          defaultInterval: this.props.defaultInterval,
          width: this.props.width,
          height: this.props.height,
          loader: this.props.loader,
          header: this.props.header,
          storyContentStyles: this.props.storyStyles,
          loop: this.props.loop
        })
      );
    }
  }]);
  return ReactInstaStories;
}(React.Component);


ReactInstaStories.defaultProps = {
  loop: false
};

ReactInstaStories.propTypes = {
  stories: PropTypes.array,
  defaultInterval: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  loader: PropTypes.element,
  header: PropTypes.element,
  storyStyles: PropTypes.object,
  loop: PropTypes.bool
};

module.exports = ReactInstaStories;
//# sourceMappingURL=index.js.map
