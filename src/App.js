import React from 'react'
import Nav from './component/Nav'
import Home from './component/Home';
import BookingForm from './component/BookingForm';
import About from './component/About';
import Numbers from './component/Counders';
import Services from './component/Services';
import Footer from './component/Footer';
import ContactUs from './component/Contact';
import BlogPage from './component/Blog';



const App = () => {
  return (
    <div>
  <Nav />
 <Home /> 
 <BookingForm />
 <About />
 <Numbers />
 <Services />
 <BlogPage/>
 <ContactUs />
 <Footer />

    </div>
  )
}

export default App;