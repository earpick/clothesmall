import axios from "axios";

// 在request方法中对axios进行封装
// @param: config是axios的请求配置项
export function request (config) {

  // 创建axios实例
  const axiosInstance = new axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  });

  // 开始发送网络请求
  return axiosInstance (config);
}
