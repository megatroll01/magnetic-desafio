<template>
  <v-form class="mg-20" @submit.prevent="submitForm">
    <h1>Cadastro Produto</h1>
    <v-label class="mg-5 erro" v-if="semNome"> Nome não preenchido!</v-label>
    <v-text-field v-model="nome" label="Nome"></v-text-field>
    <v-label class="mg-5 erro" v-if="sempreco"> Preço não preenchido!</v-label>
    <v-text-field v-model="preco" label="Preço"></v-text-field>
    <v-label class="mg-5 erro" v-if="semDescricao"> Descrição não preenchido!</v-label>
    <v-textarea v-model="descricao" label="Descrição"></v-textarea>
    <v-btn type="submit" color="primary">Cadastrar</v-btn>
    <v-list v-if="listaProdutos && listaProdutos.length">
      <v-list-item v-for="(produto, index) in listaProdutos" :key="index">
        <v-list-item-content class="d-flex align-center">
        <v-list-item-title>{{ produto.nome }}</v-list-item-title>
        <v-list-item-subtitle class="mg_sub">R$ {{ produto.preco }}</v-list-item-subtitle>
        <v-list-item-subtitle class="mg_sub">{{ produto.descricao }}</v-list-item-subtitle>
        <v-btn class="h-20" @click="removerProduto(index)">
            <v-icon>mdi-delete</v-icon>
        </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      preco: '',
      descricao: '',
      listaProdutos: [],
      semNome: false,
      sempreco: false,
      semDescricao: false,
    };
  },
  methods: {
    submitForm() {
        this.semNome = false;
        this.sempreco = false;
        this.semDescricao = false;

        if(!this.nome){
            this.semNome = true;
        }
        if(!this.preco){
            this.sempreco = true;
        }
        if(!this.descricao){
            this.semDescricao = true;
        }
        if(this.nome && this.preco && this.descricao){
            const dadosProduto = {
                nome: this.nome,
                preco: this.preco,
                descricao: this.descricao
            };
            this.listaProdutos.push(dadosProduto);
            console.log('Dados do formulário:', dadosProduto);
            this.nome = "";
            this.preco = "";
            this.descricao = "";
        }
    },
    removerProduto(index) {
      this.listaProdutos.splice(index, 1);
    },
    formatarPreco() {
      let precoNumerico = this.preco.replace(/\D/g, '');

      let precoFormatado = parseFloat(precoNumerico).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      this.preco = precoFormatado;
    }
  }
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