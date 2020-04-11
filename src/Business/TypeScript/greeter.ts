/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-10 18:55:36
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-10 18:58:40
 */
function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

// document.body.innerHTML = greeter(user);
function test() {
  console.log(greeter(user));
}
export default test;