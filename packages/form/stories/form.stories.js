import ZlForm from '../'
import ZlFormItem from '../../formitem'
import ZlInput from '../../input'
import ZlButton from '../../button'

export default {
    title: 'ZlForm',
    component: ZlForm
}

export const Login = () => ({
    components: { ZlFormItem, ZlForm, ZlButton, ZlInput },
    template: `
        <zl-form
            :model="user"
            :rules="rules"
            ref="form"
            class="form"
        >
            <zl-form-item
                label="用户名"
                prop="username"
            >
                <zl-input
                    v-model="user.username"
                    placeholder="请输入用户名"
                ></zl-input>
            </zl-form-item>
            <zl-form-item
                label="密码"
                prop="password"
            >
                <zl-input
                    type="password"
                    placeholder="请输入密码"
                    v-model="user.password"
                ></zl-input>
            </zl-form-item>
            <zl-form-item>
                <zl-button
                    type="primary"
                    @click="submitForm('form')"
                >提交</zl-button>
            </zl-form-item>
        </zl-form>
    `,
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名' }
                ],
                password: [
                    { required: true, message: '请输入密码' },
                    { min: 6, max: 12, message: '请输入6~12位密码' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        }
    }
})