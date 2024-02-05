let testEmailSend = false;
//!! importante siempre que se consuma el estado tenemos que volver en el controlador al final a su estado incial

const setTestEmailSend = (data) => {   // recibe un parametro y lo mete en data
  testEmailSend = data;
};

const getTestEmailSend = () => {  //Devuelve lo que hay en data
  return testEmailSend;
};

module.exports = { setTestEmailSend, getTestEmailSend };
