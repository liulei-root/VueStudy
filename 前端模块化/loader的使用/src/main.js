console.log("打包成果");

import * as a from './js/a'
import print from './js/a'
// require('./css/style.css')
require('./css/style.less')


console.log(a.age);
console.log(a.height);
console.log(a.name);
// a.default(错误使用方式)
console.log('---------');
print()
a.sum(10,20);

//测试less生效
document.writeln('<h2>less生效</h2>')