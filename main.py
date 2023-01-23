
from pyexpat import model
import openai
from env import Env

env = Env()

openai.api_key = env.get_gey()

'''
response = openai.Completion.create(
  model="text-davinci-001",
  prompt="devo studaire per esame di Sistemi Informativi (per il settore dell’informazione), questo è un Esempio di domande d’esame,- discutere cosa si intende per sistema di gestione di workflow. prova a rispondere alla domanda",
  temperature=0.7,
  max_tokens=300,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)

print(response)
'''

# request in open ai for a 1920 immage of a cat 
response = openai.Image.create(
  prompt="a white siamese cat, in futuristic style, with a blue background",
  n=1,
  size="1024x1024"
)
image_url = response['data'][0]['url']

print(image_url)