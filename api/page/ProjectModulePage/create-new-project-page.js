const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const api = process.env.TODOIST_BASE_URL + `/projects`

const createNewProject = (token, contentType, payload, expect) => {
    chai.request(api)
        .post('')
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', contentType)
        .send(payload)
        .end(expect)
}

module.exports = {
    createNewProject,
}