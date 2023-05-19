<template>
  <v-form class="mg-20" @submit.prevent="submitForm">
    <h1>Cadastro de Funcionario</h1>
    <v-label class="mg-5 erro" v-if="semNome"> Nome não preenchido!</v-label>
    <v-text-field v-model="nome" label="Nome"></v-text-field>
    <v-label class="mg-5 erro" v-if="semEmail"> E-mail não preenchido!</v-label>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-label class="mg-5 erro" v-if="semCargo"> Cargo não selecionado!</v-label>
    <v-select v-model="cargo" :items="cargos" label="Cargo"></v-select>
    <v-btn type="submit" color="primary">Cadastrar</v-btn>
    <v-list v-if="listaFuncionarios && listaFuncionarios.length">
      <v-list-item v-for="(funcionario, index) in listaFuncionarios" :key="index">
        <v-list-item-content class="d-flex align-center">
        <v-list-item-title>{{ funcionario.nome }}</v-list-item-title>
        <v-list-item-subtitle class="mg_sub">{{ funcionario.email }}</v-list-item-subtitle>
        <v-list-item-subtitle class="mg_sub">{{ funcionario.cargo }}</v-list-item-subtitle>
        <v-btn class="h-20" @click="removerFuncionario(index)">
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
      email: '',
      cargo: '',
      cargos: ['Gerente', 'Vendedor', 'Estoquista'],
      listaFuncionarios: [],
      semNome: false,
      semEmail: false,
      semCargo: false,
    };
  },
  methods: {
    submitForm() {
        this.semNome = false;
        this.semEmail = false;
        this.semCargo = false;

        if(!this.nome){
            this.semNome = true;
        }
        if(!this.email){
            this.semEmail = true;
        }
        if(!this.cargo){
            this.semCargo = true;
        }
        if(this.nome && this.email && this.cargo){
            const dadosFuncionario = {
                nome: this.nome,
                email: this.email,
                cargo: this.cargo
            };
            this.listaFuncionarios.push(dadosFuncionario);
            this.nome = "";
            this.email = "";
            this.cargo = "";
            console.log('Dados do formulário:', dadosFuncionario);
        }
    },
    removerFuncionario(index) {
      this.listaFuncionarios.splice(index, 1);
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