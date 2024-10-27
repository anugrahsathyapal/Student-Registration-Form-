import {TextField,Stack,Button,FormControl,InputLabel,Select,MenuItem} from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [course, setCourse] = useState("");
  const [invalidName, setInvalidName] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);
  const [invalidMobile, setInvalidMobile] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidGender, setInvalidGender] = useState(false);
  const [invalidDob, setInvalidDob] = useState(false);
  const [invalidCourse, setInvalidCourse] = useState(false);

  const validateInput = (inputTag) => {
    const { name, value } = inputTag;
    switch (name) {
      case "name":
        setName(value);
        setInvalidName(!/^[A-Za-z\s]+$/.test(value));
        break;
      case "address":
        setAddress(value);
        setInvalidAddress(value.length < 5);
        break;
      case "mobile":
        setMobile(value);
        setInvalidMobile(!/^\d{10}$/.test(value));
        break;
      case "email":
        setEmail(value);
        setInvalidEmail(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value));
        break;
      case "gender":
        setGender(value);
        setInvalidGender(!value);
        break;
      case "dob":
        setDob(value);
        setInvalidDob(!value);
        break;
      case "course":
        setCourse(value);
        setInvalidCourse(!value);
        break;
      default:
        break;
    }
  };


  const handleRegister = (e) => {
    e.preventDefault();
    if (name && address && mobile && email && gender && dob && course && !invalidName && !invalidAddress && !invalidMobile && !invalidEmail && !invalidGender && !invalidDob && !invalidCourse)
        {
      alert(`
       "Student registered successfully!"
        Name: ${name}
        Address: ${address}
        Mobile: ${mobile}
        Email: ${email}
        Gender: ${gender}
        Date of Birth: ${dob}
        Course: ${course}
      `);
    } 
    else {
      alert("Please fill out all fields correctly.");
    }
  };


  const handleReset = () => {
    setName("");
    setAddress("");
    setMobile("");
    setEmail("");
    setGender("");
    setDob("");
    setCourse("");
    setInvalidName(false);
    setInvalidAddress(false);
    setInvalidMobile(false);
    setInvalidEmail(false);
    setInvalidGender(false);
    setInvalidDob(false);
    setInvalidCourse(false);
  };


  return (
    <div style={{ width: "100%", minHeight: "100vh" }} className="d-flex justify-content-center align-items-center " >
      <div style={{ width: "600px" }} className="bg-light rounded p-5">
        <h3>Student Registration Form</h3>
        <p>Register new students by filling in the information below:</p>
        <form onSubmit={handleRegister} className="mt-5">
          {/* Name */}
          <div className="mb-3">
            <TextField
              value={name}
              name="name"
              onChange={(e) => validateInput(e.target)}
              className="w-100"
              label="Full Name"
              variant="outlined"
              error={invalidName}
              helperText={invalidName ? "Name should only contain alphabets" : ""}
            />
          </div>
          {/* Address */}
          <div className="mb-3">
            <TextField
              value={address}
              name="address"
              onChange={(e) => validateInput(e.target)}
              className="w-100"
              label="Address"
              variant="outlined"
              error={invalidAddress}
              helperText={invalidAddress? "Address should be at least 5 characters long": ""}
            />
          </div>
          {/* Mobile */}
          <div className="mb-3">
            <TextField
              value={mobile}
              name="mobile"
              onChange={(e) => validateInput(e.target)}
              className="w-100"
              label="Mobile (10 digits)"
              variant="outlined"
              error={invalidMobile}
              helperText={invalidMobile ? "Mobile number must be 10 digits" : ""}
            />
          </div>
          {/* Email */}
          <div className="mb-3">
            <TextField
              value={email}
              name="email"
              onChange={(e) => validateInput(e.target)}
              className="w-100"
              label="Email Address"
              variant="outlined"
              error={invalidEmail}
              helperText={invalidEmail ? "Enter a valid email address" : ""}
            />
          </div>
          {/* Gender */}
          <div className="mb-3">
            <FormControl
              variant="outlined"
              className="w-100"
              error={invalidGender}
            >
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                value={gender}
                name="gender"
                onChange={(e) => validateInput(e.target)}
                label="Gender"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              {invalidGender && (
                <span className="text-danger">Please select a gender</span>
              )}
            </FormControl>
          </div>
          {/* Date of Birth */}
          <div className="mb-3">
            <TextField
              type="date"
              value={dob}
              name="dob"
              onChange={(e) => validateInput(e.target)}
              className="w-100"
              variant="outlined"
              error={invalidDob}
              helperText={invalidDob ? "Please select a date of birth" : ""}
            />
          </div>
          {/* Course */}
          <div className="mb-3">
            <FormControl
              variant="outlined"
              className="w-100"
              error={invalidCourse}
            >
              <InputLabel id="course-label">Course</InputLabel>
              <Select
                labelId="course-label"
                value={course}
                name="course"
                onChange={(e) => validateInput(e.target)}
                label="Course"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Commerce">Commerce</MenuItem>
                <MenuItem value="Humanities">Humanities</MenuItem>
              </Select>
              {invalidCourse && (<span className="text-danger">Please select a course</span>)}
            </FormControl>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
              <Button type="submit" variant="contained"style={{ width: "50%", height: "50px" }} className="bg-dark" disabled={invalidName ||invalidAddress ||invalidMobile ||invalidEmail ||invalidGender ||invalidDob ||invalidCourse}>
                   REGISTER
              </Button>
              <Button variant="outlined" onClick={handleReset} style={{ width: "50%", height: "50px" }} className="border border-dark text-dark">
                   RESET
              </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
