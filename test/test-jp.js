var Iconv = require('../lib/iconv').Iconv;
var sjis = Iconv('UTF-8', 'Shift_JIS');
var out = sjis.convert('abc~');
console.log(out);
