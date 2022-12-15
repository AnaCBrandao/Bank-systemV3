import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false,
    email: 'ana@gmail.bank',
    senha: '1234'
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })
 
    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    // it('Deve retornar o email', () => {
    //     const mockGetEmail = jest.spyOn(Storage.prototype, 'getItem')
    //     getEmail('email')
    //     expect(mockGetEmail).toHaveBeenCalledWith('email')
    // })
})