import React from 'react';

const PortalGrid = () => {
    return (
        <div className="portal-grid">
            {/* Example of client cards */}
            <div className="client-card">
                <h3>Client Name</h3>
                <p>Client Details</p>
            </div>
            <div className="client-card">
                <h3>Client Name</h3>
                <p>Client Details</p>
            </div>
            {/* Additional client cards can be added here */}
        </div>
    );
};

export default PortalGrid;
