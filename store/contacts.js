export const state =()=>({
  list:[]
})

export const mutations={
  add(state,contact){
    if (contact.id==null) {
      console.log("creating id:"+contact.firstname)
      contact["id"] = state.list.length + 1;
    }
    state.list.push(contact);
    console.log("Contact was added to the store");
    console.log(contact);
  },

  delete(state, contact){
    let index=state.list.findIndex((value, index) => (value.id===contact.id));
    if (index>=0){
      state.list.splice(index,1);
    }
  },

  update(state,contact){
   this.commit("contacts/delete",contact);
   this.commit("contacts/add",contact);
  }
}

export const getters={

  contact:(state)=>(id)=>(state.list.filter((value)=>(value.id===id)).slice(0)),
  contacts:(state)=>(state.list.slice(0).sort((a, b) => ((''+a.firstname).localeCompare(b.firstname)))),

}

export const actions={
  init({commit}){
    console.log("adding initial data");
    commit("add",{firstname: 'Jason', lastname:'Oner'});
    commit("add",{firstname: 'Travis', lastname:'Howard'});
    commit("add",{firstname: 'Ali', lastname:'Connors'});
    commit("add",{firstname: 'Cindy', lastname:'Baker'});

  },
  update({commit},contact){
    commit("update",contact);
  },

  delete({commit}, contact){
    commit("delete",contact);
  },

  add({commit},contact){
    commit("add",contact);
  }
}
