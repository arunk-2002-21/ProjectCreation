import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';

const Menu = ({ heading }) => {
  const navigate = useNavigate();


  const Dashboard = () => {
    navigate("/dashboard");
  };

  const ProjectListing = () => {
    navigate("/projectlist");
  };

  const CreateProject = () => {
    navigate("/createproject");
  };

  const Logout = () => {
    navigate("/login");
  };

  return (
    <div className="container-fluid Create-project-main">
      <div className="row no-gutters"> 
        <div className="col-1 left-section">
          <div className="left-section-one">
            <img src="/assets/Dashboard.svg" alt="logo" className="mb-3" onClick={Dashboard} />
            <img src="assets/Project-list.svg" alt="logo"  onClick={ProjectListing}/>
            <hr />
            <img src="assets/create-project.svg" alt="logo" onClick={CreateProject}/>
          </div>
          <div className="left-section-two">
            <img src="assets/Logout.svg" alt="logo" onClick={Logout} />
          </div>
        </div>

        <div className="col-11 right-section">
          <div className="head-item">
            <div className="head-item-start mt-5">
              <img
                className="mx-4"
                src="/assets/backarrow.svg"
                alt="heading nav"
                style={{ fontWeight: 'bold' }}
              />
              <h5 className="mx-2">{heading}</h5>
            </div>
            <div className="head-item-logo">
              <img src="/assets/Logo.svg" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Menu;
