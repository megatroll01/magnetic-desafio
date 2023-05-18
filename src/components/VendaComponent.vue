<template>
  <v-form class="mg_10" @submit.prevent="submitForm">
    <v-select v-model="produtoSelecionado" :items="produtos" label="Produto"></v-select>
    <v-text-field v-model="quantidade" label="Quantidade"></v-text-field>
    <v-btn @click="adicionarProduto" color="primary">Adicionar Produto</v-btn>
    
    <v-list v-if="listaProdutos && listaProdutos.length">
      <v-list-item v-for="(produto, index) in listaProdutos" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ produto.produto }}</v-list-item-title>
          <v-list-item-subtitle>Quantidade: {{ produto.quantidade }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-btn icon small @click="removerProduto(listaProdutos.length - 1)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <br>
    <br>
    <v-btn type="submit" color="primary">Cadastrar</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      produtoSelecionado: '',
      quantidade: '',
      produtos: ['Produto A', 'Produto B', 'Produto C'], 
      listaProdutos: []
    };
  },
  methods: {
    adicionarProduto() {
      if (this.produtoSelecionado && this.quantidade) {
        const produto = {
          produto: this.produtoSelecionado,
          quantidade: this.quantidade
        };
        this.listaProdutos.push(produto);
        this.produtoSelecionado = '';
        this.quantidade = '';
      }
    },
    removerProduto(index) {
      this.listaProdutos.splice(index, 1);
    },
    submitForm() {
      const dadosVenda = {
        produtos: this.listaProdutos
      };
      console.log('Dados do formulário:', dadosVenda);
    }
  }
};
</script>

<style>
.mg_10{
    margin: 50px;
}
</style>