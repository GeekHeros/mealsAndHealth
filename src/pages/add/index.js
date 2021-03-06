import Taro, {
  Component
} from '@tarojs/taro'
import {
  View
} from '@tarojs/components'
import {
  AtButton,
  AtTag
} from 'taro-ui'
import {
  toJS
} from 'immutable'

import {actionCreators as actionCreatorsFromToast} from '../../components/toast/store'

import CardMe from '../../components/card/index'
import Div from '../../components/division'
import Toast from '../../components/toast'

import {
  connect
} from '@tarojs/redux'
import {
  actionCreators
} from './store'

import {formatDate} from '../../tool/utils'

import './index.css'

class Index extends Component {
  constructor() {
    super()
    this.state = {
      arrForSave: []
    }
  }
  config = {
    navigationBarTitleText: '记录'
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      arrForSave: nextProps.arr3
    })
  }

  componentWillUnmount() {}

  componentWillMount() {
    this.setState({
      arrForSave: this.props.arr3
    })
  }

  componentDidShow() {}

  componentDidHide() {}

  pickBigItem(obj){
    this.props.pickBigItem(obj)
  }

  pickSmallItem(obj, str){
    this.props.pickSmallItem(obj)
  }

  save() {
    this.props.save(this.state.arrForSave, this.props.date)
  }

  render() {
    return (
      <View className='index'>
        <View className='at-row at-row--wrap'>
        {
          this.props.arr1.map((row, index) => (
            <View className='block' key={index}>
              <AtTag
                name={row.name}
                type='primary'
                circle
                active={row.active}
                onClick={this.pickBigItem.bind(this, row)} 
              >
                {row.name}
              </AtTag>
            </View>
          ))
        }
        </View>
        <Div />
        <View className='at-row at-row--wrap'>
        {
          this.props.arr2.map((row, index) => (
            <View className='block' key={index}>
              <AtTag 
                name={row.name}
                active={row.active}
                onClick={this.pickSmallItem.bind(this, row)} 
              >
                {row.name}
              </AtTag>
            </View>
          ))
        }
        </View>
        <View className='btn'>
          <AtButton 
            type='primary'
            onClick={this.save.bind(this)}
          >
          保存
          </AtButton>
        </View>
        <Toast />
      </View>
    )
  }
}

const mapState = ({
  addReducer,secondReducer
}) => {
  return {
    arr1: addReducer.arr1,
    arr2: addReducer.arr2,
    arr3: addReducer.selected,
    date: secondReducer.dateSel
  }
}

const mapDispatch = (dispatch) => {
  return {
    pickBigItem(obj) {
      dispatch(actionCreators.pickBigItem(obj))
    },
    pickSmallItem(obj) {
      dispatch(actionCreators.pickBigItem(obj, '1'))
    },
    save(arr, date) {
      if (!arr[0]) {
        return dispatch(actionCreatorsFromToast.openToast({
          isOpened: true,
          text: '您有未选的项！',
          status: 'error'
        }))
      }
      dispatch(actionCreators.saveItem(arr, date, formatDate(new Date())))
    }
  }
}

export default connect(mapState, mapDispatch)(Index)