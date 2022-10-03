
// Abre modal
function modal(){
    const modal = document.querySelector('.modalOverlay')
    modal.classList.add('active')
}

// Fecha modal
function cancelar(){
    const modal = document.querySelector('.modalOverlay')
    modal.classList.remove('active')
}