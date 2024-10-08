import React from 'react'
import{useState,useEffect} from 'react'
import '../App.css'
import { Link,NavLink } from 'react-router-dom'
import { useLogin } from './LoginContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar(){
    const { isLoggedIn, logout,userType,typeEmpty ,emptyCart,emptyIdCart} = useLogin(); // now we are using Context for login
    
    const handleLogout = () => {
        // Call logout function
        let result = window.confirm("are you sure !! You want to Logged out ?");
        if(result){
            logout();
            typeEmpty();
            emptyCart();
            emptyIdCart();
        }
      };

    return (
        
        <div>
          
            {/* Navigation bar starts here */}
          
          <nav className="navbar navbar-expand-lg navbar-expand-sm bg-body-tertiary cust-bg-col-5">
            <div className="container-fluid ">
                <NavLink className="text-light logo" to="/"><strong>eKala</strong></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active mx-2 text-light" aria-current="page" to="">Home</NavLink>
                        <NavLink className="nav-link text-light" to="/arts">All arts</NavLink>
                        {
                            isLoggedIn ? ( <>
                            <NavLink className="nav-link text-light" to="/orders">Orders</NavLink>
                            </>) : (<></>)
                        }
                        {
                            userType=="artist"?(<NavLink className="nav-link text-light" to="/admin">Profile</NavLink>):(<></>)
                        }
                    </div>
                </div>
            </div>
            
            {/* search box starts from here... */}
            
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light mx-2" type="submit">Search</button>
            </form>
            
            {/*search box ends here*/}
            
            {
                isLoggedIn ?
                (<NavLink className="nav-link" to="/"><button onClick={handleLogout} className='btn btn-danger'>Logout</button></NavLink> ) : 
                (<NavLink className="nav-link" to="/login"><button className='btn btn-success'>Login</button></NavLink>)
            }

            {
                userType=="artist"?(<></>):(<NavLink className="nav-link text-light" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>)
            }

          </nav>
          {/* Navigation bar ends here  */}
        </div>
    )
}