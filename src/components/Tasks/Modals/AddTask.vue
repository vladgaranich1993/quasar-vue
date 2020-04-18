<template>
    <q-card>
        <ModalHeader>
            Add Task
        </ModalHeader>
        <form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
                <ModalTaskName :name.sync="taskToSubmit.name"/>
                <div class="row q-mb-sm">    
                    <q-input 
                        label="Due Date" 
                        outlined 
                        v-model="taskToSubmit.dueDate"
                        >
                        <template 
                            v-slot:append
                            >
                            <q-icon 
                                v-if="taskToSubmit.dueDate"
                                @click="clearDueDate" 
                                class="cursor-pointer" 
                                name="close"
                                />
                            <q-icon 
                                name="event" 
                                class="cursor-pointer"
                                >
                                <q-popup-proxy 
                                    ref="qDateProxy" 
                                    transition-show="scale" 
                                    transition-hide="scale"
                                    >
                                    <q-date 
                                    v-model="taskToSubmit.dueDate" 
                                    @input="() => $refs.qDateProxy.hide()" 
                                    />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
                <div 
                    class="row q-mb-sm" 
                    v-if="taskToSubmit.dueDate"
                >    
                    <q-input class="col" label="Due Time" outlined v-model="taskToSubmit.dueTime">
                        <template v-slot:append>
                            <q-icon 
                                v-if="taskToSubmit.dueTime"
                                @click="clearDueDate" 
                                class="cursor-pointer" 
                                name="close"
                            />
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
import ModalHeader from './Shared/ModalHeader'
import ModalTaskName from './Shared/ModalTaskName'

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
    components: {
        ModalHeader,
        ModalTaskName
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
            this.$emit('close')
        },
        clearDueDate() {
            this.taskToSubmit.dueDate = '';
            this.taskToSubmit.dueTime = '';
        }
    }
}
</script>

<style>

</style>