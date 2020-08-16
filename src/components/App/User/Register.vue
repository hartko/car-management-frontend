<template lang="html">
    <b-container>
        <b-row class="justify-content-center mt-5">
            <b-col cols="4">
                <!-- start of register card -->
                <b-card>
                    <b-row>
                        <b-col cols="12" class="mt-3">
                            <h3>Register</h3>
                        </b-col >
                        <b-col cols="12" class="mt-4">
                            <b-form-input v-model="register.firstname"
                            type="text"
                            placeholder="Firstname"/>
                        </b-col>
                        <b-col cols="12" class="mt-2">
                            <b-form-input v-model="register.lastname"
                            type="text"
                            placeholder="Lastname"/>
                        </b-col>
                        <b-col cols="12" class="mt-2">
                            <b-form-input v-model="register.email"
                            type="email"
                            placeholder="Email"/>
                        </b-col>
                        <b-col cols="12" class="mt-2">
                            <b-form-input v-model="register.password"
                            type="password"
                            placeholder="Password"/>
                        </b-col><b-col cols="12" class="mt-2">
                            <b-form-input v-model="register.password_confirmation"
                            type="password"
                            placeholder="Confirm Password"/>
                        </b-col>
                        <b-col cols="12" class="mt-3">
                            <b-button block variant="primary" href="">
                                Register
                            </b-button>
                        </b-col>
                    </b-row>
                </b-card>
                <!-- end of register card -->
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
export default {

    data () {

        return{
            register:{},

        }
    }
}
</script>

<style lang="css" scoped>
</style>
