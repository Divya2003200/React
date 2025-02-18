
import React, { useState } from "react";
import "./Form.css"; 

const Form = () => { 
  const [formData, setFormData] = useState({ firstName: "", lastName: "", age: "", gender: "", skills: "", email: "", phone: "", address: "" });

  const handleChange = (e:any) => { 
    const { name, value } = e.target; 
    setFormData((prev) => ({ ...prev, [name]: value })); 
  };

  const handleSubmit = (e:any) => { 
    e.preventDefault(); 
    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    console.log("Form Submitted", formData);
    alert("Form submitted successfully!");
  };

  return ( 
    <div className="form-container"> 
      <form onSubmit={handleSubmit} className="form-box"> 
        <h2 className="form-title">User Registration</h2> 
        <div className="form-group"> 
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required/> 
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required /> 
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required /> 
          <div className="gender-group"> 
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === "Male"} required/> Male</label> 
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === "Female"} required/> Female</label> 
          </div> 
          <select name="skills" value={formData.skills} onChange={handleChange} required> 
            <option value="">Select Skill</option> 
            <option value="React">React</option> 
            <option value="Node">Node</option> 
            <option value="JavaScript">JavaScript</option> 
          </select> 
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /> 
          <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required /> 
          <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea> 
          <button type="submit" className="submit-btn">Submit</button> 
        </div> 
      </form> 



      <div className="preview">
        <h3>Live Data Preview</h3>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Skills:</strong> {formData.skills}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Address:</strong> {formData.address}</p>
      </div>
    </div> 
  ); 
};

export default Form;
