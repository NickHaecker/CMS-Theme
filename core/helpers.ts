import axios from 'axios'
import { settings } from '../../../settings/index'
export function RouteMapping(name: string): string {
  switch (name) {
    case 'index':
      return 'homepage'
    default:
      return 'homepage'
  }
}
export function TypeMapping(name: string): string {
  switch (name) {
    case 'index':
      return 'homepage'
    default:
      return 'homepage'
  }
}
export const defaultRouteObject = () => {
  return {
    name: 'index',
  }
}
export const hasPageSubDocs = (body: any[]) => {
  let bool: boolean = false
  const response: any = {}
  for (const item of body) {
    if (item.slice_type === 'slider') {
      bool = true
      response.data = item
    }
  }
  response.bool = bool
  return response
}
export async function GetDocument(method: any, url: any): Promise<any> {
  let document: any = {}
  const { data } = await axios({
    method,
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  document = transferObject(data)
  return document
}
export const transferObject = (document: any) => {
  let doc: any = {}
  Object.keys(document).forEach((item) => {
    doc = document[item]
  })
  return doc
}
