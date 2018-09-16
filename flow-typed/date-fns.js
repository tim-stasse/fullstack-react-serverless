declare module "date-fns" {
  declare class DateFns {
    closestIndexTo(
      dateToCompare: Date | string | number,
      datesArray: Array<Date | string | number>
    ): number;
    closestTo(
      dateToCompare: Date | string | number,
      datesArray: Array<Date | string | number>
    ): Date;
    compareAsc(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    compareDesc(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    distanceInWords(
      dateToCompare: Date | string | number,
      date: Date | string | number,
      options?: {
        includeSeconds?: boolean,
        addSuffix?: boolean,
        locale?: Object
      }
    ): string;
    distanceInWordsStrict(
      dateToCompare: Date | string | number,
      date: Date | string | number,
      options?: {
        addSuffix?: boolean,
        unit?: "s" | "m" | "h" | "d" | "M" | "Y",
        partialMethod?: "floor" | "ceil" | "round",
        locale?: Object
      }
    ): string;
    distanceInWordsToNow(
      date: Date | string | number,
      options?: {
        includeSeconds?: boolean,
        addSuffix?: boolean,
        locale?: Object
      }
    ): string;
    format(
      date: Date | string | number,
      format?: string,
      options?: { locale?: Object }
    ): string;
    isAfter(
      date: Date | string | number,
      dateToCompare: Date | string | number
    ): boolean;
    isBefore(
      date: Date | string | number,
      dateToCompare: Date | string | number
    ): boolean;
    isDate(argument: any): boolean;
    isEqual(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isFuture(date: Date | string | number): boolean;
    isPast(date: Date | string | number): boolean;
    isValid(date: Date): boolean;
    max(...dates: Array<Date | string | number>): Date;
    min(...dates: Array<Date | string | number>): Date;
    parse(
      argument: Date | string | number,
      options?: { additionalDigits?: 0 | 1 | 2 }
    ): Date;
    areRangesOverlapping(
      initialRangeStartDate: Date | string | number,
      initialRangeEndDate: Date | string | number,
      comparedRangeStartDate: Date | string | number,
      comparedRangeEndDate: Date | string | number
    ): boolean;
    getOverlappingDaysInRanges(
      initialRangeStartDate: Date | string | number,
      initialRangeEndDate: Date | string | number,
      comparedRangeStartDate: Date | string | number,
      comparedRangeEndDate: Date | string | number
    ): number;
    isWithinRange(
      date: Date | string | number,
      startDate: Date | string | number,
      endDate: Date | string | number
    ): boolean;
    getTime(date: Date | string | number): number;
    addMilliseconds(date: Date | string | number, amount: number): Date;
    differenceInMilliseconds(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    getMilliseconds(date: Date | string | number): number;
    setMilliseconds(date: Date | string | number, milliseconds: number): Date;
    subMilliseconds(date: Date | string | number, amount: number): Date;
    addSeconds(date: Date | string | number, amount: number): Date;
    differenceInSeconds(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    endOfSecond(date: Date | string | number): Date;
    getSeconds(date: Date | string | number): number;
    isSameSecond(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isThisSecond(date: Date | string | number): boolean;
    setSeconds(date: Date | string | number, seconds: number): Date;
    startOfSecond(date: Date | string | number): Date;
    subSeconds(date: Date | string | number, amount: number): Date;
    addMinutes(date: Date | string | number, amount: number): Date;
    differenceInMinutes(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    endOfMinute(date: Date | string | number): Date;
    getMinutes(date: Date | string | number): number;
    isSameMinute(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isThisMinute(date: Date | string | number): boolean;
    setMinutes(date: Date | string | number, minutes: number): Date;
    startOfMinute(date: Date | string | number): Date;
    subMinutes(date: Date | string | number, amount: number): Date;
    addHours(date: Date | string | number, amount: number): Date;
    differenceInHours(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    endOfHour(date: Date | string | number): Date;
    getHours(date: Date | string | number): number;
    isSameHour(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isThisHour(date: Date | string | number): boolean;
    setHours(date: Date | string | number, hours: number): Date;
    startOfHour(date: Date | string | number): Date;
    subHours(date: Date | string | number, amount: number): Date;
    addDays(date: Date | string | number, amount: number): Date;
    differenceInCalendarDays(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    differenceInDays(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    eachDay(
      startDate: Date | string | number,
      endDate: Date | string | number,
      step?: number
    ): Array<Date>;
    endOfDay(date: Date | string | number): Date;
    endOfToday(): Date;
    endOfTomorrow(): Date;
    endOfYesterday(): Date;
    getDate(date: Date | string | number): number;
    getDayOfYear(date: Date | string | number): number;
    isSameDay(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isToday(date: Date | string | number): boolean;
    isTomorrow(date: Date | string | number): boolean;
    isYesterday(date: Date | string | number): boolean;
    setDate(date: Date | string | number, dayOfMonth: number): Date;
    setDayOfYear(date: Date | string | number, dayOfYear: number): Date;
    startOfDay(date: Date | string | number): Date;
    startOfToday(): Date;
    startOfTomorrow(): Date;
    startOfYesterday(): Date;
    subDays(date: Date | string | number, amount: number): Date;
    getDay(date: Date | string | number): number;
    getISODay(date: Date | string | number): number;
    isFriday(date: Date | string | number): boolean;
    isMonday(date: Date | string | number): boolean;
    isSaturday(date: Date | string | number): boolean;
    isSunday(date: Date | string | number): boolean;
    isThursday(date: Date | string | number): boolean;
    isTuesday(date: Date | string | number): boolean;
    isWednesday(date: Date | string | number): boolean;
    isWeekend(date: Date | string | number): boolean;
    setDay(
      date: Date | string | number,
      day: number,
      options?: { weekStartsOn: number }
    ): Date;
    setISODay(date: Date | string | number, day: number): Date;
    addWeeks(date: Date | string | number, amount: number): number;
    differenceInCalendarWeeks(
      dateLeft: Date | string | number,
      dateRight: Date | string | number,
      options?: { weekStartsOn: number }
    ): number;
    differenceInWeeks(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    endOfWeek(
      date: Date | string | number,
      options?: { weekStartsOn: number }
    ): Date;
    isSameWeek(
      dateLeft: Date | string | number,
      dateRight: Date | string | number,
      options?: { weekStartsOn: number }
    ): boolean;
    isThisWeek(
      date: Date | string | number,
      options?: { weekStartsOn: number }
    ): boolean;
    lastDayOfWeek(
      date: Date | string | number,
      options?: { weekStartsOn: number }
    ): Date;
    startOfWeek(
      date: Date | string | number,
      options?: { weekStartsOn: number }
    ): Date;
    subWeeks(date: Date | string | number, amount: number): Date;
    differenceInCalendarISOWeeks(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    endOfISOWeek(date: Date | string | number): Date;
    getISOWeek(date: Date | string | number): number;
    isSameISOWeek(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isThisISOWeek(date: Date | string | number): boolean;
    lastDayOfISOWeek(date: Date | string | number): Date;
    setISOWeek(date: Date | string | number, isoWeek: number): Date;
    startOfISOWeek(date: Date | string | number): Date;
    addMonths(date: Date | string | number, amount: number): Date;
    differenceInCalendarMonths(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    differenceInMonths(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    endOfMonth(date: Date | string | number): Date;
    getDaysInMonth(date: Date | string | number): number;
    getMonth(date: Date | string | number): number;
    isFirstDayOfMonth(date: Date | string | number): boolean;
    isLastDayOfMonth(date: Date | string | number): boolean;
    isSameMonth(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isThisMonth(date: Date | string | number): boolean;
    lastDayOfMonth(date: Date | string | number): Date;
    setMonth(date: Date | string | number, month: number): Date;
    startOfMonth(date: Date | string | number): Date;
    subMonths(date: Date | string | number, amount: number): Date;
    addQuarters(date: Date | string | number, amount: number): Date;
    differenceInCalendarQuarters(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    differenceInQuarters(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    endOfQuarter(date: Date | string | number): Date;
    getQuarter(date: Date | string | number): number;
    isSameQuarter(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isThisQuarter(date: Date | string | number): boolean;
    lastDayOfQuarter(date: Date | string | number): Date;
    setQuarter(date: Date | string | number, quarter: number): Date;
    startOfQuarter(date: Date | string | number): Date;
    subQuarters(date: Date | string | number, amount: number): Date;
    addYears(date: Date | string | number, amount: number): Date;
    differenceInCalendarYears(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    differenceInYears(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    endOfYear(date: Date | string | number): Date;
    getDaysInYear(date: Date | string | number): number;
    getYear(date: Date | string | number): number;
    isLeapYear(date: Date | string | number): boolean;
    isSameYear(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isThisYear(date: Date | string | number): boolean;
    lastDayOfYear(date: Date | string | number): Date;
    setYear(date: Date | string | number, year: number): Date;
    startOfYear(date: Date | string | number): Date;
    subYears(date: Date | string | number, amount: number): Date;
    addISOYears(date: Date | string | number, amount: number): Date;
    differenceInCalendarISOYears(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    differenceInISOYears(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): number;
    endOfISOYear(date: Date | string | number): Date;
    getISOWeeksInYear(date: Date | string | number): number;
    getISOYear(date: Date | string | number): number;
    isSameISOYear(
      dateLeft: Date | string | number,
      dateRight: Date | string | number
    ): boolean;
    isThisISOYear(date: Date | string | number): boolean;
    lastDayOfISOYear(date: Date | string | number): Date;
    setISOYear(date: Date | string | number, isoYear: number): Date;
    startOfISOYear(date: Date | string | number): Date;
    subISOYears(date: Date | string | number, amount: number): Date;
  }

  declare module.exports: DateFns;
}

declare module "date-fns/closest_index_to" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "closestIndexTo">;
}

declare module "date-fns/closest_to" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "closestTo">;
}

declare module "date-fns/compare_asc" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "compareAsc">;
}

declare module "date-fns/compare_desc" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "compareDesc">;
}

declare module "date-fns/distance_in_words" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "distanceInWords"
  >;
}

declare module "date-fns/distance_in_words_strict" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "distanceInWordsStrict"
  >;
}

declare module "date-fns/distance_in_words_to_now" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "distanceInWordsToNow"
  >;
}

declare module "date-fns/format" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "format">;
}

declare module "date-fns/is_after" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isAfter">;
}

declare module "date-fns/is_before" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isBefore">;
}

declare module "date-fns/is_date" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isDate">;
}

declare module "date-fns/is_equal" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isEqual">;
}

declare module "date-fns/is_future" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isFuture">;
}

declare module "date-fns/is_past" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isPast">;
}

declare module "date-fns/is_valid" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isValid">;
}

declare module "date-fns/max" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "max">;
}

declare module "date-fns/min" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "min">;
}

declare module "date-fns/parse" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "parse">;
}

declare module "date-fns/are_ranges_overlapping" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "areRangesOverlapping"
  >;
}

declare module "date-fns/get_overlapping_days_in_ranges" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "getOverlappingDaysInRanges"
  >;
}

declare module "date-fns/is_within_range" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isWithinRange">;
}

declare module "date-fns/get_time" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getTime">;
}

declare module "date-fns/add_milliseconds" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "addMilliseconds"
  >;
}

declare module "date-fns/difference_in_milliseconds" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInMilliseconds"
  >;
}

declare module "date-fns/get_milliseconds" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "getMilliseconds"
  >;
}

declare module "date-fns/set_milliseconds" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "setMilliseconds"
  >;
}

declare module "date-fns/sub_milliseconds" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "subMilliseconds"
  >;
}

declare module "date-fns/add_seconds" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "addSeconds">;
}

declare module "date-fns/difference_in_seconds" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInSeconds"
  >;
}

declare module "date-fns/end_of_second" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfSecond">;
}

declare module "date-fns/get_seconds" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getSeconds">;
}

declare module "date-fns/is_same_second" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameSecond">;
}

declare module "date-fns/is_this_second" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThisSecond">;
}

declare module "date-fns/set_seconds" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setSeconds">;
}

declare module "date-fns/start_of_second" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfSecond">;
}

declare module "date-fns/sub_seconds" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "subSeconds">;
}

declare module "date-fns/add_minutes" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "addMinutes">;
}

declare module "date-fns/difference_in_minutes" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInMinutes"
  >;
}

declare module "date-fns/end_of_minute" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfMinute">;
}

declare module "date-fns/get_minutes" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getMinutes">;
}

declare module "date-fns/is_same_minute" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameMinute">;
}

declare module "date-fns/is_this_minute" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThisMinute">;
}

declare module "date-fns/set_minutes" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setMinutes">;
}

declare module "date-fns/start_of_minute" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfMinute">;
}

declare module "date-fns/sub_minutes" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "subMinutes">;
}

declare module "date-fns/add_hours" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "addHours">;
}

declare module "date-fns/difference_in_hours" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInHours"
  >;
}

declare module "date-fns/end_of_hour" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfHour">;
}

declare module "date-fns/get_hours" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getHours">;
}

declare module "date-fns/is_same_hour" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameHour">;
}

declare module "date-fns/is_this_hour" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThisHour">;
}

declare module "date-fns/set_hours" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setHours">;
}

declare module "date-fns/start_of_hour" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfHour">;
}

declare module "date-fns/sub_hours" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "subHours">;
}

declare module "date-fns/add_days" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "addDays">;
}

declare module "date-fns/difference_in_calendar_days" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInCalendarDays"
  >;
}

declare module "date-fns/difference_in_days" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInDays"
  >;
}

declare module "date-fns/each_day" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "eachDay">;
}

declare module "date-fns/end_of_day" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfDay">;
}

declare module "date-fns/end_of_today" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfToday">;
}

declare module "date-fns/end_of_tomorrow" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfTomorrow">;
}

declare module "date-fns/end_of_yesterday" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfYesterday">;
}

declare module "date-fns/get_date" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getDate">;
}

declare module "date-fns/get_day_of_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getDayOfYear">;
}

declare module "date-fns/is_same_day" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameDay">;
}

declare module "date-fns/is_today" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isToday">;
}

declare module "date-fns/is_tomorrow" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isTomorrow">;
}

declare module "date-fns/is_yesterday" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isYesterday">;
}

declare module "date-fns/set_date" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setDate">;
}

declare module "date-fns/set_day_of_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setDayOfYear">;
}

declare module "date-fns/start_of_day" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfDay">;
}

declare module "date-fns/start_of_today" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfToday">;
}

declare module "date-fns/start_of_tomorrow" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "startOfTomorrow"
  >;
}

declare module "date-fns/start_of_yesterday" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "startOfYesterday"
  >;
}

declare module "date-fns/sub_days" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "subDays">;
}

declare module "date-fns/get_day" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getDay">;
}

declare module "date-fns/get_ios_day" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getISODay">;
}

declare module "date-fns/is_friday" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isFriday">;
}

declare module "date-fns/is_monday" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isMonday">;
}

declare module "date-fns/is_saturday" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSaturday">;
}

declare module "date-fns/is_sunday" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSunday">;
}

declare module "date-fns/is_thursday" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThursday">;
}

declare module "date-fns/is_tuesday" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isTuesday">;
}

declare module "date-fns/is_wednesday" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isWednesday">;
}

declare module "date-fns/is_weekend" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isWeekend">;
}

declare module "date-fns/set_day" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setDay">;
}

declare module "date-fns/set_iso_day" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setISODay">;
}

declare module "date-fns/add_weeks" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "addWeeks">;
}

declare module "date-fns/difference_in_calendar_weeks" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInCalendarWeeks"
  >;
}

declare module "date-fns/difference_in_weeks" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInWeeks"
  >;
}

declare module "date-fns/end_of_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfWeek">;
}

declare module "date-fns/is_same_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameWeek">;
}

declare module "date-fns/is_this_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThisWeek">;
}

declare module "date-fns/last_day_of_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "lastDayOfWeek">;
}

declare module "date-fns/start_of_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfWeek">;
}

declare module "date-fns/sub_weeks" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "subWeeks">;
}

declare module "date-fns/difference_in_calendar_iso_weeks" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInCalendarISOWeeks"
  >;
}

declare module "date-fns/end_of_iso_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfISOWeek">;
}

declare module "date-fns/get_iso_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getISOWeek">;
}

declare module "date-fns/is_same_iso_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameISOWeek">;
}

declare module "date-fns/is_this_iso_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThisISOWeek">;
}

declare module "date-fns/last_day_of_iso_week" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "lastDayOfISOWeek"
  >;
}

declare module "date-fns/set_iso_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setISOWeek">;
}

declare module "date-fns/start_of_iso_week" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfISOWeek">;
}

declare module "date-fns/add_months" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "addMonths">;
}

declare module "date-fns/difference_in_calendar_months" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInCalendarMonths"
  >;
}

declare module "date-fns/difference_in_months" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInMonths"
  >;
}

declare module "date-fns/end_of_month" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfMonth">;
}

declare module "date-fns/get_days_in_month" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getDaysInMonth">;
}

declare module "date-fns/get_month" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getMonth">;
}

declare module "date-fns/is_first_day_of_month" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "isFirstDayOfMonth"
  >;
}

declare module "date-fns/is_last_day_of_month" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "isLastDayOfMonth"
  >;
}

declare module "date-fns/is_same_month" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameMonth">;
}

declare module "date-fns/is_this_month" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThisMonth">;
}

declare module "date-fns/last_day_of_month" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "lastDayOfMonth">;
}

declare module "date-fns/set_month" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setMonth">;
}

declare module "date-fns/start_of_month" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfMonth">;
}

declare module "date-fns/sub_months" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "subMonths">;
}

declare module "date-fns/add_quarters" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "addQuarters">;
}

declare module "date-fns/difference_in_calendar_quarters" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInCalendarQuarters"
  >;
}

declare module "date-fns/difference_in_quarters" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInQuarters"
  >;
}

declare module "date-fns/end_of_quarter" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfQuarter">;
}

declare module "date-fns/get_quarter" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getQuarter">;
}

declare module "date-fns/is_same_quarter" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameQuarter">;
}

declare module "date-fns/is_this_quarter" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThisQuarter">;
}

declare module "date-fns/last_day_of_quarter" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "lastDayOfQuarter"
  >;
}

declare module "date-fns/set_quarter" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setQuarter">;
}

declare module "date-fns/start_of_quarter" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfQuarter">;
}

declare module "date-fns/sub_quarters" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "subQuarters">;
}

declare module "date-fns/add_years" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "addYears">;
}

declare module "date-fns/difference_in_calendar_years" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInCalendarYears"
  >;
}

declare module "date-fns/difference_in_years" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInYears"
  >;
}

declare module "date-fns/end_of_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfYear">;
}

declare module "date-fns/get_days_in_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getDaysInYear">;
}

declare module "date-fns/get_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getYear">;
}

declare module "date-fns/is_leap_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isLeapYear">;
}

declare module "date-fns/is_same_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameYear">;
}

declare module "date-fns/is_this_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThisYear">;
}

declare module "date-fns/last_day_of_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "lastDayOfYear">;
}

declare module "date-fns/set_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setYear">;
}

declare module "date-fns/start_of_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfYear">;
}

declare module "date-fns/sub_years" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "subYears">;
}

declare module "date-fns/add_iso_years" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "addISOYears">;
}

declare module "date-fns/difference_in_calendar_iso_years" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInCalendarISOYears"
  >;
}

declare module "date-fns/difference_in_iso_years" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "differenceInISOYears"
  >;
}

declare module "date-fns/end_of_iso_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "endOfISOYear">;
}

declare module "date-fns/get_iso_weeks_in_year" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "getISOWeeksInYear"
  >;
}

declare module "date-fns/get_iso_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "getISOYear">;
}

declare module "date-fns/is_same_iso_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isSameISOYear">;
}

declare module "date-fns/is_this_iso_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "isThisISOYear">;
}

declare module "date-fns/last_day_Of_iso_year" {
  declare module.exports: $PropertyType<
    $Exports<"date-fns">,
    "lastDayOfISOYear"
  >;
}

declare module "date-fns/set__iso_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "setISOYear">;
}

declare module "date-fns/start_of_iso_year" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "startOfISOYear">;
}

declare module "date-fns/sub_iso_years" {
  declare module.exports: $PropertyType<$Exports<"date-fns">, "subISOYears">;
}
