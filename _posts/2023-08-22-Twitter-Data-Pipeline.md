---
title: Twitter Data Processing and Analysis
date: 2023-08-22 06:10:00 -0500
categories: [Data Analytics, Exploratory Data Analysis]
tags: [EDA]
pin: true
---


In this portfolio project, I tackled the task of processing and analyzing Twitter data. The project involves several key components, including data retrieval from a web server, data storage in a SQLite database, data manipulation and analysis, and performance evaluation.


### Project highlight 
1. Data Retrieval: I created a Python function to fetch tweets from a web server using the urllib library. This function allows for specifying the maximum number of tweets to retrieve.

2. SQLite Database: I designed a SQLite database structure to store tweets, user information, and geographical data. The database schema includes tables for tweets, users, and geographical information, with appropriate foreign key relationships.

3. Data Parsing: I implemented classes to parse and organize the fetched JSON data into meaningful Python objects. These classes include Tweet and User classes for handling tweet and user data, respectively.

4. Batch Data Insertion: To optimize data insertion into the database, I implemented batch insertion functions for both tweets and geographical data. This improves efficiency when processing a large number of tweets.

5. Data Analysis: I conducted various data analysis tasks, including querying the database to calculate average latitude for each user and measuring the performance of different functions.

6. Performance Evaluation: I designed a performance evaluation framework to assess the runtime of key functions under different scenarios, such as data retrieval, data parsing, and data analysis. This helps in understanding the scalability and efficiency of the code.