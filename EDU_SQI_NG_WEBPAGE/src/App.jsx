import NavBar from "./Components/NavBar";
import Programmes from "./Components/Programmes";
import RegStartNow from "./Components/RegStartNow";
import ProgInfo from "./Components/ProgInfo";
import TopCourses from "./Components/TopCourses";
import ALumniCompanies from "./Components/ALumniCompanies";
import Tour from "./Components/Tour";
import RatingMessages from "./Components/RatingMessages";
import WhyAtSQI from "./Components/WhyAtSQI";
import Questions from "./Components/Questions";


function App() {
  const ProgsInfo = [
    {
      Prog: "NATIONAL DIPLOMA COURSES",
      Duration: "2 Years",
      Certification: "Both National Diploma and Professional Diploma.",
      Skills:
        "Academic Institution recognized skills and In-demand professional skills.",
      EntryReq: "120 min in JAMB, 5 Credits in O-Level, Your passion",
      ReqHard: "(usually Laptop)",
      DirEntry: "Yes (Any University)",
      AlumAccess: "Yes",
    },
    {
      Prog: "PROFESSIONAL DIPLOMA COURSES",
      Duration: "1 Year Courses",
      Certification: "Professional Diploma",
      Skills: "In-demand professional skills",
      EntryReq: "Your passion",
      ReqHard: "(usually Laptop)",
      DirEntry: "Partially Yes (LAUTECH ODL)",
      AlumAccess: "Yes",
    },
    {
      Prog: "CERTIFICATE PROGRAM",
      Duration: "2 weeks to 6 months",
      Certification: "Certificate Program",
      Skills: "In-demand professional skills",
      EntryReq: "Your passion",
      ReqHard: "(usually Laptop)",
      DirEntry: "No",
      AlumAccess: "Yes",
    },
  ];
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <RegStartNow></RegStartNow>
      </div>
      <div>
        <Programmes></Programmes>
      </div>
      <div className="container mt-4">
        <div className="row g-5">
          {ProgsInfo.map((prog, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={index}> {/* Apply grid classes here */}
              <ProgInfo
                Prog={prog.Prog}
                Duration={prog.Duration}
                Certification={prog.Certification}
                Skills={prog.Skills}
                EntryReq={prog.EntryReq}
                ReqHard={prog.ReqHard}
                DirEntry={prog.DirEntry}
                AlumAccess={prog.AlumAccess}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <TopCourses></TopCourses>
      </div>
      <div style={{marginTop:'200px'}}>
        <ALumniCompanies></ALumniCompanies>
      </div>
      <div>
        <Tour></Tour>
      </div>
      <div>
        <RatingMessages></RatingMessages>
      </div>
      <div>
        <WhyAtSQI></WhyAtSQI>
      </div>
      <div style={{marginBottom:"none"}}>
        <Questions ></Questions>
      </div>
    </>
  );
}

export default App;
