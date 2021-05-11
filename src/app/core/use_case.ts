export interface UseCase<T = any, R = any> {
  call(params?: T): Promise<R>;
}
