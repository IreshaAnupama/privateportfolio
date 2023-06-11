import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import pythonimg from "../img/Python.png"
import reactimg from "../img/react-js.png"
import javaimg from "../img/java.png"
import { useState,useEffect } from 'react'
import './Component.css';

function Home() {

  const [loopNum,setLoopNum]= useState(0);
  const [isDeleting,setIsDeleting]= useState(false);
  const toRotate=["web Developer","Web designer"]
  const [text,setText] = useState('');
  const [delta,setDelta]= useState(300-Math.random()*100);
  const period =2000;

  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick();
    },delta)

    return () => {clearInterval(ticker)};
  }, [text])
  
  const tick =()=>{
    let i= loopNum % toRotate.length;
    let fullText=toRotate[i];
    let updatedText= isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }
      else if(isDeleting && updatedText ==''){
        setIsDeleting(false);
        setLoopNum(loopNum +1);
        setDelta(500);
      }
    
  }
  
  return (
    <section className="banner" id="home">
        <Container>
            <Row className='align-item-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline"> Welcome to my portfolio</span>
                    <h1>{`Hi I'm webdecoded`}<span className='wrap'> web developer</span></h1>
                    <p>I am a final yer studen of faculty of science university of peradeniya</p>
                    
                </Col>
                <Col xs={12} md={6} xl={5} >
                <img src={reactimg} alt="React Img" style={{width: "40%", height: "60%"}}/>
                <img src={javaimg} alt="java Img" style={{width: "40%", height: "60%"}}/>
                <img src={pythonimg} alt="java Img" style={{width: "40%", height: "60%"}}/>
                </Col>
                
            </Row>
        </Container>

    </section>
  )
}

export default Home