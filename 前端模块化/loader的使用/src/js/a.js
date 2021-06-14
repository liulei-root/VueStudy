console.log("我是文件a");
const age = 15;
const height = 188;

function sum(a,b) {
  console.log(a+b);
}

export {age,height,sum}

export let name = 'zhangsan'

export default function () {
  console.log("默认打印");
}