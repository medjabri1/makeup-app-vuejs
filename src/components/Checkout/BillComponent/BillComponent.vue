<template>

    <div class="bill">
        <h3 class="items__count">Items: <span>3</span></h3>
        <h3 class="divider">---</h3>
        <h3 class="total__price">Total: <span>560 $</span></h3>
    </div>

</template>

<script>
export default {
    name: 'BillComponent',

}
</script>

<style lang="scss" scoped>

.bill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--custom-color-dark-2);
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0px 0px 2px #FFFFFF33, 0px 0px 5px #FFFFFF33;

    .divider {
        opacity: .2;
        user-select: none;
    }

    .items__count {
        font-weight: 800;
        font-size: 1rem;

        span {
            margin-left: 10px;
            font-weight: 400;
            font-size: 1.2rem;
        }
    }

    .total__price {
        font-weight: 800;
        font-size: 1rem;

        span {
            margin-left: 10px;
            font-weight: 400;
            font-size: 1.2rem;
        }
    }
}

</style>