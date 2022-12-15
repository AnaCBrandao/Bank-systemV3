import { login } from "./login"

describe('login', () => {

    const mockEmail = 'ana@gmail.bank'
    const mockSenha = '1234'

    it('Deve retornar true caso o email e senha sejam válidos', async() => {
        const response = await login(mockEmail, mockSenha)
        expect(response).toBeTruthy()
    })

    it('Deve retornar false caso o email ou senha sejam inválidos', async() => {
        const response = await login('email@invalido.com', '5842')
        expect(response).toBeFalsy()
    })
}) 