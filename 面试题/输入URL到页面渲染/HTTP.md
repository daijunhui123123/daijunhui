# HTTP  超文本传输协议  / 0.9

- 基于TCP/IP通信协议来传递数据
- 只有请求行  GET/ index.html 
- 以ASCII字符流的编码方式进行传输  

# HTTP 1.0  1996.05

- 0.9 的缺点： 支持html一种类型的资源传输  


js，css，图片，音频，视频各种类型资源  

- 请求头   
  accept ：text/html  
  accept-encoding  ： gzip  deflat  br 
  accept-language  ： zh-CN   


- 响应头   ：

  content-type  ： text/html  
  content-encoding  ： gzip  deflat  br



- 为了传输不同的类型资源而诞生的



# HTTP 1.1  1997.06


- http 持久连接，减轻了服务器压力

- 同时最多能维护6个tcp连接

- 队头阻塞
  1. 前一个HTTP请求没有得到响应，后一个HTTP请求必须等待
  
- HOST
   
   
- 响应头中 
 1.0    Content-Length：1024


 后端动态内容生成，无法确定数据大小


 1.1    Transfer-Encoding：chunked：将资源文件处理成若干个数据块并编辑数据块大小，最后发送一个
      标记为0的数据块，表示数据发送完毕