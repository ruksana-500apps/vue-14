<template>
  <div>
   <center> <h1>Details</h1> </center>
    <center><table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in emp" :key="user.id">
                   <td>{{user.name}} </td>
                    <td>{{user.mail}}</td>
                    <td>{{user.country}}</td>
                </tr>
            </tbody>
        </table></center>
  </div>
</template>
<script>
export default {
  name: 'tableData',
     data(){
         return{
              emp: [
                      {name: 'Ruksana', mail: 'ruksanashaik', country: 'India'},
                      {name: 'Karishma',mail: 'Karishmashaik', country: 'USA'},
                      {name: 'Sonia', mail: 'soniyaadhuri', country: 'London'},
                      {name: 'Sofiya',mail: 'sofiyarathod', country: 'India'},
                      {name: 'Afrin', mail: 'afrintabausum', country: 'America'}
      ]
    };
  }
 };
</script>