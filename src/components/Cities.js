import Table from 'react-bootstrap/Table';
export const Cities =(props)=>{
    return(
        <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>City 1</th>
            <th>City 2</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
        {props.cities.map((item, index) =>
     <tr>
      <td key={index}>{index+1}</td>
      <td key={index}>{item.city1}</td>
      <td key={index}>{item.city2}</td>
      <td key={index}>{item.distance}</td>
     </tr>
)}

        </tbody>
      </Table>
    )
}