function bildResponse(res, code, message){
    res.status(code).send(message)
}

export default bildResponse