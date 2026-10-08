<script setup lang="ts">
import type { ArticleBlock } from '../data/articles'

defineProps<{
  blocks: ArticleBlock[]
}>()
</script>

<template>
  <template v-for="(block, i) in blocks" :key="i">
    <h2 v-if="block.type === 'h2'" :id="block.id">{{ block.text }}</h2>
    <h3 v-else-if="block.type === 'h3'">{{ block.text }}</h3>
    <p v-else-if="block.type === 'p'"><RichText :text="block.text" /></p>

    <component
      :is="block.ordered ? 'ol' : 'ul'"
      v-else-if="block.type === 'list'"
      class="ck-list"
      :class="{ 'ck-list--ordered': block.ordered }"
    >
      <li v-for="item in block.items" :key="item"><RichText :text="item" /></li>
    </component>

    <figure v-else-if="block.type === 'table'" class="ck-table">
      <div class="ck-table__scroll">
        <table>
          <thead>
            <tr><th v-for="cell in block.head" :key="cell" scope="col">{{ cell }}</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in block.rows" :key="row[0]">
              <template v-for="(cell, c) in row" :key="c">
                <th v-if="c === 0" scope="row">{{ cell }}</th>
                <td v-else>{{ cell }}</td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
      <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
    </figure>

    <figure v-else-if="block.type === 'image'" class="ck-figure">
      <div class="ck-cover">
        <ResponsiveImage :src="block.src" :alt="block.alt" sizes="(max-width: 991px) 100vw, 760px" />
      </div>
      <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
    </figure>
  </template>
</template>
