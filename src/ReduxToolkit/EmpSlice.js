import { createSlice } from "@reduxjs/toolkit";

const listOfEmployee = [
    { empId: 1, fullname: 'Naufal', salary: 4500 },
    { empId: 2, fullname: 'Firdaus', salary: 5500 },
    { empId: 3, fullname: 'Ahmad', salary: 3500 }
]

export const empSlice = createSlice({
    name: 'cart',
    initialState:{
        employee : [...listOfEmployee],
        totalSalary : listOfEmployee.reduce((sum,el)=> sum + el.salary,0)
    },
    reducers : {
        doGetEmps : state => {
            return state
        },
        doAddEmps: (state, action) =>{
            const {payload} = action
            return {
                ...state,
                employee : [...state.employee,payload],
                totalSalary : listOfEmployee.reduce((sum,el)=> sum + el.salary,0)
            }
        },
        doTamSalaries: (state, action) =>{
            const {payload} = action
            state.employee = state.employee.map(emp => {
                if(emp.empId === payload.id) {
                    emp.salary += 500
                    return emp
                } else {
                    return emp
                }
            })
        },
        doKurSalaries: (state,action) => {
            const {payload} = action
            state.employee = state.employee.map(emp => {
                if(emp.id === payload.id){
                    emp.salary += 500
                    return emp
                } else {
                    return emp
                }
            })
        }
    }
})

export const {doAddEmps,doGetEmps, doTamSalaries, doKurSalaries} = empSlice.actions
export default empSlice.reducer