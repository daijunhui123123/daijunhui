# git 大厂代码提交原则  
 - 开发目录  
    使用pwd命令 当前的目录地址  一切皆是文件  
    git init  
    初始化代码目录为代码仓库  
    - 反馈一个成功初始化一个代码仓库  
         git 仓库不能嵌套  
         .git的文件夹   仓库的秘密，不要去动他
         默认  master/main 主分支  
         HEAD 指针指向第一次提交  
         暂存区 和仓库俩部分
 - 本地代码厂库  
- git 是一个开源的版本控制系统，  
   仓库里放的文件的多个版本  
- 为社么把一个文件添加到仓库需要俩步
    git  status   
  git add  
  git  commit  俩步呢  
  严格的代码提交  
  git add  一个文件/修改  file    html  css   js  
   三个文件构成一个任务   login 页面开发
  git  commit - m 'login 页开发完成'  
   1：n  仓库  
   git add  把文件添加进暂存区  stage  
   git commit 仓库  
git  是一个分步试的  
   本地仓库  
   远程仓库  
   合作伙伴的仓库  
- 严格一点  
   代码提交一定要人间清醒  
   当前的修改和上一次修改  改啦那些地方  
   git diff  比较修改 在提交前用  
- commit -m''  不能乱写，写清楚完成了什么任务  
   - leader 以后就看-m 后的东西了解  我们的工作  
- git status 随时了解使用这个命令了解我们当前仓库状态  
- git log  
    打印所有的提交  
    唯一的ID hash  
    HEAD 指针  指向目前最后一次提交  
    master  代表分支  main  
- 可以通过git reset 快速来到任务一个版本  
    version control 秒懂  小猪    
- git reset --hard id  可以让我们返回前面  
    git relog   所以的记录操作  
- changes +untracked  
   