import { Component, Vue } from 'vue-property-decorator'
import './card.less'

@Component({})
export default class CardComponent extends Vue {

  title = 'card-component'

  beforeCreate() {
    console.log('### CardComponent beforeCreate ###')
  }
}
