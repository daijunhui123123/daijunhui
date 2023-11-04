#   跨境电商 
AI 开店  
  玩具店 ->拼多多海外版  
- 翻译 NLP 不用google 翻译  写程序
  pipeline（"translate"）
  AIGC 生成   G代表
- 卖什么货
- 卖多少钱 
- 营销内容怎么写有搞头 
- 如何让openai 帮你开店  
    大模型（openai 接口调用）+ prompt  （编写prompt）
## prompt 工程  
会问问题 的人比解决问题的更nb
大模型超越了大部分人的能力

## openai 封装的过程  
 人生苦短  我用python 
  特别适合nlp
  一个功能写法就一种  
  风格 缩进
def  get_response(promot):
  调用了 openai库的completions模块  （其他模块）.create方法
   向openai 发生网络请求
 completions = openai.Completion.create(
     engine= ,
      prompt=，  吴恩达prompt
      temperature=0  自由度
      max_tokens= 省钱
 )  
 python是同步的   js是异步的
 print(completions),
   message = completions.choics[0].text
   return message

