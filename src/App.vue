<template>
  <div id="app">
    <div class="container">
      <nav>
        <div>
          <button class="btn btn-primary" @click="openModal">
            Add / Update
          </button>
        </div>
        <div>
          <button class="btn btn-primary" @click="refreshData">
            Refresh
          </button>
        </div>
      </nav>
      <main v-if="!loading">
        <div class="area">
          <ListArea :items="addedItems" @updateClick="update" @removeClick="remove" />
        </div>
        <div class="area">
          <PieChart :items="addedItems" />
        </div>
      </main>
      <main v-else>Loading...</main>
    </div>
    <ModalArea v-if="modal" :items="items" @addClick="add" @updateClick="update" @removeClick="remove"
      @closeClick="closeModal" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
// Components
import PieChart from './components/PieChart.vue'
import ListArea from './components/ListArea.vue'
import ModalArea from './components/ModalArea.vue'

export default {
  name: 'App',
  components: {
    PieChart,
    ListArea,
    ModalArea
  },
  data() {
    return {
      loading: false,
      modal: false,
    };
  },

  methods: {
    add(item) {
      this.$store.dispatch('addItem', item);
    },
    update(item) {
      this.$store.dispatch('updateItem', item);
    },
    remove(item) {
      this.$store.dispatch('removeItem', item);
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    async refreshData() {
      this.loading = true;
      await this.$store.dispatch('fetchItems');
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.$store.dispatch('fetchItems');
    this.loading = false;

  },
  computed: {
    ...mapState({
      items: state => state.items.map((item) => {
        let addItem = state.addedItems.find((addedItem) => addedItem.symbol === item.symbol)
        return { ...item, piece: addItem ? addItem.piece : 1, added: addItem ? true : false }
      }),
      addedItems: state => state.addedItems.map(item => ({ ...item, ...state.items.find(i => i.symbol == item.symbol) })),
    }),
  }
}
</script>
