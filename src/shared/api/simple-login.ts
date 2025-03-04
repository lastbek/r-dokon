import client from "./client"

export const simpleLoginRequest = async (data: any): Promise<any> => {
    return await client({
      method: 'post',
      url: `/api/v1/simplified/login`,
      data
    })
  }
  