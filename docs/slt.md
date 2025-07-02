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

[⬅️ Back to All Projects](index.md)