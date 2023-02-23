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
    const frames = [
        [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
      ]
    const expected = 64 
    const actual = score.scoreFrame(frames)
    expect(actual).toBe(expected)
  })


  test('scores a spare game', () => {
    const frame =[ [5, 5], [5, 4]]
    const expected = 24
    const actual = score.scoreFrame(frame)
    expect(actual).toBe(expected)
  })


  test('scores a spare game', () => {
    const frames = [
  [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
]
    const expected = 71 
    const actual = score.scoreFrame(frames)
    expect(actual).toBe(expected)
  })
  
})