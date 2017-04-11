import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import Profile from './mygithub/Profile.jsx'
import RepoList from './mygithub/RepoList.jsx'
import Navbar from './mygithub/Navbar.jsx'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : 'Jinhuilee',
            userData : [],
            userRepo : [],
            perPage : 5 
        }
    }

    getUserData(){
        $.ajax({
            url: 'http://api.github.com/users/'+this.state.userName+"?clientId="+this.props.clientId+"&clientSecret"+this.props.clientSecret,
            dataType: 'json',
            success: function(data) {
                this.setState({userData: data})
                
            }.bind(this),
            error: function(xhr, status, err) {
                
            }.bind(this)

        })

    }

    getUserRepo(){
        $.ajax({
            url: 'http://api.github.com/users/'+this.state.userName+"/repos"+"?per_page="+this.state.perPage+"&clientId="+this.props.clientId+"&clientSecret"+this.props.clientSecret,
            dataType: 'json',
            success: function(data) {
                this.setState({userRepo: data})
            }.bind(this),
            error: function(xhr, status, err) {
                alert(err)
            }.bind(this)

        })
    }


    componentDidMount(){
        this.getUserData();
        this.getUserRepo();    

    }

    onFormSubmit(name){
        this.setState({userName: name}, function(){
            this.getUserData();
            this.getUserRepo();   
        })
    }



    render(){
        var userJSX = ""
        var repoJSX = ""
        if (this.state.userData != undefined) {
            userJSX = <Profile userData = {this.state.userData} />
        }
        if (this.state.userRepo != undefined) {
            repoJSX = <RepoList userRepo = {this.state.userRepo} />
        }
        return (
                <div>
                    <Navbar onFormSubmit = {this.onFormSubmit.bind(this)}/>
                    {userJSX}
                    {repoJSX}
                </div>
        )
    }
}


App.propTypes = {
    clientId : React.PropTypes.string,
    clientSecret : React.PropTypes.string,
};

App.defaultProps = {
    clientId : '64dff6c8bb19aa6ed233',
    clientSecret : '6c062c02cc0bb5f022e93a9103615d7d61897aec',
}