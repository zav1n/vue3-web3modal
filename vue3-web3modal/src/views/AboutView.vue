<template>
  <button @click="connectWallet" class="btn">点击链接</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

const provider = ref<ethers.providers.Web3Provider | null>(null);
const account = ref('');
const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
      });
      const instance = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(instance);
      const signer = ethersProvider.getSigner();
      const address = await signer.getAddress();
      account.value = address;
      provider.value = ethersProvider;
    } catch (err) {
      console.error("Connection failed:", err);
    }
  };
</script>

<style lang="css">
.btn{
  border: none;
    background-color: transparent;
    font-family: inherit;
    font-size: 100%;
    color: inherit;
    cursor: pointer;

    color: #fff;
}
</style>