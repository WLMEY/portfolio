import Header from "./Header";
import myimage from '../assets/mohammed hussein.jpeg'
import webpage from '../assets/webpage test1.png'

const Home = () => {
    const aboutme = "Creating modern and responsive web sexperiences.I bild beautiful, functional, and user-friendly websites. and application"
    return (<div className="Main sm:p-30 p-5 pt-15 flex flex-col gap-40">

        <Header />

        <div className="Hero flex sm:flex-row flex-col  sm:items-start items-center sm:justify-between justify-center sm:gap-0 gap-10">
            <div className="image sm:w-1/2 rounded-b-full  flex items-center sm:justify-start justify-center">
                <img src={myimage} className="max-w-1/2 rounded-full" />
            </div>

            <div className="Aboutme sm:w-1/2 flex flex-col sm:items-start  items-center sm:text-start text-center sm:gap-7 gap-10">
                <h1 className="block sm:hidden  mainText text-3xl">Mohammed Hussein Kamel</h1>
                <h1 className=" hidden sm:block job mainText text-7xl ">Front-End Web Developer</h1>
                <p className="subText  hidden sm:block" >{aboutme}</p>
                <div className="btns">
                    <button className=" btn_wiewmywork hidden sm:block text-white pt-2 pb-2 pl-20 pr-20 rounded-sm">View my Work</button>
                    <div className="btn_phone  sm:hidden flex flex-row justify-between w-full items-center gap-5" >
                        <a className="btn btn_1  text-3xl  text-white pt-2 pb-2 pl-15 pr-15 rounded-xl " href="https://github.com/WLMEY?tab=overview&from=2025-01-01&to=2025-01-01" target="_blank">GitHub</a>
                        <a className="btn        text-3xl  text-white  pt-2 pb-2 pl-15 pr-15 rounded-xl " href="https://www.linkedin.com/in/mohammed-hussein-kamel-4247b4211/" target="_blank">Linkedin</a>

                    </div>
                </div>
            </div>
            <div className="sm:hidden flex flex-col justify-center gap-3 items-start">
                <h2 className="text-3xl">About Me</h2>
                <p className="subText " >{aboutme}</p>
            </div>
        </div>

        <div id="Project">
            <h1 className="text-5xl mb-10">My Projects</h1>
            <div className="Myprojects flex sm:flex-row flex-col justify-between items-center  gap-6 "  >



                <div className="project flex flex-col justify-center items-center p-5 rounded-2xl " >
                    <div className="project_img ">
                        <img src={webpage} className="rounded-2xl " alt="" />
                    </div>
                    <div className="project_about  flex flex-col justify-center items-start sm:gap-0 gap-2" >
                        <h3 className="mainText text-3xl ">title</h3>
                        <p className="subText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, magni.</p>
                        <div className="project_tecnology  placeholders flex flex-row justify-start items-center gap-3">
                            <span className="project_skills w-15 sm:w-fit pt-0.5 sm:pt-0 pb-0.5  sm:pb-0 rounded-2xl  text-sm text-center">vue.js</span>
                            <span className="project_skills w-15 sm:w-fit pt-0.5 sm:pt-0 pb-0.5  sm:pb-0 rounded-2xl  text-sm text-center" >Css</span>
                            <span className="project_skills w-15 sm:w-fit pt-0.5 sm:pt-0 pb-0.5  sm:pb-0 rounded-2xl  text-sm text-center" >Api</span>
                        </div>
                        <span className="btn block sm:hidden  w-full p-2 text-center rounded-2xl mt-5"> View Live</span>
                    </div>
                </div>


                <div className="project overflow-hidden flex flex-col justify-center items-center sm:p-5 rounded-2xl " >
                    <div className="project_img ">
                        <img src={webpage} className=" " alt="" />
                    </div>
                    <div className="project_about  flex flex-col justify-center items-start p-5 sm:p-0  sm:gap-0 gap-2" >
                        <h3 className="mainText text-3xl ">title</h3>
                        <p className="subText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, magni.</p>
                        <div className="project_tecnology  placeholders flex flex-row justify-start items-center gap-3">
                            <span className="project_skills w-15 sm:w-fit pt-0.5 sm:pt-0 pb-0.5  sm:pb-0 rounded-2xl  text-sm text-center">vue.js</span>
                            <span className="project_skills w-15 sm:w-fit pt-0.5 sm:pt-0 pb-0.5  sm:pb-0 rounded-2xl  text-sm text-center" >Css</span>
                            <span className="project_skills w-15 sm:w-fit pt-0.5 sm:pt-0 pb-0.5  sm:pb-0 rounded-2xl  text-sm text-center" >Api</span>
                        </div>
                        <span className="btn block sm:hidden  w-full p-2 text-center rounded-2xl mt-5"> View Live</span>
                    </div>
                </div>

                <div className="project flex flex-col justify-center items-center p-5 rounded-2xl " >
                    <div className="project_img ">
                        <img src={webpage} className="rounded-2xl " alt="" />
                    </div>
                    <div className="project_about  flex flex-col justify-center items-start" >
                        <h3 className="mainText text-3xl ">title</h3>
                        <p className="subText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, magni.</p>
                        <p className="project_tecnology  placeholdersText"> vue.js, Css, api</p>
                    </div>
                </div>




            </div>
        </div>


        <div id="Skills " className="Skills flex flex-col gap-10">
            <h1 className="text-5xl">My Skills</h1>
            <div className="MySkills  hidden sm:flex flex-row  ">

                <div className="group">
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <h4 className=" text-3xl">JS</h4>
                        <div>
                            <h1> JavaScript (ES6+)</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <i class="text-3xl fa-brands fa-html5"></i>
                        <div>
                            <h1>HTML5</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <i class="text-3xl fa-brands fa-css3-alt"></i>
                        <div>
                            <h1> CSS3</h1>
                            <p>good</p>

                        </div>
                    </div>

                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <h4 className=" text-3xl">JS</h4> */}
                        <i className=" text-3xl fa-brands fa-react"></i>
                        <div>
                            <h1> React</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class=" fa-brands fa-html5"></i> */}
                        <i class="text-3xl fa-solid fa-sitemap"></i>
                        <div>
                            <h1>Redux</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-css3-alt"></i> */}
                        <h4 className=" text-3xl">API</h4>

                        <div>
                            <h1> Axios</h1>
                            <p>good</p>

                        </div>
                    </div>


                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <i class="text-3xl fa-brands fa-css3-alt"></i>
                        <div>
                            <h1> TailwindCSS</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-css3-alt"></i> */}
                        <i class="text-3xl fa-solid fa-gears"></i>
                        <div>
                            <h1>Framer Motion</h1>
                            <p>good</p>

                        </div>
                    </div>

                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <h4 className=" text-3xl">Get</h4>
                        <div>
                            <h1> Git</h1>
                            <p>good</p>

                        </div>
                    </div>

                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <h4 className=" text-3xl">Vit</h4>
                        <div>
                            <h1> vit</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-html5"></i> */}
                        <i class=" text-3xl fa-solid fa-address-card"></i>
                        <div>
                            <h1>Postman</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class=" fa-brands fa-css3-alt"></i> */}
                        <i class=" text-3xl fa-brands fa-figma"></i>
                        <div>
                            <h1> fagma</h1>
                            <p>good</p>

                        </div>

                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-css3-alt"></i> */}
                        <h4 className=" text-3xl">Vercel</h4>
                        <div>
                            <h1> Vercel</h1>
                            <p>good</p>

                        </div>
                        
                        </div>

<div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <h4 className=" text-3xl">JS</h4>
                        <div>
                            <h1> JavaScript (ES6+)</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <i class="text-3xl fa-brands fa-html5"></i>
                        <div>
                            <h1>HTML5</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <i class="text-3xl fa-brands fa-css3-alt"></i>
                        <div>
                            <h1> CSS3</h1>
                            <p>good</p>

                        </div>
                    </div>

                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <h4 className=" text-3xl">JS</h4> */}
                        <i className=" text-3xl fa-brands fa-react"></i>
                        <div>
                            <h1> React</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class=" fa-brands fa-html5"></i> */}
                        <i class="text-3xl fa-solid fa-sitemap"></i>
                        <div>
                            <h1>Redux</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-css3-alt"></i> */}
                        <h4 className=" text-3xl">API</h4>

                        <div>
                            <h1> Axios</h1>
                            <p>good</p>

                        </div>
                    </div>


                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <i class="text-3xl fa-brands fa-css3-alt"></i>
                        <div>
                            <h1> TailwindCSS</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-css3-alt"></i> */}
                        <i class="text-3xl fa-solid fa-gears"></i>
                        <div>
                            <h1>Framer Motion</h1>
                            <p>good</p>

                        </div>
                    </div>

                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <h4 className=" text-3xl">Get</h4>
                        <div>
                            <h1> Git</h1>
                            <p>good</p>

                        </div>
                    </div>

                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <h4 className=" text-3xl">Vit</h4>
                        <div>
                            <h1> vit</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-html5"></i> */}
                        <i class=" text-3xl fa-solid fa-address-card"></i>
                        <div>
                            <h1>Postman</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class=" fa-brands fa-css3-alt"></i> */}
                        <i class=" text-3xl fa-brands fa-figma"></i>
                        <div>
                            <h1> fagma</h1>
                            <p>good</p>

                        </div>

                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-css3-alt"></i> */}
                        <h4 className=" text-3xl">Vercel</h4>
                        <div>
                            <h1> Vercel</h1>
                            <p>good</p>

                        </div>
                        
                        </div>

                </div>


            </div>



            <div className="myskills_phone flex sm:hidden flex-col gap-5  justify-center items-start">
                <h2 className="text-3xl mt-5">Core Languages</h2>

                <div className="skillGrops grid grid-cols-2 w-full gap-3  p-2">
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <h4 className=" text-3xl">JS</h4>
                        <div>
                            <h1> JavaScript (ES6+)</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <i class="text-3xl fa-brands fa-html5"></i>
                        <div>
                            <h1>HTML5</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <i class="text-3xl fa-brands fa-css3-alt"></i>
                        <div>
                            <h1> CSS3</h1>
                            <p>good</p>

                        </div>
                    </div>
                </div>






                <h2 className="text-3xl mt-5">Frameworks & Libraries</h2>
                <div className="skillGrops grid grid-cols-2 w-full gap-3  p-2">
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <h4 className=" text-3xl">JS</h4> */}
                        <i className=" text-3xl fa-brands fa-react"></i>
                        <div>
                            <h1> React</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class=" fa-brands fa-html5"></i> */}
                        <i class="text-3xl fa-solid fa-sitemap"></i>
                        <div>
                            <h1>Redux</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-css3-alt"></i> */}
                        <h4 className=" text-3xl">API</h4>

                        <div>
                            <h1> Axios</h1>
                            <p>good</p>

                        </div>
                    </div>


                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <i class="text-3xl fa-brands fa-css3-alt"></i>
                        <div>
                            <h1> TailwindCSS</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-css3-alt"></i> */}
                        <i class="text-3xl fa-solid fa-gears"></i>
                        <div>
                            <h1>Framer Motion</h1>
                            <p>good</p>

                        </div>
                    </div>








                </div>






                <h2 className="text-3xl mt-5">Tools & Platforms</h2>
                <div className="skillGrops grid grid-cols-2 w-full gap-3  p-2">
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <h4 className=" text-3xl">Get</h4>
                        <div>
                            <h1> Git</h1>
                            <p>good</p>

                        </div>
                    </div>

                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        <h4 className=" text-3xl">Vit</h4>
                        <div>
                            <h1> vit</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-html5"></i> */}
                        <i class=" text-3xl fa-solid fa-address-card"></i>
                        <div>
                            <h1>Postman</h1>
                            <p>good</p>

                        </div>
                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class=" fa-brands fa-css3-alt"></i> */}
                        <i class=" text-3xl fa-brands fa-figma"></i>
                        <div>
                            <h1> fagma</h1>
                            <p>good</p>

                        </div>

                    </div>
                    <div className="skill flex flex-col justify-between items-center p-3   rounded-2xl gap-3" >
                        {/* <i class="text-3xl fa-brands fa-css3-alt"></i> */}
                        <h4 className=" text-3xl">Vercel</h4>
                        <div>
                            <h1> Vercel</h1>
                            <p>good</p>

                        </div>

                    </div>


                </div>



            </div>


            <h2 className="btn p-3 rounded-lg w-full sm:w-fit sm:ml-auto text-center mt-10 text-3xl"><i class="fa-solid fa-download"></i> Download CV</h2>
        </div>

        {/* Get InTouch */}
        <div id="Contact" className="GetInTouch flex flex-col justify-center p-0 sm:p-20 sm:pl-60 sm:pr-60 sm:items-center items-start gap-5 sm:gap-10 " >

            <h2 className="text-4xl">Get in Touch</h2>
            <p className="placeholdersText ">i'm open to discussing new projects and opportunities. Let's build something together.</p>

            <div className="connection flex sm:hidden flex-col w-full justify-center items-center gap-3">
                <div className="info_continer flex flex-row justify-between items-center w-full p-5 rounded-2xl text-lg">
                    {/* project_skills w-15 sm:w-fit pt-0.5 sm:pt-0 pb-0.5  sm:pb-0 rounded-2xl  text-sm text-center */}
                    <i className="icons  text-2xl fa-regular fa-envelope"></i>

                    <p className=" w-full pl-3 ">dev.mohammedhussein@gmail.com</p>
                    <i className="icon_normal fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <div className="info_continer flex flex-row justify-between items-center w-full p-5 rounded-2xl text-lg">
                    <i class="icons text-2xl fa-solid fa-phone"></i>

                    <p className=" pl-3 w-full">+20 1275564118  (EGP)</p>
                    <i className="icon_normal  fa-solid fa-arrow-up-right-from-square"></i>
                </div>

            </div>
            <div className="platforms flex sm:hidden justify-center items-center flex-col w-full gap-5">
                <h2 className="placeholdersText  m-auto ">Find me on other platforms</h2>
                <div className="flex justify-center items-center flex-row w-full gap-5">
                    <a href="" className=""><i className="icon text-3xl fa-brands fa-facebook-messenger"></i></a>
                    <a href="" className=""><i className="icon text-3xl fa-brands fa-linkedin"></i></a>
                    <a href="" className=""><i className="icon text-3xl fa-brands fa-whatsapp"></i></a>





                </div>
            </div>
            {/* Message */}
            <div className="message w-full p-5 sm:p-0 rounded-2xl flex flex-col justify-center items-start sm:items-center gap-5">
                <div className="w-full flex sm:hidden flex-col justify-center items-start ">
                    <h2 className="text-3xl">Send a Message</h2>
                    <p className="placeholdersText">Or send me a message directly</p>
                </div>

                <div className="flex flex-row justify-between items-center w-full gap-10">
                    <div className="input w-full  flex flex-col justify-center items-start gap-2">
                        <label htmlFor="">Full Name</label>
                        <input type="text" name="" id="" placeholder="mohammed hussein" className="p-2 rounded-lg w-full " />
                    </div>

                    <div className="input w-full   flex flex-col justify-center items-start gap-2">
                        <label htmlFor="">Email Address</label>
                        <input type="Email" name="" id="" placeholder="dev.mohammedhussein@gmail.com" className="p-2 rounded-lg w-full " />
                    </div>
                </div>

                <div className="input w-full flex flex-col justify-center items-start gap-2">
                    <label htmlFor="">Your Message</label>
                    {/* <textarea type="text" name="" id="" /> */}
                    <textarea name="" cols='50' id="" resize="none" placeholder="Let's talk about..." className="p-2 rounded-lg w-full " ></textarea>
                </div>
                <button className="btn p-3 rounded-2xl ">Send Message</button>

            </div>
        </div>

    </div>);
}

export default Home;