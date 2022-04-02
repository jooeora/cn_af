//login.ts
import http from '@/service/http'
import * as T from './types'

export const api = {
  // 登录
  login(params) {
    return http.post('/api.php/?c=user&m=login', params)
  }
}
