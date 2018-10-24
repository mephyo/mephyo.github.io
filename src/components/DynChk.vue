<template>
    <div class="dyn-chk">
        <div class="dyn-chk-inner" :class="{'active': active}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "DynChk",
        props: {
            active: Boolean
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .dyn-chk {
        margin: 16px;
        padding: 2px;
        border: 2px solid @greyMain;
        border-radius: 100px;
        .btnBav();

        .dyn-chk-inner {
            padding: 4px 16px;
            text-align: center;
            border-radius: 100px;
            color: @greyMain;
            transition: .25s;

            &.active {
                background-color: @greyMain;
                color: @basicWhite;
            }
        }
    }
</style>