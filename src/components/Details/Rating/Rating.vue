<template>
    <div class="rating__stars">
        <font-awesome-icon 
            v-for="index of Array(5).keys()" 
            class="star" 
            :icon="['fas', 'star']" 
            @click="changeRate(index+1)"
            :class="{'fill': getRate > index}" 
        />
    </div>
</template>

<script lang="ts">

export default {
    name: 'Rating',
    props: {
        clickable: {
            type: Boolean,
            required: false,
        },
        fixedRating: {
            type: Number,
            required: false,
        }
    },
    data() {
        return {
            rate: 4
        }
    },
    computed: {
        getRate() {
            if(this.clickable) {
                return this.rate;
            } else if(this.fixedRating != null) {
                return this.fixedRating;
            } else {
                return 5;
            }
        },
    },
    methods: {
        changeRate(new_rate) {
            if(!this.clickable){
                return;
            }
            this.rate = new_rate;
            this.$emit("rateChange", this.rate);
        }
    }
}

</script>

<style lang="scss">

.rating__stars {
    .star {
        color: #ecc3c3;
        cursor: pointer;
        margin-bottom: 30px;
        transition: all 200ms ease-in-out;
        
        &.fill {
            color: #e44d4d !important;
        }
    }
}

</style>