<template>
<ul class="sidenav app-sidenav" :class="{ open: value}">
  <router-link
    tag="li"
    :to="link.url"
    active-class="active"
    exact
    v-for="link in links"
    :key="link.url"
  >
    <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
  </router-link>
</ul>
</template>
<script>
export default {
  props: ['value'],
  data() {
    return {
      links: [
        { title: 'Счет', url: '/' },
        { title: 'История', url: '/history' },
        { title: 'Планирование', url: '/planning' },
        { title: 'Новая запись', url: '/record' },
        { title: 'Категории', url: '/categories' },
      ],
    };
  },
};
</script>
