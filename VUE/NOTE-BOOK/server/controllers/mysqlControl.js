//  封装连接msq的函数  

const mysql = require('mysql2')
const config = require('../config/index.js')

// 创建一个线程池  

const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})

// 连接mql

const allService = {
    query: function (sql, values) {
        // 连接线程池
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                } else {
                    // 连接成功，建立sql连接，执行sql语句
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()  // 释放连接  
                    })
                }
            })
        })
    }
}


// 登入接口  
const userLogin = (username, passworad) => {
    let _sql = `select * from users where username="${username}"and password="${passworad}";`
    return allService.query(_sql)
}

module.exports = {
    userLogin
}