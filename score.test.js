const score = require('./score')

describe('the test will do the following',() =>{
test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})
})