declare module '@assets/icons' {
  const content: Record<string, string | number>

  export type IAvailableIcons = keyof typeof content

  export default content
}
