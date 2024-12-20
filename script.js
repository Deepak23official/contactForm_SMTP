document.getElementById('contact-form').addEventListener('submit',(e)=>{
    e.preventDefault();
})
    
    function sendMail(){
    let parms = {
        from_name: document.getElementById("name").value,
        name:      document.getElementById("name").value,
        email_id:  document.getElementById("email").value,
        Feedback : document.getElementById("subject").value,
        message:   document.getElementById("message").value
    }
    emailjs.send("service_yoh27lk","template_ezvasa7",parms).then(alert("Email Sent Successfully!.."))
    let val = document.getElementById("message").value
    let url = "https://wa.me/916374268144?text=" + "Feedback : "+ val + "%0a"
    window.open(url,"_blank").focus();
    document.getElementById("name").value = ""
    document.getElementById("name").value =""
    document.getElementById("email").value = ""
    document.getElementById("subject").value = ""
    document.getElementById("message").value = ""
}