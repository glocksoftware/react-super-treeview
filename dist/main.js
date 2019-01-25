(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ExpandableTree"] = factory();
	else
		root["ExpandableTree"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(1);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isNil = __webpack_require__(4);

var _isNil2 = _interopRequireDefault(_isNil);

var _isEmpty = __webpack_require__(5);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isEqual = __webpack_require__(6);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _find = __webpack_require__(7);

var _find2 = _interopRequireDefault(_find);

var _get = __webpack_require__(8);

var _get2 = _interopRequireDefault(_get);

var _cloneDeep = __webpack_require__(9);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _reactTransitionGroup = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuperTreeview = function (_Component) {
    _inherits(SuperTreeview, _Component);

    function SuperTreeview(props) {
        _classCallCheck(this, SuperTreeview);

        var _this = _possibleConstructorReturn(this, (SuperTreeview.__proto__ || Object.getPrototypeOf(SuperTreeview)).call(this, props));

        _this.state = {
            data: (0, _cloneDeep2.default)(_this.props.data),
            lastCheckToggledNodeIndex: null,
            lastCheckNode: null,
            checkedCount: 0
        };

        _this.handleUpdate = _this.handleUpdate.bind(_this);

        _this.printNodes = _this.printNodes.bind(_this);
        _this.printChildren = _this.printChildren.bind(_this);

        _this.printCheckbox = _this.printCheckbox.bind(_this);
        _this.printDeleteButton = _this.printDeleteButton.bind(_this);
        _this.printExpandButton = _this.printExpandButton.bind(_this);
        _this.printNoChildrenMessage = _this.printNoChildrenMessage.bind(_this);

        _this.handleCheckToggle = _this.handleCheckToggle.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleExpandToggle = _this.handleExpandToggle.bind(_this);
        return _this;
    }

    _createClass(SuperTreeview, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!(0, _isEqual2.default)(nextProps.data, this.props.data)) {
                this.setState({ data: (0, _cloneDeep2.default)(nextProps.data) });
            }
        }
    }, {
        key: 'handleUpdate',
        value: function handleUpdate(updatedData) {
            var _props = this.props,
                depth = _props.depth,
                onUpdateCb = _props.onUpdateCb;


            onUpdateCb(updatedData, depth);
        }
    }, {
        key: 'handleCheckToggle',
        value: function handleCheckToggle(node, e) {
            var _props2 = this.props,
                onCheckToggleCb = _props2.onCheckToggleCb,
                depth = _props2.depth,
                isOneCheck = _props2.isOneCheck;
            var _state = this.state,
                lastCheckToggledNodeIndex = _state.lastCheckToggledNodeIndex,
                lastCheckNode = _state.lastCheckNode,
                checkedCount = _state.checkedCount;

            var data = (0, _cloneDeep2.default)(this.state.data);
            var currentNode = (0, _find2.default)(data, node);
            var currentNodeIndex = data.indexOf(currentNode);

            if (isOneCheck) {
                if (!(0, _isNil2.default)(lastCheckNode)) {
                    var oldNote = (0, _find2.default)(data, lastCheckNode);

                    if (currentNode.name === oldNote.name) {
                        this.setState({ lastCheckNode: null });
                    } else {
                        oldNote.isChecked = !oldNote.isChecked;
                    }
                }
            }

            var toggledNodes = [];
            if (e.shiftKey && !(0, _isNil2.default)(lastCheckToggledNodeIndex)) {
                var rangeStart = Math.min(currentNodeIndex, lastCheckToggledNodeIndex);
                var rangeEnd = Math.max(currentNodeIndex, lastCheckToggledNodeIndex);

                var nodeRange = data.slice(rangeStart, rangeEnd + 1);

                nodeRange.forEach(function (node) {
                    node.isChecked = e.target.checked;
                    toggledNodes.push(node);
                });
            } else {
                currentNode.isChecked = e.target.checked;
                toggledNodes.push(currentNode);
            }

            onCheckToggleCb(toggledNodes, depth);
            this.setState({ lastCheckToggledNodeIndex: currentNodeIndex, lastCheckNode: currentNode });
            this.handleUpdate(data);
        }
    }, {
        key: 'handleDelete',
        value: function handleDelete(node) {
            var _props3 = this.props,
                onDeleteCb = _props3.onDeleteCb,
                depth = _props3.depth;

            var data = (0, _cloneDeep2.default)(this.state.data);

            var newData = data.filter(function (nodeItem) {
                return !(0, _isEqual2.default)(node, nodeItem);
            });

            onDeleteCb(node, newData, depth) && this.handleUpdate(newData);
        }
    }, {
        key: 'handleExpandToggle',
        value: function handleExpandToggle(node) {
            var _props4 = this.props,
                onExpandToggleCb = _props4.onExpandToggleCb,
                depth = _props4.depth;

            var data = (0, _cloneDeep2.default)(this.state.data);
            var currentNode = (0, _find2.default)(data, node);

            currentNode.isExpanded = !currentNode.isExpanded;

            onExpandToggleCb(currentNode, depth);
            this.handleUpdate(data);
        }
    }, {
        key: 'printCheckbox',
        value: function printCheckbox(node) {
            var _this2 = this;

            var _props5 = this.props,
                isCheckable = _props5.isCheckable,
                keywordLabel = _props5.keywordLabel,
                depth = _props5.depth;


            if (isCheckable(node, depth)) {
                return _react2.default.createElement(
                    'div',
                    { className: 'checkbox' },
                    _react2.default.createElement(
                        'label',
                        null,
                        _react2.default.createElement('input', {
                            type: 'checkbox',
                            name: node[keywordLabel],
                            onChange: function onChange(e) {
                                _this2.handleCheckToggle(node, e);
                            },
                            checked: !!node.isChecked,
                            id: node.id
                        }),
                        _react2.default.createElement('i', { className: 'input-helper' }),
                        label
                    )
                );
            }
        }
    }, {
        key: 'printDeleteButton',
        value: function printDeleteButton(node) {
            var _this3 = this;

            var _props6 = this.props,
                isDeletable = _props6.isDeletable,
                depth = _props6.depth,
                deleteElement = _props6.deleteElement;


            if (isDeletable(node, depth)) {
                return _react2.default.createElement(
                    'div',
                    { className: 'delete-btn',
                        onClick: function onClick() {
                            _this3.handleDelete(node);
                        }
                    },
                    deleteElement
                );
            }
        }
    }, {
        key: 'printExpandButton',
        value: function printExpandButton(node) {
            var _this4 = this;

            var className = node.isExpanded ? 'super-treeview-triangle-btn-down' : 'super-treeview-triangle-btn-right';
            var _props7 = this.props,
                isExpandable = _props7.isExpandable,
                depth = _props7.depth;


            if (isExpandable(node, depth)) {
                return _react2.default.createElement('div', {
                    className: 'super-treeview-triangle-btn ' + className,
                    onClick: function onClick() {
                        _this4.handleExpandToggle(node);
                    }
                });
            } else {
                return _react2.default.createElement('div', { className: 'super-treeview-triangle-btn super-treeview-triangle-btn-none' });
            }
        }
    }, {
        key: 'printNoChildrenMessage',
        value: function printNoChildrenMessage() {
            var _props8 = this.props,
                transitionExitTimeout = _props8.transitionExitTimeout,
                noChildrenAvailableMessage = _props8.noChildrenAvailableMessage;

            var noChildrenTransitionProps = {
                classNames: 'super-treeview-no-children-transition',
                key: 'super-treeview-no-children',
                style: {
                    transitionDuration: transitionExitTimeout + 'ms',
                    transitionDelay: transitionExitTimeout + 'ms'
                },
                timeout: {
                    enter: transitionExitTimeout
                },
                exit: false
            };

            return _react2.default.createElement(
                _reactTransitionGroup.CSSTransition,
                noChildrenTransitionProps,
                _react2.default.createElement(
                    'div',
                    { className: 'super-treeview-no-children' },
                    _react2.default.createElement(
                        'div',
                        { className: 'super-treeview-no-children-content' },
                        noChildrenAvailableMessage
                    )
                )
            );
        }
    }, {
        key: 'printNodes',
        value: function printNodes(nodeArray) {
            var _this5 = this;

            var _props9 = this.props,
                keywordKey = _props9.keywordKey,
                keywordLabel = _props9.keywordLabel,
                depth = _props9.depth,
                transitionEnterTimeout = _props9.transitionEnterTimeout,
                transitionExitTimeout = _props9.transitionExitTimeout,
                getStyleClassCb = _props9.getStyleClassCb,
                isExpandable = _props9.isExpandable;
            var printExpandButton = this.printExpandButton,
                printCheckbox = this.printCheckbox,
                printDeleteButton = this.printDeleteButton,
                printChildren = this.printChildren;


            var nodeTransitionProps = {
                classNames: 'super-treeview-node-transition',
                style: {
                    transitionDuration: transitionEnterTimeout + 'ms'
                },
                timeout: {
                    enter: transitionEnterTimeout,
                    exit: transitionExitTimeout
                }
            };

            return _react2.default.createElement(
                _reactTransitionGroup.TransitionGroup,
                null,
                (0, _isEmpty2.default)(nodeArray) && isExpandable(nodeArray, depth) ? this.printNoChildrenMessage() : nodeArray.map(function (node, index) {
                    var nodeText = (0, _get2.default)(node, keywordLabel, '');

                    return _react2.default.createElement(
                        _reactTransitionGroup.CSSTransition,
                        _extends({}, nodeTransitionProps, {
                            key: node.id || index
                        }),
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'super-treeview-node' + getStyleClassCb(node)
                            },
                            _react2.default.createElement(
                                'div',
                                { className: 'super-treeview-node-content' },
                                printExpandButton(node, depth),
                                printCheckbox(node, depth),
                                _react2.default.createElement(
                                    'label',
                                    {
                                        htmlFor: node.id,
                                        title: nodeText,
                                        className: 'super-treeview-text',
                                        onClick: function onClick() {
                                            _this5.handleExpandToggle(node);
                                        }
                                    },
                                    nodeText
                                ),
                                printDeleteButton(node, depth)
                            ),
                            printChildren(node)
                        )
                    );
                })
            );
        }
    }, {
        key: 'printChildren',
        value: function printChildren(node) {
            if (!node.isExpanded) {
                return null;
            }

            var _props10 = this.props,
                keywordChildren = _props10.keywordChildren,
                keywordChildrenLoading = _props10.keywordChildrenLoading,
                depth = _props10.depth;

            var isChildrenLoading = (0, _get2.default)(node, keywordChildrenLoading, false);
            var childrenElement = void 0;

            if (isChildrenLoading) {
                childrenElement = (0, _get2.default)(this.props, 'loadingElement');
            } else {
                childrenElement = _react2.default.createElement(SuperTreeview, _extends({}, this.props, {
                    data: node[keywordChildren] || [],
                    depth: depth + 1,
                    onUpdateCb: onChildrenUpdateCb.bind(this)
                }));
            }

            return _react2.default.createElement(
                'div',
                { className: 'super-treeview-children-container' },
                childrenElement
            );

            function onChildrenUpdateCb(updatedData) {
                var data = (0, _cloneDeep2.default)(this.state.data);
                var currentNode = (0, _find2.default)(data, node);

                currentNode[keywordChildren] = updatedData;
                this.handleUpdate(data);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'super-treeview' },
                this.printNodes(this.state.data)
            );
        }
    }]);

    return SuperTreeview;
}(_react.Component);

SuperTreeview.propTypes = {
    data: _propTypes2.default.array.isRequired,
    depth: _propTypes2.default.number,

    isOneCheck: _propTypes2.default.bool,

    deleteElement: _propTypes2.default.element,

    getStyleClassCb: _propTypes2.default.func,

    isCheckable: _propTypes2.default.func,
    isDeletable: _propTypes2.default.func,
    isExpandable: _propTypes2.default.func,

    keywordChildren: _propTypes2.default.string,
    keywordChildrenLoading: _propTypes2.default.string,
    keywordKey: _propTypes2.default.string,
    keywordLabel: _propTypes2.default.string,

    loadingElement: _propTypes2.default.element,
    noChildrenAvailableMessage: _propTypes2.default.string,

    onCheckToggleCb: _propTypes2.default.func,
    onDeleteCb: _propTypes2.default.func,
    onExpandToggleCb: _propTypes2.default.func,
    onUpdateCb: _propTypes2.default.func,

    transitionEnterTimeout: _propTypes2.default.number,
    transitionExitTimeout: _propTypes2.default.number
};

SuperTreeview.defaultProps = {
    depth: 0,

    isOneCheck: false,

    deleteElement: _react2.default.createElement(
        'div',
        null,
        '(X)'
    ),

    getStyleClassCb: function getStyleClassCb() /* node, depth */{
        return '';
    },
    isCheckable: function isCheckable() /* node, depth */{
        return true;
    },
    isDeletable: function isDeletable() /* node, depth */{
        return true;
    },
    isExpandable: function isExpandable() /* node, depth */{
        return true;
    },

    keywordChildren: 'children',
    keywordChildrenLoading: 'isChildrenLoading',
    keywordLabel: 'name',
    keywordKey: 'id',

    loadingElement: _react2.default.createElement(
        'div',
        null,
        'loading...'
    ),

    noChildrenAvailableMessage: 'No data found',

    onCheckToggleCb: function onCheckToggleCb() /* Array of nodes, depth */{},
    onDeleteCb: function onDeleteCb() /* node, updatedData, depth */{
        return true;
    },
    onExpandToggleCb: function onExpandToggleCb() /* node, depth */{},
    onUpdateCb: function onUpdateCb() /* updatedData, depth */{},

    transitionEnterTimeout: 1200,
    transitionExitTimeout: 1200
};

exports.default = SuperTreeview;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash/isNil");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ })
/******/ ]);
});