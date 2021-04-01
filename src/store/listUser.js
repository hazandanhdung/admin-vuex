const state = {
 listAccountUser: {}
};
const getters = {
};
const mutations = {

  SET_LIST_ACCOUNT_USER(state, listUser) {
    state.listAccountUser = listUser;
  }
};
const actions = {

  listAccountUser({ commit }, search) {
    commit("SET_LIST_ACCOUNT_USER", search);
  }
};

export default { namespaced: true, state, getters, mutations, actions };
