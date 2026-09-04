<script setup lang="ts">
import type { PriceRow } from '../data/pricing'

defineProps<{
  rows: PriceRow[]
}>()
</script>

<template>
  <div class="ck-price">
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Что</th>
            <th>От</th>
            <th>Срок</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td>{{ row.title }}</td>
            <td class="ck-price__from">{{ row.from }}</td>
            <td>{{ row.term }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
