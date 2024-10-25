import { Story } from './IStory';
import { enzoSilva, moonbimChin, narrator, beeSmith, maribelPerez } from './characters';

const iWantADog: Story = {
  title: 'I Want a Dog',
  description: 'Enzo wants a dog.',
  image: 'https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-cartoon-messy-dog-food-png-image_12180823.png',
  imageIcon: 'https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-cartoon-messy-dog-food-png-image_12180823.png',
  speechs: [
    {
      text: 'Moonbim and Enzo are eating in a park.',
      character: narrator,
      question: {
        type: 'multipleChoice',
        text: 'Moonbim e Enzo estão comendo juntos em um restaurante.',
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
      text: 'Enzo, dogs are not easy.',
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
        text: 'Moonbim acha que cachorros precisam caminhar todos os dias e de...',
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
      text: 'Enzo, where is your burger?',
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
      text: 'Moonbim sees a dog under the table.',
      character: narrator,
      question: {
        type: 'multipleChoice',
        text: 'O que Moonbim está vendo embaixo da mesa?',
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
      text: 'Enzo! Why is a dog under the table?',
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
        text: 'Por que Enzo acha que é fácil cuidar de cachorros?',
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
      text: 'Maribel and Bee are sitting together on the school bus.',
      character: narrator,
    },
    {
      text: 'Bee, there is a new student in our class!',
      character: maribelPerez,
    },
    {
      text: 'His name is Moonbim.',
      character: maribelPerez,
      question: {
        type: 'multipleChoice',
        text: 'A Maribel está animada porque...',
        options: [
          {
            text: '...tem um aluno novo chamado Moonbim.',
            valid: true,
          },
          {
            text: '...ela mudou o nome dela para Moonbim.',
            valid: false,
          },
          {
            text: '...o nome do irmão dela é Moonbim.',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'Moonbim, huh?',
      character: beeSmith,
    },
    {
      text: 'He is from Mexico.',
      character: maribelPerez,
    },
    {
      text: 'His father writes books!',
      character: maribelPerez,
    },
    {
      text: 'Very interesting.',
      character: beeSmith,
    },
    {
      text: 'He speaks three languages.',
      character: maribelPerez,
    },
    {
      text: 'Oh, he is intelligent.',
      character: beeSmith,
    },
    {
      text: 'Intelligent... and tall. And he has beautiful...',
      character: maribelPerez,
    },
    {
      text: 'Haha, yes?',
      character: beeSmith,
    },
    {
      text: 'Um. Beautiful shoes.',
      character: maribelPerez,
      question: {
        type: 'selectText',
        text: 'Escolha a opção que significa "atrás de".',
        options: [
          {
            text: 'Maribel',
            valid: false,
          },
          {
            text: ',',
            valid: false,
            onlyText: true,
          },
          {
            text: 'Moonbim',
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
      text: 'Maribel, Moonbim is sitting behind you.',
      character: beeSmith,
    },
    {
      text: 'What?!',
      character: maribelPerez,
    },
    {
      text: 'Hi, Moonbim!',
      character: beeSmith,
    },
    {
      text: 'Hi, Bee! How are you?',
      character: moonbimChin,
    },
    {
      text: 'I am good, thanks.',
      character: beeSmith,
    },
    {
      text: 'Moonbim, this is my friend, Maribel.',
      character: beeSmith,
    },
    {
      text: 'She likes your... shoes.',
      character: beeSmith,
    },
    {
      text: 'Oh, um, hi, Moonbim.',
      character: maribelPerez,
      question: {
        type: 'multipleChoice',
        text: 'Maribel não percebeu que...',
        options: [
          {
            text: '...Moonbim estava sentado atrás dela.',
            valid: true,
          },
          {
            text: '...os sapatos de Moonbim eram muito feios.',
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

const doctorMoonbim: Story = {
  title: 'Doctor Moonbim',
  description: 'Moonbim thinks he\'s a doctor...',
  image: 'assets/doctorMoonbim.png',
  imageIcon: 'https://www.publicdomainpictures.net/pictures/450000/nahled/medical-doctor-cartoon-clipart.png',
  speechs: [
    {
      text: 'Moonbim is at the supermarket.',
      character: narrator,
    },
    {
      text: 'An elegant woman starts talking to Moonbim.',
      character: narrator,
      question: {
        type: 'multipleChoice',
        text: 'Uma mulher começou a falar com Moonbim no supermercado.',
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
      character: maribelPerez,
    },
    {
      text: 'Oh, hello!',
      character: moonbimChin,
    },
    {
      text: 'Are you a doctor?',
      character: maribelPerez,
    },
    {
      text: 'What? Me? Uh...',
      character: moonbimChin,
    },
    {
      text: 'Yes. I... am a doctor.',
      character: moonbimChin,
    },
    {
      text: 'Good!',
      character: maribelPerez,
    },
    {
      text: 'I have a lot of money.',
      character: moonbimChin,
    },
    {
      text: 'I live in a big house.',
      character: moonbimChin,
    },
    {
      text: 'I have expensive... uh... pants.',
      character: moonbimChin,
    },
    {
      text: 'Ok, but...',
      character: maribelPerez,
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
      character: maribelPerez,
    },
    {
      text: 'What?! Where is the man?',
      character: moonbimChin,
    },
    {
      text: 'He is near the milk!',
      character: maribelPerez,
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
            text: '...no carrinho de compras de Moonbim.',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'Please help the man! He is very sick!',
      character: maribelPerez,
      question: {
        type: 'multipleChoice',
        text: 'A mulher quer que Moonbim...',
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
      character: moonbimChin,
    },
    {
      text: 'Moonbim sees a woman. He runs and talks to her.',
      character: narrator,
    },
    {
      text: 'Hello, are you a doctor? I need help!',
      character: moonbimChin,
      question: {
        type: 'multipleChoice',
        text: 'O que Moonbim está fazendo?',
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

const canIHaveIt: Story = {
  title: 'Can I have it?',
  description: 'Enzo and Moonbim are at the mall...',
  image: 'https://freedesignfile.com/image/thumb/19163/playstation-ps5-drawing-black-and-white-clipart.png',
  imageIcon: 'https://freedesignfile.com/image/thumb/19163/playstation-ps5-drawing-black-and-white-clipart.png',
  speechs: [
    {
      text: 'Enzo and Moonbim are at the mall.',
      character: narrator,
    },
    {
      text: 'Dad! I need a new video game!',
      character: enzoSilva,
    },
    {
      text: 'You don\'t need a new video game.',
      character: moonbimChin,
      question: {
        type: 'multipleChoice',
        text: 'O pai do Enzo quer comprar um videogame novo.',
        options: [
          {
            text: 'Sim, isso mesmo.',
            valid: false,
          },
          {
            text: 'Não, não é isso',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'Please? There\'s a flying robot in this game!',
      character: enzoSilva,
    },
    {
      text: 'Enzo. You want this game, but you .....',
      character: moonbimChin,
      question: {
        type: 'selectSentence',
        text: 'Escolha a opção que está faltando.',
        options: [
          {
            text: 'we don\'t eat it',
            valid: false,
          },
          {
            text: 'you don\'t need it',
            valid: true,
          },
          {
            text: 'you won\'t read it',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'OK! I want this game. Now can I have it?',
      character: enzoSilva,
    },
    {
      text: 'No, you have video games .....',
      character: moonbimChin,
      question: {
        type: 'selectSentence',
        text: 'O que vem depois?',
        options: [
          {
            text: 'in the shower',
            valid: false,
          },
          {
            text: 'at home',
            valid: true,
          },
          {
            text: 'in the refrigerator',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'You\'re right.',
      character: enzoSilva,
    },
    {
      text: 'So can we go home?',
      character: enzoSilva,
    },
    {
      text: 'No, we are going to Vikram\'s house.',
      character: moonbimChin,
    },
    {
      text: 'Ugh! His house is boring!',
      character: enzoSilva,
    },
    {
      text: 'But his TV is big, and I need to watch the football game.',
      character: moonbimChin,
    },
    {
      text: 'You don\'t need to watch the game, Dad. You want to watch it.',
      character: enzoSilva,
      question: {
        type: 'multipleChoice',
        text: 'Tanto o Moonbim como o Enzo...',
        options: [
          {
            text: '...voam por aí em robôs.',
            valid: false,
          },
          {
            text: '...dizem que precisam, mas na verdade só querem algo.',
            valid: true,
          },
          {
            text: '...jogam videogames com o Vikram.',
            valid: false,
          },
        ],
      },
    },
  ]
};
const enzoChoiche: Story = {
  title: 'Enzo\'s Choice',
  description: 'Enzo is getting his lunch at school...',
  image: 'https://openclipart.org/image/800px/297571',
  imageIcon: 'https://openclipart.org/image/800px/297571',
  speechs: [
    {
      text: 'Enzo is getting his lunch at school.',
      character: narrator,
    },
    {
      text: 'Hello, Ms. Linda! I\'m ready to eat lunch!',
      character: enzoSilva,
    },
    {
      text: 'Hello, Enzo. ..... for lunch today.',
      character: maribelPerez,
      question: {
        type: 'selectSentence',
        text: 'Escolha as palavras que faltam',
        options: [
          {
            text: 'We have five',
            valid: false,
          },
          {
            text: 'We love dish',
            valid: false,
          },
          {
            text: 'We have fish',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'And with the fish, you can have a salad or fries.',
      character: maribelPerez,
    },
    {
      text: 'I love fries and salads!',
      character: enzoSilva,
      question: {
        type: 'selectText',
        text: 'Escolha a opção que significa "somente".',
        options: [
          {
            text: 'You',
            valid: false,
          },
          {
            text: 'can',
            valid: false,
          },
          {
            text: 'only',
            valid: true,
          },
          {
            text: 'have',
            valid: false,
          },
          {
            text: 'one, Enzo.',
            valid: false,
            onlyText: true
          },
        ],
      },
    },
    {
      text: 'You can only have one, Enzo.',
      character: maribelPerez,
    },
    {
      text: 'Well, fries are the delicious option...',
      character: enzoSilva,
    },
    {
      text: 'And I am having a difficult day...',
      character: enzoSilva,
    },
    {
      text: 'But salad is healthy...',
      character: enzoSilva,
      question: {
        type: 'multipleChoice',
        text: 'O Enzo acredita que saladas são...',
        options: [
          {
            text: '...muito grandes.',
            valid: false,
          },
          {
            text: '...baratas.',
            valid: false,
          },
          {
            text: '...saudáveis.',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'Enzo...',
      character: maribelPerez,
    },
    {
      text: 'But I can only have one...',
      character: enzoSilva,
    },
    {
      text: 'I want the salad... No! The fries! Wait...',
      character: enzoSilva,
    },
    {
      text: 'I don\'t know!',
      character: enzoSilva,
      question: {
        type: 'multipleChoice',
        text: 'Pobrezinho do Enzo! Qual é o problema dele?',
        options: [
          {
            text: 'Ele comeu batatas fritas demais.',
            valid: false,
          },
          {
            text: 'Ele quer sorvete na salada dele.',
            valid: false,
          },
          {
            text: 'Ele não consegue escolher entre uma salada e batatas fritas.',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'Enzo!',
      character: maribelPerez,
    },
    {
      text: 'Oh! Yes Ms. Linda?',
      character: enzoSilva,
    },
    {
      text: 'Here! Take the fries and the salad.',
      character: maribelPerez,
      question: {
        type: 'multipleChoice',
        text: 'A Linda disse para o Enzo que ele podia...',
        options: [
          {
            text: '...ir comer em outro lugar.',
            valid: false,
          },
          {
            text: '...pegar as batatas fritas e a salada.',
            valid: true,
          },
          {
            text: '...imaginar que as batatas fritas são salada.',
            valid: false,
          },
        ],
      },
    },
  ]
};
const thanks: Story = {
  title: 'Thanks?',
  description: 'Maribel gives Bee a box...',
  image: 'https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-valentine-pink-gift-drawing-sticker-png-image_11349191.png',
  imageIcon: 'https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-valentine-pink-gift-drawing-sticker-png-image_11349191.png',
  speechs: [
    {
      text: 'Maribel gives Bee a box.',
      character: narrator,
    },
    {
      text: 'What\'s this?',
      character: beeSmith,
    },
    {
      text: 'Open the box!',
      character: maribelPerez,
    },
    {
      text: 'Bee opens the box.',
      character: narrator,
    },
    {
      text: 'It\'s a shirt.',
      character: beeSmith,
    },
    {
      text: 'It\'s so cute!',
      character: maribelPerez,
      question: {
        type: 'multipleChoice',
        text: 'A Maribel odeia a camisa.',
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
      text: 'It\'s pink.',
      character: beeSmith,
    },
    {
      text: 'Yeah, my favorite color.',
      character: maribelPerez,
    },
    {
      text: 'And it has a cat on it.',
      character: beeSmith,
    },
    {
      text: 'And the cat is on a motocycle.',
      character: beeSmith,
      question: {
        type: 'selectText',
        text: 'Escolha a opção que significa "motocicleta".',
        options: [
          {
            text: 'And',
            valid: false,
          },
          {
            text: 'the',
            valid: false,
          },
          {
            text: 'cat',
            valid: false,
          },
          {
            text: 'is on a',
            valid: false,
            onlyText: true
          },
          {
            text: 'motorcycle.',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'It\'s so funny!',
      character: maribelPerez,
    },
    {
      text: 'It\'s a perfect birthday present.',
      character: maribelPerez,
      question: {
        type: 'multipleChoice',
        text: 'A Maribel acha que a camisa é...',
        options: [
          {
            text: '...para o gato dela.',
            valid: false,
          },
          {
            text: '...um presente de aniversário perfeito.',
            valid: true,
          },
          {
            text: '...de uma cor feia.',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'Maribel, it\'s not my birthday.',
      character: beeSmith,
    },
    {
      text: 'I know. Today is my birthday.',
      character: maribelPerez,
    },
    {
      text: 'Oh, right.',
      character: beeSmith,
    },
    {
      text: 'You always forget my birthday.',
      character: maribelPerez,
    },
    {
      text: 'Now you can give me this shirt!',
      character: maribelPerez,
    },
    {
      text: 'Wow, thank you.',
      character: beeSmith,
    },
    {
      text: 'No, no. Thank you.',
      character: maribelPerez,
      question: {
        type: 'multipleChoice',
        text: 'Por que a Maribel deu a camisa para Bee?',
        options: [
          {
            text: 'A Bee tem um gato que pilota motocicletas.',
            valid: false,
          },
          {
            text: 'Hoje é o aniversário de Bee.',
            valid: false,
          },
          {
            text: 'Ela queria que a Bee a desse de volta.',
            valid: true,
          },
        ],
      },
    },
  ]
};
const birthdayPlan: Story = {
  title: 'Birthday Plan',
  description: 'Moonbim is sleeping. Enzo runs into his room...',
  image: 'https://freesvg.org/img/nicubunu_Chocolate_birthday_cake.png',
  imageIcon: 'https://freesvg.org/img/nicubunu_Chocolate_birthday_cake.png',
  speechs: [
    {
      text: 'Moonbim is sleeping. Enzo runs into his room.',
      character: narrator,
    },
    {
      text: 'Dad! Dad!',
      character: enzoSilva,
    },
    {
      text: 'What? Huh? Oh, good morning, Enzo.',
      character: moonbimChin,
    },
    {
      text: 'Dad, I can\'t wait for my birthday party!',
      character: enzoSilva,
      question: {
        type: 'multipleChoice',
        text: 'O Enzo já teve a festa de aniversário dele.',
        options: [
          {
            text: 'Não, não é isso.',
            valid: true,
          },
          {
            text: 'Sim, isso mesmo.',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'Oh! Yes.. Happy birthday?',
      character: moonbimChin,
    },
    {
      text: 'What kind of party do you want, Enzo?',
      character: moonbimChin,
    },
    {
      text: 'I don\'t know!',
      character: enzoSilva,
    },
    {
      text: 'But I want ice cream! A lot of ice cream!',
      character: enzoSilva,
    },
    {
      text: 'OK, Enzo! It\'s your birthday!',
      character: moonbimChin,
    },
    {
      text: 'Can we also have a big cake?',
      character: enzoSilva,
    },
    {
      text: 'Of course, Enzo!',
      character: moonbimChin,
    },
    {
      text: 'Great! And I want ..... to come!',
      character: enzoSilva,
      question: {
        type: 'selectSentence',
        text: 'Escolha as palavras que faltam',
        options: [
          {
            text: 'a lot of fries',
            valid: false,
          },
          {
            text: 'all of my fish',
            valid: false,
          },
          {
            text: 'all my friends',
            valid: true,
          },
        ],
      },
    },
    {
      text: 'Oh! We need to invite them all now!',
      character: moonbimChin,
    },
    {
      text: 'What time do you want to have .....?',
      character: moonbimChin,
      question: {
        type: 'multipleChoice',
        text: 'O que vem depois?',
        options: [
          {
            text: 'your party',
            valid: true,
          },
          {
            text: 'my birthday',
            valid: false
          },
          {
            text: 'breakfast',
            valid: false,
          },
        ],
      },
    },
    {
      text: 'Moonbim looks at his phone.',
      character: narrator,
    },
    {
      text: 'Wait... It\'s only January. Your birthday is in May, Enzo!',
      character: moonbimChin,
    },
    {
      text: 'Yes, I know. I can\'t wait!',
      character: enzoSilva,
    },
    {
      text: 'But can we still have ice cream today, Dad?',
      character: enzoSilva,
    },
    {
      text: 'Aaah... Yes, Enzo.',
      character: moonbimChin,
      question: {
        type: 'multipleChoice',
        text: 'O que Moonbim percebeu?',
        options: [
          {
            text: 'O Enzo, na verdade, não gosta de sorvete.',
            valid: false,
          },
          {
            text: 'Faltam alguns meses para o aniversário do Enzo.',
            valid: true,
          },
          {
            text: 'Ele esqueceu que o aniversário do Enzo é hoje.',
            valid: false,
          },
        ],
      },
    },
  ]
};

export { iWantADog, theNewStudent, doctorMoonbim, canIHaveIt, enzoChoiche, thanks, birthdayPlan };
