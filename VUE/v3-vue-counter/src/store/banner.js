import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getBannerData } from '../api/index'

export const useBannerStore = defineStore('banner', () => {
    const [banners, setBanners] = reactive([])
    return {
        banners,
        getBanners: async () => {
            const { banners } = await getBannerData();
            setBanners(banners)
        }
    }
})