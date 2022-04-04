<template>
<div>
    <table>
        <thead>
            <tr>
                <th>
                    <td>Id</td>
                    <td>Email</td>
                    <td>FirstName</td>
                    <td>LastName</td>
                </th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="data1 in users" :key="data1.id">
                <td>{{data1.id}}</td>
                <td>{{data1.email}}</td>
                <td>{{data1.first_name}}</td>
                <td>{{data1.last_name}}|</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'Axios'
export default{
    name:"dartaUrl",
    data()
    {
        return{
             users:[]
        }
    },
    methods:{
        getUser(){
            const url="https://reqres.in/api/users?page=2"
            axios
             .get(url)
             .then(res=>{
                 this.users=res.data.data
             })
        }
    },
    mounted(){
        this.getUser();
    }
}
</script>
