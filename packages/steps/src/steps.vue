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

<style scoped>
.zl-steps {
    position: relative;
    display: flex;
    justify-content: space-between;
}

.zl-steps-line {
    position: absolute;
    height: 2px;
    top: 50%;
    left: 24px;
    right: 24px;
    transform: translateY(-50%);
    z-index: 1;
    background: rgb(223, 231, 239);
}

.zl-step {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 2px solid;
    border-radius: 50%;
    font-weight: 700;
    background-color: white;
    z-index: 2;
    box-sizing: border-box;
}
</style>