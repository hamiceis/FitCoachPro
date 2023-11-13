interface ExerciciosProps {
  id: string
  name_exercise: string;
  repetitions: string;
  interval: string;
  method: string | null
  load: number;
  cadence: string;
  observation: string;
  workoutId: string
}

export const exercicios: ExerciciosProps[]  = [
  {
    id: '1',
    name_exercise: 'Flexões',
    repetitions: '10',
    interval: '30s',
    method: 'Pirâmide',
    load: 0,
    cadence: 'Normal',
    observation: 'Manter o corpo alinhado',
    workoutId: '1',
  },
  {
    id: '2',
    name_exercise: 'Agachamentos',
    repetitions: '15',
    interval: '45s',
    method: 'Drop Set',
    load: 10,
    cadence: 'Controlada',
    observation: 'Usar a postura correta',
    workoutId: '1',
  },
  {
    id: '3',
    name_exercise: 'Corrida',
    repetitions: '1km',
    interval: '5min',
    method: null,
    load: 0,
    cadence: 'Moderada',
    observation: 'Usar tênis adequado',
    workoutId: '2',
  },
  {
    id: '4',
    name_exercise: 'Abdominais',
    repetitions: '20',
    interval: '30s',
    method: 'Superconjunto',
    load: 0,
    cadence: 'Lenta',
    observation: 'Concentrar-se na contração',
    workoutId: '2',
  },
  {
    id: '5',
    name_exercise: 'Levantamento de Peso',
    repetitions: '12',
    interval: '1min',
    method: 'Séries Compostas',
    load: 20,
    cadence: 'Rápida',
    observation: 'Usar a técnica apropriada, para poder conseguir ter melhor desempenho',
    workoutId: '3',
  }
];