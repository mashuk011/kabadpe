import React from 'react'
import '../style/Ratelist.css';
import "../style/MyAccount.css";
import { NavLink } from 'react-router-dom';

const Ratelistcomp = () => {
    // const [selectedValue, setSelectedValue] = useState('apple');
    // const [tableData, setTableData] = useState([]);

    // const fruitImages = {
    //   apple: './images/customImg/book.png',
    //   banana: './images/customImg/cash.png',
    //   orange: './images/customImg/beam.png',
    //   // Add more options and image sources as needed
    // };
  
    // const handleSelectChange = (event) => {
    //   const value = event.target.value;
    //   setSelectedValue(value);
    // };

  
    // const addStaticRow = () => {
    //     const staticRow = { name: '', age: '' }; // Replace with your static data
    //     setTableData([...tableData, staticRow]);
    //   };


  

    
    
    //   const handleDeleteData = (id) => {
    //     const updatedData = data.filter((item) => item.id !== id);
    //     setData(updatedData);
    //   };

  return (
    <>
       {/* <!-- Main header--> */}
       <header className="main-header header-style-one">

{/* <!--Start Header Top--> */}
<div className="header-top">
    <div className="auto-container">
        <div className="outer-box outer-box2">

            <div className="header-right header-left_btns-flex">
                <div className="phone-number-box1">
                    <a className="" href="#"> <i class="fa-solid fa-angles-right"></i> Climstripe Shift</a>
                </div>

                <div className="phone-number-box1">
                    <a className="active" href="index.html"> <i class="fa-solid fa-angles-right"></i> Kabadpe</a>
                </div>

                <div className="phone-number-box1">
                    <a href="#"> <i class="fa-solid fa-angles-right"></i> Green Saman Shop</a>
                </div>

                <div className="phone-number-box1">
                    <a href="#"> <i class="fa-solid fa-angles-right"></i> Climconnect</a>
                </div>


            </div>

            <div className="header-top__left header-top_right">
                <div className="header-contact-info-style1">
                    <ul>

                        <li>
                            <div className="icon">
                                {/* <img src="assets/images/customImg/game.png"> */}
                                <img src="./images/customImg/game.png" alt="" />
                                <img src="./images/customImg/app-store.png" alt="" />
                                {/* <img src="assets/images/customImg/app-store.png"> */}
                            </div>
                            <div className="text"> 
                                <p>Download App</p> 
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </div>
</div>
{/* <!--End Header Top--> */}

{/* <!--Start Header--> */}
<div className="header">
    <div className="auto-container">
        <div className="outer-box">

            <div className="header-left-nav-bx">

                {/* <!--Start Header Left--> */}
                <div className="header-left">
                    <div className="main-logo-box">
                        <a href="index.html">
                            {/* <img src="assets/images/resources/logo.png" alt="Awesome Logo" title=""> */}
                            <img src="./images/resources/logo.png" alt="" />
                        </a>
                    </div>
                </div>

                {/* <!--Start Header Middle--> */}
                        {/* <!--Mobile Navigation Toggler--> */}
                        
                {/* <!--End Header Middle--> */}

            </div>

            {/* <!--End Header Left--> */}

            {/* <!--Start Header Right--> */}
            <div className="header-right rateList">
                  {/* <!-- Main Menu --> */}
                  <nav className="main-menu style1 navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                        <ul className="navigation clearfix ">
                            <li className="dropdown "><NavLink to="/"><span>Home</span></NavLink></li>
                            <li className="dropdown servicemenu"><NavLink to="/service"><span>Services</span></NavLink>

                                <div className="service-dropdown-bx">
                                    <div className="serv-drpdwn-grid">
                                        <div className="s-drpdwn-bx">
                                            <h6>For Individuals</h6>
                                            <div className="s-drpdwn-lists">
                                               <p><a href="#" target="_blank">Scrap Collection</a></p>
                                               <p><a href="#" target="_blank">Zero Waste Society</a></p>
                                               <p><a href="#" target="_blank">Vehicle Scrapping</a></p>


                                            </div>
                                        </div>

                                        <div className="s-drpdwn-bx">
                                            <h6>For Businesses</h6>
                                            <div className="s-drpdwn-submenu-grid">
                                              
                                                <div className="s-dpdwn-sb-menu-bx">
                                                    <p><a href="#">Scrap Collection</a></p>
                                                    <p><a href="#">EPR services</a></p>
                                                    <p><a href="#">Dismantling</a></p>

                                                </div>
                                                <div className="s-dpdwn-sb-menu-bx">
                                                    <p><a href="#">Circular Economy</a></p>
                                                    <p><a href="#">
                                                        Zero Waste</a></p>
                                                    <p><a href="#">Paper Shredding
                                                    </a></p>

                                                </div>
                                                <div className="s-dpdwn-sb-menu-bx">
                                                    <p><a href="#">
                                                        CSR Services</a></p>
                                                    <p><a href="#">
                                                        Zero Waste Event</a></p>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="s-drpdwn-bx">
                                            <h6>For Governments</h6>
                                            <div className="s-drpdwn-lists">
                                               <p><a href="#" target="_blank">Material Recovery Facility</a></p>
                                               <p><a href="#" target="_blank">IEC</a></p>


                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                               
                            </li>
                            <li className="aboutdrpdwn"><NavLink to="/about"><span>About Us</span></NavLink>
                             <div className="about-drpdwn-bx">
                                    <p><a href="#"> About us</a></p>
                                    <p><a href="#">Franchise</a></p>
                                    <p><a href="#">Contact now</a></p>
                                </div></li>
                            <li><NavLink to="/wastegept"><span>Wastegpt</span></NavLink></li>
                            <li><NavLink to="/ratelist"><span>Rate list</span></NavLink></li>
                            <li><NavLink to="/kabadshop"><span>Kabad Shop</span></NavLink></li>
                            <li><NavLink to="/account"><span>My Account</span></NavLink></li>

                            <li><NavLink to="javascript:void(0);" data-toggle="modal" data-target="#exampleModal"><span>Login</span></NavLink></li>
                        </ul>
                        <div className="menuBtn-togg">
                           <div className="spanline"></div>
                           <div className="spanline"></div>
                           <div className="spanline"></div>

                        </div>
                    </div>
                </nav>




                {/* <!-- Main Menu End--> */}
                
                {/* <!-- <div className="phone-number-box1">
                    <button>Rate list</button>
                </div>

                <div className="phone-number-box1">
                    <button>Kabad Shop</button>
                </div>
                <div className="serach-button-style1">
                    <button>Login</button>
                    
                </div> --> */}

            </div>
            {/* <!--End Header Right--> */}

        </div>
    </div>
</div>
{/* <!--End header--> */}

{/* <!--Sticky Header--> */}
<div className="sticky-header">
    <div className="container">
        <div className="clearfix">
            {/* <!--Logo--> */}
            <div className="logo float-left">
                <a href="index.html" className="img-responsive">
                    {/* <img src="assets/images/resources/sticky-logo.png" alt="" title=""> */}
                    <img src="../public/images/resources/sticky-logo.png" alt="" />
                </a>
            </div>
            {/* <!--Right Col--> */}
            <div className="right-col float-right">
                {/* <!-- Main Menu --> */}
                <nav className="main-menu clearfix">
                    {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                </nav>
            </div>
        </div>
    </div>
</div>
{/* <!--End Sticky Header--> */}

{/* <!-- Mobile Menu  --> */}
<div className="mobile-menu">
    <div className="menu-backdrop"></div>
    <div className="close-btn"><span className="icon fa fa-times-circle"></span></div>
    <nav className="menu-box">
        <div className="nav-logo"><a href="index.html"><img src="../public/images/resources/mobilemenu.png" alt="" /></a></div>
        <div className="menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
        </div>
        {/* <!--Social Links--> */}
        <div className="social-links">
            <ul className="clearfix">
                <li><a href="#"><span className="fab fa fa-facebook-square"></span></a></li>
                <li><a href="#"><span className="fab fa fa-twitter-square"></span></a></li>
                <li><a href="#"><span className="fab fa fa-pinterest-square"></span></a></li>
                <li><a href="#"><span className="fab fa fa-google-plus-square"></span></a></li>
                <li><a href="#"><span className="fab fa fa-youtube-square"></span></a></li>
            </ul>
        </div>
    </nav>
</div>
{/* <!-- End Mobile Menu --> */}

</header>

<section className="user-prof-comp user-prof-comp5">
        <span className="u-pf-one"></span>
        <span className="u-pf-two">
          <span className="u-pf-three"></span>
        </span>
        <span className="u-pf-four"></span>

        <h2>Price List</h2>
        
      </section>

            {/* Rate list comp */}

       <section className="ratelist-comp">
        <div className="ratelist-container">

            <div className="ratelist-table-grid">

                <div className="ratelist-table-bx">
                    <table>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Waste Products</th>
                                <th>At the ₹/Per KG</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/magazine.png" alt="" />
                                        </div>
                                        <h6>Magazine</h6>
                                    </div>
                                </td>

                                <td>₹20.00 KG</td>
                                
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/cash.png" alt="" />
                                        </div>
                                        <h6>Papers</h6>
                                    </div>
                                </td>

                                <td>₹10.00 KG</td>
                                
                            </tr>


                            <tr>
                                <td>3</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/book.png" alt="" />
                                        </div>
                                        <h6>Books</h6>
                                    </div>
                                </td>

                                <td>₹40.00 KG</td>
                                
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/aluminium-paper.png" alt="" />
                                        </div>
                                        <h6>Aluminium</h6>
                                    </div>
                                </td>

                                <td>₹50.00 KG</td>
                                
                            </tr>


                            <tr>
                                <td>5</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/wheel.png" alt="" />
                                        </div>
                                        <h6>Wheels</h6>
                                    </div>
                                </td>

                                <td>₹53.00 KG</td>
                                
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/plastic.png" alt="" />
                                        </div>
                                        <h6>Plastic</h6>
                                    </div>
                                </td>

                                <td>₹36.00 KG</td>
                                
                            </tr>

                            

                            <tr>
                                <td>7</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/cardboard.png" alt="" />
                                        </div>
                                        <h6>Cardboard</h6>
                                    </div>
                                </td>

                                <td>₹29.00 KG</td>
                                
                            </tr>


                               
                        </tbody>
                    </table>
                </div>
                



                <div className="ratelist-table-bx">
                    <table>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Waste Products</th>
                                <th>At the ₹/Per KG</th>


                            </tr>
                        </thead>
                        <tbody>
                          

                            <tr>
                                <td>6</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/plastic.png" alt="" />
                                        </div>
                                        <h6>Plastic</h6>
                                    </div>
                                </td>

                                <td>₹36.00 KG</td>
                                
                            </tr>

                            

                            <tr>
                                <td>7</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/cardboard.png" alt="" />
                                        </div>
                                        <h6>Cardboard</h6>
                                    </div>
                                </td>

                                <td>₹29.00 KG</td>
                                
                            </tr>


                            <tr>
                                <td>8</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/coil.png" alt="" />
                                        </div>
                                        <h6>Copper</h6>
                                    </div>
                                </td>

                                <td>₹28.00 KG</td>
                                
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/iron-bar.png" alt="" />
                                        </div>
                                        <h6>Iron</h6>
                                    </div>
                                </td>

                                <td>₹36.00 KG</td>
                                
                            </tr>


                            <tr>
                                <td>10</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/beam.png" alt="" />
                                        </div>
                                        <h6>Steel</h6>
                                    </div>
                                </td>

                                <td>₹47.00 KG</td>
                                
                            </tr>

                            <tr>
                                <td>11</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/broken.png" alt="" />
                                        </div>
                                        <h6>E-Waste</h6>
                                    </div>
                                </td>

                                <td>₹33.00 KG</td>
                                

                            </tr>


                            <tr>
                                <td>12</td>
                                <td>
                                    <div className="waste-prod-bx">
                                        <div className="waste-prod-img">
                                            <img src="./images/customImg/furniture.png" alt="" />
                                        </div>
                                        <h6>Wood</h6>
                                    </div>
                                </td>

                                <td>₹33.00 KG</td>
                                
                                
                            </tr>


                            
                        </tbody>
                    </table>
                </div>
                
            </div>
            
        </div>
        </section>   

{/* 
        <div>
      <h2>Select a Fruit:</h2>
      <select value={selectedValue} onChange={handleSelectChange}>
        {Object.keys(fruitImages).map((fruit, index) => (
          <option key={index} value={fruit}>
            {fruit} 
          </option>
        ))}
      </select>

      <div className="image-container">
        <img
          src={fruitImages[selectedValue]}
          alt={selectedValue}
          width="200"
          height="200"
        />
      </div>
    </div> */}

{/* 
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <tr >
              <td>1</td>
              <td>Faiz</td>
              <td>
                <button onClick={() => handleDeleteData(item.id)}>Delete</button>
              </td>
            </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>1</td>
              <td>Faiz</td>
              <td>
                <button onClick={() => handleDeleteData(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddData}>Add Data</button>
    </div> */}


{/* 
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td><input type="text" /></td>
              <td><select name="" id="">
                <option value="">Option1</option></select></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addStaticRow}>Add Static Row</button>
    </div> */}

    </>
  )
}

export default Ratelistcomp
