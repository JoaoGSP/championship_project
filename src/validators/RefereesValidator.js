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
  auxarbitro01: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
  auxarbitro02: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength },
  },
};

export default RefereesValidator;
