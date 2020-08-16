<template lang="html">
    <b-container>
        <b-row class="justify-content-center mt-5">
            <b-col cols="4">
                <!-- start of login card -->
                <b-card>
                    <div class="mt-2 mb-4">
                        <h3>Login</h3>
                    </div>
                    <div class="mt-3">
                        <b-form-input v-model="login.username"
                        type="email"
                        placeholder="Username"/>
                    </div>
                    <div class="mt-3">
                        <b-form-input v-model="login.password"
                        type="password"
                        placeholder="Password"/>
                    </div>

                    <div class="mt-4 mb-3">
                        <b-button block variant="primary">
                            Login
                        </b-button>
                    </div>
                    <b-link class="text-left">
                        Forget Password?
                    </b-link>
                    <b-link class="text-right">
                        Register
                    </b-link>
                </b-card>
                <!-- end of login card -->
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
export default {

    data () {

        return{
            login:{},

        }
    }
}
</script>

<style lang="css" scoped>
</style>
