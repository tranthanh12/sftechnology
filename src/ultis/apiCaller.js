import axios from "axios";
import * as Config from '../config/config'

function callApiVQMM(endpoint) {
  return axios.get(`${Config.DOMAIN}${endpoint}`)
    .then(res => {
      const persons = res;
      return persons
    })
    .catch(error => console.log(error));

}

function DeleteCate(endpoint) {
  return axios.delete(`${Config.DOMAIN}${endpoint}`)
    .then(res => {
      const persons = res;
      return persons
    })
    .catch(error => console.log(error));

}

function CreateCate(endpoint, data) {
  console.log(data);
  return axios.post(`${Config.DOMAIN}${endpoint}`, {
    title: data.title,
    image: 'https://blogcuatoi.net/wp-content/uploads/2020/11/lay-link-anh.png',
    description: data.description,
    content: data.content,
    price: Number(data.price),
    quantity: Number(data.quantity),
    discount: Number(data.discount)
  })
    .then(res => {
      const persons = res;
      return persons
    })
    .catch(error => console.log(error));

}

export default {
  callApiVQMM,
  DeleteCate,
  CreateCate
}