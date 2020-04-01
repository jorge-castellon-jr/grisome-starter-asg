<template>
  <Layout class="uk-article">
    <div>
      <h1 v-html="$page.WordPressPage.title"/>
      <div v-html="$page.WordPressPage.content"/>
    </div>
  </Layout>
</template>

<page-query>
query WordPressPage ($id: ID!) {
  wordPressPage(id: $id) {
    title
    content
    excerpt
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.WordPressPage.title,
      decsription: this.$page.WordPressPage.excerpt
    }
  }
}
</script>

<style>
  ul.list {
    list-style: none;
    padding: 0;
  }
  ul.list li {
    display: inline-block;
    margin-right: 0.25em;
  }
  ul.list.tags li a {
    padding: 0.25em 0.5em;
    background-color: lightgray;
  }
  ul.list.categories li:after {
    content: ',';
    display: inline-block;
  }
  ul.list li:last-child:after {
    content: '';
  }
</style>
