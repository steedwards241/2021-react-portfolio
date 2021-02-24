import React from 'react';

import '../../Styles/Netflix.scss';

const NFPanel = (props) => {
    return (
        <div className="netflix-panel-container">
            <div className="netflix-small-panel">
                <img src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/07/09/suits-season-8.jpeg" alt=""></img>
            </div>
            <div className="netflix-large-panel">
                <img className="netflix-large-panel-image" src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/07/09/suits-season-8.jpeg" alt=""></img>
                <div className="netflix-panel-buttons">
                    <div className="netflix-panel-buttons__left">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/482/482059.svg?token=exp=1614163625~hmac=0f1209c4332ff136f3b7b0f6107f8f61" alt=""></img>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1782/1782698.svg?token=exp=1614163707~hmac=d51a81661ec9d0ea0c9cd95cf910ed68" alt=""></img>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1782/1782725.svg?token=exp=1614163758~hmac=4c1972a41db8183c5d3f663533da4718" alt=""></img>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1782/1782715.svg?token=exp=1614163758~hmac=057d78b631f499fa4e98b07aec3fec41" alt=""></img>
                    </div>
                    <div  className="netflix-panel-buttons__right">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/1782/1782753.svg?token=exp=1614163841~hmac=b1be12ab55a212e534a06b7868a883a4" alt=""></img>
                    </div>
                </div>
                <div className="netflix-panel-content">
                    <div className="netflix-panel-content__top">
                        <p id="match">97% match</p>
                        <img src="http://vector.gissen.nl/kijkwijzer-16.png" alt=""></img>
                        <p>9 seasons</p>
                    </div>
                    <div className="netflix-panel-content__bottom">
                        <p>Drama</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1024px-Location_dot_grey.svg.png" alt=""></img>
                        <p>Exiting</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1024px-Location_dot_grey.svg.png" alt=""></img>
                        <p>Thriller</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFPanel;