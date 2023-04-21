const generateActions = (folder = 'components') => [
  {
    type: 'add',
    path: `../src/${folder}/{{pascalCase name}}/index.tsx`,
    templateFile: 'templates/Component/index.tsx.hbs',
  },
  {
    type: 'add',
    path: `../src/${folder}/{{pascalCase name}}/styles.ts`,
    templateFile: 'templates/Component/styles.ts.hbs',
  },
  {
    type: 'add',
    path: `../src/${folder}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
    templateFile: 'templates/Component/Component.tsx.hbs',
  },
  {
    type: 'add',
    path: `../src/${folder}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
    templateFile: 'templates/Component/Component.test.tsx.hbs',
  },
];

export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: generateActions(),
  });
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: generateActions('pages'),
  });
  plop.setGenerator('layout', {
    description: 'Create a layout',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout name?',
      },
    ],
    actions: generateActions('layouts'),
  });
};
