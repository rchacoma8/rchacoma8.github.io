import './Timeline.css';

function Timeline() {
    return (
        <div className="timeline">
            <div className="container left">
                <div className="date" style={{right: "-95px"}}>July 2022</div>
                <i className="icon fa fa-home"></i>
                <div className="content">
                <h2>Associate Full Stack Software Engineer</h2>
                </div>
            </div>

            <div className="container right">
                <div className="date" style={{left: "-186px"}}>July 2021 - June 2022</div>
                <i className="icon fa fa-gift"></i>
                <div className="content">
                <h2>Junior Full Stack Software Engineer at 
                    <a href="https://www.appdrawn.com/" target="_blank" className="company p-2">AppDrawn</a>
                </h2>

                <p>
                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                </p>
                </div>
            </div>

            <div className="container left">
                <div className="date" style={{right: "-90px"}}>May 2022</div>
                <i className="icon fa fa-user"></i>
                <div className="content">
                <h2>Reseach: Coauthor of a paper.</h2>
                <p>
                    Status: Submitted
                </p>
                </div>
            </div>

            <div className="container right">
                <div className="date" style={{left: "-95px"}}>2019 - 2021</div>
                <i className="icon fa fa-running"></i>
                <div className="content">
                <h2>Double Degree in Mathematics and Computer Engineer at the
                    <a href="https://mat.ub.edu/" target="_blank" className="company p-2">University of Barcelona</a>
                </h2>
                <p>
                    Honours in the Bachelor's Degree Final Project: “Algorithms of dense graph visualization for discussion thread analysis”.
                </p>
                <p>
                    Honours in Computer Network
                </p>
                <p>
                    Merit in Graphics and Data Visualization, Distributed Computing, Software Engineering and in Ethics and Law.
                </p>
                </div>
            </div>

            <div className="container left">
                <div className="date" style={{right: "-150px"}}>Summer of 2019</div>
                <i className="icon fa fa-cog"></i>
                <div className="content">
                <h2>Intership: Android and C# Software Engineer at 
                    <a href="https://www.basetis.com/" target="_blank" className="company p-2">BaseTIS</a>
                 </h2>
                <p>
                    Developed an Android mobile application  programmed in Java, and an API in C# - 
                    which connected to Azure Artificial Intelligence services- 
                    with Agile software development methodologies: Scrum and Kanban.
                </p>
                </div>
            </div>

            <div className="container right">
                <div className="date" style={{left: "-95px"}}>2014 - 2019</div>
                <i className="icon fa fa-certificate"></i>
                <div className="content">
                <h2>Double Degree in Mathematics and Computer Engineer at the
                    <a href="https://mat.ub.edu/" target="_blank" className="company p-2">University of Barcelona</a>
                </h2>
                <p>
                    Honours in Operating System II.
                </p>
                <p>
                    Merit in Artificial Intelligence, Human-Computer Interaction and Integrated Software Project.
                </p>
                </div>
            </div>
        </div>
    );
}

export default Timeline;