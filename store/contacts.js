export const state =()=>({
  list:[],
})

export const mutations={
  add(state,contact){
    state.list.push(contact);
    console.log("Contact was added to the store");
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

  contact:(state)=>(id)=>{
    return state.list.filter((value)=>(value.id===id));
  },

  contacts(state){
    let contacts=state.list.slice(0);
    contacts.sort((a, b) => (a.id-b.id));
    return contacts;

  }
}

export const actions={
  init({commit}){
    console.log("adding initial data");
    commit("add",{id:'1', firstname: 'Jason', lastname:'Oner'});
    commit("add",{id:'2', firstname: 'Travis', lastname:'Howard'});
    commit("add",{id:'3', firstname: 'Ali', lastname:'Connors'});
    commit("add",{id:'4', firstname: 'Cindy', lastname:'Baker'});

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
