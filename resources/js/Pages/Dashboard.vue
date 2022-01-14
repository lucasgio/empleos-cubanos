<template>
  <JobSeekerLayout>
      <Skills/>
      <Main/>
      <Notifications/>
  </JobSeekerLayout>
</template>

<script>
import JobSeekerLayout from "@/Layouts/JobSeekerLayout";
import Skills from "@/Components/Jobseeker/Skills";
import Main from "@/Components/Jobseeker/Main";
import Notifications from "@/Components/Jobseeker/Notifications";
export default {
    name: "Dashboard",
    components: {Notifications, Main, Skills, JobSeekerLayout}
}
</script>

<style scoped>

</style>
