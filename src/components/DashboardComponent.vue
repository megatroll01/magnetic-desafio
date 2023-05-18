<template>
  <div class="mg_10">
    <h1>Gráfico de Vendas</h1>
    <sales-chart ></sales-chart>
  </div>
</template>

<script>
import SalesChart from './grafico/SalesChart.vue';

export default {
  components: {
    SalesChart
  }
};
</script>

<style>
.mg_10{
  margin-inline: 10%;
}
</style>