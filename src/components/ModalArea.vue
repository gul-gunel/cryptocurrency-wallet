<template>
    <div class="modal">
        <div class="modal-container">
            <div class="modal-search">
                <input placeholder="Search" type="text" @change="onchange" @input="onchange">
                <button class="btn btn-danger" @click="() => {
                    $emit('closeClick');
                    search = '';
                }">
                    Close
                </button>
            </div>
            <div class="modal-body">
                <ModalItem v-for="(item, index) in filterItems(items, search)" :key="index" :symbol="item.symbol"
                    :lastPrice="item.lastPrice" :piece="item.piece" :added="item.added"
                    @addClick="$emit('addClick', item)" @updateClick="$emit('updateClick', item)"
                    @removeClick="$emit('removeClick', item)" @changePiece="(evt) => {
                        item.piece = parseInt(evt.target.value);
                        item = { ...item };
                    }" />
            </div>
        </div>
    </div>
</template>
<script>
import ModalItem from './ModalItem.vue';

export default {
    props: ['items', "addedItems"],
    name: 'ModalArea',
    data() {
        return {
            search: ""
        }
    },
    components: {
        ModalItem
    },
    methods: {
        filterItems: (items = [], search) => {
            if (search.length > 2)
                return items.filter((item) => String(item.symbol).toLowerCase().indexOf(String(search).toLowerCase()) > -1)
            else return items.filter((item) => item.added)

        },

        onchange: function (evt) {
            console.log(evt)
            this.search = evt.target.value
        }
    }
}
</script>