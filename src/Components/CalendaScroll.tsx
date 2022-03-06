import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Calendar } from "react-native-toggle-calendar";
import moment from "moment";
import CalendarDayComponent from "./CalendarDayComponent";
import CalendarHeaderComponent from "./CalendarHeaderComponent";
import CalendarFooterComponent from "./CalendarFooterComponent";
import { CalendarDay } from "./CalendarDay";

let selectedCalendarDate = moment();
const minimumDate = moment().add(-1, "day"); // one day before for midnight check-in usecase
const currentDate = moment();

const CalendarScroll: React.FC = () => {
  const [selectedCalendarDateString, setSelectedCalendarDateString] = useState(
    selectedCalendarDate.format("YYYY-MM-DD")
  );
  const [selectedCalendarMonthString, setSelectedCalendarMonthString] =
    useState(selectedCalendarDate.format("YYYY-MM-DD"));
  const [calendarHeaderData, setCalendarHeaderData] = useState({});
  
  const [calendarMarkedDates, setCalendarMarkedDates] = useState({
    // '2022-03-04': {
    //     fullySoldOut: false,
    //     partiallySoldOut: false,
    //     fullyBlocked: false,
    //     partiallyBlocked: true,
    //     inventory: 14,
    //     highDemand: false,
    //     selected: false,

    //   },
    "2022-03-05": {
      fullySoldOut: false,
      partiallySoldOut: false,
      fullyBlocked: false,
      partiallyBlocked: true,
      inventory: 14,
      highDemand: true,
      selected: false,
    },
  });
  const [horizontal, setHorizontal] = useState(true);
  const [ratesInventoryDataArray, setRatesInventoryDataArray] = useState([]);
  const [saveButtonClicked, setSaveButtonClicked] = useState(false);
  const [calendarLoading, setCalendarLoading] = useState(true);

  const updateSelectedCalendarMonth = (selectedCalendarMonthString: string) => {
    setCalendarLoading(true),
      setSelectedCalendarDateString(selectedCalendarMonthString);
  };
  const onDayPress = (date: any) => {
    selectedCalendarDate = moment(date.dateString);
    const selectedCalendarDateString =
      selectedCalendarDate.format("YYYY-MM-DD");
    setRatesInventoryDataArray([]),
      setSelectedCalendarDateString(""),
      setSelectedCalendarMonthString(selectedCalendarDateString),
      console.log(selectedCalendarDateString);
  };
  const onPressArrowLeft = (currentMonth: any, addMonthCallback: any) => {
    const monthStartDate = moment(currentMonth.getTime()).startOf("month");

    // don't go back for past months
    if (monthStartDate > currentDate) {
      addMonthCallback(-1);
      const selectedCalendarMonthString = moment(currentMonth.getTime())
        .add(-1, "month")
        .format("YYYY-MM-DD");
      updateSelectedCalendarMonth(selectedCalendarMonthString);
    }
  };
  const onPressArrowRight = (currentMonth: any, addMonthCallback: any) => {
    addMonthCallback(1);
    const selectedCalendarMonthString = moment(currentMonth.getTime())
      .add(1, "month")
      .format("YYYY-MM-DD");
    updateSelectedCalendarMonth(selectedCalendarMonthString);
  };
  const onPressListView = () => {
    setHorizontal(true);
  };
  const onPressGridView = () => {
    setHorizontal(false);
  };

  console.log("calendarHeaderDATA"+calendarHeaderData)
  return (
    <View style={{ marginTop: 100 }}>
      <Calendar
        current={calendarHeaderData}
        minDate={minimumDate.format("YYYY-MM-DD")}
        dayComponent={CalendarDay}
        calendarHeaderComponent={CalendarHeaderComponent}
        headerData={calendarHeaderData}
        style={styles.calendar}
        onPressArrowLeft={onPressArrowLeft}
        onPressArrowRight={onPressArrowRight}
        onPressListView={onPressListView}
        onPressGridView={onPressGridView}
        markedDates={calendarMarkedDates}
        horizontal={horizontal}
        onDayPress={onDayPress}
        showPastDatesInHorizontal={1}
        horizontalEndReachedThreshold={50}
        horizontalStartReachedThreshold={0}
        loading={calendarLoading}
      />
      <CalendarFooterComponent
        calendarDateString={selectedCalendarDate.format("DD MMM, YYYY")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  scrollView: {},
  calendar: {},
});
export default CalendarScroll;
