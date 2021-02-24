import React from 'react';

import NFPanel from './NFPanel';

const NFSeries = () => {
    return (
        <div className="netflix-pages-container">
            <div className="netflix-pages-header">

            </div>
            <div className="netflix-pages-content">
                <h1>Series</h1>
                <div className="netflix-pages-panel-container">
                    <NFPanel />
                    <NFPanel />
                    <NFPanel />
                    <NFPanel />
                    <NFPanel />
                </div>
                <div className="netflix-pages-panel-container">
                    <NFPanel />
                    <NFPanel />
                    <NFPanel />
                    <NFPanel />
                    <NFPanel />
                </div>
            </div>
        </div>
    )
}

export default NFSeries;