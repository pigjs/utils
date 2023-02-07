import { isNull } from "../isNull";
import { isUndefined } from "../isUndefined";
import {isEmptyArray} from '../isEmptyArray'
import {isEmptyObject} from '../isEmptyObject'
import {isEmptyString} from '../isEmptyString'

/** 判断是否为空 包括 空数组 空对象 空字符串 undefined null */
export function isEmpty(data:any){
    if(isNull(data)){
        return true
    }
    if(isUndefined(data)){
        return true
    }
    if(isEmptyArray(data)){
        return true
    }
    if(isEmptyObject(data)){
        return true
    }
    if(isEmptyString(data)){
        return true
    }
    return false
}