/**
 *@func getV 获取对象的值
 *@param {object} [obj] 对象
 *@return {function} [...args] 属性
 */

const getV=(o)=>(...s)=>s.reduce((a,b)=>a?a[b]:''.u,o)