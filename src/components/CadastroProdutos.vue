<template>
  <v-form class="mg_10" @submit.prevent="submitForm">
    <h1>Cadastro Produto</h1>
    <v-text-field v-model="nome" label="Nome"></v-text-field>
    <v-text-field v-model="preco" label="Preço"></v-text-field>
    <v-textarea v-model="descricao" label="Descrição"></v-textarea>
    <v-btn type="submit" color="primary">Cadastrar</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      preco: '',
      descricao: ''
    };
  },
  methods: {
    submitForm() {
      const dadosProduto = {
        nome: this.nome,
        preco: this.preco,
        descricao: this.descricao
      };
      console.log('Dados do formulário:', dadosProduto);
    }
  }
};
</script>

<style>
.mg_10{
    margin: 50px;
}
</style>