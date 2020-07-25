<template>
  <div>
    <v-card max-width="500" class="mx-auto">
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>Address Book</v-toolbar-title>
        <v-spacer></v-spacer>
        <ContactForm></ContactForm>
      </v-toolbar>
      <v-list v-if="contacts.length>0">
        <v-list-item  v-for="item in contacts" :key="item.name" @click="">
          <v-list-item-content>
            <Contact :id=item.id :firstname=item.firstname :lastname=item.lastname></Contact>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item><p>No contacts available</p></v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
  import Contact from "~/components/Contact";
  import {mapGetters} from 'vuex';
  import ContactForm from "~/components/ContactForm";

  export default {
    components: {ContactForm, Contact},
    fetch(){
      this.$store.dispatch('contacts/init');
    },
    computed:{
      ...mapGetters({
        contacts:'contacts/contacts'
      }),
    },

  }
</script>
