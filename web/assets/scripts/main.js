(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fgLoadcss = require('fg-loadcss');

var _moduleLoader = require('./utils/module-loader');

var _emitter = require('./utils/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _resizer = require('./utils/resizer');

var _resizer2 = _interopRequireDefault(_resizer);

var _scroller = require('./utils/scroller');

var _scroller2 = _interopRequireDefault(_scroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.moduleInstances = this._getInstances();
    this.initialize();
  }

  _createClass(App, [{
    key: 'initialize',
    value: function initialize() {
      console.log('App initialized');
      this._bindEvents();
    }
  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this = this;

      _scroller2.default.on('scroll', function () {
        _emitter2.default.fire('app--scroll');
      });

      _resizer2.default.on('resize', function () {
        _emitter2.default.fire('app--resizer');
      });

      _emitter2.default.on('get-instances', function () {
        _this._getInstances();
      });
    }
  }, {
    key: '_getInstances',
    value: function _getInstances() {
      return _moduleLoader.modules.map(function (module) {
        var elements = Array.from(document.querySelectorAll(module.class));
        var references = elements.map(function (el) {
          return new module.Source(el);
        });

        return {
          name: module.name,
          ref: references
        };
      });
    }
  }, {
    key: 'tearDown',
    value: function tearDown() {
      this.moduleInstances.forEach(function (item) {
        item.ref.forEach(function (ref) {
          if (ref.teardown) {
            ref.teardown();
          }
        });
      });
    }
  }]);

  return App;
}();

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJtb2R1bGVJbnN0YW5jZXMiLCJfZ2V0SW5zdGFuY2VzIiwiaW5pdGlhbGl6ZSIsImNvbnNvbGUiLCJsb2ciLCJfYmluZEV2ZW50cyIsIm9uIiwiZmlyZSIsIm1hcCIsImVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibW9kdWxlIiwiY2xhc3MiLCJyZWZlcmVuY2VzIiwiU291cmNlIiwiZWwiLCJuYW1lIiwicmVmIiwiZm9yRWFjaCIsIml0ZW0iLCJ0ZWFyZG93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxHO0FBQ25CLGlCQUFjO0FBQUE7O0FBQ1osU0FBS0MsZUFBTCxHQUF1QixLQUFLQyxhQUFMLEVBQXZCO0FBQ0EsU0FBS0MsVUFBTDtBQUNEOzs7O2lDQUVZO0FBQ1hDLGNBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLFdBQUtDLFdBQUw7QUFDRDs7O2tDQUVhO0FBQUE7O0FBQ1oseUJBQVNDLEVBQVQsQ0FBWSxRQUFaLEVBQXNCLFlBQU07QUFDMUIsMEJBQVFDLElBQVIsQ0FBYSxhQUFiO0FBQ0QsT0FGRDs7QUFJQSx3QkFBUUQsRUFBUixDQUFXLFFBQVgsRUFBcUIsWUFBTTtBQUN6QiwwQkFBUUMsSUFBUixDQUFhLGNBQWI7QUFDRCxPQUZEOztBQUlBLHdCQUFRRCxFQUFSLENBQVcsZUFBWCxFQUE0QixZQUFNO0FBQ2hDLGNBQUtMLGFBQUw7QUFDRCxPQUZEO0FBR0Q7OztvQ0FFZTtBQUNkLGFBQU8sc0JBQVFPLEdBQVIsQ0FBWSxrQkFBVTtBQUMzQixZQUFNQyxXQUFXQyxNQUFNQyxJQUFOLENBQVdDLFNBQVNDLGdCQUFULENBQTBCQyxPQUFPQyxLQUFqQyxDQUFYLENBQWpCO0FBQ0EsWUFBTUMsYUFBYVAsU0FBU0QsR0FBVCxDQUFhLGNBQU07QUFDcEMsaUJBQU8sSUFBSU0sT0FBT0csTUFBWCxDQUFrQkMsRUFBbEIsQ0FBUDtBQUNELFNBRmtCLENBQW5COztBQUlBLGVBQU87QUFDTEMsZ0JBQU1MLE9BQU9LLElBRFI7QUFFTEMsZUFBS0o7QUFGQSxTQUFQO0FBSUQsT0FWTSxDQUFQO0FBV0Q7OzsrQkFFVTtBQUNULFdBQUtoQixlQUFMLENBQXFCcUIsT0FBckIsQ0FBNkIsZ0JBQVE7QUFDbkNDLGFBQUtGLEdBQUwsQ0FBU0MsT0FBVCxDQUFpQixlQUFPO0FBQ3RCLGNBQUlELElBQUlHLFFBQVIsRUFBa0I7QUFDaEJILGdCQUFJRyxRQUFKO0FBQ0Q7QUFDRixTQUpEO0FBS0QsT0FORDtBQU9EOzs7Ozs7a0JBL0NrQnhCLEciLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2FkQ1NTLCBvbkxvYWRDU1N9IGZyb20gJ2ZnLWxvYWRjc3MnO1xuaW1wb3J0IHttb2R1bGVzfSBmcm9tICcuL3V0aWxzL21vZHVsZS1sb2FkZXInO1xuaW1wb3J0IGVtaXR0ZXIgZnJvbSAnLi91dGlscy9lbWl0dGVyJztcbmltcG9ydCByZXNpemVyIGZyb20gJy4vdXRpbHMvcmVzaXplcic7XG5pbXBvcnQgc2Nyb2xsZXIgZnJvbSAnLi91dGlscy9zY3JvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kdWxlSW5zdGFuY2VzID0gdGhpcy5fZ2V0SW5zdGFuY2VzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIGNvbnNvbGUubG9nKCdBcHAgaW5pdGlhbGl6ZWQnKTtcbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBfYmluZEV2ZW50cygpIHtcbiAgICBzY3JvbGxlci5vbignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgZW1pdHRlci5maXJlKCdhcHAtLXNjcm9sbCcpO1xuICAgIH0pO1xuXG4gICAgcmVzaXplci5vbigncmVzaXplJywgKCkgPT4ge1xuICAgICAgZW1pdHRlci5maXJlKCdhcHAtLXJlc2l6ZXInKTtcbiAgICB9KTtcblxuICAgIGVtaXR0ZXIub24oJ2dldC1pbnN0YW5jZXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9nZXRJbnN0YW5jZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRJbnN0YW5jZXMoKSB7XG4gICAgcmV0dXJuIG1vZHVsZXMubWFwKG1vZHVsZSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtb2R1bGUuY2xhc3MpKTtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBlbGVtZW50cy5tYXAoZWwgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IG1vZHVsZS5Tb3VyY2UoZWwpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG1vZHVsZS5uYW1lLFxuICAgICAgICByZWY6IHJlZmVyZW5jZXMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgdGVhckRvd24oKSB7XG4gICAgdGhpcy5tb2R1bGVJbnN0YW5jZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0ucmVmLmZvckVhY2gocmVmID0+IHtcbiAgICAgICAgaWYgKHJlZi50ZWFyZG93bikge1xuICAgICAgICAgIHJlZi50ZWFyZG93bigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19
},{"./utils/emitter":4,"./utils/module-loader":5,"./utils/resizer":6,"./utils/scroller":7,"fg-loadcss":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _properjsHobo = require('properjs-hobo');

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _emitter = require('../utils/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SELECTORS = {
  COACH: '.js-coach',
  MODAL: '.js-modal',
  MODAL_CLOSE: '.js-modal-close',
  MODAL_LOADER: '.js-modal-loader',
  MODAL_CONTENT: '.js-modal-content',
  MODAL_HIDE: '-hide',
  ACTIVE: '-active'
};

var Coaches = function () {
  function Coaches(coachWrapper) {
    _classCallCheck(this, Coaches);

    this.coachArr = Array.from(document.querySelectorAll(SELECTORS.COACH));
    this.modal = document.querySelector(SELECTORS.MODAL);
    this.modalClose = document.querySelector(SELECTORS.MODAL_CLOSE);
    this.modalLoader = this.modal.querySelector(SELECTORS.MODAL_LOADER);
    this.modalContent = this.modal.querySelector(SELECTORS.MODAL_CONTENT);
    this.modalIsOpen = false;
    this.init();
  }

  _createClass(Coaches, [{
    key: 'init',
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this = this;

      this.coachArr.forEach(function (coach) {
        coach.addEventListener('click', function (event) {
          _this.handleCoachClick(coach, event);
        });
      });
      this.modalClose.addEventListener('click', this.hideModal.bind(this));
    }
  }, {
    key: 'handleCoachClick',
    value: function handleCoachClick(coach, event) {
      var coachSlug = (0, _properjsHobo2.default)(coach).data('coach');
      event.preventDefault();
      this.showModal();
      this.emptyModal();
      this.getXhr(coachSlug);
    }
  }, {
    key: 'getXhr',
    value: function getXhr(coach) {
      var _this2 = this;

      _properjsHobo2.default.ajax({
        url: '/coaches/' + coach,
        dataType: 'html',
        method: 'GET',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (response) {
        _this2.fillModal(response);
      }).then(function () {
        _emitter2.default.fire('get-instances');
      }).catch(function (error) {
        console.warn('error', error);
      });
    }
  }, {
    key: 'fillModal',
    value: function fillModal(data) {
      this.modalLoader.classList.remove(SELECTORS.ACTIVE);
      this.modalContent.innerHTML = data;
      this.modalContent.classList.add(SELECTORS.ACTIVE);
    }
  }, {
    key: 'emptyModal',
    value: function emptyModal() {
      this.modalContent.classList.remove(SELECTORS.ACTIVE);
      this.modalContent.innerHTML = '';
      this.modalLoader.classList.add(SELECTORS.ACTIVE);
    }
  }, {
    key: 'showModal',
    value: function showModal() {
      this.modal.classList.add(SELECTORS.ACTIVE);
      this.modalLoader.classList.add(SELECTORS.ACTIVE);
      this.modalIsOpen = true;
    }
  }, {
    key: 'hideModal',
    value: function hideModal() {
      this.emptyModal();
      this.modal.classList.remove(SELECTORS.ACTIVE);
      this.modalLoader.classList.remove(SELECTORS.ACTIVE);
    }
  }]);

  return Coaches;
}();

exports.default = Coaches;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvYWNoZXMuanMiXSwibmFtZXMiOlsiU0VMRUNUT1JTIiwiQ09BQ0giLCJNT0RBTCIsIk1PREFMX0NMT1NFIiwiTU9EQUxfTE9BREVSIiwiTU9EQUxfQ09OVEVOVCIsIk1PREFMX0hJREUiLCJBQ1RJVkUiLCJDb2FjaGVzIiwiY29hY2hXcmFwcGVyIiwiY29hY2hBcnIiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2RhbCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RhbENsb3NlIiwibW9kYWxMb2FkZXIiLCJtb2RhbENvbnRlbnQiLCJtb2RhbElzT3BlbiIsImluaXQiLCJiaW5kRXZlbnRzIiwiZm9yRWFjaCIsImNvYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvYWNoQ2xpY2siLCJldmVudCIsImhpZGVNb2RhbCIsImJpbmQiLCJjb2FjaFNsdWciLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJzaG93TW9kYWwiLCJlbXB0eU1vZGFsIiwiZ2V0WGhyIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJmaWxsTW9kYWwiLCJyZXNwb25zZSIsImZpcmUiLCJjYXRjaCIsImNvbnNvbGUiLCJ3YXJuIiwiZXJyb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2hCQyxTQUFPLFdBRFM7QUFFaEJDLFNBQU8sV0FGUztBQUdoQkMsZUFBYSxpQkFIRztBQUloQkMsZ0JBQWMsa0JBSkU7QUFLaEJDLGlCQUFlLG1CQUxDO0FBTWhCQyxjQUFZLE9BTkk7QUFPaEJDLFVBQVE7QUFQUSxDQUFsQjs7SUFVcUJDLE87QUFDbkIsbUJBQVlDLFlBQVosRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0MsUUFBTCxHQUFnQkMsTUFBTUMsSUFBTixDQUFXQyxTQUFTQyxnQkFBVCxDQUEwQmQsVUFBVUMsS0FBcEMsQ0FBWCxDQUFoQjtBQUNBLFNBQUtjLEtBQUwsR0FBYUYsU0FBU0csYUFBVCxDQUF1QmhCLFVBQVVFLEtBQWpDLENBQWI7QUFDQSxTQUFLZSxVQUFMLEdBQWtCSixTQUFTRyxhQUFULENBQXVCaEIsVUFBVUcsV0FBakMsQ0FBbEI7QUFDQSxTQUFLZSxXQUFMLEdBQW1CLEtBQUtILEtBQUwsQ0FBV0MsYUFBWCxDQUF5QmhCLFVBQVVJLFlBQW5DLENBQW5CO0FBQ0EsU0FBS2UsWUFBTCxHQUFvQixLQUFLSixLQUFMLENBQVdDLGFBQVgsQ0FBeUJoQixVQUFVSyxhQUFuQyxDQUFwQjtBQUNBLFNBQUtlLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLQyxVQUFMO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFdBQUtaLFFBQUwsQ0FBY2EsT0FBZCxDQUFzQixpQkFBUztBQUM3QkMsY0FBTUMsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsaUJBQVM7QUFDdkMsZ0JBQUtDLGdCQUFMLENBQXNCRixLQUF0QixFQUE2QkcsS0FBN0I7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQUtBLFdBQUtWLFVBQUwsQ0FBZ0JRLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxLQUFLRyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBMUM7QUFDRDs7O3FDQUVnQkwsSyxFQUFPRyxLLEVBQU87QUFDN0IsVUFBTUcsWUFBWSw0QkFBRU4sS0FBRixFQUFTTyxJQUFULENBQWMsT0FBZCxDQUFsQjtBQUNBSixZQUFNSyxjQUFOO0FBQ0EsV0FBS0MsU0FBTDtBQUNBLFdBQUtDLFVBQUw7QUFDQSxXQUFLQyxNQUFMLENBQVlMLFNBQVo7QUFDRDs7OzJCQUVNTixLLEVBQU87QUFBQTs7QUFDWiw2QkFBRVksSUFBRixDQUFPO0FBQ0xDLDJCQUFpQmIsS0FEWjtBQUVMYyxrQkFBVSxNQUZMO0FBR0xDLGdCQUFRLEtBSEg7QUFJTEMsaUJBQVM7QUFDUCw4QkFBb0I7QUFEYjtBQUpKLE9BQVAsRUFRR0MsSUFSSCxDQVFRLG9CQUFZO0FBQ2hCLGVBQUtDLFNBQUwsQ0FBZUMsUUFBZjtBQUNELE9BVkgsRUFXR0YsSUFYSCxDQVdRLFlBQU07QUFDViwwQkFBUUcsSUFBUixDQUFhLGVBQWI7QUFDRCxPQWJILEVBY0dDLEtBZEgsQ0FjUyxpQkFBUztBQUNkQyxnQkFBUUMsSUFBUixDQUFhLE9BQWIsRUFBc0JDLEtBQXRCO0FBQ0QsT0FoQkg7QUFpQkQ7Ozs4QkFFU2pCLEksRUFBTTtBQUNkLFdBQUtiLFdBQUwsQ0FBaUIrQixTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0NsRCxVQUFVTyxNQUE1QztBQUNBLFdBQUtZLFlBQUwsQ0FBa0JnQyxTQUFsQixHQUE4QnBCLElBQTlCO0FBQ0EsV0FBS1osWUFBTCxDQUFrQjhCLFNBQWxCLENBQTRCRyxHQUE1QixDQUFnQ3BELFVBQVVPLE1BQTFDO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtZLFlBQUwsQ0FBa0I4QixTQUFsQixDQUE0QkMsTUFBNUIsQ0FBbUNsRCxVQUFVTyxNQUE3QztBQUNBLFdBQUtZLFlBQUwsQ0FBa0JnQyxTQUFsQixHQUE4QixFQUE5QjtBQUNBLFdBQUtqQyxXQUFMLENBQWlCK0IsU0FBakIsQ0FBMkJHLEdBQTNCLENBQStCcEQsVUFBVU8sTUFBekM7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS1EsS0FBTCxDQUFXa0MsU0FBWCxDQUFxQkcsR0FBckIsQ0FBeUJwRCxVQUFVTyxNQUFuQztBQUNBLFdBQUtXLFdBQUwsQ0FBaUIrQixTQUFqQixDQUEyQkcsR0FBM0IsQ0FBK0JwRCxVQUFVTyxNQUF6QztBQUNBLFdBQUthLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS2MsVUFBTDtBQUNBLFdBQUtuQixLQUFMLENBQVdrQyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QmxELFVBQVVPLE1BQXRDO0FBQ0EsV0FBS1csV0FBTCxDQUFpQitCLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQ2xELFVBQVVPLE1BQTVDO0FBQ0Q7Ozs7OztrQkExRWtCQyxPIiwiZmlsZSI6IkNvYWNoZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdwcm9wZXJqcy1ob2JvJztcbmltcG9ydCBlbWl0dGVyIGZyb20gJy4uL3V0aWxzL2VtaXR0ZXInO1xuXG5jb25zdCBTRUxFQ1RPUlMgPSB7XG4gIENPQUNIOiAnLmpzLWNvYWNoJyxcbiAgTU9EQUw6ICcuanMtbW9kYWwnLFxuICBNT0RBTF9DTE9TRTogJy5qcy1tb2RhbC1jbG9zZScsXG4gIE1PREFMX0xPQURFUjogJy5qcy1tb2RhbC1sb2FkZXInLFxuICBNT0RBTF9DT05URU5UOiAnLmpzLW1vZGFsLWNvbnRlbnQnLFxuICBNT0RBTF9ISURFOiAnLWhpZGUnLFxuICBBQ1RJVkU6ICctYWN0aXZlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvYWNoZXMge1xuICBjb25zdHJ1Y3Rvcihjb2FjaFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvYWNoQXJyID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SUy5DT0FDSCkpO1xuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5NT0RBTCk7XG4gICAgdGhpcy5tb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuTU9EQUxfQ0xPU0UpO1xuICAgIHRoaXMubW9kYWxMb2FkZXIgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLk1PREFMX0xPQURFUik7XG4gICAgdGhpcy5tb2RhbENvbnRlbnQgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLk1PREFMX0NPTlRFTlQpO1xuICAgIHRoaXMubW9kYWxJc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuY29hY2hBcnIuZm9yRWFjaChjb2FjaCA9PiB7XG4gICAgICBjb2FjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVDb2FjaENsaWNrKGNvYWNoLCBldmVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLm1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGhhbmRsZUNvYWNoQ2xpY2soY29hY2gsIGV2ZW50KSB7XG4gICAgY29uc3QgY29hY2hTbHVnID0gJChjb2FjaCkuZGF0YSgnY29hY2gnKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2hvd01vZGFsKCk7XG4gICAgdGhpcy5lbXB0eU1vZGFsKCk7XG4gICAgdGhpcy5nZXRYaHIoY29hY2hTbHVnKTtcbiAgfVxuXG4gIGdldFhocihjb2FjaCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IGAvY29hY2hlcy8ke2NvYWNofWAsXG4gICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmZpbGxNb2RhbChyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBlbWl0dGVyLmZpcmUoJ2dldC1pbnN0YW5jZXMnKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBmaWxsTW9kYWwoZGF0YSkge1xuICAgIHRoaXMubW9kYWxMb2FkZXIuY2xhc3NMaXN0LnJlbW92ZShTRUxFQ1RPUlMuQUNUSVZFKTtcbiAgICB0aGlzLm1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBkYXRhO1xuICAgIHRoaXMubW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoU0VMRUNUT1JTLkFDVElWRSk7XG4gIH1cblxuICBlbXB0eU1vZGFsKCkge1xuICAgIHRoaXMubW9kYWxDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoU0VMRUNUT1JTLkFDVElWRSk7XG4gICAgdGhpcy5tb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5tb2RhbExvYWRlci5jbGFzc0xpc3QuYWRkKFNFTEVDVE9SUy5BQ1RJVkUpO1xuICB9XG5cbiAgc2hvd01vZGFsKCkge1xuICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZChTRUxFQ1RPUlMuQUNUSVZFKTtcbiAgICB0aGlzLm1vZGFsTG9hZGVyLmNsYXNzTGlzdC5hZGQoU0VMRUNUT1JTLkFDVElWRSk7XG4gICAgdGhpcy5tb2RhbElzT3BlbiA9IHRydWU7XG4gIH1cblxuICBoaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5lbXB0eU1vZGFsKCk7XG4gICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFNFTEVDVE9SUy5BQ1RJVkUpO1xuICAgIHRoaXMubW9kYWxMb2FkZXIuY2xhc3NMaXN0LnJlbW92ZShTRUxFQ1RPUlMuQUNUSVZFKTtcbiAgfVxufVxuIl19
},{"../utils/emitter":4,"properjs-hobo":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SELECTORS = {
  TOGGLE_TRIGGER: '.js-toggle-nav'
};

var Navigation = function () {
  function Navigation(navWrapper) {
    _classCallCheck(this, Navigation);

    this.navWrapper = navWrapper;
    this.toggleTrigger = this.navWrapper.querySelector(SELECTORS.TOGGLE_TRIGGER);
    this.navIsOpen = false;
    this.init();
  }

  _createClass(Navigation, [{
    key: 'init',
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      this.toggleTrigger.addEventListener('click', this.handleToggle.bind(this));
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      this.navIsOpen ? this.closeNav() : this.openNav();
    }
  }, {
    key: 'openNav',
    value: function openNav() {
      this.navWrapper.classList.add('-active');
      this.toggleTrigger.classList.add('-close');
      this.navIsOpen = true;
    }
  }, {
    key: 'closeNav',
    value: function closeNav() {
      this.navWrapper.classList.remove('-active');
      this.toggleTrigger.classList.remove('-close');
      this.navIsOpen = false;
    }
  }]);

  return Navigation;
}();

exports.default = Navigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiU0VMRUNUT1JTIiwiVE9HR0xFX1RSSUdHRVIiLCJOYXZpZ2F0aW9uIiwibmF2V3JhcHBlciIsInRvZ2dsZVRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwibmF2SXNPcGVuIiwiaW5pdCIsImJpbmRFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlVG9nZ2xlIiwiYmluZCIsImNsb3NlTmF2Iiwib3Blbk5hdiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVk7QUFDaEJDLGtCQUFnQjtBQURBLENBQWxCOztJQUlxQkMsVTtBQUNuQixzQkFBWUMsVUFBWixFQUF3QjtBQUFBOztBQUN0QixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsS0FBS0QsVUFBTCxDQUFnQkUsYUFBaEIsQ0FDbkJMLFVBQVVDLGNBRFMsQ0FBckI7QUFHQSxTQUFLSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS0MsSUFBTDtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS0MsVUFBTDtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLSixhQUFMLENBQW1CSyxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkMsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBN0M7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS0wsU0FBTCxHQUFpQixLQUFLTSxRQUFMLEVBQWpCLEdBQW1DLEtBQUtDLE9BQUwsRUFBbkM7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS1YsVUFBTCxDQUFnQlcsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLFNBQTlCO0FBQ0EsV0FBS1gsYUFBTCxDQUFtQlUsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLFFBQWpDO0FBQ0EsV0FBS1QsU0FBTCxHQUFpQixJQUFqQjtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLSCxVQUFMLENBQWdCVyxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMsU0FBakM7QUFDQSxXQUFLWixhQUFMLENBQW1CVSxTQUFuQixDQUE2QkUsTUFBN0IsQ0FBb0MsUUFBcEM7QUFDQSxXQUFLVixTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7Ozs7OztrQkFoQ2tCSixVIiwiZmlsZSI6Ik5hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTRUxFQ1RPUlMgPSB7XG4gIFRPR0dMRV9UUklHR0VSOiAnLmpzLXRvZ2dsZS1uYXYnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hdldyYXBwZXIpIHtcbiAgICB0aGlzLm5hdldyYXBwZXIgPSBuYXZXcmFwcGVyO1xuICAgIHRoaXMudG9nZ2xlVHJpZ2dlciA9IHRoaXMubmF2V3JhcHBlci5xdWVyeVNlbGVjdG9yKFxuICAgICAgU0VMRUNUT1JTLlRPR0dMRV9UUklHR0VSLFxuICAgICk7XG4gICAgdGhpcy5uYXZJc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMudG9nZ2xlVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlKCkge1xuICAgIHRoaXMubmF2SXNPcGVuID8gdGhpcy5jbG9zZU5hdigpIDogdGhpcy5vcGVuTmF2KCk7XG4gIH1cblxuICBvcGVuTmF2KCkge1xuICAgIHRoaXMubmF2V3JhcHBlci5jbGFzc0xpc3QuYWRkKCctYWN0aXZlJyk7XG4gICAgdGhpcy50b2dnbGVUcmlnZ2VyLmNsYXNzTGlzdC5hZGQoJy1jbG9zZScpO1xuICAgIHRoaXMubmF2SXNPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlTmF2KCkge1xuICAgIHRoaXMubmF2V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlJyk7XG4gICAgdGhpcy50b2dnbGVUcmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJy1jbG9zZScpO1xuICAgIHRoaXMubmF2SXNPcGVuID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsController = require('properjs-controller');

var _properjsController2 = _interopRequireDefault(_properjsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = new _properjsController2.default();

exports.default = emitter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtaXR0ZXIuanMiXSwibmFtZXMiOlsiZW1pdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVUsa0NBQWhCOztrQkFFZUEsTyIsImZpbGUiOiJlbWl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAncHJvcGVyanMtY29udHJvbGxlcic7XG5cbmNvbnN0IGVtaXR0ZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBlbWl0dGVyO1xuIl19
},{"properjs-controller":10}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modules = undefined;

var _Coaches = require('../components/Coaches');

var _Coaches2 = _interopRequireDefault(_Coaches);

var _Navigation = require('../components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = exports.modules = [{
  name: 'Coaches',
  class: '.js-coaches',
  Source: _Coaches2.default
}, {
  name: 'Navigation',
  class: '.js-navigation',
  Source: _Navigation2.default
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS1sb2FkZXIuanMiXSwibmFtZXMiOlsibW9kdWxlcyIsIm5hbWUiLCJjbGFzcyIsIlNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLDRCQUFVLENBQ3JCO0FBQ0VDLFFBQU0sU0FEUjtBQUVFQyxTQUFPLGFBRlQ7QUFHRUM7QUFIRixDQURxQixFQU1yQjtBQUNFRixRQUFNLFlBRFI7QUFFRUMsU0FBTyxnQkFGVDtBQUdFQztBQUhGLENBTnFCLENBQWhCIiwiZmlsZSI6Im1vZHVsZS1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29hY2hlcyBmcm9tICcuLi9jb21wb25lbnRzL0NvYWNoZXMnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcblxuZXhwb3J0IGNvbnN0IG1vZHVsZXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnQ29hY2hlcycsXG4gICAgY2xhc3M6ICcuanMtY29hY2hlcycsXG4gICAgU291cmNlOiBDb2FjaGVzLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ05hdmlnYXRpb24nLFxuICAgIGNsYXNzOiAnLmpzLW5hdmlnYXRpb24nLFxuICAgIFNvdXJjZTogTmF2aWdhdGlvbixcbiAgfSxcbl07XG4iXX0=
},{"../components/Coaches":2,"../components/Navigation":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsResizecontroller = require('properjs-resizecontroller');

var _properjsResizecontroller2 = _interopRequireDefault(_properjsResizecontroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizer = new _properjsResizecontroller2.default();

exports.default = resizer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2l6ZXIuanMiXSwibmFtZXMiOlsicmVzaXplciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVUsd0NBQWhCOztrQkFFZUEsTyIsImZpbGUiOiJyZXNpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc2l6ZUNvbnRyb2xsZXIgZnJvbSAncHJvcGVyanMtcmVzaXplY29udHJvbGxlcic7XG5cbmNvbnN0IHJlc2l6ZXIgPSBuZXcgUmVzaXplQ29udHJvbGxlcigpO1xuXG5leHBvcnQgZGVmYXVsdCByZXNpemVyO1xuIl19
},{"properjs-resizecontroller":22}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsScrollcontroller = require('properjs-scrollcontroller');

var _properjsScrollcontroller2 = _interopRequireDefault(_properjsScrollcontroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scroller = new _properjsScrollcontroller2.default();

exports.default = scroller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbGVyLmpzIl0sIm5hbWVzIjpbInNjcm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyx3Q0FBakI7O2tCQUVlQSxRIiwiZmlsZSI6InNjcm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcm9sbENvbnRyb2xsZXIgZnJvbSAncHJvcGVyanMtc2Nyb2xsY29udHJvbGxlcic7XG5cbmNvbnN0IHNjcm9sbGVyID0gbmV3IFNjcm9sbENvbnRyb2xsZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsZXI7XG4iXX0=
},{"properjs-scrollcontroller":23}],8:[function(require,module,exports){
'use strict';

var _App = require('./app/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app = new _App2.default();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZmJjMTJhZWMuanMiXSwibmFtZXMiOlsid2luZG93IiwiYXBwIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQUEsT0FBT0MsR0FBUCxHQUFhLG1CQUFiIiwiZmlsZSI6ImZha2VfZmJjMTJhZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4vYXBwL0FwcCc7XG5cbndpbmRvdy5hcHAgPSBuZXcgQXBwKCk7XG4iXX0=
},{"./app/App":1}],9:[function(require,module,exports){
(function (global){
/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
(function(w){
	"use strict";
	/* exported loadCSS */
	var loadCSS = function( href, before, media ){
		// Arguments explained:
		// `href` [REQUIRED] is the URL for your CSS file.
		// `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
			// By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
		// `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
		var doc = w.document;
		var ss = doc.createElement( "link" );
		var ref;
		if( before ){
			ref = before;
		}
		else {
			var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
			ref = refs[ refs.length - 1];
		}

		var sheets = doc.styleSheets;
		ss.rel = "stylesheet";
		ss.href = href;
		// temporarily set media to something inapplicable to ensure it'll fetch without blocking render
		ss.media = "only x";

		// wait until body is defined before injecting link. This ensures a non-blocking load in IE11.
		function ready( cb ){
			if( doc.body ){
				return cb();
			}
			setTimeout(function(){
				ready( cb );
			});
		}
		// Inject link
			// Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
			// Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
		ready( function(){
			ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
		});
		// A method (exposed on return object for external use) that mimics onload by polling document.styleSheets until it includes the new sheet.
		var onloadcssdefined = function( cb ){
			var resolvedHref = ss.href;
			var i = sheets.length;
			while( i-- ){
				if( sheets[ i ].href === resolvedHref ){
					return cb();
				}
			}
			setTimeout(function() {
				onloadcssdefined( cb );
			});
		};

		function loadCB(){
			if( ss.addEventListener ){
				ss.removeEventListener( "load", loadCB );
			}
			ss.media = media || "all";
		}

		// once loaded, set link's media back to `all` so that the stylesheet applies once it loads
		if( ss.addEventListener ){
			ss.addEventListener( "load", loadCB);
		}
		ss.onloadcssdefined = onloadcssdefined;
		onloadcssdefined( loadCB );
		return ss;
	};
	// commonjs
	if( typeof exports !== "undefined" ){
		exports.loadCSS = loadCSS;
	}
	else {
		w.loadCSS = loadCSS;
	}
}( typeof global !== "undefined" ? global : this ));

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
/*!
 *
 * Event / Animation cycle manager
 *
 * @Controller
 * @author: kitajchuk
 *
 *
 */
(function ( factory ) {
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.Controller = factory();
    }
    
})(function () {
    // Private animation functions
    var raf = window.requestAnimationFrame,
        caf = window.cancelAnimationFrame,
    
    
    /**
     *
     * Event / Animation cycle manager
     * @constructor Controller
     * @requires raf
     * @memberof! <global>
     *
     */
    Controller = function () {
        return this.init.apply( this, arguments );
    };
    
    Controller.prototype = {
        constructor: Controller,
    
        /**
         *
         * Controller constructor method
         * @memberof Controller
         * @method Controller.init
         *
         */
        init: function () {
            /**
             *
             * Controller event handlers object
             * @memberof Controller
             * @member _handlers
             * @private
             *
             */
            this._handlers = {};
    
            /**
             *
             * Controller unique ID
             * @memberof Controller
             * @member _uid
             * @private
             *
             */
            this._uid = 0;
    
            /**
             *
             * Started iteration flag
             * @memberof Controller
             * @member _started
             * @private
             *
             */
            this._started = false;
    
            /**
             *
             * Paused flag
             * @memberof Controller
             * @member _paused
             * @private
             *
             */
            this._paused = false;
    
            /**
             *
             * Timeout reference
             * @memberof Controller
             * @member _cycle
             * @private
             *
             */
            this._cycle = null;
        },
    
        /**
         *
         * Controller go method to start frames
         * @memberof Controller
         * @method go
         *
         */
        go: function ( fn ) {
            if ( this._started && this._cycle ) {
                return this;
            }
    
            this._started = true;
    
            var self = this,
                anim = function () {
                    self._cycle = raf( anim );
    
                    if ( self._started ) {
                        if ( typeof fn === "function" ) {
                            fn();
                        }
                    }
                };
    
            anim();
        },
    
        /**
         *
         * Pause the cycle
         * @memberof Controller
         * @method pause
         *
         */
        pause: function () {
            this._paused = true;
    
            return this;
        },
    
        /**
         *
         * Play the cycle
         * @memberof Controller
         * @method play
         *
         */
        play: function () {
            this._paused = false;
    
            return this;
        },
    
        /**
         *
         * Stop the cycle
         * @memberof Controller
         * @method stop
         *
         */
        stop: function () {
            caf( this._cycle );
    
            this._paused = false;
            this._started = false;
            this._cycle = null;
    
            return this;
        },
    
        /**
         *
         * Controller add event handler
         * @memberof Controller
         * @method on
         * @param {string} event the event to listen for
         * @param {function} handler the handler to call
         *
         */
        on: function ( event, handler ) {
            var events = event.split( " " );
    
            // One unique ID per handler
            handler._jsControllerID = this.getUID();
    
            for ( var i = events.length; i--; ) {
                if ( typeof handler === "function" ) {
                    if ( !this._handlers[ events[ i ] ] ) {
                        this._handlers[ events[ i ] ] = [];
                    }
    
                    // Handler can be stored with multiple events
                    this._handlers[ events[ i ] ].push( handler );
                }
            }
    
            return this;
        },
    
        /**
         *
         * Controller remove event handler
         * @memberof Controller
         * @method off
         * @param {string} event the event to remove handler for
         * @param {function} handler the handler to remove
         *
         */
        off: function ( event, handler ) {
            if ( !this._handlers[ event ] ) {
                return this;
            }
    
            // Remove a single handler
            if ( handler ) {
                this._off( event, handler );
    
            // Remove all handlers for event
            } else {
                this._offed( event );
            }
    
            return this;
        },
    
        /**
         *
         * Controller fire an event
         * @memberof Controller
         * @method fire
         * @param {string} event the event to fire
         *
         */
        fire: function ( event ) {
            if ( !this._handlers[ event ] ) {
                return this;
            }
    
            var args = [].slice.call( arguments, 1 );
    
            for ( var i = this._handlers[ event ].length; i--; ) {
                this._handlers[ event ][ i ].apply( this, args );
            }
    
            return this;
        },
    
        /**
         *
         * Get a unique ID
         * @memberof Controller
         * @method getUID
         * @returns number
         *
         */
        getUID: function () {
            this._uid = (this._uid + 1);
    
            return this._uid;
        },
    
        /**
         *
         * Controller internal off method assumes event AND handler are good
         * @memberof Controller
         * @method _off
         * @param {string} event the event to remove handler for
         * @param {function} handler the handler to remove
         * @private
         *
         */
        _off: function ( event, handler ) {
            for ( var i = 0, len = this._handlers[ event ].length; i < len; i++ ) {
                if ( handler._jsControllerID === this._handlers[ event ][ i ]._jsControllerID ) {
                    this._handlers[ event ].splice( i, 1 );
    
                    break;
                }
            }
        },
    
        /**
         *
         * Controller completely remove all handlers and an event type
         * @memberof Controller
         * @method _offed
         * @param {string} event the event to remove handler for
         * @private
         *
         */
        _offed: function ( event ) {
            for ( var i = this._handlers[ event ].length; i--; ) {
                this._handlers[ event ][ i ] = null;
            }
    
            delete this._handlers[ event ];
        }
    };

    return Controller;
});
},{}],11:[function(require,module,exports){
/*!
 *
 *
 * Hobo
 * A very small, modular DOM utility for modern web apps.
 * @hobo-dist npm run build
 *
 * @links
 * https://developer.mozilla.org/en-US/docs/Web/API/Node
 * https://developer.mozilla.org/en-US/docs/Web/API/Element
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * https://github.com/jakearchibald/es6-promise
 * http://www.html5rocks.com/en/tutorials/es6/promises/
 *
 *
 */
(function ( factory ) {

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.hobo = factory();
    }

})(function () {

    var Hobo = require( "./lib/Hobo" ),
        utils = require( "./lib/utils" );


    // Core Hobo methods:
    Hobo.prototype.on = require( "./lib/core/on" );
    Hobo.prototype.off = require( "./lib/core/off" );
    Hobo.prototype.data = require( "./lib/core/data" );
    Hobo.prototype.find = require( "./lib/core/find" );
    Hobo.prototype.addClass = require( "./lib/core/addClass" );
    Hobo.prototype.removeClass = require( "./lib/core/removeClass" );


    // Extended Hobo methods:
    // @hobo-ext


    /**
     *
     * @global
     * @public
     * @method hobo
     * @description Wrapper for `Hobo` instances.
     * @param {string} selector The parameter passed to `querySelectorAll`
     * @param {element} context The Element used to call `querySelectorAll`
     * @returns {Hobo}
     *
     */
    hobo = function ( selector, context ) {
        return new Hobo( selector, context );
    };


    // Attach Hobo utilities to `wrapper` method
    hobo.ajax = require( "./lib/core/ajax" );


    return hobo;

});

},{"./lib/Hobo":12,"./lib/core/addClass":13,"./lib/core/ajax":14,"./lib/core/data":15,"./lib/core/find":16,"./lib/core/off":17,"./lib/core/on":18,"./lib/core/removeClass":19,"./lib/utils":20}],12:[function(require,module,exports){
var utils = require( "./utils" ),
    array = [];


/**
 *
 * @class Hobo
 * @constructor
 * @classdesc A very small, modular DOM utility for modern web apps.
 * @param {string} selector The goods - String, Element, Collection.
 * @param {element} context The Element used to call `querySelectorAll`
 *
 */
var Hobo = function ( selector, context ) {
    // Hobo version?
    this._hobo = utils.version;

    // Hobo context
    this._context = (context && context.nodeType && context.nodeType === 1 ? context : document);

    // Hobo selector / elements
    // Hobo supports a mixed selector argument

    // Handle Window
    // Handle Document
    // Handle DOMElement
    if ( selector === window || selector === document || (selector.nodeType && selector.nodeType === 1) ) {
        this._selector = "";
        selector = [ selector ];

    // Handle String
    } else if ( typeof selector === "string" ) {
        // Trim trailing whitespace from the string
        selector = utils.trimString( selector );

        // Handle string html => Element creation
        if ( utils.rTag.test( selector ) ) {
            // Then remove the doctype - `<!DOCTYPE html>`
            selector = selector.replace( utils.rDocType, "" );

            // Create a dummy `hobo` element
            // Dump the HTML payload in the `hobo` element
            // Extract the elements from the `hobo` element
            var el = document.createElement( "hobo" );
                el.innerHTML = selector;

            // Format elements as a true Array
            selector = utils.makeArray( el.children );

            el = null;

        // Handle string selector
        } else {
            this._selector = selector;
            selector = utils.makeArray( this._context.querySelectorAll( selector ) );
        }

    // Handle Collection: NodeList, HTMLCollection, Array
    } else if ( selector.length !== undefined ) {
        this._selector = "";
        selector = utils.makeArray( selector );
    }

    // Hobo events?
    this._events = {};

    // Hobo length?
    this.length = selector.length;

    // Hobo elements?
    for ( var i = this.length; i--; ) {
        this[ i ] = selector[ i ];
    }

    // Initial mapping of each nodes data.
    // Transfer {DOMStringMap} => {hoboDataMap}
    this.forEach( utils.makeData );
};


// Shim Array-like presentation in console
Hobo.prototype.splice = array.splice;


/**
 *
 * @instance
 * @method each
 * @param {function} callback The method called on each iteration
 * @memberof Hobo
 * @description Make sure Hobo is iterable like an Array
 *
 */
Hobo.prototype.each = array.forEach;


/**
 *
 * @instance
 * @method forEach
 * @param {function} callback The method called on each iteration
 * @memberof Hobo
 * @description Make sure Hobo is iterable like an Array
 *
 */
Hobo.prototype.forEach = array.forEach;


/**
 *
 * @instance
 * @method push
 * @param {?} element element1, ..., elementN
 * @memberof Hobo
 * @description Make sure Hobo is pushable like an Array
 *
 */
Hobo.prototype.push = array.push;


/**
 *
 * @instance
 * @method map
 * @param {function} callback The method called for each element
 * @memberof Hobo
 * @description Make sure Hobo is mappable like an Array
 *
 */
Hobo.prototype.map = array.map;


// Export the main Hobo Class :D
module.exports = Hobo;

},{"./utils":20}],13:[function(require,module,exports){
var utils = require( "../utils" );


/**
 *
 * @instance
 * @memberof Hobo
 * @method addClass
 * @description Add one or more classNames to the nodes.
 * @param {string} classes The space-separated classNames
 * @returns {Hobo}
 *
 */
module.exports = function ( classes ) {
    this.forEach(function ( element ) {
        var newClass = classes.split( " " ),
            elsClass = utils.getClass( element ).split( " " );

        newClass.forEach(function ( klass ) {
            if ( elsClass.indexOf( klass ) === -1 ) {
                elsClass.push( klass );
            }
        });

        utils.setClass( element, utils.trimString( elsClass.join( " " ) ) );
    });

    return this;
};

},{"../utils":20}],14:[function(require,module,exports){
var utils = require( "../utils" );


/**
 *
 * @static
 * @memberof Hobo
 * @method ajax
 * @description Perform standar XHR with a native Promise.
 *              dataType can be `html`, `json`, `jsonp`.
 * @param {object} config The ajax config object
 *                        url       => string, default: window.location.href
 *                        data      => object, default: null
 *                        dataType  => string, default: "html"
 *                        method    => string, default: "GET"
 *                        jsonp     => string, default: "callback"
 *                        headers   => object, default: null
 * @returns {Promise}
 *
 */
module.exports = function ( config ) {
    var params = (config.data || null),
        dataType = (config.dataType || "html"),
        method = (config.method || "GET").toUpperCase(),
        url = (config.url || window.location.href),
        headers = (config.headers || null),
        payload = (config.payload || null);

    // Handle params
    // Params will be one of the following:
    // Serialized querystring
    // Instanceof FormData
    // Null
    if ( params && !(FormData && params instanceof FormData) ) {
        params = utils.serializeData( config.data );
    }

    // Handle JSON payloads
    if ( payload && typeof payload !== "string" ) {
        payload = JSON.stringify( payload );
    }

    // Handle params in GET URL
    if ( method === "GET" && params ) {
        url += ("?" + params);
    }

    return new Promise(function ( resolve, reject ) {
        var handleResponse = function ( response ) {
            if ( dataType === "json" ) {
                try {
                    response = JSON.parse( response );

                } catch ( error ) {
                    reject( ("Rejecting on JSON.parse error : " + error) );
                }
            }

            resolve( response );
        };

        // JSONP
        if ( dataType === "jsonp" ) {
            var jsonpCallbackValue = (utils.makeId() + "JSONP"),
                jsonpCallbackKey = (config.jsonp || "callback"),
                jsonpScript = document.createElement( "script" );

            jsonpScript.src = (url + (/\?/.test( url ) ? "&" : "?") + jsonpCallbackKey + "=" + jsonpCallbackValue);

            window[ jsonpCallbackValue ] = function ( response ) {
                document.getElementsByTagName( "head" )[ 0 ].removeChild( jsonpScript );
                jsonpScript = null;
                delete window[ jsonpCallbackValue ];

                handleResponse( response );
            };

            document.getElementsByTagName( "head" )[ 0 ].appendChild( jsonpScript );

        // XHR
        } else {
            var xhr = new XMLHttpRequest();

            xhr.open( method, url, true );

            if ( headers ) {
                for ( var header in headers ) {
                    if ( headers.hasOwnProperty( header ) ) {
                        xhr.setRequestHeader( header, headers[ header ] );
                    }
                }
            }

            xhr.onreadystatechange = function ( e ) {
                if ( this.readyState === 4 ) {
                    // Two-Hundo's are A-Okay with Hobo
                    if ( /^20/.test( this.status ) ) {
                        handleResponse( this.responseText );

                    } else {
                        reject( ("Rejecting on server status code : " + this.status) );
                    }
                }
            };

            xhr.send( (params || payload) );
        }
    });
};

},{"../utils":20}],15:[function(require,module,exports){
var utils = require( "../utils" );


/**
 *
 * @instance
 * @memberof Hobo
 * @method data
 * @description Get / set data values with nodes.
 * @param {string} key The access key
 * @param {string} value The value to be stored
 * @returns {mixed}
 *
 */
module.exports = function ( key, value ) {
    // Any `non-unique` data keys resolve to the first unique occurrence
    // Exactly how jQuery handles `.data( ... )` on multi-node collections

    var ret = this,
        obj = null;

    // Storing data from an Object
    if ( typeof key === "object" ) {
        obj = key;

        this.forEach(function ( node ) {
            utils.storeData( obj, node );
        });

    // Storing data as a `key:value` pair
    } else if ( value ) {
        obj = {};
        obj[ key ] = value;

        this.forEach(function ( node ) {
            utils.storeData( obj, node );
        });

    // Accessing data by `key`
    } else if ( key ) {
        this.forEach(function ( node ) {
            if ( obj !== null ) {
                return;
            }

            obj = utils.retrieveData( key, node );

        });

        ret = obj;

    // Accessing all data
    // Merges all `unique` data for a Hobo set
    } else {
        obj = {};

        // Object is mutated here by `mergeData`
        this.forEach(function ( node ) {
            utils.mergeData( obj, node );
        });

        ret = obj;
    }

    return ret;
};
},{"../utils":20}],16:[function(require,module,exports){
var Hobo = require( "../Hobo" ),
    utils = require( "../utils" );


/**
 *
 * @instance
 * @memberof Hobo
 * @method find
 * @description Query into a Hobo instance for new nodes.
 * @param {string} selector The selector to query for
 * @returns {Hobo}
 *
 */
module.exports = function ( selector ) {
    var ret = this;

    // If we are `finding` within a multi-node collection...
    // Here its probably faster to grab the nodes within each Node
    // and then just let the context be the document for the new instance. 
    if ( this.length > 1 ) {
        ret = [];

        this.forEach(function ( node ) {
            ret = ret.concat( utils.makeArray( node.querySelectorAll( selector ) ) );
        });

        ret = new Hobo( ret, null );

    // Single node collection
    // Empty node collection
    } else {
        ret = new Hobo( (this.length ? selector : []), (this.length ? this[ 0 ] : null) );
    }

    return ret;
};
},{"../Hobo":12,"../utils":20}],17:[function(require,module,exports){
/**
 *
 * @private
 * @method unbind
 * @description Unbind a standard DOM Event.
 * @param {element} node
 * @param {string} event
 * @param {function} callback
 * @this {Hobo}
 *
 */
var unbind = function ( node, event, callback ) {
    var type,
        evo,
        id;

    // Remove a single handler for an event type
    if ( callback ) {
        for ( id in this._events[ event ] ) {
            if ( this._events[ event ].hasOwnProperty( id ) ) {
                evo = this._events[ event ][ id ];

                // Match the nodes, Match the callback
                if ( evo.node === node && evo.callback === callback ) {
                    node.removeEventListener( evo.type, evo.handler, false );

                    delete this._events[ event ][ id ];
                }
            }
        }

    // Remove all handlers for an event type
    } else {
        for ( id in this._events[ event ] ) {
            if ( this._events[ event ].hasOwnProperty( id ) ) {
                evo = this._events[ event ][ id ];

                // Match the nodes
                if ( evo.node === node ) {
                    node.removeEventListener( evo.type, evo.handler, false );

                    delete this._events[ event ][ id ];
                }
            }
        }
    }
};


/**
 *
 * @private
 * @method teardown
 * @description Unbind all events for instance.
 * @param {element} node
 * @this {Hobo}
 *
 */
var teardown = function ( node ) {
    var type,
        evo,
        id;

    for ( type in this._events ) {
        if ( this._events.hasOwnProperty( type ) ) {
            for ( id in this._events[ type ] ) {
                if ( this._events[ type ].hasOwnProperty( id ) ) {
                    evo = this._events[ type ][ id ];

                    // Match the nodes
                    if ( evo.node === node ) {
                        node.removeEventListener( evo.type, evo.handler, false );

                        delete this._events[ type ][ id ];
                    }
                }
            }
        }
    }
};


/**
 *
 * @instance
 * @memberof Hobo
 * @method off
 * @description Un-Bind a standard DOM Event.
 * @param {string} events The event type
 * @param {function} callback The supplied callback
 * @returns {Hobo}
 *
 */
module.exports = function ( events, callback ) {
    var self = this;

    // Iterate over event(s)
    // Space separated event list is supported
    // Example: "DOMMouseScroll mousewheel"
    // off() can be called with no args, account for this and remove ALL events
    (events ? events.split( " " ) : [null]).forEach(function ( event ) {
        self.forEach(function ( node ) {
            // Explicit `null` check for teardown
            if ( event === null ) {
                teardown.call( self, node );

            } else {
                unbind.call( self, node, event, callback );
            }
        });
    });

    return this;
};
},{}],18:[function(require,module,exports){
var matchElement = require( "properjs-matchelement" ),
    utils = require( "../utils" );


/**
 *
 * @private
 * @method bind
 * @description Bind a standard DOM Event.
 * @param {element} node
 * @param {string} event
 * @param {string} selector
 * @param {function} callback
 * @this {Hobo}
 *
 */
var bind = function ( node, event, selector, callback ) {
    // Unique ID for each node event
    var eventId = (utils.makeId() + "EVENT"),

        // The true event name
        eventType = event,

        // Normalize event handler with a small wrapper function
        eventHandler = function ( e ) {
            // Default context is `this` element
            var context = (selector ? matchElement( e.target, selector, true ) : this);

            // Handle `mouseenter` and `mouseleave`
            if ( event === "mouseenter" || event === "mouseleave" ) {
                var relatedElement = (event === "mouseenter" ? e.fromElement : e.toElement);

                if ( context && ( relatedElement !== context && !context.contains( relatedElement ) ) ) {
                    callback.call( context, e );
                }

            // Fire callback if context element
            } else if ( context ) {
                callback.call( context, e );
            }
        };

    // Support `mouseenter` and `mouseleave`
    if ( event === "mouseenter" ) {
        eventType = "mouseover";

    } else if ( event === "mouseleave" ) {
        eventType = "mouseout";
    }

    // Each handler/callback pair gets stored in an `events` index
    this._events[ event ][ eventId ] = {
        id: eventId,
        type: eventType,
        node: node,
        handler: eventHandler,
        callback: callback
    };

    node.addEventListener( eventType, eventHandler, false );
};


/**
 *
 * @instance
 * @memberof Hobo
 * @method on
 * @description Bind a standard DOM Event. Honor delegation as a primary.
 * @param {string} events 
 * @param {string} selector 
 * @param {function} callback
 * @returns {Hobo}
 *
 */
module.exports = function ( events, selector, callback ) {
    var self = this;

    // Normalize `selector` and `callback`
    if ( !callback ) {
        callback = selector;
        selector = this._selector;
    }

    // Iterate over event(s)
    // Space separated event list is supported
    // Example: "DOMMouseScroll mousewheel"
    events.split( " " ).forEach(function ( event ) {
        // Does this event type have an index yet
        if ( !self._events[ event ] ) {
            self._events[ event ] = {};
        }

        self.forEach(function ( node ) {
            bind.call( self, node, event, selector, callback );
        });
    });

    return this;
};
},{"../utils":20,"properjs-matchelement":21}],19:[function(require,module,exports){
var utils = require( "../utils" );


/**
 *
 * @instance
 * @memberof Hobo
 * @method removeClass
 * @description Remove one or more classNames from the nodes.
 * @param {string} classes The space-separated classNames
 * @returns {Hobo}
 *
 */
module.exports = function ( classes ) {
    this.forEach(function ( element ) {
        // Explicit check for `undefined`
        // Using `!classes` would be bad in this case
        // Calling `removeClass( "" )` should not wipe the entire className
        if ( classes === undefined ) {
            utils.setClass( element, "" );

        } else {
            var oldClass = classes.split( " " ),
                elsClass = utils.getClass( element ).split( " " );

            oldClass.forEach(function ( klass ) {
                if ( elsClass.indexOf( klass ) !== -1 ) {
                    elsClass.splice( elsClass.indexOf( klass ), 1 );
                }
            });

            utils.setClass( element, utils.trimString( elsClass.join( " " ) ) );
        }
    });

    return this;
};

},{"../utils":20}],20:[function(require,module,exports){
/**
*
* @public
* @namespace utils
* @description Internal utility methods for {Hobo}
*
*/
var version = "0.3.15",


    rData = /^data-/,


    rDigit = /\D/g,


    rDashAlpha = /-([\da-z])/gi,


    rTag = /^</,


    rJson = /^\[|\{/,


    rDocType = /^<\!DOCTYPE\shtml>/i,


    rFront2Back = /^\s+|\s+$/g,


    /**
     *
     * @public
     * @memberof utils
     * @method trimString
     * @description Trim leading and trailing whitespace
     * @param {string} str The string to trim
     * @returns {string}
     *
     */
    trimString = function ( str ) {
        return str.replace( rFront2Back, "" );
    },


    /**
     *
     * @public
     * @memberof utils
     * @method camelCase
     * @description Camel case a string
     * @param {string} str The string to camel case
     * @returns {string}
     *
     */
    camelCase = function ( str ) {
        return str.replace( rDashAlpha, function ( all, letter ) {
            return letter.toUpperCase();
        });
    },


    /**
     *
     * @public
     * @memberof utils
     * @method makeId
     * @description Make a unique hobo ID string
     * @returns {string}
     *
     */
    makeId = function () {
        return ("hobo" + ( version + Math.random() ).replace( rDigit, "" ));
    },


    /**
     *
     * @public
     * @memberof utils
     * @method makeArray
     * @description Convert elements to a native Array
     * @param {elements} nodes The nodes to make into an array
     * @returns {array}
     *
     */
    makeArray = function ( nodes ) {
        return [].slice.call( nodes );
    },


    /**
     *
     * @public
     * @memberof utils
     * @method makeData
     * @description Establish the hoboDataMap for a node
     * @param {element} node The node to map data on
     *
     */
    makeData = function ( node ) {
        if ( !node.hoboDataMap ) {
            node.hoboDataMap = {};
        }

        if ( node.dataset ) {
            _mapDataset( node );

        } else if ( node.attributes ) {
            _mapAttributes( node );
        }
    },


    /**
     *
     * @public
     * @memberof utils
     * @method storeData
     * @description Store data in the hoboDataMap
     * @param {object} data The data to store
     * @param {element} node The node to store data with
     *
     */
    storeData = function ( data, node ) {
        var id,
            i;

        for ( i in data ) {
            if ( data.hasOwnProperty( i ) ) {
                id = camelCase( i );

                node.hoboDataMap[ id ] = data[ i ];
            }
        }
    },


    /**
     *
     * @public
     * @memberof utils
     * @method mergeData
     * @description Merge
     * @param {object} data The data to mutate
     * @param {element} node The node to pull data from
     *
     */
    mergeData = function ( data, node ) {
        for ( var i in node.hoboDataMap ) {
            if ( node.hoboDataMap.hasOwnProperty( i ) && !data[ i ] ) {
                data[ i ] = node.hoboDataMap[ i ];
            }
        }
    },


    /**
     *
     * @public
     * @memberof utils
     * @method retrieveData
     * @description Get data from a node
     * @param {string} key The reference point for a data entry
     * @param {element} node The node to pull a data value from
     * @returns {mixed}
     *
     */
    retrieveData = function ( key, node ) {
        var ret = null;

        // All data mapped into Hobo will be camel-cased
        key = camelCase( key );

        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
            ret = node.hoboDataMap[ key ];
        }

        return ret;
    },


    /**
     *
     * @public
     * @memberof utils
     * @method removeData
     * @description Delete data from a nodes hoboDataMap
     * @param {string} key The reference point for a data entry
     * @param {element} node The node to delete a data value from
     *
     */
    removeData = function ( key, node ) {
        // All data mapped into Hobo will be camel-cased
        key = camelCase( key );

        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
            delete node.hoboDataMap[ key ];
        }
    },


    /**
     *
     * @public
     * @memberof utils
     * @method serializeData
     * @description Convert data into AJAXable querystring
     * @param {object} data The data to convert
     * @param {string} prefix The current iterations property name
     * @returns {string}
     *
     */
    serializeData = function ( data, prefix ) {
        var str = [],
            key,
            val,
            i;

        for ( i in data ) {
            if ( data.hasOwnProperty( i ) ) {
                key = prefix ? (prefix + "[" + i + "]") : i;
                val = data[ i ];

                if ( typeof val === "object" ) {
                    str.push( serializeData( val, key ) );

                } else {
                    str.push( (encodeURIComponent( key ) + "=" + encodeURIComponent( val )) );
                }
            }
        }

        return str.join( "&" );
    },


    /**
     *
     * @public
     * @memberof utils
     * @method getClass
     * @description Get the class string from a node
     * @param {Element} node The node to get `class` for
     * @returns {string}
     *
     */
    getClass = function ( node ) {
        return (node.getAttribute( "class" ) || "");
    },


    /**
     *
     * @public
     * @memberof utils
     * @method setClass
     * @description Set the class string for a node
     * @param {Element} node The node to set `class` on
     * @param {string} klass The class string to be applied
     *
     */
    setClass = function ( node, klass ) {
        node.setAttribute( "class", klass );
    },


    // DOMStringMap camel-cases data- attributes.
    // NamedNodeMap is a fallback which supports IE 10.
    // Data mapped through Hobo must camel-case as well.


    /**
     *
     * @private
     * @memberof utils
     * @method _getDataValue
     * @description Normalized parsing of JSON string into Object
     * @param {object} data The data to parse
     * @returns {object}
     *
     */
    _getDataValue = function ( data ) {
        if ( rJson.test( data ) ) {
            try {
                data = JSON.parse( data );

            } catch ( error ) {
                throw error;
            }
        }

        return data;
    },


    /**
     *
     * @private
     * @memberof utils
     * @method _mapAttributes
     * @description Migrate existing NamedNodeMap to a nodes hoboDataMap
     * @param {element} node The data to parse
     *
     */
    _mapAttributes = function ( node ) {
        var i = node.attributes.length;

        for ( i; i--; ) {
            if ( rData.test( node.attributes[ i ].name ) ) {
                var key = camelCase( node.attributes[ i ].name.replace( rData, "" ) );

                node.hoboDataMap[ key ] = _getDataValue( node.attributes[ i ].value );
            }
        }
    },


    /**
     *
     * @private
     * @memberof utils
     * @method _mapDataset
     * @description Migrate existing DOMStringMap to a nodes hoboDataMap
     * @param {element} node The data to parse
     *
     */
    _mapDataset = function ( node ) {
        for ( var i in node.dataset ) {
            if ( node.dataset.hasOwnProperty( i ) ) {
                node.hoboDataMap[ i ] = _getDataValue( node.dataset[ i ] );
            }
        }
    };


module.exports = {
    version: version,
    rData: rData,
    rDigit: rDigit,
    rTag: rTag,
    rJson: rJson,
    rDocType: rDocType,
    rFront2Back: rFront2Back,
    trimString: trimString,
    camelCase: camelCase,
    makeId: makeId,
    makeArray: makeArray,
    makeData: makeData,
    storeData: storeData,
    retrieveData: retrieveData,
    mergeData: mergeData,
    removeData: removeData,
    serializeData: serializeData,
    getClass: getClass,
    setClass: setClass
};

},{}],21:[function(require,module,exports){
/*!
 *
 * Use native element selector matching
 *
 * @matchElement
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.matchElement = factory();
    }
    
})(function () {

    /**
     *
     * Use native element selector matching
     * @memberof! <global>
     * @method matchElement
     * @param {object} el the element
     * @param {string} selector the selector to match
     * @param {boolean} walk should we walk the tree if el is not a match?
     * @returns element OR null
     *
     */
    var matchElement = function ( el, selector, walk ) {
        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
                                      "oMatchesSelector" : null;

        // Try testing the element against the selector
        // 0.1 => Method is not undefined
        // 0.2 => Element passes method call
        if ( method && el[ method ].call( el, selector ) ) {
            return el;

        // Keep walking up the DOM if we can - only if `walk` flag is `true`
        } else if ( walk && el !== document.documentElement && el.parentNode ) {
            return matchElement( el.parentNode, selector, walk );

        // Otherwise we should not execute an event
        } else {
            return null;
        }
    };


    return matchElement;

});
},{}],22:[function(require,module,exports){
/*!
 *
 * Window resize / orientationchange event controller
 *
 * @ResizeController
 * @author: kitajchuk
 *
 *
 */
(function ( factory ) {

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.ResizeController = factory();
    }

})(function () {

    var Controller = require( "properjs-controller" );

    /**
     *
     * Window resize / orientationchange event controller
     * @constructor ResizeController
     * @augments Controller
     * @requires Controller
     * @memberof! <global>
     *
     * @fires resize
     * @fires resizedown
     * @fires resizeup
     * @fires resizewidth
     * @fires resizeheight
     * @fires orientationchange
     * @fires orientationportrait
     * @fires orientationlandscape
     *
     */
    var ResizeController = function () {
        Controller.call( this );

        this.currentView = this.getViewport();
        this.hasOrientation = ("orientation" in window);

        this.start();
    };

    ResizeController.prototype = Object.create( Controller.prototype );

    /**
     *
     * Starts the request animation frame cycle
     * @memberof ResizeController
     * @method destroy
     *
     */
    ResizeController.prototype.start = function () {
        var self = this;

        // Call on parent cycle
        this.go(function () {
            var currentView = self.getViewport(),
                isStill = (currentView.width === self.currentView.width && currentView.height === self.currentView.height),
                isResize = (currentView.width !== self.currentView.width || currentView.height !== self.currentView.height),
                isResizeUp = (currentView.width > self.currentView.width || currentView.height > self.currentView.height),
                isResizeDown = (currentView.width < self.currentView.width || currentView.height < self.currentView.height),
                isResizeWidth = (currentView.width !== self.currentView.width),
                isResizeHeight = (currentView.height !== self.currentView.height),
                isOrientation = (currentView.orient !== self.currentView.orient),
                isOrientationPortrait = (currentView.orient !== self.currentView.orient && currentView.orient !== 90),
                isOrientationLandscape = (currentView.orient !== self.currentView.orient && currentView.orient === 90);

            // Fire blanket resize event
            if ( isResize ) {
                /**
                 *
                 * @event resize
                 *
                 */
                self.fire( "resize" );
            }

            // Fire resizeup and resizedown
            if ( isResizeDown ) {
                /**
                 *
                 * @event resizedown
                 *
                 */
                self.fire( "resizedown" );

            } else if ( isResizeUp ) {
                /**
                 *
                 * @event resizeup
                 *
                 */
                self.fire( "resizeup" );
            }

            // Fire resizewidth and resizeheight
            if ( isResizeWidth ) {
                /**
                 *
                 * @event resizewidth
                 *
                 */
                self.fire( "resizewidth" );

            } else if ( isResizeHeight ) {
                /**
                 *
                 * @event resizeheight
                 *
                 */
                self.fire( "resizeheight" );
            }

            // Fire blanket orientationchange event
            if ( isOrientation ) {
                /**
                 *
                 * @event orientationchange
                 *
                 */
                self.fire( "orientationchange" );
            }

            // Fire orientationportrait and orientationlandscape
            if ( isOrientationPortrait ) {
                /**
                 *
                 * @event orientationportrait
                 *
                 */
                self.fire( "orientationportrait" );

            } else if ( isOrientationLandscape ) {
                /**
                 *
                 * @event orientationlandscape
                 *
                 */
                self.fire( "orientationlandscape" );
            }

            self.currentView = currentView;
        });
    };

    /**
     *
     * Stops the request animation frame cycle
     * @memberof ResizeController
     * @method destroy
     *
     */
    ResizeController.prototype.destroy = function () {
        this.stop();
    };

    /**
     *
     * Returns the current window viewport specs
     * @memberof ResizeController
     * @method getViewport
     * @returns object
     *
     */
    ResizeController.prototype.getViewport = function () {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            orient: this.hasOrientation ? Math.abs( window.orientation ) : null
        };
    };

    /**
     *
     * Tells if the viewport is in protrait mode
     * @memberof ResizeController
     * @method isPortrait
     * @returns boolean
     *
     */
    ResizeController.prototype.isPortrait = function () {
        var orient = this.getViewport().orient;

        return (orient !== null && orient !== 90);
    };

    /**
     *
     * Tells if the viewport is in landscape mode
     * @memberof ResizeController
     * @method isLandscape
     * @returns boolean
     *
     */
    ResizeController.prototype.isLandscape = function () {
        var orient = this.getViewport().orient;

        return (orient !== null && orient === 90);
    };


    return ResizeController;

});

},{"properjs-controller":10}],23:[function(require,module,exports){
/*!
 *
 * Window scroll event controller
 *
 * @ScrollController
 * @author: kitajchuk
 *
 *
 */
(function ( factory ) {

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.ScrollController = factory();
    }

})(function () {

    var Controller = require( "properjs-controller" );

    /**
     *
     * Window scroll event controller
     * @constructor ScrollController
     * @augments Controller
     * @requires Controller
     * @memberof! <global>
     *
     * @fires scroll
     * @fires scrolldown
     * @fires scrollup
     * @fires scrollmax
     * @fires scrollmin
     *
     */
    var ScrollController = function ( element ) {
        Controller.call( this );

        this.element = (element || window);
        this.current = null;
        this.isWindow = (this.element === window);

        this.start();
    };

    ScrollController.prototype = Object.create( Controller.prototype );

    /**
     *
     * Starts the request animation frame cycle
     * @memberof ScrollController
     * @method start
     *
     */
    ScrollController.prototype.start = function () {
        var self = this;

        // Call on parent cycle
        this.go(function () {
            var current = self.getScrollY(),
                isStill = (current === self.current),
                isScroll = (current !== self.current),
                isScrollUp = (current < self.current),
                isScrollDown = (current > self.current),
                isScrollMax = (current !== self.current && self.isScrollMax()),
                isScrollMin = (current !== self.current && self.isScrollMin());

            // Fire blanket scroll event
            if ( isScroll ) {
                /**
                 *
                 * @event scroll
                 *
                 */
                self.fire( "scroll" );
            }

            // Fire scrollup and scrolldown
            if ( isScrollDown ) {
                /**
                 *
                 * @event scrolldown
                 *
                 */
                self.fire( "scrolldown" );

            } else if ( isScrollUp ) {
                /**
                 *
                 * @event scrollup
                 *
                 */
                self.fire( "scrollup" );
            }

            // Fire scrollmax and scrollmin
            if ( isScrollMax ) {
                /**
                 *
                 * @event scrollmax
                 *
                 */
                self.fire( "scrollmax" );

            } else if ( isScrollMin ) {
                /**
                 *
                 * @event scrollmin
                 *
                 */
                self.fire( "scrollmin" );
            }

            self.current = current;
        });
    };

    /**
     *
     * Stops the request animation frame cycle
     * @memberof ScrollController
     * @method destroy
     *
     */
    ScrollController.prototype.destroy = function () {
        this.stop();
    };

    /**
     *
     * Returns the current window vertical scroll position
     * @memberof ScrollController
     * @method getScrollY
     * @returns number
     *
     */
    ScrollController.prototype.getScrollY = function () {
        return (this.isWindow ? window.scrollY : this.element.scrollTop);
    };

    /**
     *
     * Get the max document scrollable height
     * @memberof ScrollController
     * @method getScrollMax
     * @returns number
     *
     */
    ScrollController.prototype.getScrollMax = function () {
        var max = null;

        if ( this.isWindow ) {
            max = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.documentElement.clientHeight
            );

        } else {
            max = Math.max(
                this.element.scrollHeight,
                this.element.offsetHeight,
                this.element.clientHeight
            );
        }

        return (max - window.innerHeight);
    };

    /**
     *
     * Determines if scroll position is at maximum for document
     * @memberof ScrollController
     * @method isScrollMax
     * @returns boolean
     *
     */
    ScrollController.prototype.isScrollMax = function () {
        return (this.getScrollY() >= this.getScrollMax());
    };

    /**
     *
     * Determines if scroll position is at minimum for document
     * @memberof ScrollController
     * @method isScrollMin
     * @returns boolean
     *
     */
    ScrollController.prototype.isScrollMin = function () {
        return (this.getScrollY() <= 0);
    };


    return ScrollController;

});

},{"properjs-controller":10}]},{},[8])
//# sourceMappingURL=main.js.map
