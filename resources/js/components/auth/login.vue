<script setup>
    import axios from 'axios'
    import {reactive,ref} from 'vue';
    import {useRouter} from 'vue-router'
    const router = useRouter()

let form = reactive({
    email:'',
    password:'',
})
let error = ref('')

const login = async () => {
    await axios.post('/api/login',form)
    .then(response =>{
        if (response.data.success){
           // console.log(response)
             localStorage.setItem('token',response.data.data.token)
             router.push('/admin/home')
        }else {
            error.value = response.data.message;
        }
    })
}
</script>
<template>
    <div class="login">
       <div class="formLogin">
           <p class="danger-text" v-if="error">{{error}}</p>
        <form @submit.prevent="login" >
        <input class="input_auth" type="email" placeholder="enter your email" v-model="form.email"/>
        <br>
        <input class="input_auth" type="password" placeholder="enter your password" v-model="form.password"/>
        <br>
        <input class="input_auth submit" type="submit" value="Login"/>
    </form>
</div>
    </div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
    font-size: 16px;
}
.login{
    background-color: #6c5ce7;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
}
.formLogin{
    display: flex;
    align-items: center;
    width: 15.8em;
    height: 40em;
    margin: 1em auto 0 auto;
    overflow: hidden;
}
.input_auth{
    background: rgba(228,232,243,0.8);
    background-position: 0.5em 0.6em;
    border: none;
    color: rgba(80,80,80,1);
    padding: 2px 2px;
    margin: 10px ;
    border-radius: 10%;
    border: none;
    outline: none;
    width: 20em;
    transition: background-color 0.4s;
}
.input_auth:hover{
    background-color: rgba(255,255,255,255);
}
.input_auth:focus{
    background-color: rgba(255,255,255,255);
}
.submit{
    color: rgba(35,35,35,0.8);
    background: rgba(220,220,220,1);
    padding: 7px;
    margin-left: 50px;
    margin: 5.5 3 5 5em;
    width: 10em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.4s;
}
.submit:hover{
    background: #43467f;
    color: #ffffff;
}
    .danger-text{
        color: red;
    }

</style>
