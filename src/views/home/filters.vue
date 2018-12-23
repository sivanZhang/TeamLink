<template>
  <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
    <!-- mode="in-out" -->
    <div class="container filter">
      <header>
        <div @touchend="cancel">Cancel</div>
        <div class="title">
          Filters
        </div>
        <div @touchend="clear">Clear</div>
      </header>
      <div class="tab-group row">
        <button v-for="(tab,index) in tabs" :key="index" :class="[{ active: currentTab === tab.path },'tab-button','common-btn']" @click="currentTab = tab.path">
          {{ tab.name }}
        </button>
      </div>
      <section class="Range">
        <div>Price Range</div>
        <div class="price">
          {{rangeValue[0]>1000?`$${rangeValue[0]/1000}M`:`$${rangeValue[0]}K`}}-
          {{rangeValue[1]>1000?`$${rangeValue[1]/1000}M`:`$${rangeValue[1]}K`}}
        </div>
        <Slider v-model="rangeValue" :min='10' :max='4000' :step="10" range></Slider>
      </section>
      <section>
        <div>Propty Type</div>
        <Select v-model="proptyTypValue" style="width:100%">
          <Option v-for="item in proptyTyp" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </section>
      <section>
        <div>Land Size</div>
        <div>
          Minimum Space_____ <Select v-model="minimumSpaceValue" style="width:100px">
            <Option v-for="item in minimumSpace" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </section>
      <section class="bedrooms">
        <div>Bedrooms {{selectBedroom}}</div>
        <div class="select-group">
          <button v-for="(bedroom,index) in bedrooms" :key="index" :class="[{ active: selectBedroom == bedroom.content },'tab-button','btn']" @touchend="chooseBedroom(bedroom.content)">
            {{ bedroom.content }}
          </button>
        </div>
        <div>Bathrooms {{selectBathroom}}</div>
        <div class="select-group">
          <button v-for="(bathroom,index) in bathrooms" :key="index" :class="[{ active: selectBathroom == bathroom.content },'tab-button','btn']" @touchend="chooseBathroom(bathroom.content)">
            {{ bathroom.content }}
          </button>
        </div>

        <div>Parking {{selectParking}}</div>
        <div class="select-group">
          <button v-for="(item,index) in parking" :key="index" :class="[{ active: selectParking == item.content },'tab-button','btn']" @touchend="chooseParking(item.content)">
            {{ item.content }}
          </button>
        </div>
      </section>
      <router-link tag="section" to="/map" class="features">
        <div>
          Features
        </div>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
      <section>
        Exclude under contract/offer <Checkbox class="pull-right" v-model="single"></Checkbox>
      </section>
      <div class="row">
        <button @touchend="apply()" class="apply black-btn common-btn">
          Apply
        </button>
      </div>
    </div>
  </transition>
</template>
<script>
  import { Select, Slider,Checkbox } from 'iview'
  export default {
    name: "filters",
    components: {
      Select,
      Slider,
      Checkbox
    },
    data() {
      return {
        currentTab: "buy",
        tabs: [{ path: "buy", name: "Buy" }, { path: "rent", name: "Rent" }],
        rangeValue: [10, 4000],
        proptyTypValue: "House",
        proptyTyp: [{
          value: "House",
          label: "House"
        }],
        minimumSpaceValue: "M2",
        minimumSpace: [{
          value: "M2",
          label: "M2"
        }],
        selectBedroom: 2,
        selectBathroom: 2,
        selectParking: 3,
        single: false,
        bedrooms: [{
            content: "studio"
          },
          {
            content: 1
          },
          {
            content: 2
          },
          {
            content: 3
          },
          {
            content: 4
          },
          {
            content: "5+"
          }
        ],
        bathrooms: [{
            content: 1
          },
          {
            content: 1.5
          },
          {
            content: 2
          },
          {
            content: 2.5
          },
          {
            content: 3
          },
          {
            content: "4+"
          }
        ],
        parking: [{
            content: 1
          },
          {
            content: 2
          },
          {
            content: 3
          },
          {
            content: 4
          },
          {
            content: 5
          },
          {
            content: "6+"
          }
        ]
      };
    },
    methods: {
      chooseBedroom(val) {
        this.selectBedroom = val;
      },
      chooseBathroom(val) {
        this.selectBathroom = val;
      },
      chooseParking(val) {
        this.selectParking = val;
      },
      cancel(val) {
        this.$router.go(-1);
      },
      clear() {
        [this.rangeValue, this.proptyTypValue, this.minimumSpaceValue, this.selectBedroom, this.selectBathroom, this.selectParking, this.single] = [
          [10, 4000], "House", "M2", 2, 2, 3, false
        ]
      },
      apply() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style lang="less" scoped>
  .apply {
    width: 100%;
    height: 54px;
  }

  .filter {
    & /deep/ .ivu-slider-button {
      background-color: #000;
      border: none;
    }

    & /deep/ .ivu-slider-bar {
      background-color: #000
    }

    background: #fff;
    width: 100%;
    top: 0;

    header {
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 15px;
        font-weight: 700;
      }
    }

    .tab-group {
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .tab-button {
        width: 60px;
        height: 54px;
        border-radius: 0px;
        background: none;
        box-shadow: unset;
        border-bottom: transparent 2px solid;

        &.active {
          outline: none;
          background: none;
          border-bottom: #333 2px solid;
          font-weight: 600;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }

  section {
    padding: 30px 15px;

    .price {
      text-align: center;
    }

    &+section {
      border-top: 1px solid #ddd;
    }
  }

  .select-group {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;

    &:last-of-type {
      margin-bottom: 0px;
    }

    .tab-button {
      width: 100%/6;
      padding: 6px 0px;
      border-radius: 0px;
      background: none;
      box-shadow: unset;
      border: #ddd 1px solid;

      &+.tab-button {
        border-left-width: 0;
      }

      &.active {
        outline: none;
        border: #000 1px solid;
        background: #000;
        color: #fff;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .features {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      text-align: left;
      width: 50%;
    }

    i {
      text-align: right;
      width: 50%;
    }
  }

  section /deep/ .ivu-checkbox-checked .ivu-checkbox-inner {
    border-color: #000;
    background-color: #000;
  }
</style>