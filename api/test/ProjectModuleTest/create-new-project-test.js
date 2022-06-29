const { expect } = require('chai');

const page = require('../../page/ProjectModulePage/create-new-project-page');

const testCase = {
  "positive": {
    "validHeader": "As a User, I want to be able to create a new project",
  },
  "negative": {
    "noContentType": "As a User, I should got error 400 bad request when I send request without content-type",
    "invalidContentType": "As a User, I should got error 401 Unauthorized when I send request with invalid token",
    "noToken": "As a User, I should got error 403 Forbidden when I send request with request payload",
    "invalidToken": "As a User, I should got error 403 Forbidden when I send request with request payload",
    "noPayload": "no Payload",
    "nameNull": "nameNull",
    "nameArray": "nameArray"
  }
}

describe(`Todoist Create New Project`, () => {
  const token = '108ebbe282374871e415253c6a2d59798c1112f6';
  const invalidToken = 'invalidToken';
  const contentType = 'application/json'
  const payload = {
    "name": "Shopping List"
  }

  it(`@post ${testCase.positive.validHeader}`, function (done) {
    page.createNewProject(
      token,
      contentType,
      payload,
      function (err, res) {
        expect(res.status).to.equal(200)
        done()
      }
    )
  })
  // it(`@post ${testCase.negative.noContentType}`, function (done) {
  //   page.createNewProject(
  //     token,
  //     invalidContentType,
  //     {"name":"nama"},
  //     function (err, res) {
  //       expect(res.status).to.equal(400)
  //       console.log(res.header)
  //       done()
  //     }
  //   )
  // })

  it(`@post ${testCase.negative.noPayload}`, function (done) {
    page.createNewProject(
      token,
      contentType,
      null,
      function (err, res) {
        expect(res.status).to.equal(400)
        done()
      }
    )
  })
})
