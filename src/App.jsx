import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Program from './components/programs/Program'
import Title from './components/title/Title'
import Abt from './components/abt/Abt'
import Photo from './components/photos/Photo'
import Test from './components/testimonials/Test'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Main/>
      <div className='container'>
        <Title subTitle="Our programs" Title="what we offer"/>
      <Program/>
      <Abt/>
      <Title subTitle="Gallery" Title="campus photos"/>
<Photo/>
<Title subTitle="TESTIMONIALS" Title="what student says"/>

<Test/>
<Title subTitle="CONTACT US" Title="Get in Touch"/>
<Contact/>
<Footer/>
      </div>
   
    </>
  )
}

export default App