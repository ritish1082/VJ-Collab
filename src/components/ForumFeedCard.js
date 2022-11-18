import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ForumFeedCardDiv = (props) => {
    return (
        <div>
            <div className='forum-card m-5 border shadow rounded p-2 mx-auto' style={{ width: "75vw" }}>
                <div className='header h-25 ms-2'>
                    <p className='m-0'><b>{props.name}</b></p>
                    <p>@{props.username}</p>
                </div>
                <hr />
                <div className='body mt-3 ms-3'>
                    <h4>{props.title}</h4>
                </div>

                <div className='button p-3  '>
                    <Link to="/commentspage">
                        <Button variant="success">View</Button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default ForumFeedCardDiv;