'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "ana",
    email: "pedro@mail.com",
    celular: "1999183946",
    endereco: "Campinas, Sp"
}

const creatClient = (client) => {
    let dbClient = JSON.parse(localStorage.getItem('dbClient')) || []
    dbClient.push (client)
    localStorage.setItem("dbClient", JSON.stringify(client))
}

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)