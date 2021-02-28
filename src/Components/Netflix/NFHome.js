import React from 'react';

import NFPanel from './NFPanel';

import '../../Styles/Netflix.scss'

const NFHome = () => {
    return (
        <div className="netflix-pages-container">
            <div className="netflix-pages-header">

            </div>
            <div className="netflix-pages-content">
                <h1 className="netflix-pages-panel-header">My List</h1>
                <div className="netflix-pages-panel-container">
                    <NFPanel 
                        match="96" seasons="9" description1="Drama" description2="Exciting" description3="Thriller"
                        image="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/07/09/suits-season-8.jpeg"
                    />
                    <NFPanel 
                        match="92" seasons="6" description1="Thriller" description2="Drama" description3="Suspense"
                        image="https://www.whats-on-netflix.com/wp-content/uploads/2016/01/the-blacklist-season-3-netflix-1024x576.jpg"
                    />
                    <NFPanel 
                        match="86" seasons="4" description1="Superhero" description2="Sci-Fi" description3="Exciting"
                        image="https://www.netflix-nederland.nl/wp-content/uploads/2019/09/The-Flash-Netflix.jpg"
                    />
                    <NFPanel 
                        match="82" seasons="2" description1="Anime" description2="Dark" description3="Exciting"
                        image="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV3iGkSPlnxI6R1295epEcIHPeFB9ZgzK8KOeUk8RH11m1ZVUC0xIPJ4TCykNCMKvivlF7yUFSTyK5qoKlp8IyCMv5YP.jpg?r=79b"
                    />
                    <NFPanel 
                        match="90" seasons="4" description1="Intimate" description2="Suspensful" description3="Drama"
                        image="https://i.ytimg.com/vi/QdG2mrnodcw/maxresdefault.jpg"
                    />
                </div>
                <h1 className="netflix-pages-panel-header">Continue Watching</h1>
                <div className="netflix-pages-panel-container">
                    <NFPanel 
                        match="98" seasons="4" description1="Thriller" description2="Drama" description3="Dystopian"
                        image="https://hashtaglegend.com/storage/app/media/2019%20Articles/May/Ntflix%20black%20mirror/cropped-images/og-0-0-0-0-1558510331.jpeg"
                    />
                    <NFPanel 
                        match="90" seasons="4" description1="Anime" description2="Magical" description3="Striking"
                        image="https://www.streamwijzer.be/wp-content/uploads/2020/12/Legend-Korra-Netflix-serie-Avatar.jpg.webp"
                    />
                    <NFPanel 
                        match="88" seasons="6" description1="Goofy" description2="Comedy" description3="Ensemble"
                        image="https://news.otakukart.com/wp-content/uploads/2019/02/1_gOeV0oK1YGxszHkuK4cHdA.jpeg"
                    />
                    <NFPanel 
                        match="97" seasons="5" description1="Dark" description2="Suspensful" description3="Action"
                        image="https://www.netflix-nederland.nl/wp-content/uploads/2018/12/prison-break-456-1-810x456.jpg"
                    />
                    <NFPanel 
                        match="95" seasons="8" description1="Suspensful" description2="Mystery" description3="Thriller"
                        image="https://www.streamwijzer.nl/wp-content/uploads/2019/01/Homeland-seizoen-7-Netflix-1200x675.jpg"
                    />
                </div>
                <h1 className="netflix-pages-panel-header">Trending Now</h1>
                <div className="netflix-pages-panel-container">
                    <NFPanel 
                        match="84" seasons="1" description1="Witty" description2="Exciting" description3="Mystery"
                        image="https://filmdaily.co/wp-content/uploads/2021/01/lupin-lede.jpg"
                    />
                    <NFPanel 
                        match="86" seasons="1" description1="Riveting" description2="Investigation" description3="True Crime"
                        image="https://www.heavenofhorror.com/wp-content/uploads/2020/12/the-ripper-netflix-documentary.jpg"
                    />
                    <NFPanel 
                        match="97" seasons="5" description1="Dark" description2="Suspensful" description3="Thriller"
                        image="https://cnet1.cbsistatic.com/img/X0ca14TIP9jQOQkayXvRlDZQ4jY=/1200x675/2014/06/17/60301c27-9d37-485d-91b9-cc6025e89760/breaking-bad-header.jpg"
                    />
                    <NFPanel 
                        match="94" seasons="5" description1="Slick" description2="Suspensful" description3="Exciting"
                        image="https://www.whats-on-netflix.com/wp-content/uploads/2016/09/designated-survivor-netflix-streaming.jpg"
                    />
                    <NFPanel 
                        match="92" seasons="3" description1="Riveting" description2="Provoctive" description3="Investigative"
                        image="https://financerewind.com/wp-content/uploads/2020/10/Netflix-Avery.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default NFHome
