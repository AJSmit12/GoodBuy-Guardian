// SmartTips.js
import React from 'react';
import PropTypes from 'prop-types';

const SmartTips = ({tips}) => {
    return (
        <div className="smart-tips">
            {tips.map((tip, index) => (
                <div key={index} className="tooltip">
                    <span className="tooltip-text">{tip}</span>
                </div>
            ))}
        </div>
    );
};

SmartTips.propTypes = {
    tips: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SmartTips;
