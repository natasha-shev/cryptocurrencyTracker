module.exports = {
    root: true,

    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:vue/recommended',
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 1,
        'no-unused-vars': 1,
        'semi': ['error', 'always'],
        'curly': ['error'],
        'keyword-spacing': ['error'],
        'padding-line-between-statements': [
            'error',
            {blankLine: 'never', prev: ['function'], next: ['return']},
            {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
            {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
        ],
        'lines-between-class-members': ['error', 'always'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
        'padded-blocks': ['error', 'never'],
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'space-before-blocks': ['error'],
        'space-before-function-paren': [
            'error', {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always',
            },
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/no-v-html': 'off',
        'vue/html-self-closing': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: [
        'vue',
    ],
};
