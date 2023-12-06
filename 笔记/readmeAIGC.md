
import pandas as pd  #python 数据分析库 
from transformers import pipeline # python模块化倒过来
question = "How many contributors are working?" 
# 行列数据 字典  json 
context = pd.DataFrame.from_dict({
  "Repository": ["Transformers", "Datasets", "Tokenizers"],
  "Stars": ["23258", "4512", "3934"],
  "Contributors": ["651", "77", "34"],
  "Programming language": ["Python,JS", "Python", "Python,Rust,NodeJS"]
})

res = pipeline("table-question-answering", 
    model="google/tapas-large-finetuned-wtq",
    
)(query=question,
    table=context,)
print(res)


import os 
def list_files(directory):
  return os.listdir(directory)
print(list_files('sample_data'))   获取文件系统的文件夹



!pip install pyautogen~=0.2.0b4 -q -U

# openai   的配置
config_list = [
    {
        'model':'gpt-3.5-turbo',
        'api_key':'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',

    }
]
llm_config = {
    "timeout":600,
    "cache_seed":42,
    "config_list":config_list,
    "temperature": 0
}

import autogen # 最佳AI框架
# 请一个实例化代理Agent，管家 
# 授权user_proxy 自动决定
user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="TERMINATE",
    max_consecutive_auto_reply=10,
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),
    code_execution_config={"work_dir":"."},
    llm_config=llm_config,
    system_message="""Reply TERMINATE if the task has been solved at full satisfaction.Otherwise, reply CONTINUE, or the reason why the task is not solved yet"""   
)
# 助理代理
assistant = autogen.AssistantAgent(
    name="assistant",
    llm_config=llm_config
)

user_proxy.initiate_chat(
    assistant,
    message="""
    List all the files in the sample_data  folder
    """
)