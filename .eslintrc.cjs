module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: [
    'newline',
    'vuejs-accessibility',
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-airbnb',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'import/no-cycle': 'off',
    'no-console': process.env.MODE === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.MODE === 'production' ? 'warn' : 'off',
    'vue/valid-attribute-name': 'off',
    camelcase: 'off',
    'linebreak-style': 0,
    'import/no-unresolved': 'off',
    'func-call-spacing': 'off',
    'no-spaced-func': 'off',
    'no-unused-vars': 'off',
    'no-promise-executor-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/alt-text': 'off',
    'vue/no-parsing-error': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/quotes': [
      'error',
      'single',
    ],
    // 타입스크립트 interface 멀티라인시 콤마 적용
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    // 타입스크립트 콜론 뒤 스페이스 룰
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      { after: true },
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    // TODO Sample, Example 컴포넌트 에러 안나오도록 임시 적용 룰!
    // 컴포넌트 이름 2개 단어 미적용 룰
    'vue/multi-word-component-names': 'off',
    // kebab-case off
    'vue/attribute-hyphenation': 'off',
    // import 2개 이상시 줄바꿈 처리
    'newline/import-module': [
      'error',
      { minItems: 2 },
    ],
    // 객체 구조분해할당 프로퍼티 2개 이상시 줄바꿈 처리
    'newline/object-property': [
      'error',
      { minItems: 2 },
    ],

    // import 순서
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: { order: 'desc' },
      },
    ],
    'import/extensions': ['off'],
    // 배열,객체,가져오기,내보내기 멀티라인일시 마지막에 콤마
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'vue/max-len': [
      'error',
      { code: 200 },
    ],
    // 배열이 2개 이상일시 시작 브라켓 줄바꿈
    'array-bracket-newline': [
      'error',
      { minItems: 2 },
    ],
    // 배열이 2개 이상일시 요소 줄바꿈
    'array-element-newline': [
      'error',
      { minItems: 2 },
    ],
    // 구조분해할당, 가져오기, 내보내기 프로퍼티 2개 이상일시 멀티라인 적용
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
      },
    ],
    // 객체 멀티라인 강제 적용
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false },
    ],
    // vue 템플릿 태그 안에 태그 어트리부트 순서 설정
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          [
            'UNIQUE',
            'SLOT',
          ],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    // vue 템플릿 태그 안에 탭 길이 설정
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    // vue html 태그 어트리부트 존재시 줄바꿈
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: false,
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
      },
    ],
    // vue html 태그 멀티라인시 종료 브라켓 줄바꿈
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    // vue html 태그 브라켓 공백 미 허용
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never',
      },
    ],
    // vue html 태그 스페이스 제거
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    // vue 컴포넌트 자동 닫기 태그
    'vue/html-self-closing': [
      'error',
      {
        html: { component: 'always' },
        svg: 'always',
        math: 'always',
      },
    ],
    // v-bind:foo 비허용 => :foo 허용
    'vue/v-bind-style': [
      'error',
      'shorthand',
    ],
    // v-on:click 비허용 => @click 허용
    'vue/v-on-style': [
      'error',
      'shorthand',
    ],
    // 템플릿,스크립트,스타일 태그 순서
    'vue/component-tags-order': [
      'error',
      {
        order: [
          'template',
          'script',
          'style',
        ],
      },
    ],
    // Vue 스크립트 셋업만 허용
    'vue/component-api-style': [
      'error',
      ['script-setup'],
    ],
    // Template, Script, Style 태그 1칸 띄어쓰기 적용
    'vue/padding-line-between-blocks': ['error'],
    // 템플릿 태그 어트리부트 강제로 멀티라인
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline: { max: 1 },
      },
    ],
    // setup 구조분해할당 옵션
    'vue/no-setup-props-destructure': ['off'],
    // 인터페이스 한칸 띄어쓰기 체킹
    '@typescript-eslint/space-before-blocks': 'error',
  },
};
