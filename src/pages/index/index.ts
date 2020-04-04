import { Component, Vue } from 'vue-property-decorator'
import './index.less'

import CardComponent from '../../components/card/card.vue'

@Component({
  components: ({
		'card-component': CardComponent
	})
})
export default class IndexPage extends Vue {

  msg = 'index-page'

  beforeCreate() {
    console.log('### IndexPage beforeCreate ###')
  }
}
