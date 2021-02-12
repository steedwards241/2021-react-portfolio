import React from 'react';

import IGHeader from '../Components/Instagram/IGHeader';
import IGStoryBanner from '../Components/Instagram/IGStoryBanner';
import IGPost from '../Components/Instagram/IGPost';

import '../Styles/Instagram.scss';

const Instagram = () => {
    return (
        <div>
            <IGHeader />
            <IGStoryBanner />
            <IGPost 
                userImage="https://pbs.twimg.com/profile_images/552307347851210752/vrXDcTFC_400x400.jpeg"
                user="joerogan"
                image="https://pbs.twimg.com/media/ElDVrosWMAICifj.jpg"
                likes="347,736"
                caption="New podcast. Available now on @spotify"
                commentsNumber="5,604"
                commentUser="sidljf"
                comment="full episode on youtube?"
                time="14 HOURS AGO"
            />
            <IGPost 
                userImage="data:image/jpeg;base64,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"
                user="transfermarkt_official"
                image="https://i.redd.it/hamlkig0r8v51.jpg"
                likes="22,126"
                caption="Loaylty"
                commentsNumber="139"
                commentUser="laksdji"
                comment="My value?"
                time="25 MINUTES"
            />
            <IGPost 
                userImage="https://media-exp1.licdn.com/dms/image/C560BAQFkDzx_7dqq3A/company-logo_200_200/0/1519902995023?e=2159024400&v=beta&t=i5ZK3TSEVda9sbJ8o23SYYI11X7cUKPL6zW_TJhwLFw"
                user="spotify"
                image="https://i.pinimg.com/originals/da/c8/76/dac87665f500c7b47d948dbfbc7cee58.jpg"
                likes="23,798"
                caption="K.O.D."
                commentsNumber="105"
                commentUser="aksduih"
                comment="Cole!!"
                time="9 HOURS"
            />
        </div>
    )
}

export default Instagram;
