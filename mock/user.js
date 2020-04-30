/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-20 18:11:35
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-20 18:18:26
 */
const Mock=require('mockjs');

let db=Mock.mock({
    'data|3-6':[{
        id:'@id',
        name:'@name',
        'age|18-32':1
    }]
});

// let db = {
//   'data|3-6':[{
//       id:'@id',
//       name:'@name',
//       'age|18-32':1
//   }]
// };

module.exports={
    [`GET /api/users`](req,res){

        res.status(200).json(db);
    },

    // [`POST /api/users`](req,res){

    //     let user=req.body;
    //     console.log(req);
    //     user.id=Mock.mock('@id');
    //     db.data.push(user);
        
    //     res.status(200).json(user);
    // }
}