const nomeCurso = document.querySelector('#nomeCurso');
const notaCurso = document.querySelector('#notaCurso');
const addBtn = document.querySelector('#addBtn');
const cursosLista = document.querySelector('#cursosLista');
const alertIon = document.querySelector('#alert');

function clear() {
    nomeCurso.value = '';
    notaCurso.value = '';
}

addBtn.addEventListener('click', () => {
    const curso = nomeCurso.value;
    const nota = +notaCurso.value;

    if(curso.trim().length <= 0 || nota < 0 || nota > 5) {
        const errorAlert = document.createElement('ion-alert');
        errorAlert.header = 'Erro ao adicionar';
        errorAlert.message = 'Por favor, escreva o nome do curso e o avalie de 1 a 5.';
        errorAlert.buttons = ['Entendi'];
        alertIon.appendChild(errorAlert);
        errorAlert.present();
        clear();
        return;
    }

    const listagem = document.createElement('ion-item');
    listagem.innerHTML = `<strong>${curso}</strong>&nbsp;-&nbsp;${nota}/5`;
    cursosLista.appendChild(listagem);
    clear();
    
})
