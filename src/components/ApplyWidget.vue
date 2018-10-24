<template>
    <div class="widget">
        <div class="widget-head">
            <span class="widget-label">{{model.label}}</span>
            <span v-if="model.hint" class="widget-hint">({{model.hint}})</span>
        </div>
        <div class="widget-field" v-if="model.type==='input'">
            <div class="widget-inputz">
                <input :type="model.inputType" v-model="localValue" :placeholder="model.placeholder" class="widget-input">
            </div>
        </div>
        <div class="widget-field" v-if="model.type==='select'">
            <div class="widget-boxy">
                <div v-for="v in model.values" :key="v.id" class="widget-box" :class="{selected: v.selected}" @click="selectOne(v.id)">
                    <dyn-icon :paths="v.icon" v-if="v.icon"></dyn-icon>
                    <div>{{v.name}}</div>
                </div>
            </div>
        </div>
        <div class="widget-field" v-if="model.type==='checklist'">
            <div class="widget-boxz">
                <div v-for="v in model.values" :key="v.id" class="widget-box" :class="{selected: v.selected}" @click="checkOne(v.id)">
                    <dyn-icon :paths="v.icon" v-if="v.icon"></dyn-icon>
                    <div>{{v.name}}</div>
                </div>
            </div>
        </div>
        <div class="widget-field" v-if="model.type==='checkbox'">
            <div class="widget-checker" @click="switchCheck">
                <dyn-icon :paths="['M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z']" v-if="localValue"></dyn-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import DynIcon from '@/components/DynIcon.vue'
    export default {
        name: "ApplyWidget",
        components: {
            DynIcon
        },
        props: {
            q: String,
            value: [String, Array, Boolean],
            schema: Array
        },
        data() {
            return {
                model: {},
                localValue: "",
                bougie: 3
            }
        },
        methods: {
            callDaddy() {
                this.$emit("input", this.q, this.localValue)
            },
            selectOne(id) {
                this.model.values.forEach(value => {
                    if (value.id === id) {
                        value.selected = true
                        this.localValue = value.id
                    } else {
                        value.selected = false
                    }
                });
                this.$forceUpdate()
            },
            checkOne(id) {
                this.model.values.forEach(value => {
                    if (value.id === id) {
                        if (value.selected === false) {
                            value.selected = true
                            this.localValue.push(id)
                        } else {
                            value.selected = false
                            for (var i = this.localValue.length - 1; i >= 0; i--) {
                                if (this.localValue[i] === id) {
                                    this.localValue.splice(i, 1);
                                }
                            }
                        }
                    }
                });
                this.$forceUpdate()
            },
            switchCheck() {
                this.localValue = !this.localValue
            }
        },
        mounted() {
            this.schema.forEach(element => {
                if (element.model === this.q) {
                    this.model = element
                }
            });
            this.localValue = this.value
            switch (this.model.type) {
                case "select":
                    this.model.values.forEach(value => {
                        if (this.value === value.id) {
                            value.selected = true
                        } else {
                            value.selected = false
                        }
                    })
                    break;
                case "checklist":
                    this.model.values.forEach(value => {
                        if (this.value.includes(value.id)) {
                            value.selected = true
                        } else {
                            value.selected = false
                        }
                    })
                    break;

                default:
                    break;
            }
        },
        watch: {
            localValue() {
                if (this.bougie > 3) {
                    this.callDaddy()
                }
                this.bougie++
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .widget {
        margin: 8px 0;
        padding: 8px;
        overflow: hidden;
        font-size: 0.875em;
        .widget-head {
            height: 30px;
            line-height: 30px;
            .widget-label {
                opacity: 0.75;
            }
            .widget-hint {
                opacity: 0.5;
            }
        }
        .widget-inputz {
            margin: 8px;
            ::placeholder {
                color: rgba(68, 44, 46, 0.5);
            }
            .widget-input {
                font-size: 1em;
                outline: none;
                border: none;
                border-radius: 0;
                border-bottom: 1px solid @shahMain;
                background-color: transparent;
                display: block;
                width: 100%;
                box-sizing: border-box;
                height: 30px;
                line-height: 30px;
                color: @shahFont;
                &:focus {
                    border-bottom: 1px solid @shahFont;
                }
            }
        }
        .widget-box {
            .btnBav();
            border-radius: 3px;
            margin: 8px;
            padding: 0 8px;
            box-sizing: border-box;
            border: 1px solid @shahBg;
            color: @shahFont;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            .icon {
                fill: @shahFont;
                margin: 0 4px 0 -4px;
                flex-shrink: 0;
            }
            &.selected {
                background-color: @shahFont;
                border: 1px solid @shahFont;
                color: @shahBg;
                .icon {
                    fill: @shahBg;
                }
            }
        }
        .widget-boxz {
            display: flex;
            flex-wrap: wrap;
            .widget-box {
                height: 30px;
            }
        }
        .widget-boxy {
            display: flex;
            flex-direction: column;
            .widget-box {
                height: 36px;
            }
        }
        .widget-checker {
            height: 30px;
            width: 30px;
            margin: 8px;
            background-color: @shahBg;
            border: 1px solid @shahMain;
            box-sizing: border-box;
            border-radius: 3px;
            .icon {
                margin: 2px;
                fill: @shahFont;
            }
        }
    }
</style>