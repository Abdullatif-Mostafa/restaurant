import React from 'react'
import './Popular.css'
import img1 from '../../images/menu-1.jpg'
import img2 from '../../images/menu-2.jpg'
import img3 from '../../images/menu-3.jpg'
import img4 from '../../images/menu-4.jpg'
import img5 from '../../images/menu-5.jpg'
import img6 from '../../images/menu-6.jpg'
const PopularFoot = () => {
  return (
    <div className='PopularFood'>
        <div className='PopularFoot-head'>
            <span></span>
            <p>food menu</p>
            <span></span>
        </div>
        <div className='PopularFood-title'>
            <h1>Most Popular Items</h1>
        </div>
        <div className='items'>
          <div style={{display:"flex",justifyContent:"space-between"}}>
              <div className='item-details'>
                <i className='material-icons'>coffee</i>
                <div className=''>
                    <span>Popular</span>
                    <p>Breakfast</p>
                </div>
            </div>

            <div className='item-details'> 
                <i className='material-icons'>lunch_dining</i>
                <div className=''>
                    <span>Launch</span>
                    <p>Launch</p>
                </div>
            </div>

          </div>
            <div className='item-details'>
                <i className='material-icons'>restaurant</i> 
                <div className=''>
                    <span>Lovely</span>
                    <p>Dinner</p>
                </div>
            </div>

        </div>
  
        <div className='mainContent'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='mainContent-details'>
                                <img src={img1}></img>
                                <div>
                                    <div className='rtx'>
                                        <h4>Chicken Burger</h4>
                                        <span>$120</span>
                                    </div>
                                    <hr></hr>
                                    <p>
                                    Ipsum ipsum clita erat amet dolor justo diam
                                    </p>
                                </div>
                            </div>
                            <div className='mainContent-details'>
                                <img src={img2}></img>
                                <div>
                                    <div className='rtx'>
                                        <h4>Chicken Burger</h4>
                                        <span>$120</span>
                                    </div>
                                    <hr></hr>
                                    <p>
                                    Ipsum ipsum clita erat amet dolor justo diam
                                    </p>
                                </div>
                            </div>
                            <div className='mainContent-details'>
                                <img src={img3}></img>
                                <div>
                                    <div className='rtx'>
                                        <h4>Chicken Burger</h4>
                                        <span>$120</span>
                                    </div>
                                    <hr></hr>
                                    <p>
                                    Ipsum ipsum clita erat amet dolor justo diam
                                    </p>
                                </div>
                            </div>
                            <div className='mainContent-details'>
                                <img src={img4}></img>
                                <div>
                                    <div className='rtx'>
                                        <h4>Chicken Burger</h4>
                                        <span>$120</span>
                                    </div>
                                    <hr></hr>
                                    <p>
                                    Ipsum ipsum clita erat amet dolor justo diam
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                        <div className='col-lg-6 col-md-12'>
                            <div className='mainContent-details'>
                                <img src={img1}></img>
                                <div>
                                    <div className='rtx'>
                                        <h4>Chicken Burger</h4>
                                        <span>$120</span>
                                    </div>
                                    <hr></hr>
                                    <p>
                                    Ipsum ipsum clita erat amet dolor justo diam
                                    </p>
                                </div>
                            </div>
                            <div className='mainContent-details'>
                                <img src={img6}></img>
                                <div>
                                    <div className='rtx'>
                                        <h4>Chicken Burger</h4>
                                        <span>$120</span>
                                    </div>
                                    <hr></hr>
                                    <p>
                                    Ipsum ipsum clita erat amet dolor justo diam
                                    </p>
                                </div>
                            </div>
                            <div className='mainContent-details'>
                                <img src={img5}></img>
                                <div>
                                    <div className='rtx'>
                                        <h4>Chicken Burger</h4>
                                        <span>$120</span>
                                    </div>
                                    <hr></hr>
                                    <p>
                                    Ipsum ipsum clita erat amet dolor justo diam
                                    </p>
                                </div>
                            </div>
                            <div className='mainContent-details'>
                                <img src={img4}></img>
                                <div>
                                    <div className='rtx'>
                                        <h4>Chicken Burger</h4>
                                        <span>$120</span>
                                    </div>
                                    <hr></hr>
                                    <p>
                                    Ipsum ipsum clita erat amet dolor justo diam
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
        </div>
    </div>
  )
}

export default PopularFoot