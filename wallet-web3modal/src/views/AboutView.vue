<template>
  <button @click="connectWallet">点击链接</button>
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

<!-- export default defineComponent({
  setup() {
    const provider = ref(null);
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

    return () => (
      <div>
        <button onClick={connectWallet}>Connect to MetaMask</button>
        {account.value && <p>Connected Account: {account.value}</p>}
      </div>
    );
  },
}); -->