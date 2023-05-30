function login() {
    const nameE1 = document.querySelector("#name");
    console.log(nameE1.value)

    localStorage.setItem("userName", nameE1.value);
    window.location.href = "waterstatus.html";
  }
