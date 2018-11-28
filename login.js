function login(){
	username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    
    localStorage.setItem("pengguna","user");
    localStorage.setItem("sandi","uaspti");

    let pengguna = localStorage.getItem("pengguna");
    let sandi = localStorage.getItem("sandi");
    
	if(username == pengguna && password == sandi){
        localStorage.setItem("user_name",username); //Is this necessary?
        localStorage.setItem("pass_word",password);
        window.location = "data.html";
    }
    else{
        alert("Otentikasi gagal, mohon lakukan otentikasi kembali");
    }
}

function onDocumentLoad() {
	login();
}