<template>
  <q-card-section class="flex justify-between">
        <div class="text-h6">
            <slot></slot>
        </div>
        <q-btn v-close-popup flat dense round color="primary" icon="close" />
    </q-card-section>
</template>

<script>
export default {

}
</script>

<style>

</style>