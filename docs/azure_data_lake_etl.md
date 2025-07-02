!!! abstract "About Me"
    Pratham Kamble

    *London, UK*

    Tech + Data Science = Me.

    * **I drive meaningful outcomes** with every project I touch.

    * **I simplify the complex** so everyone can grasp it.

    * I create clear, beautiful data visuals.

---

## Azure Data Lake and ETL Pipeline

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

![Azure Banner](azure_banner.png)

*Azure ecosystem overview*

![Azure SQL Database](azure_sql_database.png)

*Azure SQL Database setup*

![Azure Data Factory](azure_data_factory.png)

*Azure Data Factory pipeline*

![Azure Storage Containers](azure_containers.png)

*ADLS Gen2 Storage Containers*

![Azure Bronze Layer](azure_bronze.png)

*Bronze Layer: Raw Data Storage*

![Azure Silver Layer](azure_silver.png)

*Silver Layer: Cleaned & Transformed Data (Delta)*

![Azure Gold Layer](azure_gold.png)

*Gold Layer: Analytics-Ready Data Marts (Delta)*

![Azure Databricks](azure_databricks.png)

*Databricks Workspace*

![Azure DBT Integration](azure_dbt.png)

*DBT Integration with Databricks*

---

## Contact Me

[☎️: +44 78189 61950](tel:+447818961950)

[📧: prathamskk@gmail.com](mailto:prathamskk@gmail.com)

[Linkedin: www.linkedin.com/in/prathamskk/](https://www.linkedin.com/in/prathamskk/)

---

## Explore My Other Projects

<div class="grid cards" markdown>

-   

    ![Project banner](./slt_banner.png){style="width:100%;height:120px;object-fit:cover;"}
    **SLT: Social Listening Tool**  
    
    <span class="tool-btn">Web Scraping</span> <span class="tool-btn">BigQuery</span> <span class="tool-btn">Data Pipeline</span> <span class="tool-btn">Topic Modelling</span><span class="tool-btn">Looker</span><span class="tool-btn">K-Means</span><span class="tool-btn">GCP</span><span class="tool-btn">Vertex AI</span><span class="tool-btn">Gemini</span>
    
    ---
    A powerful tool built for Sense Worldwide, an innovation consulting company, that collects and analyzes social media conversations to identify trends and patterns, presenting key findings through easy-to-use interactive charts and reports.

        
    ---
    [View Project](slt.md)


-   

    ![zaika teaser](./zaika_usage_thumbnail.jpg){style="width:100%;height:120px;object-fit:cover;"}
    **Zaika: A Food Ordering App** 

    <span class="tool-btn">React</span> <span class="tool-btn">Vite</span> <span class="tool-btn">Firebase</span> <span class="tool-btn">NoSQL</span><span class="tool-btn">GCP</span>
    
    ---
    A food ordering app that served 800+ orders and onboarded 600+ users in a single day, featuring real-time order tracking for our college festival.

    ---
      
    [View Project](zaika.md)

-   

    ![Food Fiesta website](./zaika_website.jpg){style="width:100%;height:120px;object-fit:cover;"}

    **Food Fiesta: Landing Website**

    <span class="tool-btn">HTML</span> <span class="tool-btn">CSS</span> <span class="tool-btn">Javascript</span> <span class="tool-btn">Parcel</span><span class="tool-btn">Bootstrap</span>
    
    ---
    A Vibrant website promoting our college's Food Fiesta event and our new food ordering app, with details about the festival, featured food items, and easy ways to order through the app.

    ---
    [View Project](ff.md)

-   

    ![Project banner](./instacart_banner.png){style="width:100%;height:120px;object-fit:cover;"}
    **Instacart Reorder Prediction**
    
    <span class="tool-btn">XGBoost</span> <span class="tool-btn">EDA</span> <span class="tool-btn">Python</span> <span class="tool-btn">Data Visualization</span><span class="tool-btn">Machine Learning</span> 
    
    ---
    Leveraged XGBoost and customer purchase history to predict product reorder probability with 70% accuracy, analyzing 3 million orders and 50,000 products to help stores manage inventory better and improve the shopping experience.

    ---
    [View Project](instacart.md)

-   

    ![LearnSBAR promo](./learnsbar2.png){style="width:100%;height:120px;object-fit:cover;"}
    **LearnSBAR: Training Platform** 

    <span class="tool-btn">React</span> <span class="tool-btn">Vite</span> <span class="tool-btn">Typescript</span> <span class="tool-btn">AWS</span><span class="tool-btn">DynamoDB</span><span class="tool-btn">Voice Transcription</span>

    ---
    A training platform that helps nurses practice and improve their patient handoff communication skills through practice scenarios, instant feedback, and progress tracking. Features voice recording capabilities that automatically convert speech to text for easier review.

    --- 
    [View Project](learnsbar.md)



-   

    ![Project banner](./udemy_banner.png){style="width:100%;height:120px;object-fit:cover;"}
    **Udemy Enrollment Prediction**  

    <span class="tool-btn">Web Scraping</span> <span class="tool-btn">Machine Learning</span> <span class="tool-btn">Python</span> <span class="tool-btn">Pandas</span><span class="tool-btn">Regression</span><span class="tool-btn">Random Forest</span><span class="tool-btn">Hyparameter Tuning</span> 
    
    
    ---
    Built a predictive model analyzing 9000+ Udemy courses to forecast enrollment numbers using features like course pricing, content length, and instructor ratings. Used Random Forest regression to help course creators optimize their offerings.

        
    ---
    [View Project](udemy.md)


-   

    ![Project banner](./competitor_banner.png){style="width:100%;height:120px;object-fit:cover;"}
    **AI Competitor Intelligence Tool**  
    
    
    <span class="tool-btn">RAG</span> <span class="tool-btn">Gen AI</span> <span class="tool-btn">LLM</span> <span class="tool-btn">MCP</span><span class="tool-btn">Streamlit</span><span class="tool-btn">RAG Evaluation</span><span class="tool-btn">Spark</span> 

    ---
    Designed an AI RAG system to analyze ~3 million tweets, understanding social media customer support. Optimized Python pipeline by converting it to Spark, reducing processing time from 2 hours to 5mins! Built a user-friendly web interface for the tool using Streamlit.

    
    
    --- 
    [View Project](competitor.md)

-   

    ![Project banner](./objectdetection.png){style="width:100%;height:120px;object-fit:cover;"}
    **Real Time Object Detection**  
    
    <span class="tool-btn">OpenCV</span> <span class="tool-btn">YOLOv8</span> <span class="tool-btn">Deep Learning</span> <span class="tool-btn">Python</span><span class="tool-btn">Data Augmentation</span><span class="tool-btn">Dataset Generation</span>

    ---
    Built a real-time object detection system at BARC Robotics using YOLOv8 and OpenCV. Calibrated cameras for position measurement and improved accuracy by training on real and synthetic images.

    
    ---
    [View Project](real_time_object_detection.md)

-   

    ![Project banner](./azure_banner.png){style="width:100%;height:120px;object-fit:cover;"}
    **Azure Data Lake + ETL Pipeline**  
    
    <span class="tool-btn">Azure</span> <span class="tool-btn">Databricks</span> <span class="tool-btn">ETL</span> <span class="tool-btn">ADLS Gen2</span><span class="tool-btn">Data Lake</span><span class="tool-btn">Spark</span>

    ---
    A modern data platform on Azure cloud that processes e-commerce data through automated pipelines. Azure Data Factory and Databricks transform raw data into clean, organized layers. Data marts implemented through DBT.
    
    ---
    [View Project](azure_data_lake_etl.md)

</div>
