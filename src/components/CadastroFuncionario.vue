<template>
  <v-form class="mg_10" @submit.prevent="submitForm">
    <h1>Cadastro de Funcionario</h1>
    <v-text-field v-model="nome" label="Nome"></v-text-field>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-select v-model="cargo" :items="cargos" label="Cargo"></v-select>
    <v-btn type="submit" color="primary">Cadastrar</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      email: '',
      cargo: '',
      cargos: ['Gerente', 'Vendedor', 'Estoquista'] 
    };
  },
  methods: {
    submitForm() {
      const dadosFuncionario = {
        nome: this.nome,
        email: this.email,
        cargo: this.cargo
      };
      console.log('Dados do formulário:', dadosFuncionario);
    }
  }
};
</script>

<style>
.mg_10{
    margin: 50px;
}
</style>