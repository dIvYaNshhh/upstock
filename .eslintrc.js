module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        minimumDescriptionLength: 10,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        //omits banning the object types
        extendDefaults: false,
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },
          Boolean: {
            message: 'Use boolean instead',
            fixWith: 'boolean',
          },
          Number: {
            message: 'Use number instead',
            fixWith: 'number',
          },
          Symbol: {
            message: 'Use symbol instead',
            fixWith: 'symbol',
          },
        },
      },
    ],
    'no-unused-vars': 'off', // disable the base rule as it can report incorrect errors, as recommended by @typescript-eslint rule
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_', // Ignore those args names that are preceded by underscore
        varsIgnorePattern: '^_', // Ignore those vars names that are preceded by underscore
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off', //Explicit return types are verbose and can be inferred, same as we infer types elsewhere
    '@typescript-eslint/no-empty-function': 'off', //Empty functions are often used as default parameters, though maybe some should be considered errors via rule options
    '@typescript-eslint/no-explicit-any': 'off', // Explicit `any` is used and necessary in many places due to the complexity of satisfying external interfaces or multiple unrelated types
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/no-unused-expressions': 'error',
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'max-lines': [
      'error',
      {
        max: 1000,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': ['error', 1000],
    'no-implied-eval': 'off', // disable the base rule as it can report incorrect errors, as recommended by @typescript-eslint rule
    'no-unused-expressions': 'off', // disable the base rule as it can report incorrect errors, as recommended by @typescript-eslint rule
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'react/display-name': 'off', //Disabled as the name is mainly used by React debugging messages
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['dayjs*'],
            message:
              '\nDo not import dayjs directly. Use `@aiz-assurant-lab/date-utils`',
          },
          {
            group: ['react-native-fs'],
            message:
              '\nDo not import react-native-fs directly. Use `lib/filesystem`',
          },
          {
            group: ['react-native-localize*'],
            message:
              "\nDo not import react-native-localize directly. Use\n `import { localization } 'lib/localize'`",
          },
        ],
      },
    ],
  },
}
