System.register([], function (_export) {
  'use strict';

  var MyElement;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      MyElement = (function () {
        function MyElement() {
          _classCallCheck(this, MyElement);
        }

        _createClass(MyElement, [{
          key: 'attached',
          value: function attached() {
            console.log('attached', this.myDiv);
          }
        }]);

        return MyElement;
      })();

      _export('MyElement', MyElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsU0FBUzs7Ozs7Ozs7O0FBQVQsZUFBUztpQkFBVCxTQUFTO2dDQUFULFNBQVM7OztxQkFBVCxTQUFTOztpQkFDWixvQkFBRztBQUNULG1CQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDckM7OztlQUhVLFNBQVM7OzsyQkFBVCxTQUFTIiwiZmlsZSI6Im15LWVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTXlFbGVtZW50IHtcbiAgYXR0YWNoZWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2F0dGFjaGVkJywgdGhpcy5teURpdik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==