<template>
    <div class="modal-item">
        <div class="modal-item-title">
            <div>
                <span>{{ symbol }}</span>
                <i>-</i>
                <span>{{ lastPrice }}</span>
            </div>
        </div>
        <div class="modal-item-body">
            <div>
                <input type="number" :value="piece" @change="onchange" @input="onchange">
            </div>
        </div>
        <div class="modal-item-actions" v-if="!added">
            <button class="btn btn-sm btn-block btn-success" @click="$emit('addClick')">Add</button>
        </div>
        <div class="modal-item-actions" v-else>
            <button class="btn btn-sm btn-block btn-info" @click="$emit('updateClick')">Update</button>
            <button class="btn btn-sm btn-block btn-danger" @click="$emit('removeClick')">Remove</button>
        </div>

    </div>
</template>
<script>



export default {
    props: ['symbol', 'lastPrice', "piece", "added"],
    name: 'ModalItem',
    components: {
    },
    methods: {
        onchange: function (evt) {
            this.$emit("changePiece", evt);
        }
    }
}
</script>