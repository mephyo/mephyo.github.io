<template>
    <div class="dyn-btn">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "DynBtn",
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .dyn-btn {
        margin: 16px;
        padding: 8px 16px;
        text-align: center;
        background-color: @shahMain;
        border-radius: 200px;
        color: @shahFont;
        box-shadow: @shadowBtn;
        transition: .25s;
        .btnBav();

        &:active {
            box-shadow: @shadowBtnHover;
        }
    }
</style>