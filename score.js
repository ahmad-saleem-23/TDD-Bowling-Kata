module.exports={scoreFrame, }

function scoreFrame (frame){
  
  // return frame [0] + frame [1]

  return frame.reduce((acc, curr) => acc + curr, 0 )
}