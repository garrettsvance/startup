
    function getUserName() {
        return localStorage.getItem('userName') ?? 'Guest';
    }

    //let poolsize = document.getElementById('poolsize').value;

    let phlevel = document.getElementById('phlevel').value;

    let boundchl = document.getElementById('boundchl').value;

    let freechl = document.getElementById('freechl').value;

    let alka = document.getElementById('alka').value;



    const out1 = document.getElementById('output1')

    const poolS = document.getElementById('poolsize');

    const userNameE1 = document.querySelector('.user-name');
    userNameE1.textContent = this.getUserName();

    function recs() {
        out1.innerHTML = poolS.value; 
    }

    subBtn.addEventListener('click', recs);
  