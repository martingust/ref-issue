System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var computedFrom, Welcome;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.items = [1, 2, 3, 4];
        }

        _createClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            this.items.splice(3, 1, 5);
            this.items.push(6);
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVhLE9BQU87Ozs7Ozs7O3VDQUZaLFlBQVk7OztBQUVQLGFBQU87aUJBQVAsT0FBTztnQ0FBUCxPQUFPOztlQUNsQixLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7OztxQkFEVCxPQUFPOztpQkFHWixrQkFBRTtBQUNOLGdCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNCLGdCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUNwQjs7O2VBTlUsT0FBTzs7O3lCQUFQLE9BQU8iLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcHV0ZWRGcm9tfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBjbGFzcyBXZWxjb21le1xuICBpdGVtcyA9IFsxLCAyLCAzLCA0XTtcblxuICBzdWJtaXQoKXtcbiAgICB0aGlzLml0ZW1zLnNwbGljZSgzLCAxLCA1KTtcbiAgICB0aGlzLml0ZW1zLnB1c2goNik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==