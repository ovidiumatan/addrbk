<template>
  <div onclick="">
    <v-row>
      <v-col align="center">
    {{contact.lastname}}  {{contact.firstname}}
      </v-col>
      <v-col align="right">
        <v-dialog  v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{on, attrs}">
            <v-btn
              elevation="0"
              v-bind="attrs"
              v-on="on">
              <v-icon large color="blue darken-2">mdi-message-text</v-icon>
            </v-btn>

          </template>
          <v-card>
            <v-form >

              <v-card-title>Contact edit</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="firstname"
                      label="First Name" required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="lastname"
                      label="Last Name" required></v-text-field>
                  </v-col>
                </v-row>


              </v-card-text>
              <v-card-actions>
                <v-btn @click="cancel()">Cancel</v-btn>
                <v-spacer></v-spacer>

                <v-btn @click="deleteContact()">Delete</v-btn>

                <v-spacer></v-spacer>

                <v-btn elevation="0"
                       style="background-color: white; text-align: center" @click="update()"
                       >Update
                </v-btn>

              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    export default {
        name: "Contact",
      props:['id'],
      data:()=>({
        dialog: false,
        firstname:'',
        lastname:''
      }),
      computed:{
        contact()
        {
          console.log("searching for id:"+this.id);
          let resp= this.$store.getters["contacts/contact"](this.id);
          if (resp!=null) {
            this.firstname=resp[0].firstname;
            this.lastname=resp[0].lastname;
            return resp[0];
          }
          else return null;
        }
      },

      fetch(){
          console.log("initial fetch");
          this.init_First_Name=this.firstname;
          this.init_Last_Name=this.lastname;
      },
      methods:{
          cancel(){
            this.dialog=false;
          },
          update(){
            this.$store.dispatch('contacts/update',{
              id:this.id,
              firstname:this.firstname,
              lastname:this.lastname
            });
            this.dialog=false;
          },
        deleteContact(){
          this.$store.dispatch('contacts/delete',{
            id:this.id
          });
          this.dialog=false;
        }
      },

    }
</script>

<style scoped>

</style>
