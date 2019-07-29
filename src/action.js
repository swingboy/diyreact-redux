import * as ACTIONTYPE from './action-type';

// // 保存表单数据
// export const saveFormData = (value, datatype) => {
//   return {
//     type: ACTIONTYPE.SAVEFORMDATA,
//     value,
//     datatype,
//   }
// }

// // 保存图片地址
// export const saveImg = path => {
//   return {
//     type: ACTIONTYPE.SAVEIMG,
//     path,
//   }
// }

// // 保存图片地址
// export const clearData = () => {
//   return {
//     type: ACTIONTYPE.CLEARDATA,
//   }
// }

export const changeName = (value) => {
    return {
        type: ACTIONTYPE.CHANG_NAME,
        value
    }
}