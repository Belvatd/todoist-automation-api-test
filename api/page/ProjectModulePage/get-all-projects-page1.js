const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.TODOIST_BASE_URL+`/projects`);

const getAllProject = (token, payload) => api.get('')
 .set('Authorization', `Bearer ${token}`)
 .send(payload)

module.exports = {
   getAllProject,
}