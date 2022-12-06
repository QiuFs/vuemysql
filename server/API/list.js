let db = require('../db')

exports.all = (req, res) => {        //获取info表全部数据
  var sql = 'select * from info'
  db.query(sql, (err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}
exports.get = (req, res) => {        //通过id查询数据
  var sql = 'select * from info where id = ?'    //？用于占位
  db.query(sql, [req.query.id], (err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

exports.del = (req, res) => {        //通过id删除数据
  var sql = 'delete from info where id = ?'
  db.query(sql, [req.query.id], (err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send({
      status: 200,
      message: '删除成功'
    })
  })
}

exports.add = (req, res) => {        //向info表添加数据
  var sql = 'insert into info (id,name,address,tel) values (?,?,?,?)'
  db.query(sql, [req.query.id, req.query.name, req.query.address, req.query.tel], (err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send({
      status: 200,
      message: '添加成功'
    })
  })
}

exports.update = (req, res) => {        //通过id更新数据
  var sql = 'update info set name = ?, address = ?, tel = ? where id = ?'
  db.query(sql, [req.query.name, req.query.address, req.query.tel, req.query.id], (err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send({
      status: 200,
      message: '修改成功'
    })
  })
}
