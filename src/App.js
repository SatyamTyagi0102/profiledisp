import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App" >
      <div className="container-fluid" style={{display:"inline"}}>
          <div className="row"style={{backgroundColor:"whitesmoke"}}  >
            <div classname="col-eq-height" style={{margin:"10px", padding:"10px" ,backgroundColor:"white"}}>
              <img className='p1' src={require('./icons/vk.jpeg')} alt="nothing to show"/>
            </div>

            <div className="col" >
              <div className="row">
                <div className="col-eq-height" style={{margin:"10px", padding:"10px",backgroundColor:"white"}}>
                  <h6>About</h6>
                  <img className='p1' src={require('./icons/img2.jpeg')} alt="nothing to show"/>
                </div>
                <div className = "col-eq-height">
                  Full Name
                  <br/><b>Virat Kohli</b><br/>
                  City
                  <br/><b>New Delhi, India</b><br/>     
                  Date of birth
                  <br/><b>20/01/1980</b><br/>
                  Height
                  <br/><b>178cm</b><br/>
                  Weight
                  <br/><b>70 kg</b><br/>                                             
                </div>
              </div>
              <p style={{width:"90%"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book.
              </p>
            </div>
            <div className="col-eq-height" style={{margin:"20px", padding:"10px",backgroundColor:"white"}}>
              <h6>Last 7 Matches</h6>
              <img className='p1' src={require('./icons/img3.jpeg')} alt="nothing to show"/>
            </div>
            <div className="col-eq-height" style={{margin:"20px", padding:"10px",backgroundColor:"white"}}>
              <div style={{fontWeight:'bold', textAlign:'left', backgroundColor:'white', padding:'10px'}} scope="col">Career Information
              </div>

              <table className="table">
                <tbody>
                  <tr>
                    <th className="f3" scope="row">Test Debut</th>
                    <td className="f4">vs West Indies at Sabrina park, June 20, 2011</td>
                  </tr>
                  <tr>
                    <th className="f3" scope="row">Test Debut</th>
                    <td className="f4">vs West Indies at Sabrina park, June 20, 2011</td>
                  </tr>
                  <tr>
                    <th className="f3" scope="row">Test Debut</th>
                    <td className="f4">vs West Indies at Sabrina park, June 20, 2011</td>
                  </tr>
                  <tr>
                    <th className="f3" scope="row">Test Debut</th>
                    <td className="f4">vs West Indies at Sabrina park, June 20, 2011</td>
                  </tr>
                  <tr>
                    <th className="f3" scope="row">Test Debut</th>
                    <td className="f4">vs West Indies at Sabrina park, June 20, 2011</td>
                  </tr>
                  
                      <tr>
                      <th className="f3" scope="row">Test Debut</th>
                      <td className="f4">vs West Indies at Sabrina park, June 20, 2011</td>
                    </tr>
                    <tr>
                      <th className="f3" scope="row">Test Debut</th>
                      <td className="f4">vs West Indies at Sabrina park, June 20, 2011</td>
                    </tr>
                    <tr>
                      <th className="f3" scope="row">Test Debut</th>
                      <td className="f4">vs West Indies at Sabrina park, June 20, 2011</td>
                    </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div classname= "row" style={{display: "flex", flexWrap: "wrap", margin:"0px", padding:"0px",backgroundColor:"whitesmoke"}}>
          <div classname= "col-eq-width col-9" style={{margin:"10px", padding:"10px",backgroundColor:"white"}}>
          <div style={{fontWeight:'bold', textAlign:'left', backgroundColor:'white', padding:'10px'}} scope="col">Battling Career Summary
          

            <table className="table" >   
         
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">M</th>
                <th scope="col">Inn</th>
                <th scope="col">Not Out</th>
                <th scope="col">Runs</th>
                <th scope="col">Highlight</th>
                <th scope="col">Avg</th>
                <th scope="col">Balls Faced</th>
                <th scope="col">SR</th>
                <th scope="col">100s</th>
                <th scope="col">200s</th>
                <th scope="col">50s</th>
                <th scope="col">4s</th>
                <th scope="col">6s</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="f1" scope="row">Test</th>
                  <td>86</td>
                  <td>145</td>
                  <td>10</td>
                  <td>7240</td>
                  <td>254</td>
                  <td>53.63</td>
                  <td>12552</td>
                  <td>57.68</td>
                  <td>27</td>
                  <td>7</td>
                  <td>22</td>
                  <td>811</td>
                  <td>22</td>
                </tr>
                <tr>
                  <th className="f1" scope="row">ODI</th>
                  <td>86</td>
                  <td>145</td>
                  <td>10</td>
                  <td>7240</td>
                  <td>254</td>
                  <td>53.63</td>
                  <td>12552</td>
                  <td>57.68</td>
                  <td>27</td>
                  <td>7</td>
                  <td>22</td>
                  <td>811</td>
                  <td>22</td>
                </tr>
                <tr>
                  <th className="f1" scope="row">T-20</th>
                  <td>86</td>
                  <td>145</td>
                  <td>10</td>
                  <td>7240</td>
                  <td>254</td>
                  <td>53.63</td>
                  <td>12552</td>
                  <td>57.68</td>
                  <td>27</td>
                  <td>7</td>
                  <td>22</td>
                  <td>811</td>
                  <td>22</td>  
                </tr>
                <tr>
                  <th className="f1" scope="row">IPL</th>
                  <td>86</td>
                  <td>145</td>
                  <td>10</td>
                  <td>7240</td>
                  <td>254</td>
                  <td>53.63</td>
                  <td>12552</td>
                  <td>57.68</td>
                  <td>27</td>
                  <td>7</td>
                  <td>22</td>
                  <td>811</td>
                  <td>22</td>  
                </tr>
                              
              </tbody>
            </table>
            </div>
          </div>
          <div className="col-eq-width col-3" style={{margin:"10px", padding:"10px",backgroundColor:"white"}}>
            <div className="f3" >
            <h6>Performance Analysis</h6>
            <p>Runs scored per match</p>
            <img className='p1' src={require('./icons/img4.jpeg')} alt="nothing to show"/>
            </div>
          </div>  
        </div>
      </div>

  
  );
}

export default App;
