export default [
    {
        type: 'select',
        message: 'hello',
        choices: [
            {
                name: 'make some elegant code',
                value: 'code',
                description: '  code like </>',
            },
            {
                name: 'nothing',
                value: 'null',
                description: '  null',
            },
        ],
    },
    {
        type: 'input',
        message: `what's your name?`,
        default: 'jack'
    },
    {
        type: 'select',
        message: 'what language will you use? I can help a little bit! ^^  ',
        choices: [
            {
                name: 'java',
                value: `system.out.writh('hello ---name')`,
                description: '</>',
            },
            {
                name: 'javascript',
                value: `console.log('hello ---name')`,
                description: '</>',
            },
            {
                name: 'python',
                value: `print('hello ---name')`,
                description: '</>',
            },
            {
                name: 'c++',
                value: `std::cout << "hello ---name" << std::endl;`,
                description: '</>',
            },
        ],
    }
]
