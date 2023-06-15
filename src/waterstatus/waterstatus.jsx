import React from 'react';
import './waterstatus.css'

export function waterstatus() {
    
    const statusUpdate = 'statusUpdate';
    
    function getUserName() {
        return localStorage.getItem('userName') ?? 'Guest';
    }

    const out1 = document.getElementById('output1')

    const poolS = document.getElementById('poolsize');

    const userNameE1 = document.querySelector('.user-name');
    userNameE1.textContent = this.getUserName();

    function recs() {

        let phlevel = document.getElementById('phlevel').value;

        let boundchl = document.getElementById('boundchl').value;

        let freechl = document.getElementById('freechl').value;

        let alka = document.getElementById('alka').value;

        // let y = document.getElementById("phOut");
        // y.innerHTML = phlevel

        // ph level
        if (phlevel < 7.1) {
            var x = document.getElementById("phLow");
            x.style.display = "block";
        } else if (phlevel > 7.9) {
            var x = document.getElementById("phHigh");
            x.style.display = "block";
        } else {
            var x = document.getElementById("phOpt");
            x.style.display = "block";
        }   

        // total chlorine
        if (boundchl < 3) {
            var x = document.getElementById("totChlLow");
            x.style.display = "block";
        } else if (boundchl > 3) {
            var x = document.getElementById("totChlHigh");
            x.style.display = "block";
        } else {
            var x = document.getElementById("totChlOpt");
            x.style.display = "block";
        }
        
        // free chlorine
        if (freechl < 1) {
            var x = document.getElementById("frChlLow");
            x.style.display = "block";
        } else if (freechl > 3.6) {
            var x = document.getElementById("frChlHigh");
            x.style.display = "block";
        } else {
            var x = document.getElementById("frChlOpt");
            x.style.display = "block";
        }

        // alkaline level
        if (alka < 80) {
            var x = document.getElementById("alkLow");
            x.style.display = "block";
        } else if (alka > 120) {
            var x = document.getElementById("alkHigh");
            x.style.display = "block";
        } else {
            var x = document.getElementById("alkOpt");
            x.style.display = "block";
        }

    }

    function logout() {
        localStorage.removeItem('userName');
        fetch(`/api/auth/logout`, {
          method: 'delete',
        }).then(() => (window.location.href = '/'));
      }

    subBtn.addEventListener('click', recs);

        return (
            <>
                <main className="container-fluid">
                    <div className="user">
                        <p>Welcome, <span className="user-name"></span>!</p>
                    </div>
                    <div id="picture" className="picture-box"><img src="Pool-Test-Strips.jpg" alt="random" style="height:375px"/></div>
                    <div className="row text-center mainpage">
                            <div className="checkStatus">
                                <h2>Check Current Water Status/Receive Recommendations</h2>
                                <form>
                                    <label for="poolsize">Please enter your <strong>pool size</strong> in "gallons:"</label>
                                    <br />
                                    <input type="number" id="poolsize" placeholder="Gallons" />
                                    <br />
                                    <label for="phlevel">Please enter your current <strong>PH</strong> level readings as a whole number: (Ex: 2.0) </label>
                                    <br />
                                    <input type="number" id="phlevel" placeholder="PH" />
                                    <br />
                                    <label for="boundchl">Please enter your <strong>Total Chlorine </strong>level readings as it is shown on your test: (Ex: 0.5, 1, 5, etc.) </label>
                                    <br />
                                    <input type="number" id="boundchl" placeholder="Total Chlorine" />
                                    <br />
                                    <label for="freechl">Please enter your <strong>Free Chlorine</strong> level readings as it is shown on your test: (Ex: 0.5, 1, 5, etc.) </label>
                                    <br />
                                    <input type="number" id="freechl" placeholder="Free Chlorine" />
                                    <br />
                                    <label for="alkalinity">Please enter your <strong>Alkalinity</strong> level readings (PPM) as it is shown on your test:</label>
                                    <br />
                                    <input type="number" id="alka" placeholder="Alkalinity" />
                                    <br />
                                    <input type="button" id="subBtn" value="Submit and Receieve Recommendations" />
                                </form>
                            </div>
                    </div>
                    <div className="poolGal" id="poolG">
                        <p>Based on your pool size of <span className="output" id="output1"></span>:</p>
                    </div>
                    <br />
                    <div className="phlvl" id="phLow">
                        <p>Your PH levels are lower than optimal. You'll want to add some acids to your pool. Here are some recommended products:</p>
                    </div>
                    <div className="phlvl" id="phOpt">
                        <p>Your PH levels are just right! No further action is needed at this time.</p>
                    </div>
                    <div className="phlvl" id="phHigh">
                        <p>Your PH levels are higher than optimal. You'll want to add some alkalis to your pool. Here are some recommended products:</p>
                    </div>
                    <br />
                    <div className="totChl" id="totChlLow">
                        <p>Your Total Chlorine levels are lower than optimal. You'll want to add some chlorine tablets to your pool. Here are some recommended products:</p>
                    </div>
                    <div className="totChl" id="totChlOpt">
                        <p>Your Total Chlorine levels are just right! No further action is needed at this time.</p>
                    </div>
                    <div className="totChl" id="totChlHigh">
                        <p>Your Total Chlorine levels are higher than optimal. You'll want to keep your pool uncovered in order for the sunlight to dissapate the chlorine in your pool. You can also consider diluting the pool with more water if possible. </p>
                    </div>
                    <br />
                    <div className="frChl" id="frChlLow">
                        <p>Your Free Chlorine levels are lower than optimal. You'll want to "shock" your pool using calcium hypochlorite. Here are some recommended products:</p>
                    </div>
                    <div className="frChl" id="frChlOpt">
                        <p>Your Free Chlorine levels are just right! No further action is needed at this time.</p>
                    </div>
                    <div className="frChl" id="frChlHigh">
                        <p>Your Free Chlorine levels are higher than optimal. You'll want to keep your pool uncovered in order for the sunlight to dissapate the chlorine in your pool. You can also consider diluting the pool with more water if possible.</p>
                    </div>
                    <br />
                    <div className="alk" id="alkLow">
                        <p>Your Alkaline levels are lower than optimal. You'll want to add some sodium carbonate to your pool.</p>
                    </div>
                    <div className="alk" id="alkOpt">
                        <p>Your Alkaline levels are just right! No further action is needed at this time.</p>
                    </div>
                    <div className="alk" id="alkHigh">
                        <p>Your Alkaline levels are higher than optimal. You'll want to add some sodium bisulfate to bring those levels back down.</p>
                    </div>
                </main>
            </>
        )
}