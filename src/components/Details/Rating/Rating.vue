<template>
    <div class="rating__stars">
        <font-awesome-icon class="star fill" :icon="['fas', 'star']" />
        <font-awesome-icon class="star fill" :icon="['fas', 'star']" />
        <font-awesome-icon class="star fill" :icon="['fas', 'star']" />
        <font-awesome-icon class="star fill" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star-half-alt']" />
    </div>
</template>

<script lang="ts">

export default {
    name: 'Rating',
}

</script>

<style lang="scss">

.rating__stars {
    .star {
        color: #e44d4d;
        margin-bottom: 30px;
    }
}

</style>