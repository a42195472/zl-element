<template>
    <div class="zl-steps">
        <div class="zl-steps-line"></div>
        <div
            class="zl-step"
            v-for="index in count"
            :key="index"
            :style="{
                color: active >= index ? activeColor : defaultColor
            }"
        >
            {{index}}
        </div>
    </div>
</template>

<script>
import './steps.css'
export default {
    name: 'ZlSteps',
    props: {
        count: {
            type: Number,
            default: 3
        },
        active: {
            type: Number,
            default: 0
        },
        activeColor: {
            type: String,
            default: 'red'
        },
        defaultColor: {
            type: String,
            default: 'green'
        }
    }
}
</script>

<style>
</style>