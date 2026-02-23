---
layout: ../../components/MarkdownProject.astro
title: "Azure Data Lake + ETL Pipeline"
image:
  url: "/projects/azure_data_lake_etl/azure_banner.png"
  alt: "Azure ecosystem overview"
pubDate: "Jun 2025"
corners:
  - tech
techStack:
  - Azure SQL Database
  - Azure Data Factory
  - Azure Resource Groups
  - Azure Storage Account (ADLS Gen2)
  - Azure Databricks & Spark
  - DBT (Data Build Tool)
  - Medallion Architecture (Bronze, Silver, Gold)
  - Parquet & Delta
project_for:
  label: Personal Project
  icon: ri-code-line

summary: "A modern data platform on Azure that ingests e-commerce data into an ADLS Gen2 data lake, uses Azure Data Factory and Databricks to transform it through medallion (bronze, silver, gold) layers, and builds analytics-ready marts with DBT."
---

### Project Overview

Honestly, this project was all about getting hands-on experience with Azure and learning core data engineering concepts and tools. I started by exploring the sample Adventure Works data available in Azure. Then, I set up an Azure SQL Database to store and manage the data.

Next, I created Azure Resource Groups to organize all my resources, and set up an Azure Storage Account with containers, leveraging ADLS Gen2 for scalable storage. I designed the data lake using the medallion architecture—so I had bronze, silver, and gold layers to structure the data as it moved through the pipeline.

I used Azure Data Factory (ADF) to orchestrate the ETL process. ADF moved the SQL tables from Adventure Works into the bronze containers folder in my data lake. Then, I brought in Databricks and Spark to handle the heavy lifting for data processing. I connected DBT (Data Build Tool) to Databricks, and in DBT, I built data marts and performed all the necessary data transformations.

The flow went like this:

1. **ADF** moved the raw data into the **bronze** layer (Parquet format).
2. **DBT with Databricks** performed transformations to combine and clean the data, storing the results in the **silver** layer (Delta format).
3. Analytics-ready data marts were created in the **gold** layer (Delta format), making the data ready for reporting and analysis.

Throughout, I worked with Parquet files for efficient storage and processing in the earlier stages, and Delta format for the silver and gold layers. Step by step, I got to see how all these tools fit together in a real-world data engineering workflow.

### Tech Stack

- Azure SQL Database
- Azure Data Factory
- Azure Resource Groups
- Azure Storage Account (ADLS Gen2)
- Azure Databricks & Spark
- DBT (Data Build Tool)
- Medallion Architecture (Bronze, Silver, Gold)
- Parquet & Delta formats

---

### Project Architecture & Screenshots

![Azure Banner](/projects/azure_data_lake_etl/azure_banner.png)

*Azure ecosystem overview*

![Azure SQL Database](/projects/azure_data_lake_etl/azure_sql_database.png)

*Azure SQL Database setup*

![Azure Data Factory](/projects/azure_data_lake_etl/azure_data_factory.png)

*Azure Data Factory pipeline*

![Azure Storage Containers](/projects/azure_data_lake_etl/azure_containers.png)

*ADLS Gen2 Storage Containers*

![Azure Bronze Layer](/projects/azure_data_lake_etl/azure_bronze.png)

*Bronze Layer: Raw Data Storage*

![Azure Silver Layer](/projects/azure_data_lake_etl/azure_silver.png)

*Silver Layer: Cleaned & Transformed Data (Delta)*

![Azure Gold Layer](/projects/azure_data_lake_etl/azure_gold.png)

*Gold Layer: Analytics-Ready Data Marts (Delta)*

![Azure Databricks](/projects/azure_data_lake_etl/azure_databricks.png)

*Databricks Workspace*

![Azure DBT Integration](/projects/azure_data_lake_etl/azure_dbt.png)

*DBT Integration with Databricks*