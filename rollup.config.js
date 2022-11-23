// import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export default [
    {
        input: `./editor.js`,
        plugins: [esbuild()],
        output: [
            {
                file: `dist/bundle.js`,
                format: 'iife',
                sourcemap: true,
                // exports: 'default',
            },
        ]
    }
    // ,
    // {
    //     input: `./editor.js`,
    //     plugins: [dts()],
    //     output: {
    //         file: `dist/bundle.d.ts`,
    //         format: 'es',
    //     },
    // }
]