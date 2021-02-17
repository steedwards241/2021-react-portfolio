import React, { useState } from 'react';

import '../../Styles/Netflix.scss';

const NFPanel = (props) => {

    const [header, setHeader] = useState("");
    const [para, setPara] = useState("");
    const [footer, setFooter] = useState("");

    const mouseEnterHandler = () => {
        setHeader(props.header);
        setPara(props.para);
        setFooter(props.footer);
    };

    const mouseLeaveHandler = () => {
        setHeader("");
        setPara("");
        setFooter("");
    }

    return (
        <div className="panel-container">
            <div className="panel-container-image" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <img src={props.image}></img>
            </div>
            <div className="panel-container-content">
                <h1>{header}</h1>
                <p>{para}</p>
                <p>{footer}</p>
            </div>
        </div>
    )
}

export default NFPanel;