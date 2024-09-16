import React from 'react'
import './FormVAlid.css'

export default function FormValid() {
  return (
    <div class="form-container">
        <h2>Register Now</h2>
        <form>
            <div class="form-group">
                <input type="text" id="name" placeholder=" " required/>
                <label for="name">Full Name</label>
            </div>
            <div class="form-group">
                <input type="email" id="email" placeholder=" " required/>
                <label for="email">Email Address</label>
            </div>
            <div class="form-group">
                <input type="password" id="password" placeholder=" " required/>
                <label for="password">Password</label>
            </div>
            <div class="form-group">
                <input type="tel" id="phone" placeholder=" " required/>
                <label for="phone">Phone Number</label>
            </div>
            <div class="form-group">
                <select id="gender" required>
                    <option value="" disabled selected></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label for="gender">Gender</label>
            </div>
            <div class="form-group">
                <textarea id="message" placeholder=" " required></textarea>
                <label for="message">Message</label>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>
  )
}
