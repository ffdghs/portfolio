let selectRegion = document.querySelector('#region');
let selectDpt = document.querySelector('#department');
let inputVille = document.querySelector('#ville');
let villeListe = document.querySelector('#villeListe');
let pseudo = document.querySelector('#pseudo');
let pseudoExiste = document.querySelector('#pseudoExiste');
let iconePw = document.querySelector('i');
let buttonPw = document.querySelector('#buttonPw');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let pwOk = document.querySelector('#pwOk');


fetch('../serveur/api.php?get=regions')
    .then(function(fetchregions){
        return fetchregions.json();
    })
    .then(function(regions){
        for(values of regions) {
            option = selectRegion.appendChild(document.createElement('option'));
            option.value = values.code;
            option.innerHTML = values.name;
        }
    })


selectRegion.addEventListener('change',function(){
    fetch('../serveur/api.php?get=dpt&region='+this.value)
        .then(function(fetchdpts){
            return fetchdpts.json();
        })
        .then(function(dpts){
            selectDpt.innerHTML = '';
            option = selectDpt.appendChild(document.createElement('option'));
            option.innerHTML = '-- Veuillez choisir un département --';
            for(values of dpts) {
            option = selectDpt.appendChild(document.createElement('option'));
            option.value = values.code;
            option.innerHTML = values.name + ' (' + values.code + ')';
            }
        })
})

inputVille.addEventListener('keyup',function(){
    fetch('../serveur/api.php?get=ville&dpt='+selectDpt.value+'&search='+inputVille.value)
        .then(function(fetchvilles){
            return fetchvilles.json();
        })
        .then(function(villes){
            console.log(villes);
            villeListe.innerHTML = '';
            for(values of villes) {
                option = villeListe.appendChild(document.createElement('option'));
                option.value = values.zip_code;
                option.innerHTML = values.name + ' (' + values.zip_code + ')';
            }

        })
})

pseudo.addEventListener('blur',function(){
    fetch('../serveur/api.php?get=pseudo'+'&login='+pseudo.value)
        .then(function(fetchPseudo){
            return fetchPseudo.text();
        })
        .then(function(pseudo){
            if(pseudo > 0) {
                pseudoExiste.classList.replace('d-none','d-block');
            }
            else {
                pseudoExiste.classList.replace('d-block','d-none');
            }
        })
})

confirmPassword.addEventListener('blur',function(){
    if(password.value != confirmPassword.value) {
        pwOk.classList.replace('d-none','d-block');
    }
    else {
        pwOk.classList.replace('d-block','d-none');
    }
})
password.addEventListener('blur',function(){
    if(password.value != confirmPassword.value) {
        pwOk.classList.replace('d-none','d-block');
    }
    else {
        pwOk.classList.replace('d-block','d-none');
    }
})

buttonPw.addEventListener('mousedown',function(){
    iconePw.classList.replace('fa-eye','fa-eye-slash')
    password.setAttribute('type','text');
})
buttonPw.addEventListener('mouseup',function(){
    iconePw.classList.replace('fa-eye-slash','fa-eye')
    password.setAttribute('type','password');
})
buttonPw.addEventListener('mouseout',function(){
    iconePw.classList.replace('fa-eye-slash','fa-eye')
    password.setAttribute('type','password');
})

selectDpt.addEventListener('change',function(){
    if(selectDpt.value != 'notSelected') {
        inputVille.removeAttribute('disabled');
        inputVille.value = '';
    }
})