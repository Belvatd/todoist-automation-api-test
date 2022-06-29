const { expect } = require('chai');

const page = require('../../page/ProjectModulePage/get-all-projects-page');

const testCase = {
   "positive": {
      "getList": "As a User, I want to be able to get all my projects",
   },
   "negative": {
      "noToken": "As a User, I should got error 401 Unauthorized when I send request without token",
      "invalidToken": "As a User, I should got error 401 Unauthorized when I send request with invalid token",
      "withPayload": "As a User, I should got error 403 Forbidden when I send request with request payload"
   }
}

describe(`Todoist Get All Projects`, () => {
   const token = '108ebbe282374871e415253c6a2d59798c1112f6';
   const invalidToken = 'invalidToken';
   const payload = {
      "name": "random payload"
   }
   it(`@post ${testCase.positive.getList}`, function (done) {
      page.getAllProject(
        token,
        null,
        function (err, res) {
          expect(res.status).to.equal(200)
          done()
        }
      )
    })
    it(`@post ${testCase.negative.noToken}`, function (done) {
      page.getAllProject(
        null,
        null,
        function (err, res) {
          expect(res.status).to.equal(401)
          expect(res.text).to.equal('Forbidden')
          done()
        }
      )
    })
    it(`@post ${testCase.negative.invalidToken}`, function (done) {
      page.getAllProject(
        invalidToken,
        null,
        function (err, res) {
          expect(res.status).to.equal(401)
          expect(res.text).to.equal('Forbidden')
          done()
        }
      )
    })
    it(`@post ${testCase.negative.withPayload}`, function (done) {
      page.getAllProject(
        token,
        payload,
        function (err, res) {
          expect(res.status).to.equal(403)
          expect(res.text).exist
          done()
        }
      )
    })
})