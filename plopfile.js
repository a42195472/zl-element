module.exports = plop => {
    plop.setGenerator('component', {
        descirption: 'create a custom component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'component name',
                default: 'MyComponent'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'packages/{{name}}/src/{{name}}.vue',
                templateFile: 'plop-templates/component/src/component.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/__tests__/{{name}}.test.js',
                templateFile: 'plop-templates/component/__tests__/component.test.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/stories/{{name}}.stories.js',
                templateFile: 'plop-templates/component/stories/component.stories.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/index.js',
                templateFile: 'plop-templates/component/index.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/LICENSE',
                templateFile: 'plop-templates/component/LICENSE'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/package.json',
                templateFile: 'plop-templates/component/package.hbs'
            },
            {
                type: 'add',
                path: 'packages/{{name}}/README.md',
                templateFile: 'plop-templates/component/README.hbs'
            }
        ]
    })
}