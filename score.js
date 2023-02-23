module.exports={scoreFrame, }

function scoreFrame (game){
  
 
  // we map over the whole game array to check the score of every frame. and we return the frame score.
 let result = game.map((frame, indx, arr) => {

    // variable for a single frame value
    let frameScore = frame [0] + frame [1]
    
    // we check if the game is a spare
    if (frameScore === 10){

      // we check the value. we can automaticly do 
      // let spareFrame = 10 

      let spareFrame = frame.reduce((acc, curr) => acc + curr, 0 )

      spareFrame + arr[indx + 1][0]
        

      return spareFrame

    } else 
    return frame.reduce((acc, curr) => acc + curr, 0 )
  })

  // we reduse the mapped game array to get the final score.
  return result.reduce((acc, curr) => acc + curr, 0 )
}