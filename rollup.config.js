import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'

export default [
    {
        input: 'src/components/Tallies.js',
        output: [
            {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named'
            },
            {
            file: 'dist/index.js',
            format: 'cjs',
            exports: 'default'
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external()
        ]
    }
]