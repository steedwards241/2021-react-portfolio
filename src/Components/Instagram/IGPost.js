import React, { Component } from 'react';

import '../../Styles/Instagram.scss';

class IGPost extends Component {

    constructor() {
        super();
        this.state = {
            bookmarkImage: ["https://pbs.twimg.com/media/EpcA1_bXYAA4E-V?format=webp&name=tiny", "https://pbs.twimg.com/media/EpcA1_cXIAIG6qG?format=webp&name=tiny"],
            clickNumber: 0
        }   
    }
    
    bookmarkClickHandler = () => {
        if(this.state.clickNumber === 0) {
            this.setState({clickNumber: 1})
        }
        else if(this.state.clickNumber === 1) {
            this.setState({clickNumber: 0})
        }
    }

    render() {
        return (
            <div className="IGPost-wrapper">
                <div className="IGPost-container">
                    <div className="IGPost-header">
                        <img src={this.props.userImage}></img>
                        <div className="IGPost-header-text">
                            <h4>{this.props.user}</h4>
                            <h3>...</h3>
                        </div>
                    </div>
                    <div className="IGPost-image">
                        <img src={this.props.image}></img>
                    </div>
                    <div className="IGPost-icons">
                        <img src="https://pbs.twimg.com/media/EoKfVVXW4AAufJg?format=webp&name=tiny"/>
                        <img src="https://pbs.twimg.com/media/EpcA1_gW8AYpgNj?format=webp&name=tiny"/>
                        <div className="IGPost-icons-stretched">
                            <img src="https://pbs.twimg.com/media/EoKfVUeUYAEKXsz?format=webp&name=tiny"/>
                            <img src={this.state.bookmarkImage[this.state.clickNumber]} onClick={this.bookmarkClickHandler}/>
                        </div>
                    </div>
                    <div className="IGPost-contentBox">
                        <h5><b>{this.props.likes} likes</b></h5>
                        <div className="IGPost-userPost">
                            <h5><b>{this.props.user} &nbsp;</b>{this.props.caption}</h5>
                        </div>
                        <h5>View all {this.props.commentsNumber} comments</h5>
                        <div className="IGPost-comment">
                            <h5><b>{this.props.commentUser} &nbsp;</b>{this.props.comment}</h5>
                        </div>
                        <h5 id="timePost">{this.props.time} AGO</h5>
                        <div className="IGPost-addComment">
                            <h5>Add a comment...</h5>
                            <h5 id="post">Post</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IGPost