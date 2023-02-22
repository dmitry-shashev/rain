import { utc } from 'moment'

export abstract class TimeHelper {
  public static getDateLabel(time: Date): string {
    return time.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  public static getTimeLabel(time: Date, timeZone?: string): string {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone,
    })
  }

  public static dateToFullLabel(date: Date, timeZone?: string): string {
    const dateLabel = TimeHelper.getDateLabel(date)
    const timeLabel = TimeHelper.getTimeLabel(date, timeZone)
    return `${dateLabel}, ${timeLabel}`
  }

  public static diffInDays(start: Date, end: Date): number {
    const startMoment = utc(start)
    const endMoment = utc(end)
    return Math.abs(startMoment.diff(endMoment, 'days'))
  }

  public static addPureDays(start: string, days: number): string {
    const result = new Date(start)
    result.setDate(result.getDate() + days)
    return TimeHelper.getDateLabel(result)
  }
}
