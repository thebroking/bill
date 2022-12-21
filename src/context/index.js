import React,{ Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        stage:1,
        players:[],
        result:'3'
    }

    addPlayerHandler = (name) => {
        this.setState((prevState)=>({
            players:[
                ...prevState.players,
                name
            ]
        }))
    }
    
    removePlayerHandler = (idx) => {
        var array = this.state.players;
        array.splice(idx,1)
        this.setState({players:array})
    }
    
    nextHandler = () => {
        const {players} = this.state;
        if(players.length < 2){
            toast.error("You need more than one player",{
                position: toast.POSITION.TOP_LEFT,
                autoClose:2000
            })
        }else {
            this.setState({
                stage:2

            },()=>{
                setTimeout(()=>{
                    this.setState({result:'2'})
                },1000)
                setTimeout(()=>{
                    this.setState({result:'1'})
                },1000)
                setTimeout(()=>{
                        this.genrateLooser()
                },1000)
            })
        }

    }
    
    genrateLooser = () => {
        const {players} = this.state;
        this.setState({
            result: players[Math.floor(Math.random()*players.length)]
        })
    }
    render(){
        return(
            <>
            <MyContext.Provider value={{
                state: this.state,
                addPlayer: this.addPlayerHandler,
                removePlayer: this.removePlayerHandler,
                next: this.nextHandler,
                getNewlooser: this.genrateLooser
            }}>
                {this.props.children}
            </MyContext.Provider>
            <ToastContainer/>
            </>
        )
    }
}


export {
    MyContext,
    MyProvider
}