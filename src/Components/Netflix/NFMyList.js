import React from 'react';

import NFPanel from './NFPanel';

const NFMyList = () => {
    return (
        <div className="netflix-pages-container">
            <div className="netflix-pages-header">

            </div>
            <div className="netflix-pages-content">
                <h1>My List</h1>
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

export default NFMyList;