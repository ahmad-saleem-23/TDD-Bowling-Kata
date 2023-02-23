module.exports = { scoreFrame }

function scoreFrame(game) {
  // we map over the whole game array to check the score of every frame. and we return the frame score.
  let result = game.map((frame, indx, arr) => {
    // variable for a single frame value
    let frameScore = frame[0] + frame[1]

    // we check if the game is a spare
    if (frameScore === 10) {
      
      
      // check if it is a strike
      if (frame[0] === 10) {
        
        
        // check if it is a double strike we it will be 20 + arr[indx + 2][0], we can use reduse however it will be messy and long
        if (arr[indx + 1][0] === 10) {
          
          if (arr[indx + 2] !== undefined){
          // if it is a double
          let doubleStrike = 20 + arr[indx + 2][0]
          
          return doubleStrike
        
        } 

        // we will need a function to count the final frames otherwis the count will not be right
        else if (arr[indx + 2] === undefined){

            let finalFrames = arr[indx + 1].reduce((acc, curr) => acc + curr, 0)
            
            return finalFrames
          }
        }

        // we add the value of the next frame if there is a strike
        let strikeframe =
          10 + arr[indx + 1].reduce((acc, curr) => acc + curr, 0)

        return strikeframe
      }

      // we check the value. we can automaticly do
      // let spareFrame = 10 + arr[indx + 1][0]

      let spareFrame = frame.reduce((acc, curr) => acc + curr, 0)
      spareFrame += arr[indx + 1][0]

      return spareFrame
    }

    // return if it is a normal game
    else return frame.reduce((acc, curr) => acc + curr, 0)
  })
  
  
  console.log(result)
  // we reduse the mapped game array to get the final score.
  return result.reduce((acc, curr) => acc + curr, 0)
  
}

// // Score 300 (perfect game):
// const game = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]

// scoreFrame(game)

