<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
      
        <q-toolbar-title class="absolute-center">
          Not Bad TodoApp
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      :breakpoint="767"
      :width="250"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-1"
        >
          Navigation
        </q-item-label>
        <EssentialLink
        class="text-grey-4"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-tabs>
        <q-route-tab 
          v-for="tab in essentialLinks" 
          :key="tab.title" 
          :icon="tab.icon" 
          :to="tab.link"
          :label="tab.title"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Todo',
          icon: 'list',
          link: '/'
        },
        {
          title: 'Settings',
          icon: 'settings',
          link: '/settings'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @media (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
