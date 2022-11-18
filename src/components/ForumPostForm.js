import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import DiscussionImageUpload from './ImageUpload';

const ForumPostForm = () => {
  let [skillSet, setSkillSet] = useState([]);
  let color = ["red", "green", "brown"];

  // const addSkill = ()=>{
  //     let skill = document.getElementById("getReqSkill").value;
  //     skillSet = [...skillSet, skill];
  //     setSkillSet(skillSet);
  // }

  // const removeSkill = (skill)=>{
  //     let temp = [...skillSet];
  //     let index = temp.indexOf(skill);
  //     temp.splice(index, 1);
  //     setSkillSet(temp);
  // }

    // useEffect(()=>{
    //     document.getElementById("getReqSkill").value="";
    // }, [skillSet])

    // const addSkillOnEnter = ()=>{
    //     let input = document.getElementById("getReqSkill");
    //     input.addEventListener("keypress", function(event){
    //         if(event.key==="Enter"){
    //             event.preventDefault();
    //             if(input.value!==""){
    //                 document.getElementById("addSkill").click();
    //             }
    //         }
    //     })
    // }

    return (
        <div>
            <Form>
                <DiscussionImageUpload />
                <br></br>
                <Form.Group className='mb-3'>
                    <Form.Label><b>Provide title for your query:</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter title for your query" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label><b>Date of uploud:</b></Form.Label>
                            <Form.Control type="date" />
                            <Form.Text>Deadline to accept requests</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label><b>Domain:</b></Form.Label>
                            <Form.Control type="text" placeholder='Enter Domain' />
                            <Form.Text>e.g: Web Development</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className='mb-3'>
                    <Form.Label><b>Description:</b></Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
}

export default ForumPostForm;
