import mensagens from "./mensagens";

const TeamsValidator = {
  nome: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  corprim: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  corsec: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  mascote: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  estadio: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  fundacao: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  localizacao: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength }
  },
  presidente: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
};

export default TeamsValidator;
