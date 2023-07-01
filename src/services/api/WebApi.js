import ApiCaller from '../../ultis/apiCaller'
import * as Config from '../../config/config'

class WebApi {
    static getList(name) {
        let endpoint = name;
        return ApiCaller.callApiVQMM(endpoint, 'GET')
    }


    static deletetList(id) {
        let endpoint = id;
        return ApiCaller.DeleteCate(endpoint, 'POST')
    }

    static addList(data, data1) {
        console.log(data1);
        let endpoint = data
        return ApiCaller.CreateCate(endpoint, data1)
    }
}

export default WebApi