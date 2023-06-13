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
  