<template>
    <q-card>
        <q-card-section class="flex justify-between">
          <div class="text-h6">Add Task</div>
          <q-btn v-close-popup flat dense round color="primary" icon="close" />
        </q-card-section>

        <form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
                <div class="row q-mb-sm">
                    <q-input 
                        class="col" 
                        outlined 
                        v-model="taskToSubmit.name" 
                        label="Task name" 
                        :rules="[val => !!val || 'Field is required']"
                        ref="name"
                    />
                </div>
                <div class="row q-mb-sm">    
                    <q-input label="Due Date" outlined v-model="taskToSubmit.dueDate">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                    <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
                <div class="row q-mb-sm">    
                    <q-input label="Due Time" outlined v-model="taskToSubmit.dueTime">
                        <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy transition-show="scale" transition-hide="scale">
                                <q-time v-model="taskToSubmit.dueTime" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn type="submit" label="Save" color="primary" />
            </q-card-actions>
        </form>
    </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            taskToSubmit: {
                name: '', 
                dueDate: '',
                dueTime: '',
                completed: false
            }
        }
    },
    methods: {
        ...mapActions('tasks', ['addTask']),
        submitForm() {
            this.$refs.name.validate();
            if(!this.$refs.name.hasError) {
                this.submitTask()
            } 
        },
        submitTask() {
            this.addTask(this.taskToSubmit)
        }
    }
}
</script>

<style>

</style>