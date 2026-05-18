import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/RegisterStyle.scss"
function Register() {
const [userName , setUserName]= useState("")
const [email , setEmail] = useState("")
const [password ,setPassword] = useState("")
const [month , setMonth] = useState("")
const [day , setDay] = useState("")
const [year , setYear] = useState("");
const [lastName , setLastName]= useState("")
  return (
    <main className="registerMain">
      <div className="registerWrapper">
        <div>
          <h1>Get start on instagram</h1>
          <h3>Sign up to see photos and videos from your friends.</h3>
        </div>
        <form action="">
          <div className="inputBoxes">
            <div>
              <label htmlFor="email">
                {" "}
                Email
                <input
                  type="email"
                  required
                  placeholder="email"
                  className="email input"
                  id="email"
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  required
                  name="password"
                  id="password"
                  className="password input"
                  placeholder="password"
                />
              </label>
            </div>
            <div>
              <h5>Birthday &#x3f;</h5>
              <select required name="month" id="month"defaultValue="">
                <option value="" disabled>
                  Month
                </option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
              <select name="day" required id="day" defaultValue="">
                <option value="" disabled>  day
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              <select name="year" id="year" required defaultValue="">
                <option value="" disabled>Year
                </option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">
                First Name
                <input
                  type="text"
                  placeholder="first name"
                  required
                  className="name input"
                  id="name"
                />
              </label>
            </div>
            <div>
              <label htmlFor="lastName">
                Last Name
                <input
                  type="text"
                  placeholder="last name"
                  required
                  className="name input"
                  id="lastName"
                />
              </label>
            </div>

            <button> Submit</button>
            <button>
              <Link className="loginLink" to="/login">
                I have already an account
              </Link>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;
