export type API = {
    checkResult: (a:number, b:number, res:number) => string,
    getWindows: () => {title:string, className:string}[]
}

type Promisify<T> = {
    [K in keyof T]: T[K] extends (...args: any) => any
      ? (...args: Parameters<T[K]>) => Promise<ReturnType<T[K]>>
      : T[K]
  };

type PromisifyS<T> = {
    [K in keyof T]: T[K] extends (...args: any) => any
    ? (...args: Parameters<T[K]>) => Promise<string>
      : T[K]
  };

const backendAPI = window as unknown as PromisifyS<API>

export const api: Promisify<API> = {
    checkResult: (a, b, res) => backendAPI.checkResult(a, b, res).then(r => JSON.parse(r)),
    getWindows: () => backendAPI.getWindows().then(r => JSON.parse(r))
}
