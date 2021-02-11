import React from 'react';

import IGStory from './IGStory';

import '../../Styles/Instagram.scss';

const IGStoryBanner = () => {
    return (
        <div className="story-banner-container">
            <IGStory 
                image="https://images.sk-static.com/images/media/profile_images/artists/4363463/huge_avatar" 
                user="theweeknd"
            />
            <IGStory 
                image="https://yt3.ggpht.com/ytc/AAUvwniB5VOGDN1lN_uSFg4uApLlEGDG762KQIa477pP8A=s900-c-k-c0x00ffffff-no-rj" 
                user="ksi"
            />
            <IGStory 
                image="https://media-exp1.licdn.com/dms/image/C560BAQFkDzx_7dqq3A/company-logo_200_200/0?e=2159024400&v=beta&t=hhijOW5xRRl6lYmQcJ-XYhyYMkwJnjdTYu_etZcu2Lk" 
                user="spotify"
            />
            <IGStory 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukpaKIh2uFB0_PmbOm8jEq_ee9PTtmOLgjQ&usqp=CAU" 
                user="joesantagato"
            />
            <IGStory 
                image="https://mir-s3-cdn-cf.behance.net/projects/404/05cb5676639865.Y3JvcCw5OTksNzgyLDAsMTE4.jpg" 
                user="fulaleo"
            />
            <IGStory 
                image="https://pbs.twimg.com/media/Ej2IHH4VoAApZ7N.jpg" 
                user="somehoodlum"
            />
            <IGStory 
                image="https://i.pinimg.com/originals/ae/8f/89/ae8f895f9c3f7da37b1f2571b08342bc.jpg" 
                user="arianagrande"
            />
            <IGStory 
                image="https://images.ctfassets.net/avx85g85supt/1Jz246z7075wtatdZgQp4G/175449b0693bf1b8d3a6c5d147e1733e/The_Basement_Yard.jpg?f=center&fit=fill" 
                user="thebaseme..."
            />
            <IGStory 
                image="https://i.pinimg.com/originals/6d/c9/bc/6dc9bcfffbe232ac39782374d06afb17.jpg" 
                user="cmpunk"
            />
            <IGStory 
                image="https://www2.pictures.zimbio.com/gi/Times+Square+New+Year+Eve+2020+Celebration+MnCWk54pT5dx.jpg" 
                user="postmalone"
            />
        </div>
    )
}

export default IGStoryBanner;