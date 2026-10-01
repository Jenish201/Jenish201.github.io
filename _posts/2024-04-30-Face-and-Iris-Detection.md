---
title: "Real-time face and eye detection"
date: 2024-04-30 02:28:00 -0500
discipline: Computer vision
summary: >-
  Live webcam detection of faces and eyes using OpenCV Haar cascades — a fast prototype for biometric and HCI ideas.
stack: [Python, OpenCV, Haar cascades, Matplotlib]
visual: face
featured: false
repo: https://github.com/Jenish201/face_and_iris_detection
tags: [Real time, Computer vision, Face, Iris, OpenCV]
figures_eyebrow: From the app
figures_title: The app in action.
figures:
  - images:
      - src: /assets/projects/face-detection/webcam-detection
        w: 595
        h: 575
        alt: Webcam frame of Jenish with a yellow box around the face and red boxes around both eyes
    title: Live detection from the webcam
    caption: >-
      A frame from the running app. One Haar cascade finds the face (yellow, 100–300 px), a second finds
      eyes (red, 30–50 px) across the whole greyscale frame.
---

## Project Description

This project uses OpenCV and Haar cascades to detect faces and eyes in real time through a webcam. It employs machine learning models trained on facial features to identify these elements efficiently. The project is implemented in Python and can be used as a quick prototype or proof-of-concept for real-time face and eye detection applications.

## Features
- **Real-Time Detection**: Leverages live webcam feed to detect faces and eyes instantaneously.
- **OpenCV**: Uses OpenCV's `CascadeClassifier` for face and eye detection.
- **Haar Cascade Models**: Employs pre-trained Haar cascade models for detecting frontal faces and eyes.

## Libraries Used
- OpenCV
- Matplotlib

## Applications
- **Security**: Integrate real-time detection for security cameras.
- **Biometric Authentication**: Detect and recognize individuals for secure login.
- **Human-Computer Interaction**: Build applications responding to facial gestures.
