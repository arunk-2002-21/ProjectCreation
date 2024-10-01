import React,{useState} from 'react';
import Menu from '../Menu/Menu';
import './cp.css';  // This will contain your custom styles
import axios from 'axios';

const CreateProject = () => {

  const [inputValue, setInputValue] = useState({
    theme: "",
    reason: "",
    type: "",
    division:"",
    category: "",
    priority: "",
    department: "",
    startDate: "",
    endDate: "",
    location: ""
  });

  const handleChange = (e) => {
    const {name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/create', inputValue);
      console.log('Project created Successfully:', response.data);
      
      // reset the form or show a success msg
      setInputValue({
        theme: "",
        reason: "",
        type: "",
        division:"",
        category: "",
        priority: "",
        department: "",
        startDate: "",
        endDate: "",
        location: ""
        
      });

    } catch (error) {
        console.log('Error creating projects', error);
    }
  }

  return (
    <div>
      <div>
        <Menu heading={"Create Project"} />
      </div>
      
      
      <div className="container create-project-main">
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            {/* Project Theme Textarea */}
            <div className="col-8 mb-4">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Project Theme"
                name='theme'
                value={inputValue.theme}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-1 mb-3"></div>

            <div className="col-3">
              <button type="submit" className="btn btn-primary float-right">
                Save Project
              </button>
            </div>
            
            {/* Reason, Type, Division */}
            <div className="col-md-3 mb-3">
              <label>Reason</label>
              <select 
                className="form-control form-select"
                name='reason'
                value={inputValue.reason}
                onChange={handleChange}
                >
                <option >Select option</option>
                <option>Business</option>
                <option>System Performance</option>
                <option>Dealership</option>
                <option>Client Request</option>
                <option>New Market Entry</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label>Type</label>
              <select 
                className="form-control form-select"
                name='type'
                value={inputValue.type}
                onChange={handleChange}
                >
                <option >Select option</option>
                <option>App Development</option>
                <option>System Upgrade</option>
                <option>Cloud Design</option>
                <option>AI Development</option>
                <option>Website Revamp</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label>Division</label>
              <select 
                className="form-control form-select"
                name='division'
                value={inputValue.division}
                onChange={handleChange}
                >
              <option>Select option</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>HR</option>
                <option>IT</option>
                <option>Logistics</option>
              </select>
            </div>

            <div className="col-md-3 mb-3"></div>
            
            {/* Category, Priority, Department */}
            <div className="col-md-3 mb-3">
              <label>Category</label>
              <select 
                className="form-control form-select"
                name='category'
                value={inputValue.category}
                onChange={handleChange}
                >
              <option >Select option</option>
                <option>Product Launch</option>
                <option>Quality Check</option>
                <option>Upgrade</option>
                <option>Research Project</option>
                <option>Internatl Development</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label>Priority</label>
              <select 
                className="form-control form-select"
                name='priority'
                value={inputValue.priority}
                onChange={handleChange}
                >
              <option >Select option</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label>Department</label>
              <select 
                className="form-control form-select"
                name='department'
                value={inputValue.department}
                onChange={handleChange}
                >
              <option >Select option</option>
                <option>Strategy</option>
                <option>Operations</option>
                <option>Finance</option>
                <option>HR</option>
              </select>
            </div>
            
            <div className="col-md-3 mb-3"></div>

            {/* Start Date, End Date, Location */}
            <div className="col-md-3 mb-3">
              <label>Start Date as per Project Plan</label>
              <input 
                type="date"
                className="form-control"
                name='startDate'
                value={inputValue.startDate}
                onChange={handleChange}
                />
            </div>
            <div className="col-md-3 mb-3">
              <label>End Date as per Project Plan</label>
              <input 
                type="date" className="form-control"
                name='endDate'
                value={inputValue.endDate}
                onChange={handleChange}
                />
            </div>
            <div className="col-md-3 mb-3">
              <label>Location</label>
              <select 
                className="form-control form-select"
                name="location"
                value={inputValue.location}
                onChange={handleChange}
                >
              <option >Select option</option>
                <option>Pune</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Mysore</option>
              </select>
            </div>
            
            <div className="col-md-6 mb-3"></div>

            {/* Status */}
            <div className="col-md-4 mb-3">
              <p>Status: <strong>Registered</strong></p>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
