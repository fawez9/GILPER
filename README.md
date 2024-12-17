# Gilper: Fine-Tuned BERT Model for Question Answering

Welcome to **Gilper**, a fine-tuned BERT-based model specialized in **question-answering tasks**. This repository contains:
*  The **Next.js frontend** for an interactive interface.
* The **backend code** for serving the model.

Use this repository to explore Gilper's capabilities, deploy it locally, or build your own applications on top of it!

## Features

* **Interactive Q&A**: Input a question and context, and get accurate answers.
* **Full-Stack Solution**: Includes both backend (model serving) and frontend (user interface).
* **State-of-the-Art Model**: Fine-tuned from `bert-large-uncased-whole-word-masking-finetuned-squad`.
* **Deployable**: Easily run locally or on your preferred cloud platform.

## Live Demo

Check out the Hugging Face model here: [Gilper on Hugging Face](https://huggingface.co/fawez9/gilper)

## How to Use

### Clone the Repository

```bash
git clone https://github.com/fawez9/gilper.git
cd gilper
```

### Installation

#### Prerequisites
- Node.js (v18.0.0 or later)
- Python (v3.8 or later)
- pip
- venv (recommended)

#### Backend Setup
1. Move to the server folder
```bash
cd server
```
2. Create a virtual environment
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

3. Install Python dependencies
```bash
pip install -r requirements.txt
```

#### Frontend Setup
1. Move to client folder
```bash
cd client
```
2. Install Node.js dependencies
```bash
npm install
# or
yarn install
```

### Running the Application

#### Start Backend Server
```bash
python3 main.py
```

#### Start Frontend Development Server
```bash
npm run dev
# or
yarn dev
```

## Contributing

We welcome contributions! Please Feel free to contribute to this project. Fork it, submit pull requests, and **report issues** or **improvements**.

## Acknowledgments

- Hugging Face Transformers
- SQuAD Dataset
- BERT Paper Authors
