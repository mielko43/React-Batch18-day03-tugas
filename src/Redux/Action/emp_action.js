import * as ActionType from '../Constant/emp_constant'

export const doGetEmp = (payload) => ({
    type: ActionType.GET_EMP,
    payload
})

export const doAddEmp = (payload) => ({
    type: ActionType.ADD_EMP,
    payload
})

export const doTamSalary = (payload) => ({
    type: ActionType.TAM_GAJI,
    payload
})

export const doKurSalary = (payload) => ({
    type: ActionType.KUR_GAJI,
    payload
})