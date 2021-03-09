const dist = 'dist'
const bundle = 'bundle'

export default {
    input: 'src/index.js',
    output: [
        {
            file: `${dist}/${bundle}.cjs.js`,
            format: 'cjs'
        },
        {
            file: `${dist}/${bundle}.umd.js`,
            format: 'umd',
            name: 'tstsv'
        },
        {
            file: `${dist}/${bundle}.esm.js`,
            format: 'esm'
        }
    ]
}