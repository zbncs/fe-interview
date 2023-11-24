import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";
import { View } from "react-native";

import DurationScroll from "./DurationScroll";

import { generateStyles } from "./TimerPicker.styles";

const TimerPicker = forwardRef(
    (
        {
            onDurationChange,
            initialHours = 0,
            initialMinutes = 0,
            initialSeconds = 0,
            hideHours = false,
            hideMinutes = false,
            hideSeconds = false,
            hourLimit,
            minuteLimit,
            secondLimit,
            hourLabel = "h",
            minuteLabel = "m",
            secondLabel = "s",
            padWithNItems = 1,
            disableInfiniteScroll = false,
            LinearGradient,
            pickerContainerProps,
            pickerGradientOverlayProps,
            topPickerGradientOverlayProps,
            bottomPickerGradientOverlayProps,
            styles: customStyles,
        },
        ref
    ) => {
        const checkedPadWithNItems =
            padWithNItems >= 0 ? Math.round(padWithNItems) : 0;

        const styles = useMemo(
            () =>
                generateStyles(customStyles, {
                    padWithNItems: checkedPadWithNItems,
                }),

            [checkedPadWithNItems, customStyles]
        );

        const [selectedHours, setSelectedHours] = useState(initialHours);
        const [selectedMinutes, setSelectedMinutes] = useState(initialMinutes);
        const [selectedSeconds, setSelectedSeconds] = useState(initialSeconds);

        useEffect(() => {
            onDurationChange({
                hours: selectedHours,
                minutes: selectedMinutes,
                seconds: selectedSeconds,
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [selectedHours, selectedMinutes, selectedSeconds]);

        const hoursDurationScrollRef = useRef(null);
        const minutesDurationScrollRef = useRef(null);
        const secondsDurationScrollRef = useRef(null);

        useImperativeHandle(ref, () => ({
            reset: (options) => {
                setSelectedHours(initialHours);
                setSelectedMinutes(initialMinutes);
                setSelectedSeconds(initialSeconds);
                hoursDurationScrollRef.current.reset(options);
                minutesDurationScrollRef.current.reset(options);
                secondsDurationScrollRef.current.reset(options);
            },
            setValue: (value, options) => {
                setSelectedHours(value.hours);
                setSelectedMinutes(value.minutes);
                setSelectedSeconds(value.seconds);
                hoursDurationScrollRef.current.setValue(value.hours, options);
                minutesDurationScrollRef.current.setValue(
                    value.minutes,
                    options
                );
                secondsDurationScrollRef.current.setValue(
                    value.seconds,
                    options
                );
            },
        }));

        return (
            <View
                {...pickerContainerProps}
                style={styles.pickerContainer}
                testID="timer-picker">
                {!hideHours ? (
                    <DurationScroll
                        ref={hoursDurationScrollRef}
                        numberOfItems={23}
                        label={hourLabel}
                        initialValue={initialHours}
                        onDurationChange={setSelectedHours}
                        pickerGradientOverlayProps={pickerGradientOverlayProps}
                        topPickerGradientOverlayProps={
                            topPickerGradientOverlayProps
                        }
                        bottomPickerGradientOverlayProps={
                            bottomPickerGradientOverlayProps
                        }
                        disableInfiniteScroll={disableInfiniteScroll}
                        padWithNItems={checkedPadWithNItems}
                        limit={hourLimit}
                        LinearGradient={LinearGradient}
                        styles={styles}
                        testID="duration-scroll-hour"
                    />
                ) : null}
                {!hideMinutes ? (
                    <DurationScroll
                        ref={minutesDurationScrollRef}
                        numberOfItems={59}
                        label={minuteLabel}
                        initialValue={initialMinutes}
                        onDurationChange={setSelectedMinutes}
                        padNumbersWithZero
                        pickerGradientOverlayProps={pickerGradientOverlayProps}
                        topPickerGradientOverlayProps={
                            topPickerGradientOverlayProps
                        }
                        bottomPickerGradientOverlayProps={
                            bottomPickerGradientOverlayProps
                        }
                        disableInfiniteScroll={disableInfiniteScroll}
                        padWithNItems={checkedPadWithNItems}
                        limit={minuteLimit}
                        LinearGradient={LinearGradient}
                        styles={styles}
                        testID="duration-scroll-minute"
                    />
                ) : null}
                {!hideSeconds ? (
                    <DurationScroll
                        ref={secondsDurationScrollRef}
                        numberOfItems={59}
                        label={secondLabel}
                        initialValue={initialSeconds}
                        onDurationChange={setSelectedSeconds}
                        padNumbersWithZero
                        pickerGradientOverlayProps={pickerGradientOverlayProps}
                        topPickerGradientOverlayProps={
                            topPickerGradientOverlayProps
                        }
                        bottomPickerGradientOverlayProps={
                            bottomPickerGradientOverlayProps
                        }
                        disableInfiniteScroll={disableInfiniteScroll}
                        padWithNItems={checkedPadWithNItems}
                        limit={secondLimit}
                        LinearGradient={LinearGradient}
                        styles={styles}
                        testID="duration-scroll-second"
                    />
                ) : null}
            </View>
        );
    }
);

export default React.memo(TimerPicker);
