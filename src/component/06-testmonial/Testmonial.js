import React from 'react'
import './testmonial.css'
import img1 from '../../images/testimonial-1.jpg'
import img2 from '../../images/testimonial-4.jpg'
import img3 from '../../images/testimonial-3.jpg'

const Testmonial = () => {
  return (
    <div className='testmonial'>
       <div className='container'>
            <div className='clients'>
                <span></span>
                <h4>Testimonial</h4>
                <span></span>
            </div>
            <div className='testmonial-title' >
                <h1>Our Clients Say!!!</h1>
            </div>

            <div className='row'>
               <div className='col-lg-4 col-sm-12'>
                  <div className='testmonial-card'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                    </svg>
                    <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem 
                    </p>
                    <div style={{display:"flex",gap:"20px",margin:"20px 0"}}>
                        <img src={img1} alt='img1'></img>
                        <div className='details'>
                            <h3>cristina</h3>
                            <span>Doctor</span>
                        </div>
                    </div>
                </div>
               </div>
               <div className='col-lg-4 col-sm-12'>
                  <div className='testmonial-card'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                    </svg>
                    <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem 
                    </p>
                    <div style={{display:"flex",gap:"20px",margin:"20px 0"}}>
                        <img src={img3} alt='img1'></img>
                        <div className='details'>
                            <h3>Marco</h3>
                            <span>Engineer</span>
                        </div>
                    </div>
                </div>
               </div>
               <div className='col-lg-4 col-sm-12'>
                  <div className='testmonial-card'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                    </svg>
                    <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem 
                    </p>
                    <div style={{display:"flex",gap:"20px",margin:"20px 0"}}>
                        <img src={img2} alt='img1'></img>
                        <div className='details'>
                            <h3>Gorgina</h3>
                            <span>Model</span>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Testmonial