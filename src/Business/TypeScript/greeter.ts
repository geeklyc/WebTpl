/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-10 18:55:36
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-10 18:58:40
 */
function greeter(person: string) {
  let isDone: boolean = false;
  let list: number[] = [1, 2, 3];
  let list2: Array<number> = [1, 2, 3];
  let x: [string, number];
  x = ['hello', 10];
  enum Color {
    Red,
    Green,
    Blur,
  }
  let notSure: any = 4;
  // notSure.ifItExists();
  let name: string = undefined;
  console.log(`name ${name}`);

  let someValue: any = "this is a string";
  let strLength: number = (<string>someValue).length;
  // 推荐
  let someValue1: any = "this is a string";
  let strLength1: number = (someValue1 as string).length;
  let {a, b}: {a: string, b: number} = o;
  return "Hello, " + person;
}

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
}

function warnUser(): void {

}

let user = "Jane User";

// document.body.innerHTML = greeter(user);
function test() {
  console.log(greeter(user));
}
export default test;