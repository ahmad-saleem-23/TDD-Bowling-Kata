const score = require('./score')

describe('the test will do the following',() =>{
  test('test setup working', () => {
    expect(true).toBeTruthy()
  })

  // test('scores a gutterball frame', () => {
  //   const frame = [0, 0]
  //   const expected = 0
  //   const actual = score.scoreFrame(frame)
  //   expect(actual).toBe(expected)
  // })


  // test('scores a normal frame', () => {
  //   const frame = [2, 3]
  //   const expected = 5
  //   const actual = score.scoreFrame(frame)
  //   expect(actual).toBe(expected)
  // })

  test('scores a normal game', () => {
    const frame =[ [5, 5], [5, 4]]
    const expected = 19
    const actual = score.scoreFrame(frame)
    expect(actual).toBe(expected)
  })




  
})