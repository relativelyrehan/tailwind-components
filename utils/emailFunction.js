const mailgun = require('mailgun-js');

const sendAcceptMail = (sendTo, shareLink) => {
  const mg = mailgun({
    apiKey: process.env.PROROTION_KEY,
    domain: process.env.PROROTION_MAIL
  });
  const data = {
    from: 'prototionBoi@skynox.tech',
    to: { sendTo },
    subject: 'your end of the trade',
    text: `Link for the template you recieved in the trade \n ${shareLink}`
  };

  mg.messages().send(data, function (error) {
    if (error) {
      return error;
    }
  });
};

const sendTradeMail = sendTo => {
  const mg = mailgun({
    apiKey: process.env.PROTOTION_KEY,
    domain: process.env.PROTOTION_MAIL
  });
  const data = {
    from: 'prototion.mailbot@skynox.tech',
    to: `${sendTo}`,
    subject: 'trade invitation',
    text: 'you have been invited to a Trade, go see who loves those designs!!'
  };

  // eslint-disable-next-line sonarjs/no-identical-functions
  mg.messages().send(data, function (error) {
    if (error) {
      return error;
    }
  });
};

module.exports = {
  sendAcceptMail,
  sendTradeMail
};
