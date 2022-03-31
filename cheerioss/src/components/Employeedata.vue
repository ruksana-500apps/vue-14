<template>  
<div>
<div class="row" style="margin-bottom: 10px;">    
</div>   
    <div>  
<table class="table">  
        <thead>  
        <th>Id</th>  
        <th>Name</th>  
        <th>City</th>  
        <th>Age</th>  
        <th>Technology</th>  
        <th></th>  
        </thead>  
        <tbody>  
            <tr v-for="item in employees" :key="item.Id">  
               <td>{{item.Id}}</td>  
                <td>{{item.Name }}</td>  
                 <td>{{item.City }}</td>  
                 <td>{{item.Age}}</td>  
                 <td>{{item.Tech}}</td>   
            </tr>  
        </tbody>  
    </table>  
    </div>  
</div>
</template>  
  
<script>  
import EemployeeService from "../components/Employeeservice";  
    export default {  
         name: 'EmployeeList',  
             data() {  
       return {  
      employees: [],  
    };  
  },  
          created()  
        {  
             this.retrieveemployees();  
        },  
      
    methods: {  
        retrieveemployees() {  
      EemployeeService.getAll().then(response => {  
      this.employees = response.data;  
          console.log(response.data);  
        })  
        .catch(e => {  
          console.log(e);  
        });  
    },  
  
}  
}  
</script>  
  
<style lang="scss" scoped>  
  
</style>  