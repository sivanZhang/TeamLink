<template>
    <div>
        <mt-header title="Search">
            <router-link to="/" slot="left">
                 <mt-button icon="back">back</mt-button>
            </router-link>
        </mt-header>
        <mt-search
  v-model="value"
  cancel-text="Cancel"
  placeholder="Search">
</mt-search>
    </div>
</template>
