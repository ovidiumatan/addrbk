<template>
  <div onclick="">
    <v-row>
      <v-col align="center">
    {{lastname}}  {{firstname}}
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
            <v-form v-model="valid">

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
                <v-btn @click.stop="dialog=false">Cancel</v-btn>


                <v-spacer></v-spacer>

                <v-btn elevation="0"
                       style="background-color: white; text-align: center" @click="update()"
                       :disabled="!valid">Update
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
      props:['firstname','lastname'],
      data:()=>({
        dialog: false,
      }),
      methods:{
          update(){
            this.dialog=false;
          }
      }

    }
</script>

<style scoped>

</style>
