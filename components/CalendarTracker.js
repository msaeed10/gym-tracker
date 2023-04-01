import { useState } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { StyleSheet, View } from 'react-native';

export default CalendarTracker = () => {
    const [datesGone, setDatesGone] = useState({'2023-03-25': {marked: true, dotColor: 'green'}});

    return (
        <View style={styles.calendarWrapper}>
            <Agenda
                // The list of items that have to be displayed in agenda. If you want to render item as empty date
                // the value of date key has to be an empty array []. If there exists no value for date key it is
                // considered that the date in question is not yet loaded
                items={{
                    '2023-05-22': [{name: 'item 1 - any js object'}],
                    '2023-05-23': [{name: 'item 2 - any js object', height: 80}],
                    '2023-05-24': [],
                    '2023-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
                }}

                // Callback that gets called when items for a certain month should be loaded (month became visible)
                loadItemsForMonth={month => {
                    console.log('trigger items loading');
                }}

                // Callback that fires when the calendar is opened or closed
                onCalendarToggled={calendarOpened => {
                    console.log(calendarOpened);
                }}

                // Callback that gets called on day press
                onDayPress={day => {
                    console.log('day pressed');
                }}

                // Callback that gets called when day changes while scrolling agenda list
                onDayChange={day => {
                    console.log('day changed');
                }}

                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}

                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}

                // Specify how each item should be rendered in agenda
                renderItem={(item, firstItemInDay) => {
                    return <View />;
                }}

                // Specify how each date should be rendered. day can be undefined if the item is not first in that day
                renderDay={(day, item) => {
                    return <View />;
                }}

                // Specify how empty date content with no items should be rendered
                renderEmptyDate={() => {
                    return <View />;
                }}

                // Specify how agenda knob should look like
                renderKnob={() => {
                    return <View />;
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    calendarWrapper: {
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    }
});