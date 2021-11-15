import mensagens from "./mensagens";
import messages from "./messages";

const AlunoValidator = {
  timecasa: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength }
  },
  timevisitante: {
    required: mensagens.required,
    maxLength: { value: 50, message: mensagens.maxLength }
  },
  horario: {
    required: mensagens.required,
    maxLength: { value: 4, message: mensagens.maxLength }
  },
  data: {
    required: messages.required,
    maxLength: { value: 8, message: messages.maxLength }
  },
  estadio: {
    required: messages.required
  },
  localizacao: {
    required: messages.required
  },
  arbitragem: {
    required: messages.required
  },
};
export default AlunoValidator;
