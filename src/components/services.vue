<template>
<div class="text-center container">
    <mt-header class="row header">
            <mt-button @touchstart.native="$router.go(-1)" icon="back" slot="left"></mt-button>
            <mt-button @touchstart.native="$router.push(`/home`)" slot="right">home</mt-button>
    </mt-header>
    <h3>Terms of Services</h3> 
    <br/>
    <br/> 
    <div style="color:gray; text-align:left">
      <strong>1 OUR CORE VALUES</strong><br/>

The core values of HOME789 revolves around the DNA of our whole business. They define the guiding principles that determine how we conduct our business. By adhering to our company’s core values, as outlined below. We aim to deliver the WOW factor for all clientèle.

<br/>
<strong>2 Positive actions</strong><br/>

Take actions with objectivity, honesty, accountability and fairness – there can be no compromise. Do the right thing by yourself, the company and client.

Customers’ best interests first

This is the driver of our business. We listen, understand, anticipate and respond. Building customer trust is important to our business. We build deep long-term relationships by delivering real value to our customers. As valued advisors, we aim to provide our valued clients with exceptional customer service and support.

<br/>
<strong>3 Work as one</strong><br/>

We collaborate in order to succeed through a group effort. We work together openly, honestly and professionally to achieve exceptional levels of service. As a family we ask for help, and help those when asked. Strong teamwork and a family spirit enables learning and development in a supportive and positive environment.
</div>
</div>
</template>
to be expected
<script>
import back from "./back";
export default {
    data(){
    return{
      title:'version'
    }
    },
    components: {
    back
  },
  mounteds() {
      document.title='TeamLink-'+this.title;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 20%;
}
</style>
