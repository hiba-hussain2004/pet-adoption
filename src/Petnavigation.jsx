import React from 'react'
import { Link } from 'react-router-dom'

const Petnavigation = () => {
  return (
    <div>

    <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Pet Adoption </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    
                    <Link class="nav-link active" aria-current="page" to="/">Add pet
                    </Link>
                    <Link class="nav-link" to="/Search">Search pet</Link>
                    
                    <Link class="nav-link" to="/delete">Delete pet</Link>
                    <Link class="nav-link" to="/view">View all pet</Link>
                    
                </div>
                </div>
            </div>
            </nav>



    </div>
  )
}

export default Petnavigation