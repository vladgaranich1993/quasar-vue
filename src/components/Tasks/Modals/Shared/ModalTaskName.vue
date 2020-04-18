<template>
    <div class="row q-mb-sm">
        <q-input 
            class="col" 
            outlined
            autofocus 
            @input="$emit('update:name', $event)"
            value="name" 
            label="Task name" 
            :rules="[val => !!val || 'Field is required']"
            ref="name"
        >
            <template v-slot:append>
                <q-icon 
                    v-if="name"
                    name="close" 
                    @click="$emit('updateName', '')" 
                    class="cursor-pointer" 
                />
            </template>
        </q-input>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style>

</style>