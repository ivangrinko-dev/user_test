import express from "express"
import bildResponse from "../helper/bildresponse";
import { createUser, getAllUser, getUserById, updateUserById, deleteUserById } from "../service/user.service";
const route = express.Router()



route.get(`/`, async (req, res): Promise<void> => {
    try {
        const data = await getAllUser()
        bildResponse(res, 200, data)
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
})

route.get(`/:id`, async (req, res): Promise<void> => {
    try {
        const { id } = req.params
        const data = await getUserById(id)
        bildResponse(res, 200, data)
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
})


route.post(`/`, async (req, res): Promise<void> => {
    try {
        const { firstName, lastName, email, image, pdf} = req.body;
        const data = await createUser(firstName, lastName, email, image, pdf)
        bildResponse(res, 200, data)
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
})

route.put(`/:id`, async (req, res): Promise<void> => {
    try {
        const { id } = req.params
        const { name, surname, email, pwd } = req.body;
        const data = await updateUserById(id, name, surname, email, pwd)
        bildResponse(res, 200, data)
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
})

route.delete(`/:id`, async (req, res): Promise<void> => {
    try {
        const { id } = req.params
        const data = await deleteUserById(id)
        bildResponse(res, 200, data)
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
})

export default route 