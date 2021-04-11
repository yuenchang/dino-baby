const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = 5321
/*app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})
*/

app.use(express.static(`${__dirname}/dist`));

http.listen(port, () => {
    console.log(`listening on port: ${port}`)
    let name = 'BK'
    console.log(`hi ${name} `)
})

io.on('connection', function(socket) {
    /*是否是新用户标识*/
    var isNewPerson = true;
    /*当前登录用户*/
    var username = null;
    /*监听登录*/
    socket.on('login', function(data) {
          for (var i = 0; i < users.length; i++) {
                  if (users[i].username === data.username) {
                            isNewPerson = false
                            break;
                          } else {
                                    isNewPerson = true
                                  }
                }
          if (isNewPerson) {
                  username = data.username
                  users.push({
                            username: data.username
                          })
                  /*登录成功*/
                  socket.emit('loginSuccess', data)
                  /*向所有连接的客户端广播add事件*/
                  io.sockets.emit('add', data)
                } else {
                        /*登录失败*/
                        socket.emit('loginFail', '')
                      }
        })


    socket.on('shake', function(data) {

          console.log('搖呀'+data.username);

          var e = true;
          for (var i = 0; i < shakers.length; i++) {
                  if (shakers[i].username === data.username) {
                            e = false
                            break;
                          }
                }
          if(e){
                  shakers.push({
                            username: data.username
                          })
                  s++;
                }
          if(s==2){
                  io.sockets.emit('receiveMessage', { username: 'SERVER', message: 'EGG' });
                  s=0
                  shakers=[]
                }
        })

    socket.on('sendMessage', function(data) {
          console.log('target is '+data.target);
          io.sockets.emit('receiveMessage', data);
        })

    socket.on('end_story', function(data){
          console.log("story end");
          io.sockets.emit('appear_egg', data);
    })  

})
