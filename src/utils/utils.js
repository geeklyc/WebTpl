// 获取字节长度
export default function charLength(str) {
    let ret = 0;
    for (let i = 0; i <str.length; i++) {
      if (str.charCodeAt(i) > 255) {
        ret += 2;
      } else {
        ret += 1;
      }
    }
    return ret;
  }
