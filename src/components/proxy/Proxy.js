
import { personProxy } from './personProxy';

function Proxy() {
  return (
    <>
      <h4>Proxy</h4>
      {personProxy.fame}
      <br />
      {personProxy.name}
      <br />
      {personProxy.age}
      <br />
      {(personProxy.age = 43)}
      <br />
      {(personProxy.name = 'Jane Doe')}
    </>
  );
}


export default Proxy