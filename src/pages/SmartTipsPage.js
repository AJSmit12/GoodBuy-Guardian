import React from 'react';
import './SmartTipsPage.css';

const SmartTipsPage = () => {
    const tips = [
        {
            title: 'Gaming Currency Spending',
            content: 'Track your in-game currency to avoid overspending. Set a monthly limit for purchases and stick to it.'
        },
        {
            title: 'Pack Value Analysis',
            content: 'Compare the value of item packs before purchasing. Always ensure that you get the best items for your money.'
        },
        {
            title: 'Budget Awareness',
            content: 'Create a budget for your gaming purchases. Prioritize your spending based on your gaming habits and frequency.'
        }
    ];

    return (
        <div className="smart-tips-page">
            <h1>Smart Tips</h1>
            <div className="tips-container">
                {tips.map((tip, index) => (
                    <div className="tip-card" key={index}>
                        <h2>{tip.title}</h2>
                        <button className="tip-button" onClick={() => alert(tip.content)}>See Tip</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SmartTipsPage;