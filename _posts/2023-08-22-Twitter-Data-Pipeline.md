---
title: "Twitter data processing and analysis"
date: 2023-08-22 06:10:00 -0500
discipline: Data engineering
summary: >-
  A Python pipeline that loads up to 650,000 raw tweets into a normalized SQLite database, then benchmarks four loading strategies and three ways to query the same data.
stack: [Python, SQLite, pandas, JSON, Benchmarking]
visual: stream
featured: true
repo: https://github.com/Jenish201/Twitter_data_processing_analysis
tags: [Data Engineering, SQLite, ETL, Data Modeling, Performance Benchmarking, JSON]
figures_eyebrow: From the benchmark
figures_title: How the loaders scaled.
figures:
  - chart: twitter-runtime
    title: Load time at 130k and 650k tweets
    caption: >-
      All four loading strategies scale roughly linearly: five times the tweets took four to five times as long.
      Inserting 2,500 rows per batch (D) beat row-by-row loading from the same file (C) by about 9% at 650k tweets.
      Values are read from the benchmark chart in the repository.
---

## From raw tweets to a queryable database

The input is a day of raw tweets: one JSON object per line, hosted on a DePaul course server. I wrote a Python pipeline that pulls those tweets, parses them, loads them into a normalized SQLite database, and measures how each step behaves as the data grows from 130,000 to 650,000 tweets.

## Modeling the data

- **Three tables**: `Tweet` holds the post itself (text, source, timestamps, reply fields, retweet count), `User` holds the author, and `Geo` holds the location.
- **Stable location keys**: each `Geo` row is keyed by a SHA-256 hash of its longitude and latitude, so the same coordinates always map to the same row and tweets reference them through a foreign key.
- **Missing fields handled at parse time**: tweets without coordinates load with a null `geo_id` instead of failing the insert.

## Benchmarking the load

I timed four ways of getting the same tweets into the database:

1. **A · Download** the raw feed to a local file.
2. **B · Stream** tweets from the server straight into SQLite.
3. **C · Load** from the local file, one row at a time.
4. **D · Load** from the local file in batches of 2,500 rows with `executemany`.

Every strategy scaled close to linearly, and batching was the fastest way to load from a file.

## Comparing query paths

To find each user's average latitude, I ran the same calculation three ways: a SQL join across `Tweet` and `Geo`, pandas over JSON parsed from the raw file, and regular-expression extraction straight from the raw text. I repeated each 5 and 20 times to check that average runtime held steady.

## Exporting for analysis

The pipeline builds a denormalized `Combined` table, left-joining tweets to their users and locations. It then exports both the `Tweet` and `Combined` tables to JSON and CSV and compares each file's size against the original feed.

## What this project shows

- Designing a relational schema for nested, inconsistent JSON
- Measuring performance instead of guessing: load strategies, batch inserts and query paths
- Building a repeatable Python ETL with `sqlite3`, `urllib`, `pandas` and `hashlib`
