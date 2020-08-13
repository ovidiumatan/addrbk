<template>
  <div onclick="">
    <v-row>
      <v-col align="left">
    {{lastname}} {{firstname}}
      </v-col>
      <v-col align="right">
         <ContactForm :id=id :firstname=firstname :lastname=lastname :email=email></ContactForm>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    import ContactForm from "~/components/ContactForm";
    export default {
        name: "Contact",
      components: {ContactForm},
      props:['id', 'firstname','lastname', 'email'],
    }
</script>

<style scoped>

</style>
