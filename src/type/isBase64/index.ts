import {isString} from '../isString'

/** 是否是一个base64字符串 */
export function isBase64(data:any){
    if(!isString(data)){
        return false
    }
    try {
        let str = data.substring(data.indexOf(',') + 1 )
        return btoa(atob(str)) == str
    }catch(err){
        return false
    }
}