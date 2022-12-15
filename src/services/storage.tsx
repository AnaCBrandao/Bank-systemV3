interface IDIoBank {
    login: boolean;
    email: string;
    senha: string;
}

const dioBank = {
    login: false,
    email: 'ana@gmail.bank',
    senha: '1234'
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

// export const getEmail = (): string | null  => {
//     return localStorage.getEmail('email')
// }

// export const getEmail = (item: any): string  => {
//     return localStorage.getItem(item).email
// }

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
