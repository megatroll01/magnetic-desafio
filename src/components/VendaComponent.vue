<template>
  <v-form class="mg-20" @submit.prevent="submitForm">
  <h1>Vendas</h1>
  <v-label class="erro" v-if="semProduto"> Produto não selecionado!</v-label>
    <v-select
      v-model="produtoSelecionado"
      :items="produtos"
      label="Produto"
    ></v-select>
    <v-label class="mg-5 erro" v-if="semQuantidade"> Quantidade não preenchida!</v-label>
    <v-text-field v-model="quantidade" label="Quantidade"></v-text-field>
    <br>
    <v-btn @click="adicionarProduto" color="primary">Adicionar Produto</v-btn>
    <br>
    <v-label class="mg-5 erro" v-if="semVenda"> Nenhum produto na venda!</v-label>
    <v-list v-if="listaProdutos && listaProdutos.length">
      <v-list-item v-for="(produto, index) in listaProdutos" :key="index">
        <v-list-item-content class="d-flex align-center">
        <v-list-item-title>{{ produto.produto }}</v-list-item-title>
        <v-list-item-subtitle class="mg_sub">Quantidade: {{ produto.quantidade }}</v-list-item-subtitle>
        <v-btn class="h-20" @click="removerProduto(index)">
            <v-icon>mdi-delete</v-icon>
        </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <br />
    <br />
    <v-btn type="submit" color="primary">Cadastrar</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      produtoSelecionado: "",
      quantidade: "",
      produtos: ["Produto A", "Produto B", "Produto C"],
      listaProdutos: [],
      semProduto: false,
      semQuantidade: false,
      semVenda: false,
    };
  },
  methods: {
    adicionarProduto() {
        this.semProduto = false;
        this.semQuantidade = false;
        this.semVenda = false;

        if(!this.produtoSelecionado){
            this.semProduto = true;
        }
        if(!this.quantidade){
            this.semQuantidade = true;
        }

      if (this.produtoSelecionado && this.quantidade) {
        const produto = {
          produto: this.produtoSelecionado,
          quantidade: this.quantidade,
        };
        this.listaProdutos.push(produto);
        this.produtoSelecionado = "";
        this.quantidade = "";
      }
    },
    removerProduto(index) {
      this.listaProdutos.splice(index, 1);
    },
    submitForm() {
        if(this.listaProdutos.length == 0){
            this.semVenda = true;
        }else{
        const dadosVenda = {
            produtos: this.listaProdutos,
        };
        console.log("Dados do formulário:", dadosVenda);
      }
    },
  },
};
</script>

<style>
.erro{
  color: red;
}
.mg-20{
    margin: 20px;
}
.mg-5{
  margin: 5px;
}
.mg_sub {
  margin: 15px 20px 15px 20px;
}
.h-20{
    height: 20px;
}
</style>