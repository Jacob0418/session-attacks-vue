import axios from 'axios'
import { logService } from '@/services/LogService'

export const genericRequest = async (url: string, method: string, body?: any) => {
  try {
    const response = await axios({
      url: url,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    })
    return response.data
  } catch (error: any) {
    await logService.log('error', `Error in genericRequest: ${error.message}`, {
      url,
      method,
      body,
      error,
    })
    throw error
  }
}

export const genericRequestAuthenticated = async (
  headers: any,
  url: string,
  method: string,
  body?: any,
) => {
  try {
    const response = await axios({
      url: url,
      method: method,
      headers: headers,
      data: body,
    })
    return response.data
  } catch (error: any) {
    await logService.log('error', `Error in genericRequestAuthenticated: ${error.message}`, {
      url,
      method,
      body,
      headers,
      error,
    })
    throw error
  }
}
