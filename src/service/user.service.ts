import { createUserDb, getAllUserDb, getUserByIdDb, updateUserByIdDb, deleteUserByIdDb } from '../repository/user.repository'
import  iUser  from '../interfaces/index'

async function getAllUser(): Promise<iUser[]> {
    const data = await getAllUserDb()
    if (data.length == 0) throw new Error('бд не заполнена')
    return data
}

async function getUserById(id: string): Promise<iUser[]> {
    const data = await getUserByIdDb(id)
    if (data.length == 0) throw new Error('такого id нет')
    return data

}


async function createUser(firstName: string, lastName: string, email: string, image: string, pdf: any): Promise<iUser[]> {
    const data = await createUserDb(firstName, lastName, email, image, pdf)
    if (data.length == 0) throw new Error('данные не сохранены')
    return data
}

async function updateUserById(id: string, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const data = await updateUserByIdDb(id, name, surname, email, pwd)
    if (data.length == 0) throw new Error('такого id нет')
    return data
}

async function deleteUserById(id: string): Promise<iUser[]> {
    const data = await deleteUserByIdDb(id)
    if (data.length == 0) throw new Error('такого id нет')
    return data
}

export { createUser, getAllUser, getUserById, updateUserById, deleteUserById };