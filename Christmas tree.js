function christmasTree(height) {
    return [...Array(height)].map((x,i)=>' '.repeat(height-i-1)+'*'.repeat(i*2+1)+' '.repeat(height-i+-1)).join`\n`
  }