import { createStore } from 'vuex'
import cake from '../assets/cake.jpg'
import noodles from '../assets/noodles.jpg'
import fries from '../assets/fries.jpg'

import macroni from '../assets/macroni.jpg'
import pizza from '../assets/pizza.jpg'
import salad from '../assets/salad.jpg'

import samosa from '../assets/samosa.jpg'
import soup from '../assets/soup.jpg'
import tacos from '../assets/tacos.jpg'
export default createStore({
  state: {
    topRated: [{ id: 1, name: 'Cake', price: 100, url: cake, desc: "Very tasty", rate: 4.1 }, { id: 2, name: 'Noodles', price: 200, url: noodles, desc: 'Chilly', rate: 4.1 }, { id: 3, name: 'Fries', price: 70, url: fries, desc: "Crispy", rate: 4.2 }],

    allCategories: [{ id: 4, name: 'Macroni', price: 150, url: macroni, desc: "Yummy", rate: 4.5 }, { id: 5, name: 'Pizza', price: 400, url: pizza, desc: "Very tasty", rate: 4.0 }, { id: 6, name: 'Salad', price: 60, url: salad, desc: "Very tasty", rate: 4.2 }],

    dishesNearYou: [{ id: 7, name: 'Samosa', price: 20, url: samosa, desc: "Very tasty", rate: 4.2 }, { id: 8, name: 'Soup', price: 50, url: soup, desc: "Delicious", rate: 4.2 }, { id: 9, name: 'Tacos', price: 110, url: tacos, desc: "Awesome!!", rate: 4.4 }],

    tasks: [],
    cartItems: [],
    cartItemCount: 0
  },
  getters: {
    getTodo(state) {
      return state.totdos
    }
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks = [{ content: task, done: false }, ...state.tasks]

    },
    addTocart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some(
          i => i.id == item.id
        );
        if (bool == true) {
          let itemIndex = state.cartItems.findIndex(
            el => el.id == item.id
          );
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemCount++
    },
    removeItem(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some(
          i => i.id == payload.id
        );
        console.log('bool', bool)
        if (bool) {
          let index = state.cartItems.findIndex(
            el => el.id == payload.id
          );
          //to prevent quantity from being negative
          state.cartItems[index]["quantity"] === 0
            ? (state.cartItems[index]["quantity"] = 0)
            : (state.cartItems[index]["quantity"] -= 1);
          if (state.cartItems[index]["quantity"] === 0)
            state.cartItems.splice(index, 1)
          if (state.cartItemCount !== 0)
            state.cartItemCount--
        }
      }
    },
    removeTask(state) {
      state.cartItemCount--
    },
    REMOVE_TASK(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    TOGGLE_TASK(state, task) {
      task.done = !task.done
    }
  },
  actions: {
    addTocart: (context, payload) => {
      context.commit('addTocart', payload)
    },
    removeItem(context, payload) {
      context.commit('removeItem', payload)
    },
    removeTask(context) {
      context.commit('removeTask')
    }
  },
  modules: {
  }
})
