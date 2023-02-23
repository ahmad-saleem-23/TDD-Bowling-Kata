module.exports={scoreFrame, }

function scoreFrame (game){
  
  // return frame [0] + frame [1]

 let result = game.map((frame) => {

    // variable for a single frame value
    let frameScore = frame [0] + frame [1]
    
    if (frameScore === 10){

      return frame.reduce((acc, curr) => acc + curr, 0 )

    } else 
    return frame.reduce((acc, curr) => acc + curr, 0 )
  })

  return result.reduce((acc, curr) => acc + curr, 0 )
}