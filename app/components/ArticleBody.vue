<script setup lang="ts">
import type { ArticleBlock } from '../data/articles'

defineProps<{
  blocks: ArticleBlock[]
}>()

/** Схемы лежат отдельными .svg и встраиваются в HTML при сборке — без запроса и без JS */
const diagrams = import.meta.glob<string>('../data/diagrams/*.svg', { query: '?raw', import: 'default', eager: true })
const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const diagram = (name: string, alt: string) => diagrams[`../data/diagrams/${name}.svg`]
  ?.replace('<svg', `<svg role="img" aria-label="${escape(alt)}"`)
</script>

<template>
  <template v-for="(block, i) in blocks" :key="i">
    <h2 v-if="block.type === 'h2'" :id="block.id">{{ block.text }}</h2>
    <h3 v-else-if="block.type === 'h3'">{{ block.text }}</h3>
    <p v-else-if="block.type === 'p'"><RichText :text="block.text" /></p>
    <pre v-else-if="block.type === 'code'" class="ck-code"><code>{{ block.text }}</code></pre>
    <blockquote v-else-if="block.type === 'quote'" class="ck-quote"><RichText :text="block.text" /></blockquote>

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
            <tr><th v-for="(cell, c) in block.head" :key="c" scope="col"><RichText :text="cell" /></th></tr>
          </thead>
          <tbody>
            <tr v-for="(row, r) in block.rows" :key="r">
              <template v-for="(cell, c) in row" :key="c">
                <th v-if="c === 0" scope="row"><RichText :text="cell" /></th>
                <td v-else><RichText :text="cell" /></td>
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

    <figure v-else-if="block.type === 'diagram'" class="ck-figure">
      <div class="ck-diagram__scroll" v-html="diagram(block.name, block.alt)" />
      <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
    </figure>
  </template>
</template>
