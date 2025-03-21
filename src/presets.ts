export default [
  {
    name: "npm-node-cron",
    preset: {
      // https://github.com/kelektiv/node-cron
      presetId: 'npm-node-cron',
      useSeconds: true,
      useYears: false,
      useAliases: true,
      useBlankDay: false,
      allowOnlyOneBlankDayField: false,
      mustHaveBlankDayField: false,
      useLastDayOfMonth: false,
      useLastDayOfWeek: false,
      useNearestWeekday: false,
      useNthWeekdayOfMonth: false,
      seconds: {
        minValue: 0,
        maxValue: 59,
      },
      minutes: {
        minValue: 0,
        maxValue: 59,
      },
      hours: {
        minValue: 0,
        maxValue: 23,
      },
      daysOfMonth: {
        minValue: 1,
        maxValue: 31,
      },
      months: {
        minValue: 0,
        maxValue: 11,
      },
      daysOfWeek: {
        minValue: 0,
        maxValue: 6,
      },
      years: {
        minValue: 1970,
        maxValue: 2099,
      },
    }
  },
  {
    name: "aws-cloud-watch",
    preset: {
      // https://docs.aws.amazon.com/de_de/AmazonCloudWatch/latest/events/ScheduledEvents.html
      presetId: 'aws-cloud-watch',
      useSeconds: false,
      useYears: true,
      useAliases: true,
      useBlankDay: true,
      allowOnlyOneBlankDayField: true,
      mustHaveBlankDayField: true,
      useLastDayOfMonth: true,
      useLastDayOfWeek: true,
      useNearestWeekday: true,
      useNthWeekdayOfMonth: true,
      seconds: {
        minValue: 0,
        maxValue: 59,
      },
      minutes: {
        minValue: 0,
        maxValue: 59,
      },
      hours: {
        minValue: 0,
        maxValue: 23,
      },
      daysOfMonth: {
        minValue: 1,
        maxValue: 31,
      },
      months: {
        minValue: 1,
        maxValue: 12,
      },
      daysOfWeek: {
        minValue: 1,
        maxValue: 7,
      },
      years: {
        minValue: 1970,
        maxValue: 2199,
      },
    }
  },
  {
    name: "npm-cron-schedule",
    preset: {
      // https://github.com/P4sca1/cron-schedule
      presetId: 'npm-cron-schedule',
      useSeconds: true,
      useYears: false,
      useAliases: true,
      useBlankDay: false,
      allowOnlyOneBlankDayField: false,
      mustHaveBlankDayField: false,
      useLastDayOfMonth: false,
      useLastDayOfWeek: false,
      useNearestWeekday: false,
      useNthWeekdayOfMonth: false,
      seconds: {
        minValue: 0,
        maxValue: 59,
      },
      minutes: {
        minValue: 0,
        maxValue: 59,
      },
      hours: {
        minValue: 0,
        maxValue: 23,
      },
      daysOfMonth: {
        minValue: 1,
        maxValue: 31,
      },
      months: {
        minValue: 1,
        maxValue: 12,
      },
      daysOfWeek: {
        minValue: 0,
        maxValue: 7,
      },
      years: {
        minValue: 1970,
        maxValue: 2099,
      },
    }
  }
];