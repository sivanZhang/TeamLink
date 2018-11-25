<template>
    <div id="property" class="container">
        <mt-header title="TeamLink" class="row header">
            <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
        </mt-header>
        <Map></Map>
         <Tag color="success">FOR RENT</Tag>
         <div><Icon type="ios-pin" />Orland Park, IL 60465, Chicago, IL, United States</div>
         <h4>Single House Near Orland Park, Chicago</h4>
         <div class="property-info">
            <div>
                <div class="iwarp"><i class="fa fa-barcode" aria-hidden="true"></i></div>
                <div>
                    771
                    <p>property id</p>
                </div>
            </div>
            <div>
                <div class="iwarp"><i class="fa fa-crop" aria-hidden="true"></i></div> 
                <div>
                    185 sqFt
                    <p>SIZE</p>
                </div>
                
            </div>
            <div>
                <div class="iwarp"><i class="fa fa-bed" aria-hidden="true"></i></div>
                <div>
                    3
                    <p>BEDROOMS</p>
                </div>
            </div>
            <div>
                <div class="iwarp"><i class="fa fa-bath" aria-hidden="true"></i></div>
                <div>
                    2
                    <p>BATHROOM</p>
                </div>
            </div>
            
         </div>
         <h3 class="text-right">$2.5 thousand
         </h3>
        <p class="text-right">/MONTH</p>    
        <p class="text-right icons"><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-minus" aria-hidden="true"></i><i class="fa fa-print" aria-hidden="true"></i></p>
        <mt-swipe :auto="3000">
            <mt-swipe-item class="slide1">
                <img src="@/assets/h3.jpg" alt="">1
            </mt-swipe-item>
            <mt-swipe-item @click.native="test" class="slide2">
                <img src="@/assets/h1.jpg" alt="">2
            </mt-swipe-item>
            <mt-swipe-item class="slide3">
                <img src="@/assets/h2.jpg" alt="">3
            </mt-swipe-item>
        </mt-swipe>

        <section>
            <div class="card-title">Description</div>
            <div class="car-content">
                Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum sit. Usu accumsan iudicabit cu, 
                an his ferri legere habemus, cu fastidii consequat sit. Ne per augue munere, cibo doming persius ex sit.
            </div>
        </section>
        <section>
            <div class="card-title">Address</div>
            <div class="car-content">
                <p><strong>Address:</strong>
                <span>Orland Park, IL 60465, Chicago, IL, United States</span></p>
                <p>
                    <strong>Country:</strong>
                    <span>United States</span>
                </p>
                <p>
                    <strong>Province / State:</strong>
                    <span>Illinois</span>
                </p>
                <p>
                    <strong>City / Town:</strong>
                    <span>Chicago</span>
                </p>
                <p>
                    <a class="open-on-google-maps green" target="_blank" href="http://maps.google.com/?q=Orland%20Park,%20IL%2060465,%20Chicago,%20IL,%20United%20States">Open on Google Maps<i class="fa fa-map-marker"></i>
                    </a>
                </p>
            </div>
        </section>
        <Collapse v-model="value1">
            <Panel name="1">
                OVERVIEW
                <p slot="content">
                    <ul class="list-2-col ere-property-list">
                        <li>
                            <strong>Property ID</strong>
                        <span>771</span>
                        </li>
                                                <li>
                                <strong>Price</strong>
                            <span class="ere-property-price">
                                                                            $2.5 thousand                                     <span class="property-price-postfix"> / Month</span>                                </span>
                            </li>
                                                                    <li>
                                <strong>Property Type</strong>
                                <span>Apartment, Bar, House</span>
                            </li>
                                                                    <li>
                                <strong>Property status</strong>
                                <span>For Rent</span>
                            </li>
                                                                    <li>
                                <strong>Rooms</strong>
                                <span>5</span>
                            </li>
                                                                    <li>
                                <strong>Bedrooms</strong>
                                <span>3</span>
                            </li>
                                                                    <li>
                                <strong>Bathrooms</strong>
                                <span>2</span>
                            </li>
                                                                    <li>
                                <strong>Year Built</strong>
                                <span>2006</span>
                            </li>
                                                                    <li>
                                <strong>Size</strong>

                                <span>185 SqFt</span>
                            </li>
                                                                    <li>
                                <strong>Land area</strong>
                        <span>200 SqFt</span>
                            </li>
                        
                        
                                                <li>
                                <strong>Garages</strong>
                                <span>1</span>
                            </li>
                                                                    <li>
                                <strong>Garage Size</strong>
                                <span>50 SqFt</span>
                            </li>
                                            
                                                                                    </ul>
                </p>
            </Panel>
            <Panel name="2">
                FEATURES
                <div slot="content" class="panel-body js-tabcollapse-panel-body">       
                        <div class="row">
                            <div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=air-conditioning" class="feature-checked"><i class="fa fa-check-square-o"></i> Air Conditioning</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=central-heating" class="feature-unchecked"><i class="fa fa-square-o"></i> Central Heating</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=electric-range" class="feature-checked"><i class="fa fa-check-square-o"></i> Electric Range</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=fire-alarm" class="feature-checked"><i class="fa fa-check-square-o"></i> Fire Alarm</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=gym" class="feature-unchecked"><i class="fa fa-square-o"></i> Gym</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=home-theater" class="feature-unchecked"><i class="fa fa-square-o"></i> Home Theater</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=laundry" class="feature-unchecked"><i class="fa fa-square-o"></i> Laundry</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=laundry-room" class="feature-unchecked"><i class="fa fa-square-o"></i> Laundry Room</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=marble-floors" class="feature-checked"><i class="fa fa-check-square-o"></i> Marble Floors</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=microwave" class="feature-checked"><i class="fa fa-check-square-o"></i> Microwave</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=refrigerator" class="feature-unchecked"><i class="fa fa-square-o"></i> Refrigerator</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=sauna" class="feature-unchecked"><i class="fa fa-square-o"></i> Sauna</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=swimming-pool" class="feature-checked"><i class="fa fa-check-square-o"></i> Swimming Pool</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=tv-cable" class="feature-checked"><i class="fa fa-check-square-o"></i> TV Cable</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=washer" class="feature-checked"><i class="fa fa-check-square-o"></i> Washer</a></div><div class="col-xs-12"><a href="http://101.200.35.253/wordpress/?property-feature=wifi" class="feature-checked"><i class="fa fa-check-square-o"></i> WiFi</a></div></div>                </div>
            </Panel>
            <Panel name="3">
                VIDEO
                <div slot="content" class="embed-responsive embed-responsive-16by9 embed-responsive-full"> https://www.youtube.com/watch?v=iuc9R-3lge8 
                </div>
            </Panel>
            <Panel name="4">
                <a data-toggle="collapse" href="#ere-virtual_tour_360-collapse" class="js-tabcollapse-panel-heading" data-parent="#ere-features-tabs-accordion" aria-expanded="true">Virtual Tour</a>
                <div slot="content" class="panel-body js-tabcollapse-panel-body">       
                        <iframe width="100%" height="500" src="https://my.matterport.com/show/?m=wWcGxjuUuSb&amp;utm_source=hit-content-embed" frameborder="0" allowfullscreen="" allowvr=""></iframe>                </div>
            </Panel>
        </Collapse>
        <section>
            <div class="card-title">Get Directions</div>
            <div class="car-content">
                 <Map></Map>
            </div>
        </section>
        <section>
            <div class="card-title">Nearby Places</div>
            <div class="car-content">
                 <Map></Map>
            </div>
        </section>
        <section>
            <div class="card-title">Contact</div>
            <div class="car-content">
                 <div class="text-center"><img src="@/assets/agent.jpg"></div>
                   <div>
					<h4><a title="Ghaly Marco" class="green" href="http://101.200.35.253/wordpress/?agent=ghaly-marco">Ghaly Marco</a></h4>
					<span class="fw-normal">Property Agent</span>
					</div>
                    <div class="agent-social">
						<a title="Facebook" href="http://g5plus.net">
							<i class="fa fa-facebook"></i>
						</a>
						<a title="Skype" href="skype:g5plus?chat">
							<i class="fa fa-skype"></i>
						</a>
						<a title="Pinterest" href="http://g5plus.net">
							<i class="fa fa-pinterest"></i>
						</a>
						<a title="Instagram" href="http://g5plus.net">
							<i class="fa fa-instagram"></i>
						</a>
					</div>
                    <div class="agent-info-contact">
						<div class="agent-address">
                            <i class="fa green fa-fw fa-map-marker accent-color"></i>
							<span>2434 Alcott Ct Point Loma</span>
						</div>
					    <div class="agent-mobile">
								<i class="fa green fa-fw fa-phone accent-color"></i>
								<span>555 666 7778</span>
						</div>
						<div class="agent-email">
								<i class="fa green fa-fw fa-envelope accent-color"></i>
								<span>duongminhduc.dhv52k1@gmail.com</span>
							</div>
						<div class="agent-website">
								<i class="fa green fa-fw fa-link accent-color"></i>
								<a href="http://www.example.com" title="">http://www.example.com</a>
						</div>
					</div>
                            <Button type="success" shape="circle" ghost long>Other Properties</Button>
                            <Input placeholder="Full Name*" style="width: 100%" />
                            <Input placeholder="Phone Number*" style="width: 100%" />
                            <Input placeholder="Email Adress*" style="width: 100%" />
                            <Input type="textarea" :rows="4" placeholder="Message*" style="width: 100%"/>
                            <Button type="success" shape="circle" ghost long>Submit Request</Button>
            </div>
        </section>
    <Card class="card">
                <h4 slot="title"></h4>
                <div>
                  
                </div>
    </Card>
    <div class="ere-property-element">
	<span class="property-date">
		<i class="fa fa-calendar"></i> 02/02/2017	</span>
	<span class="property-views-count">
		<i class="fa fa-eye"></i>
        1,169 views	</span>
    </div>
    <Rate show-text v-model="valueCustomText">
    </Rate>
    <BackTop></BackTop>
    </div>
</template>
<script>
import Map from "./map";
export default {
  data() {
    return {
      value1: "",
      valueCustomText: 3.8
    };
  },
  components: {
    Map
  }
};
</script>
<style lang="less" scoped>
@basegreen: rgb(146, 200, 0);
.green {
  color: @basegreen;
}
.flex(@way, @way2) {
  display: flex;
  justify-content: @way;
  align-items: @way2;
}

.mint-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  .mint-swipe-item {
    img {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
}

#property {
  .fa-fw {
    margin: 10px 10px 10px 0;
  }
  padding-top: 30px;
  #map-property-single {
    margin-bottom: 30px;
  }
  .property-info {
    margin-top: 20px;
    .flex(space-around, inherit);
    flex-wrap: wrap;
    & > div {
      margin-bottom: 10px;
      width: 50%;
      .flex(flex-start, inherit);
      & > div:last-of-type {
        margin-left: 10px;
        font-size: 18px;
        p {
          font-size: 12px;
          color: #727272;
        }
      }
    }
    .iwarp {
      .flex(center, center);
      width: 50px;
      height: 50px;
      color: @basegreen;
      border: 2px solid @basegreen;
      border-radius: 50%;
    }
  }
  h3 {
    margin: 0 auto 5px;
  }
  .icons {
    color: #bababa;
    & > i + i {
      margin-left: 15px;
    }
  }
  section {
    margin: 15px auto;
    .card-title {
      padding: 10px 28px;
      color: #fff;
      background-color: rgb(34, 34, 34);
      font-weight: 600;
      font-size: 18px;
    }
    .car-content {
      padding: 15px;
      .agent-social>a{
          margin-right: 20px;
          color: #727272;
      }
    }
  }
  & /deep/ .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header {
    color: #fff;
    background-color: rgb(34, 34, 34);
  }
  & /deep/ .ivu-input {
    border-radius: 16px;
    margin: 10px auto;
  }
  & /deep/ .ivu-btn-ghost.ivu-btn-success,& /deep/ .ivu-btn-success{
      color: @basegreen;
      border-color: @basegreen;
      border-width: 2px;
  }
}
</style>