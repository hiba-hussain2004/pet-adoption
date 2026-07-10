import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Petnavigation from '../Petnavigation'

const Viewpet = () => {

        const [data,changeData]=useState([])

    const fetchData =()=>{

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()

    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )



  return (
    <div>
        <Petnavigation/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {
                            data.map(
                                (value,index)=>{
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                            <div class="card" >
                                                <img src={value.image} class="card-img-top" alt="..."height="330px"/>
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>Pet Name:</strong>{value.petName}</h5>
                                                    <p class="card-text"><strong>Species:</strong>{value.species}</p>
                                                    <p class="card-text"><strong>Breed:</strong>{value.breed}</p>
                                                    <p class="card-text"><strong>Age:</strong>{value.age}</p>
                                                    <p class="card-text"><strong>Gender:</strong>{value.gender}</p>
                                                    <p class="card-text"><strong>Vaccinated:</strong>{value.vaccinated}</p>
                                                    <p class="card-text"><strong>Adoption Fee:</strong>{value.adoptionFee}</p>
                                                    <p class="card-text"><strong>Description:</strong>{value.description}</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                                </div>

                          


                                                </div>
                                    )
                                }
                            )
                        }
                    </div>
            </div>
        </div>           
    </div>




    </div>
  )
}

export default Viewpet