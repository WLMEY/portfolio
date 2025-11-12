const Header = () => {
    return (  <div className="Header  hidden sm:flex  flex-row justify-between items-center  p-5 rounded-2xl gap-10">
        <div className="icons flex flex-row justify-between items-center gap-3">
            <i className="fa-solid fa-at"></i>
            <i className="fa-solid fa-code"></i>
            <i className="fa-brands fa-linkedin-in"></i>
        </div>

        <div className="titles flex flex-row justify-between items-center w-1/3">
            <span>Home</span>
            <span>Project</span>
            <span>Skills</span>
            <span>Contact</span>


        </div>

        <div className="loco flex flex-row justify-between items-center gap-3">
            <span>Mohammad Hussein</span>
            <i class=" logoCode fa-solid fa-code"></i>



        </div>
        
    </div>);
}
 
export default Header;