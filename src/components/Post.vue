<template>
  <div class="uk-card uk-card-small uk-card-default uk-card-hover">
    <div class="uk-card-media-top">
      <g-image
        v-if="post.featuredMedia"
        :src="post.featuredMedia.sourceUrl"
        :alt="post.featuredMedia.altText"
      />
    </div>
    <h2 class="uk-card-header" v-html="post.title" />
    <div class="uk-card-body" v-html="post.excerpt" />
    <div class="uk-card-footer">
      <g-link class="uk-button uk-button-text" :to="post.path">
        Read More
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
