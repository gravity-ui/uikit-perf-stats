import {select} from '@inquirer/prompts';
import {Command} from 'commander';
import {spawn} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const program = new Command();

const map = {
    ant: {
        button: 'AntButton',
        checkbox: 'AntCheckbox',
        'text-field': 'AntTextField',
    },
    'gravity-ui': {
        button: 'GravityButton',
        checkbox: 'GravityCheckbox',
        'text-field': 'GravityTextField',
    },
    'material-ui': {
        button: 'MaterialButton',
        checkbox: 'MaterialCheckbox',
        'text-field': 'MaterialTextField',
    },
    'react-spectrum': {
        button: 'ReactSpectrumButton',
        checkbox: 'ReactSpectrumCheckbox',
        'text-field': 'ReactSpectrumTextField',
    },
};

program
    .name('Performance measurements')
    .description('CLI tool for React components measurement')
    .version('0.0.0');

program
    .command('dev')
    .description('Start development server for specific library and component')
    .action(async () => {
        const lib = await select({
            message: 'Select library',
            choices: [
                {name: '@adobe/react-spectrum', value: 'react-spectrum'},
                {name: '@gravity-ui/uikit', value: 'gravity-ui'},
                {name: '@mui/material', value: 'material-ui'},
                {name: 'antd', value: 'ant'},
            ],
        });
        const component = await select({
            message: 'Select component',
            choices: [
                {name: 'Button', value: 'button'},
                {name: 'Checkbox', value: 'checkbox'},
                {name: 'TextField', value: 'text-field'},
            ],
        });

        const componentName = map[lib][component];
        const mainTemplatePath = path.join(process.cwd(), './src/main-template.tsx');
        const mainPath = path.join(process.cwd(), './src/main.tsx');
        const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf8');
        const main = mainTemplate.replaceAll('{{component}}', componentName).replaceAll('//', '');
        fs.writeFileSync(mainPath, main);

        const cleanup = () => {
            if (fs.existsSync(mainPath)) {
                fs.unlinkSync(mainPath);
                console.log('\nRemoved main.tsx');
            }
        };

        spawn('vite', [], {stdio: 'inherit', shell: true});

        process.on('SIGINT', () => {
            cleanup();
            process.exit(0);
        });
    });

program.parse(process.argv);

process.on('uncaughtException', (error) => {
    if (error instanceof Error && error.name === 'ExitPromptError') {
        console.log('\n👋 until next time!');
    } else {
        throw error;
    }
});
