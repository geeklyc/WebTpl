/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-20 18:11:29
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-20 18:11:29
 */
const fs=require('fs');
const path=require('path');
const mockPath=path.join(__dirname+'/mock');

const mock={};
fs.readdirSync(mockPath).forEach(file=>{

    Object.assign(mock,require('./mock/'+file));
});

module.exports=mock;
