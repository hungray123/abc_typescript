import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const weekDaysNames = ['CN', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7'];

//pure= memo
class InventoryCount extends React.PureComponent {

  getFooterTextStyle() {
    const { marking = {}, state } = this.props;
    const style = {
      color: '#c1c2c1'
    };

    if (marking.inventory > 0 && state !== 'disabled') {
      style.color = '#4caf50';
    }
    return style;
  }

  getInventoryCount() {
    const { marking = {}, state } = this.props;
    if (typeof marking === 'object' && state !== 'disabled') {
      if (marking.inventory >= 0) {
        return marking.inventory;
      }
    }
    if (state === 'disabled') {
      return '';
    } else {
      return 'NA';
    }
  }

  render() {
    return (
      <View style={styles.footer} {...this.props.copilot}>
        <Text style={this.getFooterTextStyle()}>
          {/* {this.getInventoryCount()} */}
        </Text>
      </View>
    );
  }
}

class CalendarDayComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onDayPress = this.onDayPress.bind(this);
  }

  getContentStyle() {
    const { state, marking = {} } = this.props;
    const style = {
      content: {},
      text: {
        color: '#181c26'//màu nền các ngày
      }
    };
//// thao tác chọn ngày
    if (state === 'disabled') {
      console.log(state)
      style.text.color = '#c1c2c1';
      style.content.backgroundColor='blue'
    } else {
      if (marking.partiallyBlocked) {
        style.content.borderColor = '#c1c2c1';
        style.content.borderRadius = 50;
        style.content.backgroundColor='green'
        style.text.color = 'black';
        style.content.borderWidth = 1;
      } else if (marking.partiallySoldOut) {
        style.content.borderColor = '#e35052';
        style.content.borderRadius = 50;
        style.content.borderWidth = 1;
        style.content.backgroundColor='blue'
      }

      // if (marking.selected) {
      //   style.text.color = 'blue';
      //   style.content.backgroundColor = '#pink';
      //   style.content.borderRadius = 50;
      // } else if (marking.fullyBlocked) {
      //   style.text.color = 'blue';
      //   style.content.backgroundColor = '#c1c2c1';
      //   style.content.borderRadius = 50;
      // } else if (marking.fullySoldOut) {
      //   style.text.color = 'blue';
      //   style.content.backgroundColor = '#e35052';
      //   style.content.borderRadius = 50;
      // }
    }

    return style;
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }

  render() {
   const contentStyle = this.getContentStyle();
   // const highDemandImage = require('../Themes/left-arrow.png');

    return (
      <View style={styles.container} {...this.props.copilot}>
       {/* các thứ */}
        <View style={styles.header}>
          {this.props.horizontal ? (
            <Text style={styles.weekName} numberOfLines={1}>
              {weekDaysNames[this.props.date.weeDay]}
            </Text>
          ) : null}
        </View>

        <TouchableOpacity
          style={[styles.content, contentStyle.content,]}
          onPress={this.onDayPress}
        >
          {/* hiện thị ngày */}
          <Text style={[styles.contentText, contentStyle.text]}>
            {String(this.props.children)}
          </Text>
          
           {/* nhỏ trên đầu ngày đó */}
          {/* {this.props.marking.highDemand && this.props.state !== 'disabled' ? (
            <Image source={highDemandImage} style={styles.smallIcon} />
          ) : null} */}
        </TouchableOpacity>
        
        {/* <InventoryCount {...this.props} /> */}
      </View>
    );
  }
}

class CalendarDayWrapper extends React.PureComponent {
  render() {
    return <CalendarDayComponent {...this.props} />;
  }
}

CalendarDayComponent.propTypes = {
  children: PropTypes.any,
  state: PropTypes.string,
  marking: PropTypes.any,
  horizontal: PropTypes.bool,
  //date: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  current: PropTypes.string,
  copilot: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7
  },
  weekName: {
    width: 32,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7c7c7c'
  },
  content: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  contentText: {
    fontSize: 20
  },
  footer: {
    flexDirection: 'row'
  },
  smallIcon: {
    width: 12,
    height: 12,
    position: 'absolute',
    top: -1,
    right: -1
  }
});

export default CalendarDayWrapper;