import ZlInput from '../'

export default {
    title: 'ZlInput',
    component: ZlInput
}

export const Text = () => ({
    components: { ZlInput },
    template: '<zl-input v-model="value"></zl-input>',
    data() {
        return {
            value: 'admin'
        }
    }
})

export const Password = () => ({
    components: { ZlInput },
    template: '<zl-input v-model="value" type="password"></zl-input>',
    data() {
        return {
            value: 'admin'
        }
    },
})