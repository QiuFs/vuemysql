let mysql = require('mysql')

let db = mysql.createPool({
  host: '192.168.127.128',     //数据库IP地址
  user: 'root',          //数据库登录账号
  password: 'zt010611',      //数据库登录密码
  database: 'baobiao'       //要操作的数据库
})

module.exports = db
