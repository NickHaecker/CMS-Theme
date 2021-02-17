export function RouteMapping(name: string): string {
  switch (name) {
    case 'index':
      return 'homepage'
    default:
      return 'homepage'
  }
}
export function QueryString(object: any): string {
  const routeParams: string = Object.keys(object)
    .map((key: string) => key + '=' + object[key])
    .join('&')
  return routeParams
}
