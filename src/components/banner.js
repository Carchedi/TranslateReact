import './banner.css'
function Banner(props){
    return(
        <header class="masthead text-center d-flex">
            <div class="container my-auto">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <h1 class="text-uppercase">
                            <strong>{props.mainText}</strong>
                        </h1>
                         <hr></hr>
                         <h3>{props.caption}</h3>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}
export default Banner;