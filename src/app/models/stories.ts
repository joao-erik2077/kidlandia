import { Story } from './Story';
import { enzoSilva, moonbimChin, narrator } from './characters';

const iWantADog: Story = {
  title: 'I Want a Dog',
  description: 'Eddy wants a dog.',
  image: 'https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-cartoon-messy-dog-food-png-image_12180823.png',
  speechs: [
    {
      text: 'Eddy and Junior are eating in a park.',
      character: narrator,
      question: {
        type: 'multipleChoice',
        text: 'Eddy e Junior estão comendo juntos em um restaurante.',
        options: [
          {
            text: 'Sim, isso mesmo.',
            valid: false,
          },
          {
            text: 'Não, não é isso.',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'Dad, I want a dog.',
      character: enzoSilva,
    },
    {
      text: 'Junior, dogs are not easy.',
      character: moonbimChin,
      question: {
        type: 'selectText',
        text: 'Escolha a opção que significa "caminhar".',
        options: [
          {
            text: 'Dogs',
            valid: false,
          },
          {
            text: 'need',
            valid: false,
          },
          {
            text: 'to walk',
            valid: true,
          },
          {
            text: 'every day',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'I like to walk!',
      character: enzoSilva,
    },
    {
      text: 'Dogs need toys...',
      character: moonbimChin,
      question: {
        type: 'multipleChoice',
        text: 'Eddy acha que cachorros precisam caminhar todos os dias e de...',
        options: [
          {
            text: '...ioga.',
            valid: false,
          },
          {
            text: '...jogos de videogame.',
            valid: false,
          },
          {
            text: '...brinquedos.',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'I like toys!',
      character: enzoSilva,
    },
    {
      text: 'And food for a dog is expensive.',
      character: moonbimChin,
    },
    {
      text: 'The dog can eat my food!',
      character: enzoSilva,
    },
    {
      text: 'Junior, where is your burger?',
      character: moonbimChin,
    },
    {
      text: 'And where are your fries?',
      character: moonbimChin,
    },
    {
      text: 'Uh...',
      character: enzoSilva,
    },
    {
      text: 'Eddy sees a dog under the table.',
      character: narrator,
      question: {
        type: 'multipleChoice',
        text: 'O que Eddy está vendo embaixo da mesa?',
        options: [
          {
            text: 'um gato',
            valid: false,
          },
          {
            text: 'um cachorro',
            valid: true,
          },
          {
            text: 'uma pizza',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'Junior! Why is a dog under the table?',
      character: moonbimChin,
      question: {
        type: 'selectText',
        text: 'Escolha a opção que significa "todos os dias".',
        options: [
          {
            text: 'likes',
            valid: false,
          },
          {
            text: 'this',
            valid: false,
          },
          {
            text: 'at the',
            valid: false,
          },
          {
            text: 'every day',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'He likes me! I see this dog at the park every day.',
      character: enzoSilva,
    },
    {
      text: 'Is he... eating your burger and fries?',
      character: moonbimChin,
    },
    {
      text: 'Yes! Dogs are easy, Dad!',
      character: enzoSilva,
      question: {
        type: 'multipleChoice',
        text: 'Por que Junior acha que é fácil cuidar de cachorros?',
        options: [
          {
            text: 'Ele está dando sua própia comida a um cachorro.',
            valid: true,
          },
          {
            text: 'Ele já tem muitos cachorros em casa.',
            valid: false,
          },
          {
            text: 'Ele assiste a muitos vídeos de cachorro.',
            valid: false,
          },
        ],
      },
    },
  ],
};

const theNewStudent: Story = {
  title: '',
  description: '',
  image: '',
  speechs: [],
};

const doctorEddy: Story = {
  title: '',
  description: '',
  image: '',
  speechs: [],
};

export { iWantADog, theNewStudent, doctorEddy };
