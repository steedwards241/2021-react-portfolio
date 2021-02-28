import React from 'react';

import NFPanel from './NFPanel';

const NFFilms = () => {
    return (
        <div className="netflix-pages-container">
            <div className="netflix-pages-header">

            </div>
            <div className="netflix-pages-content">
                <h1>Films</h1>
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

export default NFFilms;