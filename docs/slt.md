!!! abstract "About Me"
    Pratham Kamble

    *London, UK*

    Tech + Data Science = Me.

    * **I drive meaningful outcomes** with every project I touch.

    * **I simplify the complex** so everyone can grasp it.

    * I create clear, beautiful data visuals.

---


## SLT: Social Listening Tool 

---

### Project Overview

I set out to create a tool to analyze social media data specifically to bring value to Sense Worldwide. My goal was to design and implement a system for collecting data and extracting themes and trends that would help consultants generate actionable insights for their clients.

---

<video controls autoplay muted>
<source src="../slt_demo_video.mp4" type="video/mp4">
</video>



### Background & Context

- **Traditional research methods** (focus groups, interviews, surveys) are the standard for Sense Worldwide when testing hypotheses, tackling problems, and developing strategies.
- **Social media** was identified as a goldmine for public opinion and trends—a valuable supplement to traditional research.
- **The challenge:** Collecting and analyzing social media data was time-consuming and manual. This is where my dissertation comes in.

---

### Understanding the Problem

When a new client comes in (e.g., a contact lens company concerned about declining sales among younger generations), Sense Worldwide needs to:

- Discover what themes and topics are being discussed online about the product.
- Understand the product's main selling points and what customers care about (comfort, looks, convenience, etc.).
- Gauge the breadth, depth, and direction of ideas for further research.

**Current process:**
- Data scientists would manually scroll through posts, cherry-pick comments, and perform sentiment or keyword analysis—an extremely manual and time-consuming workflow.

**Key insight:**
- Reddit and Quora were highlighted as the most relevant sources, thanks to their longer, opinion-rich posts and discussions.
- I needed to create a tool that could collect relevant data on demand and at scale.

---

### Data Collection: The Technical Journey

Having dealt with web scraping challenges before joining Sense Worldwide, I was already well aware of the common pitfalls:

- IP banning
- Captchas
- JavaScript rendering
- Infinite scrolls
- Constantly changing website structures

Rather than experimenting with basic Python libraries like **BeautifulSoup** or **Selenium** again, I knew I needed a more robust solution.

Through research and experimentation, I discovered **BrightData**—a professional web scraping service that addressed all these challenges:

- Proxy rotation
- Automatic captcha solving
- Maintained custom scrapers for Reddit and Quora

This was exactly what we needed, as it meant Sense Worldwide wouldn't have to worry about maintaining scrapers themselves. The price point was very reasonable, and BrightData's service allowed me to reliably collect social media data on demand and at scale—a critical requirement for the project's success.

---

### System Architecture & Design

To make the platform scalable, cost-effective, and user-friendly, I broke it into modular layers:

- **User Interface:** Google Sheets as a control panel for consultants to specify queries and sources (no coding required)
- **Orchestration & Ingestion:** Google Apps Script to automate workflows, triggering Google Cloud Functions to call BrightData APIs and manage data flow
- **Data Storage:** Google BigQuery as a serverless data warehouse for all raw and processed data
- **Processing & Analytics:** BigQuery ML and Vertex AI for text embeddings, topic modeling, and sentiment analysis; Gemini LLM for human-readable topic summaries
- **Visualization:** Looker Studio dashboards for exploring topic clusters, sentiment trends, and more


![System Architecture](slt_system_architecture.png)


---

### Data Processing & Analysis

Once the data was in BigQuery, I:

- Generated text embeddings using Vertex AI's foundation models to measure semantic similarity
- Ran K-Means clustering on embeddings to identify key themes and topics
- Used Google Cloud Natural Language API for sentiment analysis
- Leveraged Gemini LLM to turn clusters into clear, actionable topic summaries
- Applied UMAP for dimensionality reduction, making topic clusters easy to visualize

---

### Visualization & User Experience

I focused on making the tool genuinely useful and accessible for consultants:

- **Looker Studio dashboards** display:
    - Topic distributions
    - UMAP cluster plots
    - Sentiment trends
    - LLM-generated topic summaries
- Each analysis run produces a unique, shareable report tailored to the client's needs
- The workflow enables consultants to go from question to insight with minimal technical friction

---

### Key Learnings

- Scraping social media at scale is hard—outsourcing to a managed service like BrightData saved huge amounts of time and maintenance
- Cloud-native, serverless architectures (BigQuery, Vertex AI, Looker Studio) made the system scalable and cost-effective
- Integrating advanced NLP and LLMs bridged the gap between raw data and actionable insights
- Modular design let me iterate quickly and plan for future expansion

---

### Limitations & Future Work

- The tool currently focuses on Reddit and Quora; expanding to more platforms is a logical next step
- Further automation and richer visualizations

---

### Screenshots

![Control Centre](slt_1.png)
![Dashboard 1](slt_2.png)
![Dashboard 2](slt_3.png)
![Dashboard 3](slt_4.png)

---


## Contact Me

[☎️: +44 78189 61950](tel:+447818961950)

[📧: prathamskk@gmail.com](mailto:prathamskk@gmail.com)

[LinkedIn: www.linkedin.com/in/prathamskk/](https://www.linkedin.com/in/prathamskk/)

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
