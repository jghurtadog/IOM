import {
  LOG_IN,
  LOG_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR,
  UPDATED_USER,
  UPDATED_USER_INPUT_CHANGE,
  GET_CONFIG,
} from "../../types";

/**
 * reducer para la autenticacion, recibe el estado inicial y la accion
 * @param {Object} state estado inicial
 * @param {Object} state.auth - objeto que contiene informacion de autenticacion, uid (numero unico de sesion)
 * @param {Object} state.message - mensaje de error en la autenticacion
 * @param {Object} state.user - objeto que contiene informacion del usuario, email, sexo, etc
 * @param {Object} action objeto plano (POJO — Plan Old JavaScript Object) que representa una intención de modificar el estado
 * @param {String} action.type tipo de accion
 * @param {Object} action.payload payload con los datos del state
 */
export default (state, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        auth: true,
        message: null,
        user: action.payload,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        auth: null,
        user: null,
        message: action.payload,
      };
    case SIGN_UP:
      return {
        ...state,
        auth: true,
        user: action.payload.user,
        message: action.payload.response,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        auth: null,
        user: null,
        message: action.payload,
      };
    case UPDATED_USER:
      return {
        ...state,
        auth: true,
        user: {
          ...state.user,
          birdDate: action.payload ? action.payload.birdDate : "",
          gender: action.payload ? action.payload.gender : "O",
          oldMen: action.payload ? action.payload.oldMen : "",
        },
      };
    case UPDATED_USER_INPUT_CHANGE:
      return {
        ...state,
        auth: true,
        user: { ...state.user, [action.payload.field]: action.payload.value },
      };
    case SIGN_OUT:
      return {
        ...state,
        auth: null,
        user: null,
        message: null,
      };
    case SIGN_OUT_ERROR:
      return {
        ...state,
        auth: null,
        user: null,
        message: action.payload,
      };
    case GET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    default:
      return state;
  }
};
