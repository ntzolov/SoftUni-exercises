namespace Greeter {
  export interface Greeting<T> {
    introduction(): void,
    sayGoodbye(name: T): void
  }
}