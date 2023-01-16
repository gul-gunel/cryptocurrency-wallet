<template>
    <div class="list-area">
        <ListItem v-for="(item, index) in items" :key="index" :lastPrice="item.lastPrice"
            :weightedAvgPrice="item.weightedAvgPrice" :symbol="item.symbol" :piece="item.piece"
            @updateClick="$emit('updateClick', item)" @removeClick="$emit('removeClick', item)"
            @changePiece="(evt) => {
                item.piece = parseInt(evt.target.value);
                item = { ...item };
            }" />
    </div>
</template>

<script>

import ListItem from './ListItem.vue'


export default {
    name: 'ListArea',
    props: ['items'],
    components: {
        ListItem
    },
}
</script>