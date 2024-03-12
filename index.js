import clipboard from 'clipboardy'
import chalk from 'chalk'
import boxen from 'boxen'
import { input, select } from '@inquirer/prompts'
import selectQuestion from './data.js'

const main = async () => {
    try {
        const [firstOne, ...options] = selectQuestion
        let selectValue = ''
        selectValue = await select({ message: firstOne.message, choices: firstOne.choices })
        console.log(selectValue)
        if (selectValue == 'null') {
            console.log(chalk.green(boxen('still hope good luck', { padding: 1, margin: 1, borderStyle: 'round' })))
            return;
        }
        // 循环输出选择或输入的值
        const answers = []
        for (let i = 0; i < options.length; i++) {
            const item = options[i];
            if (item.type === 'input') {
                selectValue = await input({ message: item.message, default: item.default })
            }
            if (item.type === 'select') {
                selectValue = await select({ message: item.message, choices: item.choices })
            }
            answers.push({ id: i + 1, selectValue })
        }
        const out = answers[1].selectValue.replace('---name', answers[0].selectValue)
        clipboard.writeSync(out)
        const content = `
    ${clipboard.readSync()}
    
     ✅ 希望能帮到你（剪切板里真的有哦）
    `
        console.log(chalk.green(boxen(content, { padding: 1, margin: 1, borderStyle: 'round' })))
    } catch (error) {
        console.log(chalk.red(boxen('error happens, safely stoped \n' + error, { padding: 1, margin: 1, borderStyle: 'round' })))
    }
}

main()
