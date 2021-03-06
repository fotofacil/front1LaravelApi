import store from '@/store'
import Axios from 'axios';
store.subscribe((mutation)=>{
    switch (mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload) {
                Axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
                localStorage.setItem('token', mutation.payload)
            }else{
                Axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('token')
            }
            break;

        default:
            break;
    }
})
