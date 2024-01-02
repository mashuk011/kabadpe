import React from 'react'

const WorkCapacity = ({onclickClose}) => {
  return (
    <>

    <section className="wrk-cpacity-comp" onClick={onclickClose}>
        <div className="wrk-cap-bx" onClick={(e)=>e.stopPropagation()}>
            
            <div className="all-user-table wrk-table ">
                <table>
                    <thead>
                        <tr>
                            <th>SNO.</th>
                            <th>Worker's Name</th>
                            <th>Capacity / Slot</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Waqqar Alam</td>
                            <td> <div className="wrk-sel-bx">
                                <select name="workcapacity" id="workcapacity">
                                    <option value="Choose your capacity">Choose your capacity</option>
                                    <option value="Choose your capacity"> 1  </option>
                                    <option value="Choose your capacity"> 2  </option>
                                    <option value="Choose your capacity"> 3  </option>
                                    <option value="Choose your capacity"> 4  </option>
                                    <option value="Choose your capacity"> 5  </option>


                                </select>
                                </div> </td>

                                <td> <button className="action-btn">
                                    Submit</button> </td>

                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Sheru</td>
                            <td> <div className="wrk-sel-bx">
                                <select name="workcapacity" id="workcapacity">
                                    <option value="Choose your capacity">Choose your capacity</option>
                                    <option value="Choose your capacity"> 1  </option>
                                    <option value="Choose your capacity"> 2  </option>
                                    <option value="Choose your capacity"> 3  </option>
                                    <option value="Choose your capacity"> 4  </option>
                                    <option value="Choose your capacity"> 5  </option>


                                </select>
                                </div> </td>

                                <td> <button className="action-btn">
                                    Submit</button> </td>

                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Raju </td>
                            <td> <div className="wrk-sel-bx">
                                <select name="workcapacity" id="workcapacity">
                                    <option value="Choose your capacity">Choose your capacity</option>
                                    <option value="Choose your capacity"> 1  </option>
                                    <option value="Choose your capacity"> 2  </option>
                                    <option value="Choose your capacity"> 3  </option>
                                    <option value="Choose your capacity"> 4  </option>
                                    <option value="Choose your capacity"> 5  </option>


                                </select>
                                </div> </td>

                                <td> <button className="action-btn">
                                    Submit</button> </td>

                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <div onClick={onclickClose} className="close-btn close-btn2">
            <i class="fa-solid fa-xmark "></i>
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default WorkCapacity
