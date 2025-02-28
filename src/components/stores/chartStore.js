import {defineStore} from "pinia";

export const useChartStore = defineStore('chart',{
    state: () => {
        const originalName = ''
        const name = ''
        const value = ''
        const pureColor = "red";
        const elements = [
            {
                name: "сектор-1",
                value: 25,
                color: '#FF6384',
            },
            {
                name: "сектор-21",
                value: 100,
                color: '#FFCD56',
            },
            {
                name: "сектор-23",
                value: 25,
                color: '#4BC0C0',
            },
        ]



        return {
            originalName,
            name,
            value,
            pureColor,
            elements
        }
    },
    getters: {

    },
    actions: {

    }
})