function Prop() {
    let data = {name: 'Akeem', password: '1234'}
    return(
        <>
        <div className="col-md-3 bg-success text-center border"> My name is {data.name} And my password is {data.password}</div>
        

        </>
    )
}
export default Prop;