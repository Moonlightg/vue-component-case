/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse () {
  let url = window.location.search
  let obj = {}
  let reg = /[?&][^?&]+=[^?&]+/g
  // 返回数组
  let arr = url.match(reg)
  // ['?id=12345', '&a=b']
  if (arr) {
    // 遍历数组
    arr.forEach((item) => {
      // 去掉第一个字符并且用等号分割
      let tempArr = item.substring(1).split('=')
      let key = decodeURIComponent(tempArr[0])
      let val = decodeURIComponent(tempArr[1])
      obj[key] = val
    })
  }
  return obj
}
