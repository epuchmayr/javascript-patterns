import React from "react";

import useDogImages from "./useDogImages";

const styles = {
  width: '80%',
  maxWidth: '200px',
  height: 'auto',
  borderRadius: '10px',
  margin: '1rem',
  boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
}

export default function DogImages() {
  const dogs = useDogImages();

  return dogs.map((dog, i) => <img style={styles} src={dog} key={i} alt="Dog" />);
}

{/* <>
{this.state.dogs.join(' ')}
<div style={{ flex: 'row' }}>
  <DogImages dogs={this.state.dogs} />
</div>
</> */}