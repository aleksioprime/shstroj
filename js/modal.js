function showModal() {
    let modal = document.querySelector('#modal');
    modal.style.display = "block";
    let close = document.querySelector('.close');
    close.onclick = () => { modal.style.display = "none" }
}


ItcSubmitForm.getOrCreateInstance('form');

document.addEventListener('itc.successSendForm', (e) => {
    el = e.target.closest('.modal-body').querySelector('.success-message');
    el.style.display = 'flex';
    e.target.style.display = 'none';
    el.querySelector('.success-message-btn').onclick = () => {
        document.querySelector('#modal').style.display = "none";
        el.style.display = 'none';
        e.target.style.display = 'block';
        ItcSubmitForm.getOrCreateInstance(e.target).reset();
    }
});

let phone = document.getElementById('phone');
let phoneOptions = {
    mask: '{8}(000)000-00-00',
    lazy: false
} 
let maskPhone = new IMask(phone, phoneOptions);


var email = document.getElementById('email');
var emailOptions = {    
    mask:function (value) {
        if(/^[a-z0-9_\.-]+$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
            return true;
        return false;
            },
    lazy: false
} 
var maskEmail = new IMask(email, emailOptions);
