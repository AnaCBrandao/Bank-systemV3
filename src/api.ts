const conta = {
    email: 'ana@gmail.bank',
    senha: '1234',
    name: 'Ana Brandão',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
