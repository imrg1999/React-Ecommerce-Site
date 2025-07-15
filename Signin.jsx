import React, {useContext} from 'react'
import ThemeContext from './ThemeContext'
import './Signin.css'

const Signin = () => {
    const mode = useContext(ThemeContext)
  return (
    <div className={`signin-container ${mode === 'light' ? 'light-mode' : ''}`}
      style={{
        backgroundColor: mode === 'dark' ? '#121212' : '#f4f4f4',
        color: mode === 'dark' ? '#ffffff' : '#121212',
        padding: '2rem',
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}
    >
      <h1>Sign In</h1> <hr />
      <div className='form-arrange'>
      <form className="form-group">
  <div className="col-md-8">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email Address...'/>
  </div>
  
 
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" placeholder='Enter Password...'/>
  </div>
  <div className="row">
  <div className="form-group col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" placeholder='Enter City.....' />
  </div>

  <div className="form-group col-md-6">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input
      type="text"
      className="form-control"
      id="inputAddress"
      placeholder="Enter Address...."
    />
  </div>
</div>
  
  <div className="col-md-8">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
      </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" placeholder='Enter Zip Code...'/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
      </div>
      </div>
  )
}

export default Signin