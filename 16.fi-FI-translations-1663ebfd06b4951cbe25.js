webpackJsonp([16],{

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactIntl = __webpack_require__(629);

	var _fi = __webpack_require__(676);

	var _fi2 = _interopRequireDefault(_fi);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	(0, _reactIntl.addLocaleData)(_fi2.default);

	var messages = {
	  'Terra.ajax.error': 'This content failed to load.n9KZ Pi~'
	};

	module.exports = {
	  load: true,
	  locale: 'fi-FI',
	  messages: messages
	};

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):(t.ReactIntlLocaleData=t.ReactIntlLocaleData||{},t.ReactIntlLocaleData.fi=e())}(this,function(){"use strict";var t=[{locale:"fi",pluralRuleFunction:function(t,e){var n=String(t).split("."),i=!n[1];return e?"other":1==t&&i?"one":"other"},fields:{year:{displayName:"vuosi",relative:{0:"tänä vuonna",1:"ensi vuonna","-1":"viime vuonna"},relativeTime:{future:{one:"{0} vuoden päästä",other:"{0} vuoden päästä"},past:{one:"{0} vuosi sitten",other:"{0} vuotta sitten"}}},month:{displayName:"kuukausi",relative:{0:"tässä kuussa",1:"ensi kuussa","-1":"viime kuussa"},relativeTime:{future:{one:"{0} kuukauden päästä",other:"{0} kuukauden päästä"},past:{one:"{0} kuukausi sitten",other:"{0} kuukautta sitten"}}},day:{displayName:"päivä",relative:{0:"tänään",1:"huomenna",2:"ylihuomenna","-2":"toissa päivänä","-1":"eilen"},relativeTime:{future:{one:"{0} päivän päästä",other:"{0} päivän päästä"},past:{one:"{0} päivä sitten",other:"{0} päivää sitten"}}},hour:{displayName:"tunti",relativeTime:{future:{one:"{0} tunnin päästä",other:"{0} tunnin päästä"},past:{one:"{0} tunti sitten",other:"{0} tuntia sitten"}}},minute:{displayName:"minuutti",relativeTime:{future:{one:"{0} minuutin päästä",other:"{0} minuutin päästä"},past:{one:"{0} minuutti sitten",other:"{0} minuuttia sitten"}}},second:{displayName:"sekunti",relative:{0:"nyt"},relativeTime:{future:{one:"{0} sekunnin päästä",other:"{0} sekunnin päästä"},past:{one:"{0} sekunti sitten",other:"{0} sekuntia sitten"}}}}}];return t});


/***/ }

});