import React from 'react'

const Addpet = () => {
  return (
    <div>

    <div className="container">
            <h4>REGISTRATION FORM</h4>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label"> Pet ID</label>
                            <input type="text" className="form-control" />

                        </div>
                        
                        
                       
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Pet Name</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Species</label>
                            <input type="text" className="form-control" />


                        </div>
                       
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label"> Breed</label>
                            <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label"> Age</label>
                            <input type="text" className="form-control" />


                        </div>

                       <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <div>
    
                                <label htmlFor="" className="form-label me-3 ms-1">Gender   </label>
                                <input type="radio" name="radio" id="radio1" checked/>
                                <label for="radio1" class="me-3 ms-1">Male</label>

                                <input type="radio" name="radio" id="radio2"/>
                                <label for="radio2" class="me-3 ms-1">Female</label>

                                
                            </div>
                            


                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">   Vaccinated  </label>
                            <select name="" id="" className="form-control">
                                <option value="">---select--</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>


                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Adoption Fee</label>
                            <input type="text" className="form-control" />


                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label"> image URL </label>
                            <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">  Description </label>
                            <textarea name="" id="" className="form-control"></textarea>


                        </div>

                        

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success">Add Pet</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Addpet