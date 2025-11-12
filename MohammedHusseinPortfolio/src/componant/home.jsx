import Header from "./Header";
import myimage from '../assets/mohammed hussein.jpeg'
const Home = () => {
    return (<div className="Main sm:p-30 p-5 flex flex-col gap-40">

        <Header />

        <div className="Hero flex sm:flex-row flex-col  sm:items-start items-center sm:justify-between justify-center sm:gap-0 gap-4">
            <div className="image sm:w-1/2 rounded-b-full  flex items-center sm:justify-start justify-center">
                <img src={myimage} className="max-w-1/2 rounded-full" />
            </div>

            <div className="Aboutme sm:w-1/2 flex flex-col sm:items-start items-center text-center sm:gap-0 gap-4">
                <h1 className="block sm:hidden  mainText text-5xl">Mohammed Hussein Kamel</h1>
                <h1 className=" hidden sm:block job mainText text-7xl">Front-End Web Developer</h1>
                <p className="subText " >Creating modern and responsive web sexperiences.
                    I bild beautiful, functional, and user-friendly websites. and application

                </p>
                <div className="btns">
                    <button>View my Work</button>
                    <div className="btn_phone  flex flex-row justify-between" >
                        <a className="btn" href="https://github.com/WLMEY?tab=overview&from=2025-01-01&to=2025-01-01" target="_blank">GitHub</a>
                        <a className="btn" href="https://www.linkedin.com/in/mohammed-hussein-kamel-4247b4211/" target="_blank">Linkedin</a>

                    </div>
                </div>
            </div>
        </div>

<div>
        <h1 className="text-5xl">My Projects</h1>
        <div className="Myprojects flex flex-row justify-between items-center  gap-6 "  >



            <div className="project flex flex-col justify-center items-center p-5 rounded-2xl " >
                <div className="project_img ">
                    <img src={myimage} className="rounded-2xl " alt="" />
                </div>
                <div className="project_about  flex flex-col justify-center items-start" >
                    <h3 className="mainText text-3xl ">title</h3>
                    <p className="subText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, magni.</p>
                    <p className="project_tecnology  placeholders"> vue.js, Css, api</p>
                </div>
            </div>


            <div className="project flex flex-col justify-center items-center p-5 rounded-2xl " >
                <div className="project_img ">
                    <img src={myimage} className="rounded-2xl " alt="" />
                </div>
                <div className="project_about  flex flex-col justify-center items-start" >
                    <h3 className="mainText text-3xl ">title</h3>
                    <p className="subText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, magni.</p>
                    <p className="project_tecnology  placeholders"> vue.js, Css, api</p>
                </div>
            </div>

            <div className="project flex flex-col justify-center items-center p-5 rounded-2xl " >
                <div className="project_img ">
                    <img src={myimage} className="rounded-2xl " alt="" />
                </div>
                <div className="project_about  flex flex-col justify-center items-start" >
                    <h3 className="mainText text-3xl ">title</h3>
                    <p className="subText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, magni.</p>
                    <p className="project_tecnology  placeholdersText"> vue.js, Css, api</p>
                </div>
            </div>




        </div>
</div>


<div>
        <h1 className="text-5xl">My Skills</h1>
        <div className="MySkills flex flex-row justify-between items-center  gap-6  flex-wrap w-full pt-10">

            <div className="skill flex flex-col justify-between items-center p-3 w-26 rounded-2xl gap-3"     >
                <img src={myimage} className="w-full rounded-2xl " alt="" />
                <h1> React</h1>
            </div><div className="skill flex flex-col justify-between items-center p-3 w-26 rounded-2xl gap-3 " >
                <img src={myimage} className="w-full rounded-2xl " alt="" />
                <h1> Git</h1>
            </div><div className="skill flex flex-col justify-between items-center p-3 w-26 rounded-2xl gap-3" >
                <img src={myimage} className="w-full rounded-2xl " alt="" />
                <h1> JavaScript</h1>
            </div><div className="skill flex flex-col justify-between items-center p-3 w-26 rounded-2xl gap-3" >
                <img src={myimage} className="w-full rounded-2xl " alt="" />
                <h1> TailwindCSS</h1>
            </div><div className="skill flex flex-col justify-between items-center p-3 w-26 rounded-2xl gap-3" >
                <img src={myimage} className="w-full rounded-2xl " alt="" />
                <h1> F Motion </h1>
            </div><div className="skill flex flex-col justify-between items-center p-3 w-26 rounded-2xl gap-3" >
                <img src={myimage} className="w-full rounded-2xl " alt="" />
                <h1> Redux</h1>
            </div><div className="skill flex flex-col justify-between items-center p-3 w-26 rounded-2xl gap-3" >
                <img src={myimage} className="w-full rounded-2xl " alt="" />
                <h1> HTML5</h1>
            </div><div className="skill flex flex-col justify-between items-center p-3 w-26 rounded-2xl gap-3" >
                <img src={myimage} className="w-full rounded-2xl " alt="" />
                <h1> CSS3</h1>
            </div><div className="skill flex flex-col justify-between items-center p-3 w-26 rounded-2xl gap-3" >
                <img src={myimage} className="w-full rounded-2xl " alt="" />
                <h1> Axios</h1>
            </div>

        </div>
        </div>

        <div className="GetInTouch">

        </div>

    </div>);
}

export default Home;