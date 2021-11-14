// Copyright 2021 peter
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { UPDATE_ASSETS, } from './mutations-type'

const remoteComponents = [
  {
    name: "hello-world",
    instance: () => import("@/components/HelloWorld.vue"),
    properties: {
      name: {
        type: 'string',
        input: 'input',
      },
      age: {
        type: 'number',
        input: 'number-input'
      },
    },
  },
  {
    name: "see-you-late",
    instance: () => import("@/components/SeeYouLate.vue"),
    properties: {
      name: {
        type: 'string',
        input: 'input',
      },
      age: {
        type: 'number',
        input: 'number-input'
      },
    },
  },
];

const initialState = {
  assets: remoteComponents,
}

export default {
  namespaced: true,
  state: {
    ...initialState,
  },
  mutations: {
    [UPDATE_ASSETS](state, payload) {
      state.assets = payload
    },
  },
  actions: {
    updateAssets({ commit }, assets = initialState.assets) {
      commit(UPDATE_ASSETS, assets)
    },
  },
  getters: {
    assets(state) {
      return state.assets
    },
  },
}

