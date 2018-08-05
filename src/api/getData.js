import axios from 'axios';
const http = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5b586b72fce1393a862d0348/Broadcast#!method=get',
  timeout: 10000
})

export const getBroadcast = () => new Promise((resolve, reject) => {
  fetch('https://www.easy-mock.com/mock/5b586b72fce1393a862d0348/Broadcast#!method=get')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
})

export const getHotLive = () => new Promise((resolve, reject) => {
  fetch('https://www.easy-mock.com/mock/5b586b72fce1393a862d0348/hotLive#!method=get')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
})
export const getGuessLike = () => new Promise((resolve, reject) => {
  fetch('https://www.easy-mock.com/mock/5b586b72fce1393a862d0348/guessLike')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
})