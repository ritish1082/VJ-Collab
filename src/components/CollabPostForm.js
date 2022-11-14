import React from 'react'
import {useState, useEffect} from 'react';
import {
    Form,
    Row,
    Col,
    Button,
    InputGroup
} from "react-bootstrap";
function CollabPostForm() {
    let [skillSet, setSkillSet] = useState([]);
    let color = ["red", "green", "brown"];

    const addSkill = ()=>{
        let skill = document.getElementById("getReqSkill").value;
        skillSet = [...skillSet, skill];
        setSkillSet(skillSet);
    }

    const removeSkill = (skill)=>{
        let temp = [...skillSet];
        let index = temp.indexOf(skill);
        temp.splice(index, 1);
        setSkillSet(temp);
    }

    useEffect(()=>{
        document.getElementById("getReqSkill").value="";
    }, [skillSet])
    
    const addSkillOnEnter = ()=>{
        let input = document.getElementById("getReqSkill");
        input.addEventListener("keypress", function(event){
            if(event.key==="Enter"){
                event.preventDefault();
                if(input.value!==""){
                    document.getElementById("addSkill").click();
                }
            }
        })
    }

  return (
    <div>
    <Form>
        <Form.Group className='mb-3'>
            <Form.Label><b>Contest Name:</b></Form.Label>
            <Form.Control type="text" placeholder="Enter Contest Name" />
        </Form.Group>
        <Row>
            <Col>
                <Form.Group className='mb-3'>
                    <Form.Label><b>End Date:</b></Form.Label>
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
            <Form.Label><b>Skill Set Required:</b></Form.Label>
            <InputGroup className='mb-3'>
                <Form.Control type="text" placeholder='Enter a Skill' id="getReqSkill" onClick={addSkillOnEnter} />
                <Button id="addSkill" variant='success' onClick={addSkill}>Add</Button>
            </InputGroup>
                
            {skillSet.length !== 0 ? 
                <div className='displayReqSkills border p-2'>
                    <b>Selected Skills:</b>
                    <br></br>
                    <hr></hr>
                    {skillSet.map((skill, key)=>(
                        <p className='border p-2' key={key} style={{backgroundColor: color[key%3], color: "white", display: "inline-block"}}>
                            <span role="button" onClick={()=>removeSkill(skill)}> x </span>
                            {skill}
                        </p>    
                    ))}
                </div> 
                : <p></p>
            }
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label><b>Candidates Required:</b></Form.Label>
            <Form.Control type="number" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} />
        </Form.Group>     
        <Form.Group className='mb-3'>
            <Form.Label><b>Description:</b></Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>   
    </Form>
</div>
  )
}

export default CollabPostForm