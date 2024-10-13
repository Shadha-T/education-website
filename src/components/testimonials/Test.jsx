import React, { useRef } from 'react'
import './test.css'
import pic1 from '../../assets/p1.webp'
import pic2 from '../../assets/p1.webp'
import pic3 from '../../assets/p1.webp'
import pic4 from '../../assets/p1.webp'


const Test = () => {

const slide = useRef()
let tx =0;
const slideForward = ()=>{
  if(tx > -50){
    tx -=25
  }
  slide.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
  if (tx < 0){
    tx +=25;
  }
  slide.current.style.transform = `translate(${tx}%)`
}

  return (
    <div className='test'>
        <p><i class="fa-solid fa-circle-arrow-right" onClick={slideForward}></i></p>
        <p><i class="fa-solid fa-circle-arrow-left" onClick={slideBackward}></i></p>
      <div className="slide">
        <ul ref={slide}>
          <li>
            <div className="sld">
              <div className="userinformation">
                <img src={pic1}/>
                <div>
                  <h3>MATHWE JOHN</h3>
                  <span>USA</span>
                </div>
              </div>
              <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum error necessitatibus aliquid quibusdam quisquam minima sint nam consectetur? Blanditiis exercitationem consequuntur animi explicabo iusto eum? Quos doloremque amet nam repellat.</p>
            </div>
          </li>

          <li>
            <div className="sld">
              <div className="userinformation">
                <img src={pic2}/>
                <div>
                  <h3>ROBERT GREEN</h3>
                  <span>SPAIN</span>
                </div>
              </div>
              <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum error necessitatibus aliquid quibusdam quisquam minima sint nam consectetur? Blanditiis exercitationem consequuntur animi explicabo iusto eum? Quos doloremque amet nam repellat.</p>
            </div>
          </li>

          <li>
            <div className="sld">
              <div className="userinformation">
                <img src={pic3}/>
                <div>
                  <h3>JONATH BUTLER</h3>
                  <span>GERMANY</span>
                </div>
              </div>
              <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum error necessitatibus aliquid quibusdam quisquam minima sint nam consectetur? Blanditiis exercitationem consequuntur animi explicabo iusto eum? Quos doloremque amet nam repellat.</p>
            </div>
          </li>

          <li>
            <div className="sld">
              <div className="userinformation">
                <img src={pic4}/>
                <div>
                  <h3>HARRY BLAKE</h3>
                  <span>GREECE</span>
                </div>
              </div>
              <p className='p1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum error necessitatibus aliquid quibusdam quisquam minima sint nam consectetur? Blanditiis exercitationem consequuntur animi explicabo iusto eum? Quos doloremque amet nam repellat.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Test
