<template lang="html">
    <b-container>
        <b-row class="justify-content-center mt-5">
            <b-col cols="6">
                <!-- start of login card -->
                <b-card>
                    <div class="mt-2 mb-4">
                        <h4>Forget Password</h4>
                    </div>
                    <div class="mt-3">
                        <strong></strong>
                        <b-form-input v-model="form.email"
                        type="email"
                        placeholder="Email"
                        size="sm"/>
                    </div>
                    <div class="mt-3 text-right">
                        <b-button variant="primary" size="sm">
                            Submit
                        </b-button>
                    </div>
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
            form:{},

        }
    }
}
</script>

<style lang="css" scoped>
</style>
