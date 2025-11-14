import React from 'react';
import './LandingPage.css';

function LandingPage({ onGetStartedClick }) {
    return (
        <div className="landing-container">
            <div 
                className="background-image"
                style={{ 
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/06/28/09/31/garden-2450400_1280.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
            >
                <div className="content-overlay">
                    <div className="content">
                        <h1>天堂幼儿园</h1>
                        <p>我们致力于为您提供最优质的室内植物，让绿色点缀您的生活空间。我们的植物经过精心挑选，确保每一株都能为您的家居或办公室带来生机与活力。</p>
                        <button className="get-started-btn" onClick={onGetStartedClick}>
                            开始购物
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;