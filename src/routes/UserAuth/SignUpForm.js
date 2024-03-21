import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm({ signUp }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      let email = formData.email.trim();
      let username = formData.username.trim();
      let password = formData.password.trim();
      let signUpData = { 
        email,
        username,
        password
      };

      if (email === '') {
          alert('Please enter an email');
          return;
      } else if (username === '') {
          alert('Please enter a username');
          return;
      } else if (password === '') {
          alert('Please enter a password');
          return;
      } else if (password.length <= 5) {
          alert('Password must be at least 5 characters');
          return;
      } else {
          signUp(signUpData);
          navigate("/");
      }
  };


  return (
    <div className="container bg-dark pt-3 rounded mt-5">
      <h1 className="text-center text-light">Sign Up</h1>
      <form onSubmit={handleSubmit} className="rounded p-4 bg-dark">
        <div className="mb-3">
          <label htmlFor="email" className="text-light">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="username" className="text-light">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="password" className="text-light">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
