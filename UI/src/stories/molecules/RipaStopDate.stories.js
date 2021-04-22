import RipaStopDate from '@/components/molecules/RipaStopDate'

export default {
  title: 'Molecules/RipaStopDate',
  component: RipaStopDate,
  parameters: {},
}

export const basic = () => ({
  components: { RipaStopDate },
  data() {
    return {
      stopDate: {},
    }
  },
  template:
    '<div><ripa-stop-date v-model="stopDate"></ripa-stop-date>{{ stopDate }}</div>',
})