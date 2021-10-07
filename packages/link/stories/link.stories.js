import ZlLink from '../src/link.vue'

export default {
    title: 'ZlLink',
    component: ZlLink
}

export const Link = () => ({
    components: { ZlLink },
    template: '<zl-link disabled href="https://www.baidu.com">baidu</zl-link>'
})