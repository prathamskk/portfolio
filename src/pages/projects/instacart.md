---
layout: ../../components/MarkdownProject.astro
title: "Instacart Reorder Prediction"
image:
  url: "/projects/instacart/instacart_banner.png"
  alt: "Instacart project"
pubDate: "Feb 2025"
corners:
  - analytics
techStack:
  - XGBoost
  - EDA
  - Python
  - Data Visualization
  - Machine Learning
project_for:
  label: University College London
  icon: ri-line-chart-line
summary: "Leveraged XGBoost and customer purchase history to predict product reorder probability with 70% accuracy, analyzing 3 million orders and 50,000 products to help stores manage inventory better and improve the shopping experience."
---


Objective: 

Predicts whether a previously purchased product will be reordered in a 
customer's next order

---

**1. Huge Dataset: 1.3 million orders, 50,000 products, 3.4 million past total orders**  

![Dataset Overview](/projects/instacart/instacart_dataset_description.png)

---

---

**2. Bananas are the most reordered product—everyone loves bananas!**  

![Banana Popularity Chart](/projects/instacart/banana_pop_chart.png)

---

**3. Shopping peaks on weekends and between 10 AM–4 PM**  

![Order Timing Chart](/projects/instacart/order_timing_chart.png)

---

**4. Fresh fruits, vegetables, and dairy are the most frequently reordered aisles**  

![Top Aisles Chart](/projects/instacart/top_aisles_chart.png)

---

**5. Items added to the cart first are much more likely to be reordered**  

![Add-to-Cart Order Chart](/projects/instacart/add_cart_order_chart.png)

---

**6. XGBoost model predicts reorders with 80% recall—very few missed repeat buys**  

![XGBoost Performance](/projects/instacart/instacart_model_xgboost.png)

---

**7. Feature engineering (user habits + product loyalty) boosted accuracy to 71%**  

![Feature Engineering Impact](/projects/instacart/instacart_optimized_xgboost.png)

---

**8. Neural network was slower and didn't beat XGBoost for this task**  

![Model Comparison](/projects/instacart/instacart_nn_xgboost.png)

---

**9. SHAP analysis: Product name, reorder history, and cart position are most important**  

![SHAP Feature Importance](/projects/instacart/instacart_shap.png)

---

**10. Model struggles most with "sometimes" products—not always or never reordered**  

![Error Analysis](/projects/instacart/instacart_error_analysis.jpg)

---

**Future Improvement**

* While XGBoost performed well, hyperparameter tuning could further improve performance. Techniques such as Bayesian optimization or grid search could refine learning rates, tree depth, and regularization parameters to enhance generalization.
* Threshold optimization may also help reduce misclassifications in borderline cases.
* Additionally, segmentation-based modeling, where separate models are trained for high-reorder and low-reorder products, could better capture different shopping behaviors.


**View Full Report:** <a href="/projects/instacart/instacart.pdf" target="_blank" rel="noopener noreferrer">Open PDF in new tab</a>

<iframe src="/projects/instacart/instacart.pdf" width="100%" height="400" style="border: 1px solid #ddd; border-radius: 4px; margin-top: 1rem;" title="Instacart report PDF"></iframe>

