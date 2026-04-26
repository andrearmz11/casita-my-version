import React from 'react';
import Sidebar from './Sidebar';
import TabContent from './TabContent';

const ClientLayout = () => {
    return (
        <div>
            <Sidebar />
            <TabContent />
        </div>
    );
};

export default ClientLayout;