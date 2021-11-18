import React, { Component } from 'react'
// import { connect } from 'react-redux'



// const GifListContainer = props =
export class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount(){
        console.log('data')
      fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dZJjgixj0uoDboumj1kcgtEefXSrI031&rating=g") 
      .then((response) => response.json()) 
      .then((d) => (console.log(d.data[0].images.original.url)))
    }
    render() {
        return (
            <div>
              <img src="https://giphy.com/gifs/channelfrederator-channel-frederator-marmota-studio-cRq8TJsIKmQRG"></img>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(GifListContainer)
export default GifListContainer