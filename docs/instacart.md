!!! abstract "About Me"
    Pratham Kamble

    *London, UK*

    Tech + Data Science = Me.

    * **I drive meaningful outcomes** with every project I touch.

    * **I simplify the complex** so everyone can grasp it.

    * I create clear, beautiful data visuals.

---

## Instacart Reorder Classification

Objective: 

Predicts whether a previously purchased product will be reordered in a 
customer's next order

---

**1. Huge Dataset: 1.3 million orders, 50,000 products, 3.4 million past total orders**  

![Dataset Overview](instacart_dataset_description.png)

---

---

**2. Bananas are the most reordered product—everyone loves bananas!**  

![Banana Popularity Chart](banana_pop_chart.png)

---

**3. Shopping peaks on weekends and between 10 AM–4 PM**  

![Order Timing Chart](order_timing_chart.png)

---

**4. Fresh fruits, vegetables, and dairy are the most frequently reordered aisles**  

![Top Aisles Chart](top_aisles_chart.png)

---

**5. Items added to the cart first are much more likely to be reordered**  

![Add-to-Cart Order Chart](add_cart_order_chart.png)

---

**6. XGBoost model predicts reorders with 80% recall—very few missed repeat buys**  

![XGBoost Performance](instacart_model_xgboost.png)

---

**7. Feature engineering (user habits + product loyalty) boosted accuracy to 71%**  

![Feature Engineering Impact](instacart_optimized_xgboost.png)

---

**8. Neural network was slower and didn't beat XGBoost for this task**  

![Model Comparison](instacart_nn_xgboost.png)

---

**9. SHAP analysis: Product name, reorder history, and cart position are most important**  

![SHAP Feature Importance](instacart_shap.png)

---

**10. Model struggles most with "sometimes" products—not always or never reordered**  

![Error Analysis](instacart_error_analysis.jpg)

---

**Future Improvement**

* While XGBoost performed well, hyperparameter tuning could further improve performance. Techniques such as Bayesian optimization or grid search could refine learning rates, tree depth, and regularization parameters to enhance generalization.
* Threshold optimization may also help reduce misclassifications in borderline cases.
* Additionally, segmentation-based modeling, where separate models are trained for high-reorder and low-reorder products, could better capture different shopping behaviors.


??? Note "View Full Report Here"
    ![instacart report](../instacart.pdf){ type=application/pdf style="min-height:75vh;width:100%" }



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
