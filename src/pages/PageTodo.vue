<template>
  <q-page padding>
    <q-list 
      bordered 
      separator
      v-if="Object.keys(tasks).length"
    >
      <Task 
        v-for="(task, key) in tasks" 
        :key="key" 
        :task="task" 
        :id="key"
      />
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

import Task from 'components/Tasks/Task'
import AddTask from 'components/Tasks/Modals/AddTask'

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  components: {
    Task,
    AddTask
  },
  computed: {
    ...mapGetters('tasks',['tasks'])
  }
}
</script>

<style>
  .text-strikethrough {
    text-decoration: line-through;
  }
</style>
