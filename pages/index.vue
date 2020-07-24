<template>
  <div>
    <v-card max-width="500" class="mx-auto">
      <v-toolbar color="indigo" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Inbox</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list>
        <v-list-item v-for="item in contacts" :key="item.name" @click="">
          <v-list-item-content>
            <Contact :id=item.id></Contact>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
  import Contact from "~/components/Contact";
  import {mapGetters} from 'vuex';

  export default {
    components: {Contact},
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
