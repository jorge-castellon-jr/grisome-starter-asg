<template>
  <Layout>
    <h1>Welcome to <strong>The Advocate's for Self Government</strong> Articles</h1>
    <ul class="post-list uk-grid-match uk-grid-column-small uk-grid-row-large uk-child-width-1-2@m uk-flex-between@m" uk-grid>
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id" >
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
        featuredMedia {
          sourceUrl
          altText
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Welcome to my blog :)'
  }
}
</script>

<style>
.uk-grid {
  margin-left: 0;
}
@media (min-width: 960px) {
  .uk-child-width-1-2\@m>* {
      width: 48%;
  }
}
</style>