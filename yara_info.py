"""
Yara Alshehri - AI Specialist Portfolio Information
"""

yara_info = {
    "name": "Yara Alshehri",
    "title": "AI Specialist",
    "location": "Saudi Arabia",
    "email": "yara@example.com",
    "bio": "AI Specialist with passion for transforming complex data into actionable insights and building intelligent systems that solve real-world problems.",
    
    "skills": {
        "ai_ml": ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Statistics", "Deep Learning"],
        "data_science": ["Data Analysis", "Pandas", "NumPy", "Power BI", "SQL", "Data Visualization"],
        "computer_vision": ["OpenCV", "Image Processing", "Object Detection", "CNN", "YOLO", "NLP"],
        "development": ["Python", "JavaScript", "React", "Next.js", "Flask", "FastAPI"],
        "tools": ["Git", "Docker", "Jupyter", "Scikit-learn", "Keras", "AWS"],
        "analytics": ["Statistical Analysis", "A/B Testing", "Predictive Models", "Time Series", "NLP", "Optimization"],
    },
    
    "experience": {
        "years": 5,
        "projects": 20,
        "certificates": 15,
        "clients": 10,
    },
    
    "projects": [
        {
            "title": "AI-Powered Chatbot",
            "description": "A conversational AI chatbot built with NLP and machine learning for customer support automation.",
            "tech": ["Python", "NLP", "TensorFlow", "FastAPI", "React"],
        },
        {
            "title": "Predictive Analytics Dashboard",
            "description": "Real-time analytics dashboard for predicting customer behavior and market trends using ML models.",
            "tech": ["Python", "Pandas", "Power BI", "Machine Learning", "SQL"],
        },
        {
            "title": "Computer Vision System",
            "description": "Advanced image recognition system using deep learning for automated quality control in manufacturing.",
            "tech": ["OpenCV", "CNN", "Deep Learning", "PyTorch", "Python"],
        },
        {
            "title": "Data Pipeline Automation",
            "description": "Scalable data pipeline for ETL operations with automated data validation and quality checks.",
            "tech": ["Python", "Docker", "Airflow", "SQL", "Pandas"],
        },
        {
            "title": "Time Series Forecasting",
            "description": "Time series analysis and forecasting model for stock market prediction and trend analysis.",
            "tech": ["Python", "Statistics", "Scikit-learn", "Prophet", "Matplotlib"],
        },
        {
            "title": "Natural Language Processing",
            "description": "Sentiment analysis and text classification system for social media monitoring and analysis.",
            "tech": ["NLP", "NLTK", "Scikit-learn", "Deep Learning", "Python"],
        },
    ],
    
    "social_links": {
        "github": "https://github.com",
        "linkedin": "https://linkedin.com",
        "email": "mailto:yara@example.com",
    }
}

# Portfolio Metadata
portfolio_meta = {
    "title": "Yara Alshehri | AI Specialist",
    "description": "AI Specialist - Building Intelligent Solutions with Machine Learning, Data Science, and Computer Vision",
    "keywords": ["AI", "Machine Learning", "Data Science", "Computer Vision", "NLP", "Yara Alshehri"],
    "author": "Yara Alshehri",
    "year": 2026,
}

if __name__ == "__main__":
    print(f"Welcome to {yara_info['name']}'s Portfolio")
    print(f"Title: {yara_info['title']}")
    print(f"Experience: {yara_info['experience']['years']}+ years")
    print(f"Projects: {len(yara_info['projects'])}")
