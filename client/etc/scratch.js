const survey = {
  title: "my title",
  subject: "my subject",
  recipients: "jasonwolfe@gmail.com",
  body: "a body of an emaily email"
};

axios.post('/api/surveys', survey)