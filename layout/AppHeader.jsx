import React from 'react';

const AppHeader = ({ role, selectedClient }) => {
    return (
        <header>
            <h1>{role}</h1>
            <h2>{selectedClient}</h2>
            <nav>
                <button>Home</button>
                <button>Clients</button>
                <button>Settings</button>
            </nav>
        </header>
    );
};

export default AppHeader;