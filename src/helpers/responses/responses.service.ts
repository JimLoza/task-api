import { ResponseServiceI } from "./interface/response.interface";

const ResponseService = (success: boolean, message: string, data: any, statusCode: number): ResponseServiceI => {
    return {
        success,
        message,
        data,
        statusCode
    }
}
export { ResponseService }