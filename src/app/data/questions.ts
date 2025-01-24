interface Question {
    id: string;
    question: string;
    options: Array<{ id: string; option: string }>;
  }
  
  const questions: Question[] = [
    {
      id: 'q1',
      question: 'What is the primary color of the sky on a clear day?',
      options: [
        { id: 'o1', option: 'Blue' },
        { id: 'o2', option: 'Green' },
        { id: 'o3', option: 'Red' },
        { id: 'o4', option: 'Yellow' },
      ],
    },
    {
      id: 'q2',
      question: 'Which fruit is known as the king of fruits?',
      options: [
        { id: 'o1', option: 'Apple' },
        { id: 'o2', option: 'Banana' },
        { id: 'o3', option: 'Mango' },
        { id: 'o4', option: 'Pineapple' },
      ],
    },
    {
      id: 'q3',
      question: 'Which animal is known for having black and white stripes?',
      options: [
        { id: 'o1', option: 'Zebra' },
        { id: 'o2', option: 'Tiger' },
        { id: 'o3', option: 'Panda' },
        { id: 'o4', option: 'Cow' },
      ],
    },
    {
      id: 'q4',
      question: 'What is the name of the tallest mountain in the world?',
      options: [
        { id: 'o1', option: 'Mount Everest' },
        { id: 'o2', option: 'K2' },
        { id: 'o3', option: 'Kangchenjunga' },
        { id: 'o4', option: 'Lhotse' },
      ],
    },
    {
      id: 'q5',
      question: 'What is the boiling point of water at sea level?',
      options: [
        { id: 'o1', option: '100°C' },
        { id: 'o2', option: '90°C' },
        { id: 'o3', option: '110°C' },
        { id: 'o4', option: '120°C' },
      ],
    },
    {
      id: 'q6',
      question: 'What is the capital city of Germany?',
      options: [
        { id: 'o1', option: 'Berlin' },
        { id: 'o2', option: 'Munich' },
        { id: 'o3', option: 'Hamburg' },
        { id: 'o4', option: 'Cologne' },
      ],
    },
    {
      id: 'q7',
      question: 'What is the fastest land animal?',
      options: [
        { id: 'o1', option: 'Cheetah' },
        { id: 'o2', option: 'Lion' },
        { id: 'o3', option: 'Horse' },
        { id: 'o4', option: 'Leopard' },
      ],
    },
    {
      id: 'q8',
      question: 'Which gas do humans exhale?',
      options: [
        { id: 'o1', option: 'Carbon Dioxide' },
        { id: 'o2', option: 'Oxygen' },
        { id: 'o3', option: 'Nitrogen' },
        { id: 'o4', option: 'Helium' },
      ],
    },
    {
      id: 'q9',
      question: 'Who painted the Mona Lisa?',
      options: [
        { id: 'o1', option: 'Leonardo da Vinci' },
        { id: 'o2', option: 'Vincent van Gogh' },
        { id: 'o3', option: 'Pablo Picasso' },
        { id: 'o4', option: 'Claude Monet' },
      ],
    },
    {
      id: 'q10',
      question: 'What is the main ingredient of bread?',
      options: [
        { id: 'o1', option: 'Flour' },
        { id: 'o2', option: 'Rice' },
        { id: 'o3', option: 'Corn' },
        { id: 'o4', option: 'Barley' },
      ],
    },
    {
      id: 'q11',
      question: 'What is the national animal of the United States?',
      options: [
        { id: 'o1', option: 'Bald Eagle' },
        { id: 'o2', option: 'Grizzly Bear' },
        { id: 'o3', option: 'American Bison' },
        { id: 'o4', option: 'Cougar' },
      ],
    },
    {
      id: 'q12',
      question: 'Which metal is used in making coins and batteries?',
      options: [
        { id: 'o1', option: 'Nickel' },
        { id: 'o2', option: 'Iron' },
        { id: 'o3', option: 'Copper' },
        { id: 'o4', option: 'Aluminum' },
      ],
    },
    {
      id: 'q13',
      question: 'What is the capital of Canada?',
      options: [
        { id: 'o1', option: 'Ottawa' },
        { id: 'o2', option: 'Toronto' },
        { id: 'o3', option: 'Vancouver' },
        { id: 'o4', option: 'Montreal' },
      ],
    },
    {
      id: 'q14',
      question: 'What is the speed of light?',
      options: [
        { id: 'o1', option: '299,792 km/s' },
        { id: 'o2', option: '150,000 km/s' },
        { id: 'o3', option: '450,000 km/s' },
        { id: 'o4', option: '600,000 km/s' },
      ],
    },
    {
      id: 'q15',
      question: 'Which is the national flower of India?',
      options: [
        { id: 'o1', option: 'Lotus' },
        { id: 'o2', option: 'Rose' },
        { id: 'o3', option: 'Sunflower' },
        { id: 'o4', option: 'Marigold' },
      ],
    },
    {
      id: 'q16',
      question: 'What is the chemical symbol for gold?',
      options: [
        { id: 'o1', option: 'Au' },
        { id: 'o2', option: 'Ag' },
        { id: 'o3', option: 'Pb' },
        { id: 'o4', option: 'Fe' },
      ],
    },
    {
      id: 'q17',
      question: 'Which bird is known for mimicking sounds?',
      options: [
        { id: 'o1', option: 'Parrot' },
        { id: 'o2', option: 'Sparrow' },
        { id: 'o3', option: 'Eagle' },
        { id: 'o4', option: 'Penguin' },
      ],
    },
    {
      id: 'q18',
      question: 'What is the main gas found in the air we breathe?',
      options: [
        { id: 'o1', option: 'Nitrogen' },
        { id: 'o2', option: 'Oxygen' },
        { id: 'o3', option: 'Carbon Dioxide' },
        { id: 'o4', option: 'Hydrogen' },
      ],
    },
    {
      id: 'q19',
      question: 'Which body part pumps blood throughout the human body?',
      options: [
        { id: 'o1', option: 'Heart' },
        { id: 'o2', option: 'Lungs' },
        { id: 'o3', option: 'Kidneys' },
        { id: 'o4', option: 'Liver' },
      ],
    },
    {
      id: 'q20',
      question: 'Which instrument is used to measure temperature?',
      options: [
        { id: 'o1', option: 'Thermometer' },
        { id: 'o2', option: 'Barometer' },
        { id: 'o3', option: 'Hygrometer' },
        { id: 'o4', option: 'Anemometer' },
      ],
    },
  ];
  
  /**
   * Mock function to simulate fetching questions from a server.
   * Returns a promise that resolves with an array of `Question` objects after a delay of 500 milliseconds.
   *
   * @returns {Promise<Question[]>} 
   */
  export const getQuestions = () => new Promise<Question[]>((resolve) => setTimeout(() => resolve(questions), 500));
  