import axios from 'axios'

class LogService {
  private static instance: LogService
  private baseUrl: string

  private constructor() {
    this.baseUrl = import.meta.env.VITE_LOG_ENDPOINT_API ?? 'http://localhost:3000'
  }

  public static getInstance(): LogService {
    if (!LogService.instance) {
      LogService.instance = new LogService()
    }
    return LogService.instance
  }

  public async log(level: 'error' | 'warning', message: string, details: any) {
    try {
      await axios.post(`${this.baseUrl}/logs`, {
        level,
        message,
        details,
        timestap: new Date().toISOString(),
      })
    } catch (error) {
      console.error('Error al logear', error)
    }
  }
}

export const logService = LogService.getInstance()
