---
title: "Text to Image Generator using Stable Diffusion and Tkinter"
date: 2024-04-20 02:28:00 -0500
categories: [Data Science, Machine Learning, Large Language Model, API]
tags: [Data Science, Machine Learning, Mobile Technology, Pricing Dynamics, Consumer Behavior, Technology Sector, Kaggle Dataset]
---

# Text to Image Generator using Stable Diffusion and Tkinter

This project demonstrates an innovative application of artificial intelligence in the field of generative art. The **Text to Image Generator** is a desktop application built with Python, leveraging the power of the **Stable Diffusion** deep learning model to generate images from text prompts. It features a user-friendly interface built with Tkinter and customtkinter libraries.

## Key Features

- **Stable Diffusion Pipeline Integration:**
  - Utilizes the 'Stable Diffusion v1-4' model from [Hugging Face](https://huggingface.co/CompVis/stable-diffusion-v-1-4) to generate high-quality images from textual descriptions.

- **Real-Time Image Generation:**
  - Seamlessly converts text prompts into images using GPU acceleration (CUDA), ensuring quick and efficient processing.

- **Customizable Guidance Scale:**
  - Allows users to fine-tune the creativity of the generated images by adjusting the guidance scale.

- **Intuitive UI:**
  - Provides a straightforward and attractive user interface with the following components:
    - **Prompt Entry Box:** Enter your desired description for the image to be generated.
    - **Generate Button:** Creates the image based on the provided text prompt.
    - **Clear Button:** Quickly clears the text prompt for new inputs.
    - **Image Display Area:** Presents the generated image within the application.

## Technology Stack

- **Python Libraries:** `tkinter`, `customtkinter`, `PIL (ImageTk)`, `torch`, `diffusers`
- **Stable Diffusion Model:** `CompVis/stable-diffusion-v1-4`
- **Hardware Requirements:** Requires GPU acceleration (CUDA)

## How It Works

1. **Enter Prompt:** Enter a descriptive text prompt in the input field.
2. **Generate Image:** Click the "Generate" button to transform the text into an image.
3. **Adjust Creativity:** Adjust the guidance scale (default is 7) to modify image creativity.
4. **Display Image:** The resulting image will be displayed directly within the application.

## Installation and Setup

1. **Clone Repository and Install Dependencies:**
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    pip install -r requirements.txt
    ```

2. **Obtain Hugging Face API Token:**
   - Visit [Hugging Face](https://huggingface.co/CompVis/stable-diffusion-v-1-4) to get your API token.

3. **Configure Auth Token:**
   - Set the `auth_token` in your environment by adding it to a Python file:
   ```python
   # authtoken.py
   auth_token = "<YOUR_API_TOKEN>"