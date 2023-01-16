<template>
    <div class="list-item">
        <div class="list-item-title">
            <div>
                <span>{{ symbol }}</span>
            </div>
            <div>
                <span>{{ lastPrice }}</span>
                <i>-</i>
                <span>{{ weightedAvgPrice }}</span>
            </div>
        </div>
        <div class="list-item-body">
            <div>
                <input type="number" min="1" :value="piece" @change="onchange" @input="onchange">
            </div>
        </div>
        <div class="list-item-actions">
            <button class="btn btn-sm btn-block btn-info-soft" @click="$emit('updateClick')">update</button>
            <button class="btn btn-sm btn-block btn-danger-soft" @click="$emit('removeClick')">remove</button>
        </div>
    </div>
</template>

<script>


export default {
    props: ['symbol', 'lastPrice', 'weightedAvgPrice', "piece"],
    name: 'ListItem',
    components: {
    },
    methods: {
        onchange: function (evt) {
            this.$emit("changePiece", evt);
        }
    }
}
</script>