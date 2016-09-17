// import { LocalStorage as NodeLocalStorage } from 'node-localstorage'

// function getLocalStorage() {
//   if (typeof localStorage === 'undefined' || localStorage === null) {
//     return new NodeLocalStorage('')
//   }
//   return localStorage
// }

function getLocalStorage() {
  return localStorage
}

export { getLocalStorage }