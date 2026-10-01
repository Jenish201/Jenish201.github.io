---
title: "Yelp recommendation system"
date: 2024-06-15 02:28:00 -0500
discipline: Machine learning
summary: >-
  Personalized business recommendations from Yelp reviews, combining review sentiment with collaborative filtering.
stack: [Python, NLP, Collaborative filtering, Sentiment analysis]
visual: graph
featured: true
repo: https://github.com/Jenish201/Yelp_Recommendation
tags: [Recommendation System, Yelp Dataset, Data Preprocessing, Sentiment Analysis, Collaborative Filtering, Data Visualization, Predictive Modeling]
figures:
  - chart: yelp-monthly
    title: Yelp reviews per month, 2005–2022
    caption: >-
      Review volume peaked near 87k a month in mid-2018 and fell to about 25k in spring 2020.
      Traced from the exploratory notebook's chart.
  - chart: yelp-sentiment
    title: Content-based error, with and without review sentiment
    caption: >-
      Sentiment features lowered RMSE for every model. A stacked regressor did best at about 1.02,
      down from roughly 1.44 for the best ratings-only model. Values are read from the notebook's charts.
  - chart: yelp-cf
    title: Collaborative filtering on the test set
    caption: >-
      User–user filtering with adjusted cosine similarity (k = 20) reached RMSE 0.927 and MAE 0.666,
      ahead of item–item at 1.115.
---

## Unlocking the Power of User Reviews for Personalized Recommendations
In this project, I developed a Yelp recommendation system that harnesses the power of user reviews to provide personalized suggestions for businesses. By leveraging natural language processing (NLP) and machine learning techniques, I created a robust model that analyzes user preferences and recommends relevant businesses.

## Key Features
- **Text Preprocessing**: Processed a large dataset of Yelp reviews to extract meaningful features and reduce dimensionality
- **Sentiment Analysis**: Implemented sentiment analysis to capture user opinions and emotions, enabling the model to understand user preferences.
- **Collaborative Filtering**: Employed collaborative filtering to identify patterns in user behavior and generate personalized recommendations.
- **Model Evaluation**: Conducted thorough model evaluation using metrics such as precision, recall, and F1-score to ensure the model's accuracy and reliability.

## What You'll Find in the Repository
- A comprehensive report detailing the project's methodology, results, and insights (DSC672_FinalReport.pdf)
- Python code implementing the recommendation system, including data preprocessing, feature extraction and model training.
- A dataset of Yelp reviews used for model training and testing

## Why This Project Matters
This project demonstrates my ability to:

- Collect, preprocess and analyze large datasets of user reviews.
- Apply NLP and machine learning techniques to real-world problems
- Develop and evaluate recommendation systems
- Communicate complex technical concepts through clear and concise reporting
