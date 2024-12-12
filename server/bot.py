from transformers import BertTokenizerFast, BertForQuestionAnswering, pipeline
import torch


tokenizer = BertTokenizerFast.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')
model = BertForQuestionAnswering.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')

""" question = "How many parameters does BLOOM have?"
context = "BLOOM has 176 billion parameters and can generate text in 46 natural languages and 13 programming languages."
 """
question_answerer = pipeline(
    "question-answering",
    model="gilper",
    tokenizer="gilper",
    device=0 if torch.cuda.is_available() else -1
)
""" 
response = question_answerer(question=question, context=context)
print(response) """