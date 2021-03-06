/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-10 12:46:57
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-15 12:38:42
 */
import Producer from './Producer';

class Province {
  constructor(doc) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    // 需求量
    this._demand = doc.demand;
    // 价格
    this._price = doc.price;
    doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
  }

  get name() {
    return this._name;
  }

  get producers() {
    return this._producers.slice();
  }

  get totalProduction() {
    return this._totalProduction;
  }

  set totalProduction(arg) {
    this._totalProduction = arg;
  }

  get demand() {
    return this._demand;
  }

  set demand(arg) {
    this._demand = parseInt(arg, 10);;
  }

  get price() {
    return this._price;
  }

  set price(arg) {
    this._price = parseInt(arg, 10);
  }

  addProducer(arg) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  // 库存缺额
  get shortfall() {
    return this._demand - this.totalProduction;
  }

  // 计算利润
  get profit() {
    return this.demandValue - this.demandCost;
  }

  getDemandCost()  {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers.sort((a, b) => a.cost - b.cost).forEach(p => {
      const contribution = Math.min(remainingDemand, p.production);
      remainingDemand -= contribution;
      result += contribution * p.cost;
    });
    return result;
  }

  get demandValue() {
    return this.satisfiedDemand * this.price;
  }

  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }
}

export default Province;