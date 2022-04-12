<template>

<div>

<p>You can reach Michael at:</p>


<ul>

<li><a href="https://agilecrm.com" onclick="getData()">Website</a></li>

</ul>


</div>

</template>


<script>

const { getNames } = require("cheerio");


export default{

name:"queS7",

data(){

return{

a:" "

}

},

mounted() {

let url = getNames();

this.url= url.map((row) => {

return { value: row, text: row };

});

if (this.urls.length) this.value = this.urls[0].text;

},

methods: {

redirect(value) {

window.open(value, "_blank");

},

async getData() {

// Get the response

const response = await fetch("https://agilecrm.com" + this.value, {

method: "GET",

});

const responseText = await response.json();

this.items = responseText.map((row) => {

return { university_name: row.url };

});

},

},

};

</script>




agilecrm.com
CRM Software | Customer Relationship Management System | Agile CRM
Agile CRM Software is the best, easy, powerful yet affordable Customer Relationship Management (CRM) with sales and marketing automation for small businesses.


