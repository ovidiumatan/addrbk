<template>
  <v-dialog v-model="dialog" persistent max-width="600px">

    <template v-slot:activator="{on, attrs}">
      <v-btn style="!important;background-color: transparent"
             elevation="0"
             v-bind="attrs"
             v-on="on">
        <div v-if="id!=null">
          <v-icon large color="blue darken-2">mdi-message-text</v-icon>
        </div>
        <div v-else>
          <v-icon large>mdi-plus</v-icon>
        </div>
      </v-btn>

    </template>
    <v-card>
      <v-form>
        <v-card-title>Contact info</v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                v-model="contact_copy.firstname"
                label="First Name" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="contact_copy.lastname"
                label="Last Name" required></v-text-field>
            </v-col>
          </v-row>

        </v-card-text>
        <v-card-actions>
          <v-btn elevation="0" @click="closeForm()">Cancel</v-btn>
          <v-spacer></v-spacer>

          <v-btn elevation="0" @click="deleteContact()" :disabled=!this.id>Delete</v-btn>

          <v-spacer></v-spacer>

          <v-btn elevation="0"
                 @click="submitAction()"
          >{{getActionText()}}
          </v-btn>

        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {

    name: "ContactForm",
    props: ['id', 'firstname', 'lastname'],
    data: () => ({
      dialog: false,
      contact_local:{
        firstname:'',
        lastname:''
      }
    }),
    computed: {
      contact_copy()
      {
        console.log("searching for id2:"+this.id);
        this.contact_local.firstname= this.firstname;
        this.contact_local.lastname = this.lastname;
        return this.contact_local;
      },
    },

    methods: {
      closeForm() {
        this.contact_local.firstname='';
        this.contact_local.lastname='';
        this.dialog = false;

      },
      submitAction() {
        console.log("id=" + this.id);
        if (this.id != null) {
          this.update();
        } else {
          this.create();
        }
      },
      update() {
        console.log("sending update to the store:" + this.id)
        this.$store.dispatch('contacts/update', {
          id: this.id,
          firstname: this.contact_local.firstname,
          lastname: this.contact_local.lastname
        });
        this.closeForm();
      },
      create() {
        console.log("creating a new contact:" + this.fn + "/" + this.ln)
        this.$store.dispatch('contacts/add', {
          firstname: this.contact_local.firstname,
          lastname: this.contact_local.lastname
        });
        this.closeForm();
      },
      deleteContact() {
        this.$store.dispatch('contacts/delete', {
          id: this.id
        });
        this.closeForm();
      },
      getActionText() {
        if (this.id != null) return "Update"
        else return "Create";
      }
    },

  }
</script>

<style scoped>

</style>
