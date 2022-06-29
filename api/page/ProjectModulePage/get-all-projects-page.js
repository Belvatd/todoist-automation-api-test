const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const api = process.env.TODOIST_BASE_URL+`/projects`

const getAllProject = (token, payload, expect) => {
    chai.request(api)
        .get('')
        .set('Authorization', `Bearer ${token}`)
        .send(payload)
        .end(expect)
}

module.exports = {
    getAllProject,
}