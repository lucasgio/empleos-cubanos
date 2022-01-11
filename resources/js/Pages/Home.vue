<template>
    <HomeLayout>
        <MainComponent/>
    </HomeLayout>
</template>


<script>
    import HomeLayout from "@/Layouts/HomeLayout";
    import MainComponent from "@/Components/MainComponent";
    export default {
        components: {MainComponent, HomeLayout},
        props: {
            canLogin: Boolean,
            canRegister: Boolean,
        }
    }
</script>
