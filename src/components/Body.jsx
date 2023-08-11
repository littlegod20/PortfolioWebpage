import picture from '../images/my_picture.png';
import {FaPlay} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import Stars from './Stars';
import goku from '../images/goku.jpg'



function Body(){
    return(
        <>
           <section className='Pages'>

            <section className="about">
            
                
                <div className='front_page'>
                    <h1 className="name">Hello! I'm Theophilus Frimpong</h1>
                    <p className="job">UI/UX Designer specializing in Shopify & Webflow.</p>
        
                    <p className='res'><button  className="resume">Get Resume</button></p>
                    <p className='video'><button><FaPlay className='play_button'/></button> Watch Video</p>
       
       
                </div>
            
                <figure> <img className="pic" src={picture} alt="my_picture" /></figure>
           
            </section>

        
            <section className='services_class'> 

                <i>My services</i>
                <h1 className='services_header'>Services Provided for my Clients.</h1>
                <div className='boxes'>

                <figure className='item 1'>UI/UX Design <br />
                <p className='designTypes'>
                Landing Pages <br /> User Flow <br /> Wireframing <br />Prototyping <br />Mobile App Design
                </p>
                </figure>

                <figure className='item 2'>Development
                <p className='designTypes'>
                HTML/CSS <br /> JavaScript <br /> Animation <br />WordPress <br />React
                </p>
                </figure>

                <figure className='item 3'>Illustration
                <p className='designTypes'>
                Character Design <br /> Icon Set <br /> Illustration Guide <br />Illustration Set <br />Motion Graphic
                </p>
                </figure>
                </div>

            </section> 


            <section className='SpecialSkillsClass'>

                <div className='SkillContainer'>

                    <i>Special Skills</i>
                    <h1 className='SkillsHeader'>My Special Skill Field Here</h1>
                    <p className='Second'><button className='resume'>Get Resume</button></p>
            

                </div>

                <div className='Ratings'>
                    <div className='SkillsContainer'>

                    <div className='Skill'>
                     <div className='Comm'>Communication <span>75%</span></div>
                     <div className='Line'></div> 
                    </div>
                   
                

                    <div  className='Skill'>
                     <div className='Lead'>Leadership <span>85%</span></div>
                     <div className='Line'></div>
                    </div>
                    
                

                    <div className='Skill'>
                         <div className='Team'>Teamwork <span> 87%</span></div>
                        <div className='Line'></div>
                    </div>
                    
                    

                    <div className='Skill'>
                     <div className='Flexi'>Flexibility  <span>95%</span></div> 
                     <div className='Line'></div>
                    </div>
                    
                    </div>
               
                </div>
           
            </section>

            <section className='Works'>
                    <div className='HappyClients'>
                         <p><FaUser className='UserIcon'/> </p> <p className='numText'> <span className='num'>258+</span> <span className='Text'>Happy Clients</span> </p> 
                    </div>

                    <div className='ProjectComplete'>
                       <p><FaCog className='SettingsIcon'/>  </p> <p className='numText'> <span className='num'>590K</span> <span className='Text'>Project Complete </span> </p> 
                    </div>

                    <div className='YearsExp'>
                        <p><FaCalendarAlt className='CalendarIcon'/></p>  <p className='numText'> <span className='num'>28+</span> <span className='Text'>Years of Experience</span> </p>  
                    </div>

            </section>

             <section className='Projects'>
                <i>Awesome Portfolio</i>
                <h1 className='ProjectsHeader'>My Complete Projects</h1>

                
                 <figure className='images'> 
                    <p><img className='image img1' src={require('../images/image1.jpg')} alt="image1" /> <br /> Virtuf-Creative Agency Bootstrap 5 Template</p>
                    <p><img className='image img2' src={require('../images/image2.jpg')} alt="image2" /><br /> SEOLLY - SEO Marketing & Agency</p>
                    <p><img className='image img3' src={require('../images/image3.jpg')} alt="image3" /><br />Musion - Gardening Website Template</p>
                    <p><img className='image img4' src={require('../images/image4.jpg')} alt="image4" /><br />Givest-Non Profit PSD Templates</p>
                
                 </figure> 

             </section>


            <section className='TestimonialContainer'>
                <i>Testimonial</i>
                <h1>Satisfied Clients Say</h1>

                <div className='Testimonies'> 
                    <div className='test one'><p className='apostrophe'>"</p><span className='Says'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et magnam repellendus modi! Deleniti vitae cum quasi, tenetur optio necessitatibus et quos a dolor autem dolore laboriosam fugit ex totam</span><br /><i className='testifier'>CEO of SEOL</i> <Stars/> </div>
                    <div className='test two'><p className='apostrophe'>"</p><span span className='Says'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores id dolores eaque nisi harum possimus corporis obcaecati repellendus natus alias, dicta non rem consequatur, nemo quibusdam aliquid illo magni?</span> <i className='testifier'>CEO of SEOL</i><Stars/></div>
                    <div className='test three'><p className='apostrophe'>"</p><span span className='Says'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores id dolores eaque nisi harum possimus corporis obcaecati repellendus natus alias, dicta non rem consequatur, nemo quibusdam aliquid illo magni?</span>  <i className='testifier'>CEO of SEOL</i><Stars/></div>
                </div>
            </section>



            <section className='TrustedCompanyClass'>
                <i>Favourite Clients</i>
                <h1>Work With Trusted Company</h1>
                <div className='CompaniesContainer'>
                    <div className='Company one'>ASANTE'S BREWERY</div>
                    <div className='Company two'>STAR LOTUS</div>
                    <div className='Company three'>COMPANY NAME</div>
                </div>

                <i className='BlogPost'>Blog Post</i>
                <h1 className='TipsHeader'>Latest Tips & Tricks</h1>
                <div className='TipsTricksContainer'>
                    <div className='Message'><img className='GokuImage' src={goku} alt="blog_image" /><span className='Info'>Business - <i className='date'>07 February, 2021</i> <p>Don't wait until you officially started business to line these up. </p> <br /> <button className='resume'>Read More</button></span> </div>
                    <div className='Message'><img className='GokuImage' src={goku} alt="blog_image" /><span className='Info'>Business - <i className='date'>07 February, 2021</i> <p>Don't wait until you officially started business to line these up.</p><br/> <button className='resume'>Read More</button></span> </div> 
                    <div className='Message'><img className='GokuImage' src={goku} alt="blog_image" /><span className='Info'> Business - <i className='date'>07 February, 2021</i> <p>Don't wait until you officially started business to line these up.</p><br/> <button className='resume'>Read More</button></span></div>
                </div>
            </section>


         </section>
            
        
        </>
       
    )
}

export default Body;

