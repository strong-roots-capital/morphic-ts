import { Show } from 'fp-ts/lib/Show'

/**
 *  @since 0.0.1
 */
export const ShowURI = 'ShowURI' as const
/**
 *  @since 0.0.1
 */
export type ShowURI = typeof ShowURI

/**
 *  @since 0.0.1
 */
export class ShowType<A> {
  _A!: A
  _URI!: ShowURI
  constructor(public show: Show<A>) {}
}

declare module '@morphic-ts/common/lib/HKT' {
  interface URItoKind<A> {
    [ShowURI]: ShowType<A>
  }
}