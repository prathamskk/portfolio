!!! abstract "About Me"
    Pratham Kamble

    *London, UK*

    Tech + Data Science = Me.

    * **I drive meaningful outcomes** with every project I touch.

    * **I simplify the complex** so everyone can grasp it.

    * I create clear, beautiful data visuals.

---

## AI-Powered Competitor Intelligence Tool

### Project Overview

When I started this project, my goal was to build an AI tool that could automatically find competitors and analyze how companies interact with their customers online. Here's how I did it, step by step:

---

### System Architecture & Design

First, I designed the system's architecture. I decided to use two main AI agents:

- **Competitor Finder Agent:** Finds competitors in a given industry.
- **Customer Interaction Analysis Agent:** Analyzes how companies interact with customers.

This modular design allows each agent to focus on a specific task, while also enabling future expansion with more features or data sources.

![Two Agents](./competitor_two_agents.jpg)

![System Architecture](./competitor_system_design.jpg)

![MCP Architecture](./competitor_mcp_architecture.jpg)
*System Architecture Diagram*

---

### Data Collection & Processing

Next, I started with data from Kaggle—a dataset of about 3 million customer support tweets. Each tweet had details like who wrote it, when, and what it said. 

**Processing Steps:**
- Used Apache Spark to process the data.
- Filtered for tweets that were customer questions ("inbound") and not replies, to find the start of each conversation.
- Randomly selected 10,000 conversations for manageability.

![Dataset Head](./competitor_dataset_head.jpg)
*What the data looked like*

---

### Conversation Thread Extraction

For each starting tweet, I built the full conversation by following the reply chain. For example, if a customer tweeted "My order is late!" and the company replied, I linked those together, and kept following the thread. 

- Stored conversations in **Parquet** format for fast access.
- Used **Gemini's embedding model** to convert each conversation into a vector (for semantic search).
- Saved vectors in a special database (**PgVector**).

![Example Conversation 1](./competitor_example_one_conversation.jpg)
*Instance of an identified conversation between a user and company (AppleSupport)*

![Threads Example](./competitor_threads_example.jpg)
*Transformed data where each row represents an entire conversation thread*

---

### AI Agent Prompt Engineering

With the data ready, I focused on the AI agents.

#### Customer Interaction Analysis Agent
- Wrote a detailed prompt specifying what to look for: handling negative feedback, public/private replies, tone, helpfulness, etc.
- Step-by-step instructions: extract info → analyze → write a report with examples.

#### Competitor Finder Agent
- Prompted to search for top competitors in a given industry and summarize their strengths.
- Decides when to use external search tools.
- Presents results in a clear, structured way.
- Iteratively tested and refined prompts for clarity and usefulness.

---

### User Interface: Streamlit Dashboard

To make everything user-friendly, I built a dashboard using **Streamlit**:

- **Sidebar:** Manage API keys.
- **Tabs:**
    - Analyze customer interactions
    - Find competitors
- Users can enter their own parameters and see results instantly.

![Competitor Dashboard](./competitor_competitor_dashboard.jpg)

![Customer Dashboard](./competitor_customer_dashboard.jpg)
*Streamlit Dashboard*

---

### Engineering Best Practices

Throughout the project, I followed best practices in software engineering:

- **Docker:** Ensures consistent app deployment
- **UV:** Dependency management
- **.env files:** Secure secrets management
- **Git:** Version control
- **Logging:** For debugging and monitoring

![Docker](./competitor_docker.jpg)

![Logs](./competitor_logs.jpg)

---

### Evaluation & Learnings

Once everything was working, I evaluated the system:

- **Customer Interaction Analysis Agent:** Delivered accurate, valuable insights.
- **Competitor Finder Agent:** Worked, but results were sometimes inconsistent.
- **RAG Evaluation:** Used the RAGAS library, showing strong context precision and recall.

**Key Learnings:**
- Building modular AI systems
- Handling big data
- Designing effective prompts

**Limitations:**
- Only uses historical Twitter data
- Relies on certain APIs
- Flexible for future features (e.g., live data, richer analysis tools)

---

??? Note "View Full Report Here"
    ![competitor ai tool report](../competitor.pdf){ type=application/pdf style="min-height:75vh;width:100%" }


# Contact Me

- [☎️: +44 78189 61950](tel:+447818961950)
- [📧: prathamskk@gmail.com](mailto:prathamskk@gmail.com)
- [LinkedIn: www.linkedin.com/in/prathamskk/](https://www.linkedin.com/in/prathamskk/)

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
