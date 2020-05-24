import React from 'react';

const Introduction = () => {
  return (
    <div className="jumbotron jumbotron-fluid" id="about" >
        
        <p style={{width:"80%",margin:"auto"}} className="text-center"  >
                The name is Akash Verma and I'm a software developer, with decent practical experience and knowledge in building webpages and programs; and very passionate about computer science.
        </p>
        <div className="container">
            <hr width="80%"></hr>
            <img className="img-fluid  mx-auto d-block" src="https://lh3.googleusercontent.com/_v6AXbjNGWC2vDeS8LN8UTl_GW_mV44sl7lKU4cbXfr-j5E1VhT2rZ41RVVx71nQQk28BWO4rOg5B1ongTocKMUfDKtUluLcebMW7b02oQvsAcgLNGGGfoPGX4sqbv5sWLzEEdx04to=w2400" id="dp" alt="Display Pic"></img><br/>
            <div className="text-center" id="AroundTheWeb">
                <a href="https://www.linkedin.com/in/akashvermaofskt/"  className="btn btn-dark btn-lg" id="but" title="LinkedIn">
                    <i className="fab fa-linkedin-in" id="ico" ></i>
                </a>
                <a href="https://www.facebook.com/akashvermaofskt"  className="btn btn-dark btn-lg" id="but" title="Facebook">
                    <i className="fab fa-facebook-f" id="ico" ></i>
                </a>
                <a href="https://github.com/akashvermaofskt"  className="btn btn-dark btn-lg" id="but" title="Github">
                    <i className="fab fa-github-alt" id="ico" ></i>
                </a> 
                <a href="https://instagram.com/noxious_av" className="btn btn-dark btn-lg" id="but" title="Instagran">
                    <i className="fab fa-instagram" id="ico" ></i>
                </a>
                <a href="https://docs.google.com/document/d/1Hxim5hOFMZQlAESOcJov0eIRjgDY7o0lmGDAfhCKWS4/edit#heading=h.ca0awj8022e2" className="btn btn-dark btn-lg" id="but" title="Resume">
                    <i className="fas fa-file-alt" id="ico" ></i>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Introduction;
