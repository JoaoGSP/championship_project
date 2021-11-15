import mensagens from "./mensagens";

const RefereesValidator = {
  arbitroprincipal: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  bandeira01: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  bandeira02: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  auxiliararbitro01: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  auxiliararbitro02: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
};

export default RefereesValidator;
