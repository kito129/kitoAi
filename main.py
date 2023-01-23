#  01/23/2023
#  Created by: Marco Selva
#  Description: This is a simple python script that use the open ai api to generate text and images

# imports
import openai
from tkinter import Tk, Label, Text, Button, END
from env import Env

env = Env()
# set the api key
openai.api_key = env.get_gey()

#create a gui for input "promt"" and display the response
def gui():
  # initialize the window toolkit
  root = Tk()
  # set the title
  root.title("Open Ai")
  # set the size
  root.geometry("500x500")
  # set the background color
  root.configure(background="black")
  
  # create a label  for the promt
  promt_label = Label(root, text="Promt", bg="black", fg="white")
  # set the position  
  promt_label.place(x=10, y=10)
  # create a text area for the promt
  promt_text = Text(root, height=10, width=50)
  # set the position
  promt_text.place(x=10, y=30)

  # create a label  for the response
  response_label = Label(root, text="Response", bg="black", fg="white")
  # set the position
  response_label.place(x=10, y=200)
  # create a text area for the response
  response_text = Text(root, height=10, width=50)
  # set the position
  response_text.place(x=10, y=220)

  # create a button for the submit
  submit_button = Button(root, text="Submit", command=lambda: submit(promt_text, response_text))
  # whne submit update tokens
  submit_button.bind("<Button-1>", lambda event: tokens_label.config(text="Tokens: " + str(len(submit(promt_text, response_text))) + "/500"))
  
  # set the position
  submit_button.place(x=10, y=450)

  # button to clear the promt
  clear_promt_button = Button(root, text="Clear Promt", command=lambda: promt_text.delete("1.0", END))
  # set the position
  clear_promt_button.place(x=100, y=450)

  # diplay used tokens and the limit
  tokens_label = Label(root, text="Tokens: 0/500", bg="black", fg="white")
  # set the position
  tokens_label.place(x=200, y=450)

  # start the gui 
  root.mainloop()
  

  pass

# clear the response
def clear_response(response_text):
  response_text.delete("1.0", END)
  pass

# clear the promt
def clear_promt(promt_text):
  promt_text.delete("1.0", END)
  pass

# submit the promt and display the response
def submit(promt_text, response_text):

  # clear the response 
  clear_response(response_text)

  #check if the promt is empty
  if promt_text.get("1.0", END) == " ":
    return
  # get the promt
  promt = promt_text.get("1.0", END)
  # request in open ai for a text
  response = openai.Completion.create(
    model="text-davinci-001",
    prompt=promt,
    temperature=0.7,
    max_tokens=300,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
  )
  # set the response
  response_text.insert(END, response['choices'][0]['text'])

  #return the used tokens
  return response['choices'][0]['text']


  pass

# main 
if __name__ == "__main__":
  gui()
  pass


