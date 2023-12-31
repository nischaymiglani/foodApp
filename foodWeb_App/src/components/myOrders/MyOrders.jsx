import React from 'react'
import {AiOutlineEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const MyOrders = () => {

    const arr  = [1,2,3,4]
  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Item Oty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {arr.map(i => (
                      <tr key={i}>
                      <td>gfc43</td>
                      <td>prcoessing</td>
                      <td>23</td>
                      <td>2369</td>
                      <td>COD</td>
                      <td>
                          <Link to = {`/orders/${'fugrcfj'}`}>
                              <AiOutlineEye />
                          </Link>
                      </td>
                  </tr>
                  ))}
                </tbody>
            </table>
        </main>

    </section>
  )
}

export default MyOrders