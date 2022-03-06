// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Image, TouchableOpacity ,StyleSheet} from "react-native";

// import moment from "moment";

// // import styles from "./Calendar.style.js";

// class WeekSelector extends Component {
//   static propTypes = {
//     controlDate: PropTypes.any,
//     iconComponent: PropTypes.any,
//     iconContainerStyle: PropTypes.oneOfType([
//       PropTypes.object,
//       PropTypes.number
//     ]),
//     iconInstanceStyle: PropTypes.oneOfType([
//       PropTypes.object,
//       PropTypes.number
//     ]),
//     iconStyle: PropTypes.oneOfType([
//       PropTypes.object,
//       PropTypes.number,
//       PropTypes.array
//     ]),
//     imageSource: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
//     size: PropTypes.number,
//     onPress: PropTypes.func,
//     weekStartDate: PropTypes.object,
//     weekEndDate: PropTypes.object
//   };

//   shouldComponentUpdate(nextProps) {
//     // Extract iconComponent since JSON.stringify fails on React component circular refs
//     let _nextProps = Object.assign({}, nextProps);
//     let _props = Object.assign({}, this.props);

//     delete _nextProps.iconComponent;
//     delete _props.iconComponent;

//     return (
//       JSON.stringify(_props) !== JSON.stringify(_nextProps) ||
//       this.props.iconComponent !== nextProps.iconComponent
//     );
//   }

//   isEnabled(controlDate, weekStartDate, weekEndDate) {
//     if (controlDate) {
//       return !moment(controlDate).isBetween(
//         weekStartDate,
//         weekEndDate,
//         "day",
//         "[]"
//       );
//     }
//     return true;
//   }

//   render() {
//     const {
//       controlDate,
//       iconContainerStyle,
//       iconComponent,
//       iconInstanceStyle,
//       iconStyle,
//       imageSource,
//       onPress,
//       weekEndDate,
//       weekStartDate,
//       size
//     } = this.props;

//     const enabled = this.isEnabled(controlDate, weekStartDate, weekEndDate);
//     const opacity = { opacity: enabled ? 1 : 0 };

//     let component;
//     if (React.isValidElement(iconComponent)) {
//       component = React.cloneElement(iconComponent, {
//         style: [iconComponent.props.style, { opacity: opacity.opacity }]
//       });
//     } else if (Array.isArray(iconComponent)) {
//       component = iconComponent;
//     } else {
//       let imageSize = { width: size, height: size };
//       component = (
//         <Image
//           style={[
//             styles.icon,
//             imageSize,
//             iconStyle,
//             iconInstanceStyle,
//             opacity
//           ]}
//           source={imageSource}
//         />
//       );
//     }

//     return (
//       <TouchableOpacity
//         style={[styles.iconContainer, iconContainerStyle]}
//         onPress={onPress}
//         disabled={!enabled}
//       >
//         {component}
//       </TouchableOpacity>
//     );
//   }
// }
// const styles=StyleSheet.create({
//     //CALENDAR STYLES
//     calendarContainer: {
//       overflow: "hidden"
//     },
//     datesStrip: {
//       flexDirection: "row",
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "space-between"
//     },
//     calendarDates: {
//       flex: 1,
//       flexDirection: "row",
//       justifyContent: "center",
//       alignItems: "center"
//     },
//     calendarHeader: {
//       textAlign: "center",
//       fontWeight: "bold",
//       alignSelf: "center"
//     },
//     iconContainer: {
//       justifyContent: "center",
//       alignItems: "center",
//       alignSelf: "center"
//     },
//     icon: {
//       resizeMode: "contain"
//     },
  
//     //CALENDAR DAY
//     dateRootContainer: {
//       flex: 1,
//     },
//     dateContainer: {
//       justifyContent: "center",
//       alignItems: "center",
//       alignSelf: "center"
//     },
//     dateName: {
//       textAlign: "center"
//     },
//     weekendDateName: {
//       color: "#A7A7A7",
//       textAlign: "center"
//     },
//     dateNumber: {
//       fontWeight: "bold",
//       textAlign: "center"
//     },
//     weekendDateNumber: {
//       color: "#A7A7A7",
//       fontWeight: "bold",
//       textAlign: "center"
//     },
//     dot: {
//       width: 6,
//       height: 6,
//       marginTop: 1,
//       borderRadius: 5,
//       opacity: 0
//     },
  
//     // CALENDAR DOTS
//     dotsContainer: {
//       flexDirection: 'row',
//       justifyContent: 'center'
//     },
//     visibleDot: {
//       opacity: 1,
//       backgroundColor: 'blue'
//     },
//     selectedDot: {
//       backgroundColor: 'blue'
//     },
  
//     // Calendar Lines
//     line: {
//       height: 4,
//       marginTop: 3,
//       borderRadius: 1,
//       opacity: 0
//     },
//     linesContainer: {
//       justifyContent: 'center'
//     },
//     visibleLine: {
//       opacity: 1,
//       backgroundColor: 'blue'
//     },
//     selectedLine: {
//       backgroundColor: 'blue'
//     },
//   });

// export default WeekSelector;

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

const weekDaysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const now = moment();

class CalendarHeaderComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onPressArrowLeft = this.onPressArrowLeft.bind(this);
    this.onPressArrowRight = this.onPressArrowRight.bind(this);
    this.shouldLeftArrowBeDisabled = this.shouldLeftArrowBeDisabled.bind(this);
  }

  onPressArrowLeft() {
    this.props.onPressArrowLeft(this.props.month, this.props.addMonth);
  }

  onPressArrowRight() {
    this.props.onPressArrowRight(this.props.month, this.props.addMonth);
  }

  shouldLeftArrowBeDisabled() {
    const selectedDate = moment(this.props.month.getTime());
    return selectedDate.isSame(now, 'month');
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.dateText}>
            {moment(this.props.month.getTime()).format('MMM, YYYY')}
          </Text>
          <View
            style={[
              styles.iconContainer,
              this.shouldLeftArrowBeDisabled() ? styles.disabled : {}
            ]}
          >
            <TouchableOpacity
              onPress={this.onPressArrowLeft}
              disabled={this.shouldLeftArrowBeDisabled()}
            >
              <Image
                style={[styles.icon, styles.leftIcon]}
                source={require('../Themes/left-arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={this.onPressArrowRight}
          >
            <Image
              style={styles.icon}
              source={require('../Themes/right-arrow.png')}
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          {!this.props.horizontal ? (
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  opacity: this.props.horizontal ? 0.2 : 1
                }
              ]}
              onPress={this.props.onPressListView}
            >
              <Image
                style={styles.icon}
                source={require('../Themes/left-arrow.png')}
              />
            </TouchableOpacity>
          ) : null}
          {this.props.horizontal ? (
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  opacity: this.props.horizontal ? 1 : 0.2
                }
              ]}
              onPress={this.props.onPressGridView}
            >
              <Image
                style={styles.icon}
                source={require('../Themes/gg.png')}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {// not showing week day in case of horizontal calendar, this will be handled by day component
        this.props.horizontal ? null : (
          <View style={styles.week}>
            {weekDaysNames.map((day, index) => (
              <Text key={index} style={styles.weekName} numberOfLines={1}>
                {day.toUpperCase()}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  }
}

CalendarHeaderComponent.propTypes = {
  headerData: PropTypes.object,
  horizontal: PropTypes.bool,
  onPressArrowRight: PropTypes.func.isRequired,
  onPressArrowLeft: PropTypes.func.isRequired,
  onPressListView: PropTypes.func.isRequired,
  onPressGridView: PropTypes.func.isRequired,
  addMonth: PropTypes.func,
  month: PropTypes.object
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#eceef1'
  },
  week: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  weekName: {
    marginTop: 2,
    marginBottom: 7,
    width: 32,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7c7c7c'
  },
  dateText: {
    fontSize: 18
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 4,
    marginTop: -2
  },
  leftIcon: {
    transform: [{ rotate: '180deg' }]
  },
  icon: {
    width: 24,
    height: 24
  },
  disabled: {
    opacity: 0.4
  }
});

export default CalendarHeaderComponent;