import { Story } from './IStory';
import { enzoSilva, moonbimChin, narrator, beeSmith, maribelPerez } from './characters';

const iWantADog: Story = {
  title: 'I Want a Dog',
  description: 'Eddy wants a dog.',
  image: 'https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-cartoon-messy-dog-food-png-image_12180823.png',
  imageIcon: 'https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-cartoon-messy-dog-food-png-image_12180823.png',
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
  title: 'The New Student',
  description: 'A new student arrives...',
  image: 'https://img.freepik.com/premium-photo/vector-cartoon-illustration-boy-with-books_1240525-29659.jpg',
  imageIcon: 'https://img.pikbest.com/png-images/school-building-cartoon-school_5882539.png!sw800',
  speechs: [
    {
      text: 'Zari and Lily are sitting together on the school bus.',
      character: narrator,
    },
    {
      text: 'Lily, there is a new student in our class!',
      character: beeSmith,
    },
    {
      text: 'His name is Miguel.',
      character: beeSmith,
      question: {
        type: 'multipleChoice',
        text: 'A Zari está animada porque...',
        options: [
          {
            text: '...tem um aluno novo chamado Miguel.',
            valid: true,
          },
          {
            text: '...ela mudou o nome dela para Miguel.',
            valid: false,
          },
          {
            text: '...o nome do irmão dela é Miguel.',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'Miguel, huh?',
      character: maribelPerez,
    },
    {
      text: 'He is from Mexico.',
      character: beeSmith,
    },
    {
      text: 'His father writes books!',
      character: beeSmith,
    },
    {
      text: 'Very interesting.',
      character: maribelPerez,
    },
    {
      text: 'He speaks three languages.',
      character: beeSmith,
    },
    {
      text: 'Oh, he is intelligent.',
      character: maribelPerez,
    },
    {
      text: 'Intelligent... and tall. And he has beautiful...',
      character: beeSmith,
    },
    {
      text: 'Haha, yes?',
      character: maribelPerez,
    },
    {
      text: 'Um. Beautiful shoes.',
      character: beeSmith,
      question: {
        type: 'selectText',
        text: 'Escolha a opção que significa "atrás de".',
        options: [
          {
            text: 'Zari',
            valid: false,
          },
          {
            text: ',',
            valid: false,
            onlyText: true,
          },
          {
            text: 'Miguel',
            valid: false,
          },
          {
            text: 'is sitting',
            valid: false,
            onlyText: true,
          },
          {
            text: 'behind',
            valid: true,
          },
          {
            text: 'you',
            valid: false,
          },
          {
            text: '.',
            valid: false,
            onlyText: true,
          },
        ],
      },
    },
    {
      text: 'Zari, Miguel is sitting behind you.',
      character: maribelPerez,
    },
    {
      text: 'What?!',
      character: beeSmith,
    },
    {
      text: 'Hi, Miguel!',
      character: maribelPerez,
    },
    {
      text: 'Hi, Lily! How are you?',
      character: moonbimChin,
    },
    {
      text: 'I am good, thanks.',
      character: maribelPerez,
    },
    {
      text: 'Miguel, this is my friend, Zari.',
      character: maribelPerez,
    },
    {
      text: 'She likes your... shoes.',
      character: maribelPerez,
    },
    {
      text: 'Oh, um, hi, Miguel.',
      character: beeSmith,
      question: {
        type: 'multipleChoice',
        text: 'Zari não percebeu que...',
        options: [
          {
            text: '...Miguel estava sentado atrás dela.',
            valid: true,
          },
          {
            text: '...os sapatos de Miguel eram muito feios.',
            valid: false,
          },
          {
            text: '...o dever de casa dela era pra hoje.',
            valid: false,
          },
        ],
      },
    },
  ],
};

const doctorEddy: Story = {
  title: 'Doctor Eddy',
  description: 'Eddy thinks he\'s a doctor',
  image: 'assets/doctorEddy.png',
  imageIcon: 'https://www.publicdomainpictures.net/pictures/450000/nahled/medical-doctor-cartoon-clipart.png',
  speechs: [
    {
      text: 'Eddy is at the supermarket.',
      character: narrator,
    },
    {
      text: 'An elegant woman starts talking to Eddy.',
      character: narrator,
      question: {
        type: 'multipleChoice',
        text: 'Uma mulher começou a falar com Eddy no supermercado.',
        options: [
          {
            text: 'Não, não é isso.',
            valid: false,
          },
          {
            text: 'Sim, isso mesmo.',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'Hello!',
      character: beeSmith,
    },
    {
      text: 'Oh, hello!',
      character: enzoSilva,
    },
    {
      text: 'Are you a doctor?',
      character: beeSmith,
    },
    {
      text: 'What? Me? Uh...',
      character: enzoSilva,
    },
    {
      text: 'Yes. I... am a doctor.',
      character: enzoSilva,
    },
    {
      text: 'Good!',
      character: beeSmith,
    },
    {
      text: 'I have a lot of money.',
      character: enzoSilva,
    },
    {
      text: 'I live in a big house.',
      character: enzoSilva,
    },
    {
      text: 'I have expensive... uh... pants.',
      character: enzoSilva,
    },
    {
      text: 'Ok, but...',
      character: beeSmith,
      question: {
        type: 'selectText',
        text: 'Escolha a opção que significa "agora".',
        options: [
          {
            text: 'A',
            valid: false,
          },
          {
            text: 'man',
            valid: false,
          },
          {
            text: 'needs',
            valid: false,
          },
          {
            text: 'a doctor',
            valid: false,
            onlyText: true,
          },
          {
            text: 'now',
            valid: true,
          },
          {
            text: '!',
            valid: false,
            onlyText: true,
          },
        ],
      },
    },
    {
      text: 'A man needs a doctor now!',
      character: beeSmith,
    },
    {
      text: 'What?! Where is the man?',
      character: enzoSilva,
    },
    {
      text: 'He is near the milk!',
      character: beeSmith,
      question: {
        type: 'multipleChoice',
        text: 'O homem está...',
        options: [
          {
            text: '...no hospital.',
            valid: false,
          },
          {
            text: '...perto da seção do leito no supermercado.',
            valid: true,
          },
          {
            text: '...no carrinho de compras de Eddy.',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'Please help the man! He is very sick!',
      character: beeSmith,
      question: {
        type: 'multipleChoice',
        text: 'A mulher quer que Eddy...',
        options: [
          {
            text: '...compre um pouco de leite.',
            valid: false,
          },
          {
            text: '...ajude um homem que está doente.',
            valid: true,
          },
          {
            text: '...vá a um consultório médico.',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'Uh-oh!',
      character: enzoSilva,
    },
    {
      text: 'Eddy sees a woman. He runs and talks to her.',
      character: narrator,
    },
    {
      text: 'Hello, are you a doctor? I need help!',
      character: enzoSilva,
      question: {
        type: 'multipleChoice',
        text: 'O que Eddy está fazendo?',
        options: [
          {
            text: 'Tentando achar um médico de verdade para ajudar o homem.',
            valid: true,
          },
          {
            text: 'Chorando porque derramou leite.',
            valid: false,
          },
          {
            text: 'Levando um homem doente até o hospital.',
            valid: false,
          },
        ],
      },
    },
  ],
};

export { iWantADog, theNewStudent, doctorEddy };
