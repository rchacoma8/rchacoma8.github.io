import './AppCV.css';
import './CV.css';
import Timeline from './Timeline.js';

const customDivider = <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>;

function AppCV() {
    return (
        <div className="AppCV">
            <header className="AppCV-header">
                <h1 className="cv-name">
                    Reyes Chacón Martínez
                    <i className="fa-solid fa-hand-spock p-2"></i>
                </h1>
                <p className="text-center">
                    As you can see, this is a WIP project!
                </p>

                <p className="description">
                    Who am I?
                </p>
                <p className="description">
                    I am many things! But professionally I am a proficient Software Engineer,
                    a Mathematician and Computer Engineer from the heart 
                    <i className="bi bi-heart-pulse-fill p-2"/>
                    and by the prestigious University of Barcelona.
                </p>

                <div className="container custom-navbar float-right">
                    <nav class="navbar navbar-expand-lg">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">HCI Posts</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <section className="cv-body">
                <Timeline/>
            </section>

            <section className="cv-body">
                {customDivider}
                <h2>Professional goal</h2>
                
            </section>

            <section className="cv-body">
                {customDivider}
                <h2>Technical Skills</h2>
                <p>A JavaScript lover! <i className="bi bi-arrow-through-heart-fill"/> "Such a messy language"
                    <a href="https://www.youtube.com/watch?v=Uo3cL4nrGOk" target="_blank" className="p-2">
                    (See this video for context).
                    </a>
                </p>
            </section>

            <section className="cv-body">
                {customDivider}
                <h2>Languages</h2>
                <p>
                    Spanish: native speaker.
                </p>
                <p>
                    English: C1 level, B2 certificate in 2014. And I worked in a british consultancy for almost 1 year, a 100% english environment.
                </p>
                <p>
                    Catalan/Valencian: Advanced. Borned and raised in the Valencian Community.
                </p>
                <p>
                    French: B1 level, A2 certificate, a little bi dusty but everyone used to ask me if I was French - I am not, but I can be that good in no time.
                </p>
            </section>

            <section className="cv-body">
                {customDivider}
                <h2>
                    For real, who is Reyes Chacón Martínez?
                </h2>
                <p>Okay, alright, just a peak!</p>
            </section>

            <section className="cv-body last">
                {customDivider}
                <h2>Special Thanks</h2>
            </section>

            <footer className="fixed-bottom cv-footer">
                <p>Do you want to know more?</p>
                <p>
                    Check my 
                    <a
                        className="AppCV-link pl-1"
                        href="https://www.linkedin.com/in/reyes-chac%C3%B3n-mart%C3%ADnez/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    LinkedIn Profile
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default AppCV;
