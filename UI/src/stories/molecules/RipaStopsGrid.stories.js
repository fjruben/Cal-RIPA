import RipaStopsGrid from '@/components/molecules/RipaStopsGrid'
import { stops, errorCodeSearch } from '../data/stops'

export default {
  title: 'Molecules/RipaStopsGrid',
  component: RipaStopsGrid,
  parameters: {},
}

export const basic = () => ({
  components: { RipaStopsGrid },
  data() {
    return {
      data: stops,
      errorCodeSearch: errorCodeSearch,
      savedFilters: {},
    }
  },
  template:
    '<ripa-stops-grid :items="data" :errorCodeSearch="errorCodeSearch" :savedFilters="savedFilters"></ripa-stops-grid>',
})

export const loading = () => ({
  components: { RipaStopsGrid },
  data() {
    return {
      data: {},
      errorCodeSearch: errorCodeSearch,
      savedFilters: {},
    }
  },
  template:
    '<ripa-stops-grid loading :items="data" :errorCodeSearch="errorCodeSearch" :savedFilters="savedFilters"></ripa-stops-grid>',
})
