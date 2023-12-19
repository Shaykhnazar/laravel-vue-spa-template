import axios from 'axios'
import _ from 'lodash'
import { notify } from '@kyvg/vue3-notification'

export default {
  // for example
  //   auth: {
  //       login: (data) => api().get('auth/login', { params: data }),
  //   }
}

function api() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + '/api',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      let errors = error
      if (error.response?.data?.errors) {
        errors = _.values(error.response.data.errors).join('<br>')
      } else {
        errors = error.response.data.message
      }
      notify({
        group: 'messages',
        type: 'error',
        text: errors,
      })
      return Promise.reject(error)
    }
  )

  return instance
}
