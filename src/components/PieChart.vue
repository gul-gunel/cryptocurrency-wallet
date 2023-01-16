<template>
    <Pie :data="data" :options="options" />
</template>

<script>

import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'vue-chartjs'
import randomcolor from "randomcolor"

ChartJS.register(ArcElement, Tooltip)
const Colors = Array(20).fill().map(() => randomcolor())


export default {
    name: 'PieChart',
    props: ['items'],
    components: {
        Pie
    },
    data() {
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    methods: {
        returnData(items) {
            if (items.length > 0)
                return {
                    labels: [...items.map((item) => item.symbol)],
                    datasets: [
                        {
                            data: [...items.map((item) => item.piece)],
                            backgroundColor: [...items.map((i, index) => Colors[index % 20] + "90")],
                            borderColor: [...items.map((i, index) => Colors[index % 20])]
                        }
                    ]
                }
            else return {
                labels: [1],
                datasets: [
                    {
                        data: [1],
                        backgroundColor: ['#D9D9D9'],
                        borderColor: ['#000']
                    }
                ]
            }
        }
    },
    computed: {
        data: {
            get() {
                return this.returnData(this.items)
            }
        }
    }


}
</script>