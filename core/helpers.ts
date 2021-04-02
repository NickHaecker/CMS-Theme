import axios from 'axios'
import { settings } from '../../../settings/index'
export type EnumType = {
  [s: number]: string
}
export enum SubpageSliceTypes {
  SLIDER,
  LEBENSLAUF,
}
export const routeNameFormatting = (name: string) => {
  let routeName: string = ''
  name = name.replace('ue', 'ü')
  name = name.replace('ae', 'ä')
  name = name.replace('oe', 'ö')
  if (name.length > 0)
    routeName = name.slice(0, 1).toUpperCase() + name.slice(1, name.length)
  return routeName
}
export function RouteMapping(name: string): string {
  switch (name) {
    case 'index':
      return 'homepage'
    case 'ueber-mich':
      return 'ueber-mich'
    default:
      return 'homepage'
  }
}
export function TypeMapping(name: string): string {
  switch (name) {
    case 'index':
      return 'homepage'
    case 'ueber-mich':
      return 'about_me'
    default:
      return 'homepage'
  }
}
export const defaultRouteObject = () => {
  return {
    name: 'index',
  }
}
export const checkBody = (data: any) => {
  let bool: boolean = false
  if (Object.keys(data).length > 0) {
    Object.keys(data).forEach((item) => {
      if (item === 'body') {
        bool = true
      }
    })
  }
  return bool
}
export const hasPageSubDocs = (data: any) => {
  let bool: boolean = false
  if (checkBody(data)) {
    for (const item of data.body) {
      if (enumMapCheck(SubpageSliceTypes, item.slice_type)) {
        bool = true
      }
    }
  }
  return bool
}

export const enumMapCheck = (enumeration: EnumType, toCompare: string) => {
  let bool: boolean = false
  console.log(toCompare)
  EnumMapper(enumeration, (s) => {
    if (s.toLowerCase() === toCompare) {
      bool = true
    }
  })
  return bool
}
export function EnumMapper(enumeration: EnumType, fn: (item: any) => void) {
  const enumMembers: any[] = Object.keys(enumeration).map(
    (key: any) => enumeration[key]
  )
  const enumValues: string[] = enumMembers.filter((v) => typeof v !== 'number')
  return enumValues.map((e: any) => fn(e))
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
export async function MakeRequest(method: any, { url = '', data = {} }) {
  const response = await axios({
    method,
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data,
  })
  return response
}
export const transferObject = (document: any) => {
  let doc: any = {}
  Object.keys(document).forEach((item) => {
    doc = document[item]
  })
  return doc
}
export enum ExtraAddingProps {
  SLIDER = 'slider',
  LEBENSLAUF = 'lebenslauf',
}
export const createRouteQuerySettings = (
  language: any,
  name: string,
  type: string
) => {
  const s: any = {
    LANGUAGE: language,
    NAME: name,
    TYPE: type,
  }
  return s
}
