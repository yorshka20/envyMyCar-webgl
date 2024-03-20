export type SelectWindowType<T extends keyof Window> = (typeof window)[T];
