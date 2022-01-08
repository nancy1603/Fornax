import Maps from "./Maps";

const Complain = () => {
    return (
        
            <div>
                <Maps
     google={this.props.google}
     center={{lat: 18.5204, lng: 73.8567}}
     height='300px'
     zoom={15}
    />
            </div>
        );
}

export default Complain;