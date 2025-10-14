import { abc } from "./a";
console.log(abc)
// 命名导出 命名导入，导入时加{ }
export const log = function(str){
    console.log(str);
}
const num = 100;
const str = 'hello';
export { num, str }
// 默认导出 默认导入 导入时不用{}
// 默认导出，一个模块只能默认导出一次
// 默认导入时可以重命名
const add = function (a,b){
    return a+b;
}
export default add;