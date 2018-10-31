import Taro, {
	Component
} from '@tarojs/taro'
import {
	View
} from '@tarojs/components'
import {
	AtTabBar,
	AtCard,
	AtTag
} from 'taro-ui'

import './index.css'

class Index extends Component {

	componentWillReceiveProps(nextProps) {
		//console.log(this.props, nextProps)
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	onClick() {
		console.log('777')
	}

	render() {
		return (
			<View className='card'>
	      <AtCard
	        className='card'
	        title={this.props.title}
	      >
	      {
	      	this.props.items && this.props.items.map((r, i) => (
						<AtTag 
		          active={true}
		          name={r.name} 
							onClick = {
								this.onClick.bind(this)
							}
							 key={i}
		        >
		          {r.name}
		        </AtTag>
	      	))
	      }
	      </AtCard>
      </View>
		)
	}
}

export default Index