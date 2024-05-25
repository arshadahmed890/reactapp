import React from 'react'
import { Link } from 'react-router-dom';
import "./Main.css"
import "../bootstrap.css"




 const Main = () => {

  return (

    
<div className='all_1'>
  
    <div className=" text-center my_cont">

      <div className="mt-5  container_css2">

      <Link className="btn btn-primary link" to="/HTML">HTML conversion</Link>
  
      <Link className="btn btn-primary link" to="/GitHubProfile">Github Search</Link>
          

      </div>
      
     <br/>
      <h1 className="click-above text-bg-primary">Click Above The Link</h1>

    </div>

   

    </div>

  
  );
}
export default Main