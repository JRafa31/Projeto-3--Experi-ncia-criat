document.addEventListener('DOMContentLoaded', function() {

    console.log("DOM fully loaded and parsed");
    document.getElementById('btn').addEventListener('click', btnClicked);
    document.getElementById('nome').addEventListener('click', printName);

});

function btnClicked() {
    alert('Olá! Você clicou no botão.');
    console.log("Teste console.log")
}

function printName() {
    let name = document.getElementById('nome').value;
    alert('Olá, ' + name + '!');
    console.log("Nome enviado: " + name);
    document.getElementById('nome').value = '';
}
