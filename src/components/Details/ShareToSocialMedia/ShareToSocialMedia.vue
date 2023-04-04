<template>

    <div class="share">
        <font-awesome-icon class="share__brand" :icon="['fab', 'square-facebook']" />
        <font-awesome-icon class="share__brand" :icon="['fab', 'square-twitter']" />
        <font-awesome-icon class="share__brand" :icon="['fab', 'square-google-plus']" />
        <font-awesome-icon class="share__brand" :icon="['fab', 'square-whatsapp']" />
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.share {
    position: absolute;
    top: calc(100% - 2.5rem);
    right: .5rem;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .share__brand {
        margin: 2px;
        font-size: 1.5rem;
        color: #766fc3;
        color: #000000;
        cursor: pointer;
    }
}

</style>