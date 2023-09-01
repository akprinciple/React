function Prop3() {
    let info = [
        {name: 'Ola', age: 12},
        {name: 'Ade', age: 13},
        {name: 'Owo', age: 14},
        {name: 'Aje', age: 15},
    ]

    console.log('props')

//    let dt = info.forEach(key=>
//         //    console.log(key.name);
//          {key.name}
//         )

    return(
        // <div className="col-md-3 bg-danger p-3">My name is {i}</div>
    //   {dt}
    <>
        {
            info.map((elem)=>{
                return(
                    <div className="col-md-3 px-1">
                      <div className="bg-danger">
                        {elem.age}
                        </div>  
                        </div>
                    )
                })
            }
            </>
  
    )
}
export default Prop3;