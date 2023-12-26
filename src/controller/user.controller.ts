import express from "express"
import bildResponse from "../helper/bildresponse";
import { createUser, getAllUser, getUserById, updateUserById, deleteUserById } from "../service/user.service";
import { log } from "console";
const route = express.Router()
// import fileservice from "../fileservice/fileservice";
//  import * as uuid from 'uuid';
// import * as path from 'path';

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
        // const createdPost = await create({ image: fileName, pdf: fileName});
        // console.log(req.files)
        const {image} = req.files.image
        const {pdf} = req.files.pdf
        const { firstName, lastName, email} = req.body;
        const data = await createUser(firstName, lastName, email, image, pdf)
        console.log(firstName, lastName, email, image, pdf)
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