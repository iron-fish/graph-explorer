export const j2 = (x: any) => JSON.stringify(x, null, 2)
export const Debug = (props: any) => (
  <pre>
    <code>{j2(props)}</code>
  </pre>
)

export default Debug
