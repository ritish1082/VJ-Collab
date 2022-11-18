import React from 'react';
import ForumFeedCardDiv from '../components/ForumFeedCard'
import reactimage from '../images/reactimage.webp';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import ForumPostCard from '../components/ForumPostCard';

const Forum = (props) => {
    let data={
        name: "Maddi Uday Krishna",
        username: "20071A6627",
        img: reactimage,
        title: "How does react work?How do i conditionally render react components?",
        description: "Description about your doubts.",
        required: 3,
        skills: ['HTML', 'ReactJS', 'NodeJS']
    }
    return (
        <div className='forumee'>
            
            <div className='text-center' style={{marginLeft: "15vw"}}>
                {/* <h1 className='d-inline-block'>Welcome to Discussion Portal.</h1>
                <Button className='float-end mt-2' style={{marginRight: "15px"}} onClick={<ForumPostCard/>}> + Ask a question</Button> */}
                <ForumPostCard/>
            </div>

            <Row  xs={1} md={1} className="g-4 m-3">
                <Col>
                    <ForumFeedCardDiv {...data}/>
                </Col>
                <Col>
                    <ForumFeedCardDiv {...data}/>
                </Col>
                <Col>
                    <ForumFeedCardDiv {...data}/>
                </Col>
                <Col>
                    <ForumFeedCardDiv {...data}/>
                </Col>
            </Row>
        </div>
    );
}

export default Forum;

