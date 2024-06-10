import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm'
      }
    ],
    plugins: [typescript(), terser()],
    external: ['react']
  },
  {
    input: 'dist/types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm'
      }
    ],
    plugins: [
      typescript(),
      dts(),
      del({
        hook: 'closeBundle',
        targets: ['dist/types']
      })
    ]
  }
]
