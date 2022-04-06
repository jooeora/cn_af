//login.ts
import http from '@/service/http'

export const api = {
  // 登录
  getJsSDKConfigApi(params) {
    return http.post('/api.php?mod=html', params)
  }
}
